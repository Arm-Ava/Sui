use std::{
    collections::HashMap,
    fmt::{Debug, Display},
};

use aws_config::profile::profile_file::{ProfileFileKind, ProfileFiles};
use aws_sdk_ec2::{
    model::{filter, tag, tag_specification, ResourceType},
    types::{Blob, SdkError},
    Region,
};
use serde::Serialize;

use crate::orchestrator::{
    error::{CloudProviderError, CloudProviderResult},
    settings::Settings,
    state::Instance,
};

use super::Client;

impl<T> From<SdkError<T>> for CloudProviderError
where
    T: Debug + std::error::Error + Send + Sync + 'static,
{
    fn from(e: SdkError<T>) -> Self {
        Self::RequestError(format!("{:?}", e.into_source()))
    }
}

pub struct AwsClient {
    settings: Settings,
    clients: HashMap<Region, aws_sdk_ec2::Client>,
}

impl Display for AwsClient {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        write!(f, "AWS EC2 client v{}", aws_sdk_ec2::PKG_VERSION)
    }
}

impl AwsClient {
    pub async fn new(settings: Settings) -> Self {
        let profile_files = ProfileFiles::builder()
            .with_file(ProfileFileKind::Credentials, &settings.token_file)
            .with_contents(
                ProfileFileKind::Config,
                "[default]\nregion=us-west-2\noutput=json",
            )
            .build();

        let mut clients = HashMap::new();
        for region_name in settings.regions.clone() {
            let region = Region::new(region_name);
            let sdk_config = aws_config::from_env()
                .region(region.clone())
                .profile_files(profile_files.clone())
                .load()
                .await;
            let client = aws_sdk_ec2::Client::new(&sdk_config);
            clients.insert(region, client);
        }

        Self { settings, clients }
    }

    fn format_instance(
        &self,
        region: &Region,
        aws_instance: &aws_sdk_ec2::model::Instance,
    ) -> Instance {
        Instance {
            id: aws_instance.instance_id().unwrap().into(),
            region: region.to_string(),
            main_ip: aws_instance
                .public_ip_address()
                .unwrap_or_else(|| "0.0.0.0") // Stopped instances do not have an ip address.
                .parse()
                .unwrap(),
            tags: vec![self.settings.testbed.clone()],
            plan: format!("{:?}", aws_instance.instance_type().unwrap()),
            power_status: format!("{:?}", aws_instance.state().unwrap().name().unwrap()),
        }
    }

    async fn find_image_id(&self, client: &aws_sdk_ec2::Client) -> CloudProviderResult<String> {
        let response = client
            .describe_images()
            .filters(
                filter::Builder::default()
                    .name("description")
                    .values("Canonical, Ubuntu, 22.04 LTS, amd64 jammy image build on 2023-02-16")
                    .build(),
            )
            .send()
            .await?;

        response
            .images()
            .ok_or_else(|| CloudProviderError::RequestError("Cannot find image id".into()))?
            .first()
            .ok_or_else(|| CloudProviderError::RequestError("Cannot find image id".into()))?
            .image_id
            .clone()
            .ok_or_else(|| {
                CloudProviderError::RequestError("Received image description without id".into())
            })
    }

    async fn register_ssh_key(&self, client: &aws_sdk_ec2::Client) -> CloudProviderResult<()> {
        let public_key = self.settings.load_ssh_public_key().unwrap();

        let request = client
            .import_key_pair()
            .key_name(&self.settings.testbed)
            .public_key_material(Blob::new::<String>(public_key.into()));

        match request.send().await {
            Ok(_) => Ok(()),
            Err(e) => {
                let error_message = format!("{e:?}");
                if error_message.to_lowercase().contains("duplicate") {
                    Ok(())
                } else {
                    Err(e.into())
                }
            }
        }
    }

    async fn create_security_group(&self, region: &Region) -> CloudProviderResult<()> {
        let client = self.clients.get(&region).ok_or_else(|| {
            CloudProviderError::RequestError(format!("Undefined region {region:?}"))
        })?;

        //
        let response = match client
            .create_security_group()
            .group_name(&self.settings.testbed)
            .description("Allow all traffic (used for benchmarks).")
            // .dry_run(true) // TODO: Disable this
            .send()
            .await
        {
            Ok(response) => response,
            Err(e) => {
                let error_message = format!("{e:?}");
                if error_message.to_lowercase().contains("duplicate") {
                    return Ok(());
                } else {
                    return Err(e.into());
                }
            }
        };

        let group_id = response.group_id().unwrap();

        //
        client
            .authorize_security_group_ingress()
            .group_id(group_id)
            .ip_protocol("tcp")
            .ip_protocol("udp")
            .cidr_ip("0.0.0.0/0")
            .from_port(0)
            .to_port(65535)
            // .dry_run(true) // TODO: Disable this
            .send()
            .await?;

        Ok(())
    }
}

#[async_trait::async_trait]
impl Client for AwsClient {
    const USERNAME: &'static str = "ubuntu";

    async fn list_instances(&self) -> CloudProviderResult<Vec<Instance>> {
        let filter = filter::Builder::default()
            .name("tag:Name")
            .values(self.settings.testbed.clone())
            .build();

        let mut list = Vec::new();
        for (region, client) in &self.clients {
            if let Some(reservations) = client
                .describe_instances()
                .filters(filter.clone())
                .send()
                .await?
                .reservations()
            {
                for reservation in reservations {
                    if let Some(instances) = reservation.instances() {
                        for instance in instances {
                            list.push(self.format_instance(&region, instance));
                        }
                    }
                }
            }
        }

        Ok(list)
    }

    async fn start_instances<'a, I>(&self, instances: I) -> CloudProviderResult<()>
    where
        I: Iterator<Item = &'a Instance> + Send,
    {
        let mut instance_ids = HashMap::new();
        for instance in instances {
            instance_ids
                .entry(&instance.region)
                .or_insert_with(Vec::new)
                .push(instance.id.clone());
        }

        for (region, client) in &self.clients {
            client
                .start_instances()
                .set_instance_ids(instance_ids.remove(&region.to_string()))
                .send()
                .await?;
        }
        Ok(())
    }

    async fn stop_instances<'a, I>(&self, instances: I) -> CloudProviderResult<()>
    where
        I: Iterator<Item = &'a Instance> + Send,
    {
        let mut instance_ids = HashMap::new();
        for instance in instances {
            instance_ids
                .entry(&instance.region)
                .or_insert_with(Vec::new)
                .push(instance.id.clone());
        }

        for (region, client) in &self.clients {
            client
                .stop_instances()
                .set_instance_ids(instance_ids.remove(&region.to_string()))
                .send()
                .await?;
        }
        Ok(())
    }

    async fn create_instance<S>(&self, region: S) -> CloudProviderResult<Instance>
    where
        S: Into<String> + Serialize + Send,
    {
        let testbed_id = &self.settings.testbed;
        let region = Region::new(region.into());

        let tags = tag_specification::Builder::default()
            .tags(
                tag::Builder::default()
                    .key("Name")
                    .value(testbed_id)
                    .build(),
            )
            .resource_type(ResourceType::Instance)
            .build();

        let client = self.clients.get(&region).ok_or_else(|| {
            CloudProviderError::RequestError(format!("Undefined region {region:?}"))
        })?;

        self.register_ssh_key(&client).await?;

        let image_id = self.find_image_id(&client).await?;

        self.create_security_group(&region).await?;

        let request = client
            .run_instances()
            .image_id(image_id)
            .instance_type(self.settings.specs.as_str().into())
            .key_name(testbed_id)
            .min_count(1)
            .max_count(1)
            .security_groups(&self.settings.testbed)
            // .dry_run(true) // TODO: Disable this
            .tag_specifications(tags);

        let response = request.send().await?;
        let instance = &response.instances().unwrap()[0];
        Ok(self.format_instance(&region, instance))
    }

    async fn delete_instance(&self, instance_id: String) -> CloudProviderResult<()> {
        for client in self.clients.values() {
            client
                .terminate_instances()
                .instance_ids(instance_id.clone())
                .send()
                .await?;
        }
        Ok(())
    }
}

// #[cfg(test)]
// mod test {
//     use crate::orchestrator::{
//         client::{aws::AwsClient, Client},
//         settings::Settings,
//     };

//     #[tokio::test]
//     async fn aws() {
//         let mut settings = Settings::new_for_test();
//         settings.testbed = "alberto-sui".into();
//         settings.token_file = "/Users/alberto/.aws/credentials".into();
//         settings.regions = vec!["us-east-1".into(), "us-west-2".into()];
//         // g5.8xlarge
//         let client = AwsClient::new(settings).await;
//         client.list_instances().await.unwrap();
//     }
// }
