window.BENCHMARK_DATA = {
  "lastUpdate": 1683244305031,
  "repoUrl": "https://github.com/MystenLabs/sui",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "6c921a0cc0f86f82c114cfd21b5b24afa67f07e0",
          "message": "Fix release build",
          "timestamp": "2023-04-25T13:42:31-07:00",
          "tree_id": "e1deae07393a28388c87f4863aa4a2b1a94ba5ac",
          "url": "https://github.com/MystenLabs/sui/commit/6c921a0cc0f86f82c114cfd21b5b24afa67f07e0"
        },
        "date": 1682456001641,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143989111,
            "range": "± 4682497",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325357,
            "range": "± 27396",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "571e4ca89892cd8bfed2324e56161c0e6f9ea01c",
          "message": "Write full_checkpoint_content and checkpoint_content atomically (#11330)\n\n## Description \r\n\r\nfixes a race condition which can lead to a crash.\r\n\r\n## Test Plan \r\n\r\ncargo simtest\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\nfixes a race condition which can lead to a crash.",
          "timestamp": "2023-04-25T21:38:55Z",
          "tree_id": "d4bc1cdb9cefae653d5df2564ebfd7f949a7cf70",
          "url": "https://github.com/MystenLabs/sui/commit/571e4ca89892cd8bfed2324e56161c0e6f9ea01c"
        },
        "date": 1682459298456,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144386936,
            "range": "± 5085723",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 364996,
            "range": "± 79768",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b52e54d98319b754deac442c17f29d97e02515c9",
          "message": "[execution_driver] Avoid dispatching thread when permit is available immediately (#11269)\n\nUnder high load we see that execution queue has a lot of certificates,\r\nwhile execution tasks are not fully utilized. It is possible that we are\r\nmaxing out on execution dispatch task throughput, this change avoids it\r\nby spawning tasks directly when possible",
          "timestamp": "2023-04-25T22:10:09Z",
          "tree_id": "bcfbb7802e03f88c4106310cc7498e1ec5d8ab71",
          "url": "https://github.com/MystenLabs/sui/commit/b52e54d98319b754deac442c17f29d97e02515c9"
        },
        "date": 1682461357910,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148372077,
            "range": "± 4740664",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338701,
            "range": "± 41589",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "37632af5a1d95d1932dfbe3275abaea312cee468",
          "message": "[sui-node] Stop and wait sui node runtimes on SIGINT (#11323)\n\nThis change makes sure we stop all sui node runtimes upon receiving\r\nSIGINT. This is needed to make sure rocks db databases are properly\r\nclosed before existing sui node",
          "timestamp": "2023-04-25T22:40:41Z",
          "tree_id": "b1327e54cdcfafec802ce7a17f500a298f367d8a",
          "url": "https://github.com/MystenLabs/sui/commit/37632af5a1d95d1932dfbe3275abaea312cee468"
        },
        "date": 1682463031785,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150324602,
            "range": "± 5002036",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308570,
            "range": "± 22250",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1b52e5db66c774030b05384bbe47d4e17d8b6f0c",
          "message": "[sui-node] Capture SIGTERM as well as SIGINT (#11335)\n\nThis PR listens for SIGTERM in addition to SIGINT. This is needed so tha\r\nwe can properly stop and wait background RocksDB threads, to avoid\r\nRocksDB corruption when run inside supervisor (like docker, systemd,\r\netc).\r\n\r\nSee also: https://github.com/MystenLabs/sui/pull/11323",
          "timestamp": "2023-04-25T23:11:41Z",
          "tree_id": "6de11587d3523ef4bcddb5141aeb8838bc724b79",
          "url": "https://github.com/MystenLabs/sui/commit/1b52e5db66c774030b05384bbe47d4e17d8b6f0c"
        },
        "date": 1682464886124,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156611120,
            "range": "± 6245688",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 382511,
            "range": "± 39454",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "514246ccdcae845ee8e81ac1640cb1c096ffc1fd",
          "message": "Re-enable snapshot tests",
          "timestamp": "2023-04-25T16:15:06-07:00",
          "tree_id": "42fb4918491299b72b09ee638b268925d36f4d3f",
          "url": "https://github.com/MystenLabs/sui/commit/514246ccdcae845ee8e81ac1640cb1c096ffc1fd"
        },
        "date": 1682465095788,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144531284,
            "range": "± 5244749",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307620,
            "range": "± 32442",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "630f446c48719c44357f472203acd180f596bb40",
          "message": "Concurrent replay and Epoch replay support (#11272)\n\n## Description \r\n\r\nSetting the stage for higher speed replays and replaying batch from FN\r\nlocal state.\r\nAdded support for replaying checkpoints concurrently.\r\nAdded support for replaying whole epochs.\r\nSimplified code.\r\n\r\n## Test Plan \r\n\r\nManual testing\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-25T19:48:54-04:00",
          "tree_id": "082dd7f83a8b0ee20d486ee4eaca149c20771cef",
          "url": "https://github.com/MystenLabs/sui/commit/630f446c48719c44357f472203acd180f596bb40"
        },
        "date": 1682467223735,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145900883,
            "range": "± 5338099",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 331179,
            "range": "± 90792",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fe6ae8484d2df34f7a3b94f3f17ac83deb52fa64",
          "message": "Verify accumulator behavior in sui transactional tests (#11205)\n\nUnfortunately, the transactional tests don't use AuthorityStore, so we\r\nhave to duplicate some logic here, but I think this is well worth it for\r\nthe increased coverage.",
          "timestamp": "2023-04-25T20:41:30-07:00",
          "tree_id": "0dec68d93c43a0a835869d647a919dde2272c9c0",
          "url": "https://github.com/MystenLabs/sui/commit/fe6ae8484d2df34f7a3b94f3f17ac83deb52fa64"
        },
        "date": 1682481245512,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150811391,
            "range": "± 5056657",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307561,
            "range": "± 16415",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d6429ee94d16af23aa6a92d2dd3a4f5607288f38",
          "message": "[fix] fixing failing randomized tests (#11331)\n\n## Description \r\n\r\nThis PR is fixing an issue on the behaviour of\r\n`this_cert_parents_with_slow_nodes` which is used in randomized tests -\r\nand in other consensus unit tests as well. The method is picking the\r\nparents of a certificate supporting some failure modes (slow nodes). So\r\nbasically , it does pick a subset of the given parents when slow nodes\r\nexist. However, it does not verifying that the parents honour the `2f +\r\n1` requirement by stake. This is now fixed.\r\n\r\nNow the randomized tests [should not\r\nfail](https://github.com/MystenLabs/sui/actions/runs/4793242232) anymore\r\n\r\n## Test Plan \r\n\r\nExisting randomized_tests should not fail.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T09:32:10-07:00",
          "tree_id": "b55d7e1f378d7476645406ef27deca6d652507ff",
          "url": "https://github.com/MystenLabs/sui/commit/d6429ee94d16af23aa6a92d2dd3a4f5607288f38"
        },
        "date": 1682527534734,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152928711,
            "range": "± 4747697",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 345162,
            "range": "± 52445",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c9f2eb767841ac6248dee0275b74b71f0bb452c",
          "message": "Sui surfer (#11268)\n\nThis PR adds a sui-surfer tool that:\r\n1. It starts a network locally\r\n2. Publishes a package to the network. I wrote a package that contains a\r\nbunch of object related building block entry functions. This is what it\r\npublishes. But we could publish any number of packages to the network.\r\n3. It starts 20 (configurable) independent account threads. Each thread\r\nmanages its gas and owned objects. All threads share an immutable/shared\r\nobject pool (each will contribute to it when new objects are generated).\r\n3. Each thread crawl all entry functions in the network in a random\r\norder, and for each function argument, it attempts to see if it could\r\nmatch an object in the pool, and if so use them. For non-object\r\nprimitive arguments it just generates a random value for it.\r\n4. Uses a strategy pattern, which means that one can plug in a different\r\npattern to decide what functions to call during surfing.",
          "timestamp": "2023-04-26T10:04:16-07:00",
          "tree_id": "59e8ed1919697c915fb0e6695b3fd4b5150161f1",
          "url": "https://github.com/MystenLabs/sui/commit/1c9f2eb767841ac6248dee0275b74b71f0bb452c"
        },
        "date": 1682529269409,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152050152,
            "range": "± 4661490",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338786,
            "range": "± 48482",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bb28ddd604e4c252b5e7ebc54c4249f3c352d472",
          "message": "[pruner] max transactions in batch (#11348)\n\nreturn back pruner limiting by maximum transactions in a batch",
          "timestamp": "2023-04-26T17:31:46Z",
          "tree_id": "0910c6be6ea2ba00235845151dc9fc24799cabcd",
          "url": "https://github.com/MystenLabs/sui/commit/bb28ddd604e4c252b5e7ebc54c4249f3c352d472"
        },
        "date": 1682530918176,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149315182,
            "range": "± 8213538",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313006,
            "range": "± 21584",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "877a3544fdb8a46ac47df81dd8a860d972155323",
          "message": "Start tracking skipped keys during iteration (#11329)\n\n## Description \r\n\r\nRocksDB can tell us the number of tombstones it had to skip during an\r\niteration. A high number of skipped keys is a cause of concern for\r\nperformance and probably requires compaction.\r\n \r\n## Test Plan \r\n\r\nExisting tests",
          "timestamp": "2023-04-26T10:56:15-07:00",
          "tree_id": "4cd92f53db683d451213b24f6ffbc57c25b40b7d",
          "url": "https://github.com/MystenLabs/sui/commit/877a3544fdb8a46ac47df81dd8a860d972155323"
        },
        "date": 1682532368344,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145792703,
            "range": "± 4747049",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308194,
            "range": "± 8036",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "564007c0676aa0da80922480314976a04b656eb2",
          "message": "Add more logs to Narwhal worker startup (#11365)\n\n## Description \r\n\r\nWe have observed validators crashing on restart, because Narwhal worker\r\ndid not finished starting up in 30s. Adding a bit more logs to help\r\nlocate the root cause.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T11:05:51-07:00",
          "tree_id": "214e97bbb02c709997cf4a7821294c5b354102f3",
          "url": "https://github.com/MystenLabs/sui/commit/564007c0676aa0da80922480314976a04b656eb2"
        },
        "date": 1682532969980,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147859664,
            "range": "± 6604319",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320789,
            "range": "± 23326",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca19d3594c7cb8decca1f781df60267221b72cdf",
          "message": "[mysten-common] Introduce AsyncOnceCell (#11366)\n\nThis is somewhat similar to tokio::sync::watch, see doc for\r\n`AsyncOnceCell` for differences.",
          "timestamp": "2023-04-26T11:33:05-07:00",
          "tree_id": "965e6906248281a46e0cf36550a94c0aa0a1d990",
          "url": "https://github.com/MystenLabs/sui/commit/ca19d3594c7cb8decca1f781df60267221b72cdf"
        },
        "date": 1682534570795,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144016538,
            "range": "± 4749673",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314344,
            "range": "± 25391",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec85b4a46b4a9c74155aef18ffd99dd4c0bc3cfe",
          "message": "[transaction fuzzer] Fuzz with valid type tags (#11339)\n\nAdds a fuzzer generating random valid type tags, one that uses valid\r\ntype tags but an invalid number of type arguments, and another that\r\ngenerates almost wholly-correct typetags but possibly with some invalid\r\ntype tags.",
          "timestamp": "2023-04-26T11:41:52-07:00",
          "tree_id": "f70e41b60ebcdb50320f936038c1a24376c8514d",
          "url": "https://github.com/MystenLabs/sui/commit/ec85b4a46b4a9c74155aef18ffd99dd4c0bc3cfe"
        },
        "date": 1682535135361,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155310929,
            "range": "± 4434362",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 384307,
            "range": "± 67550",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "879310599dc5733dc296f28458b9170e5d0f451a",
          "message": "[metrics] Measure HistogramReporter::report (#11368)\n\nWe now have quite a few usages of precise histogram (and adding more).\r\nMake sense to keep an eye on how much time we spend on calculations.",
          "timestamp": "2023-04-26T19:03:29Z",
          "tree_id": "316089d70cc28ad7f83ba520a50813f2cba866cb",
          "url": "https://github.com/MystenLabs/sui/commit/879310599dc5733dc296f28458b9170e5d0f451a"
        },
        "date": 1682536458460,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153788193,
            "range": "± 6726579",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316058,
            "range": "± 17532",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1dce15b59d28e3882accc3660c6d7976261218be",
          "message": "[package upgrades] change upgrade criteria for struct type params (#11369)",
          "timestamp": "2023-04-26T20:39:18Z",
          "tree_id": "8f3123f283eeb649bb3d67df606a85be58fbb4a6",
          "url": "https://github.com/MystenLabs/sui/commit/1dce15b59d28e3882accc3660c6d7976261218be"
        },
        "date": 1682542113475,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109054976,
            "range": "± 4225688",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 303540,
            "range": "± 17432",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ff3b6bcb85d43421ad98f4827926d788169ffa81",
          "message": "use mystem histogram for some metrics (#11367)\n\n## Description \r\n\r\nas title\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T13:49:20-07:00",
          "tree_id": "b6a44df6828514ca7de3d0b60a003683f0a9aa99",
          "url": "https://github.com/MystenLabs/sui/commit/ff3b6bcb85d43421ad98f4827926d788169ffa81"
        },
        "date": 1682542737335,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146510769,
            "range": "± 4927605",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305978,
            "range": "± 98059",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9e65acce8da236743426c1ece029ffa4667a9a4f",
          "message": "indexer stability: fix package population (#11338)\n\n## Description \r\n\r\nAfter the split, `package` data is actually only available when objects\r\nare fetched, thus we need to index package together with objects rather\r\nthan tx.\r\n\r\n## Test Plan \r\n\r\ntested locally and make sure packages can be populated properly\r\nIn production, I will \r\n```\r\nTRUNCATE objects;\r\n```\r\nand then run with a binary with this fix, it will start backfilling for\r\nboth objects and packages.",
          "timestamp": "2023-04-26T14:01:04-07:00",
          "tree_id": "66d5fb052136c7af016627f732969d68a230e41b",
          "url": "https://github.com/MystenLabs/sui/commit/9e65acce8da236743426c1ece029ffa4667a9a4f"
        },
        "date": 1682543464838,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146651198,
            "range": "± 5158120",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311922,
            "range": "± 13450",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c23e8d55c56692319fef39c4cdd6ee6c6ac0dcd",
          "message": "pass in tokio runtime and handle drop correctly (#11357)",
          "timestamp": "2023-04-26T14:07:50-07:00",
          "tree_id": "6c20894844023d9cbab9d48e74193f3b3f7ddd84",
          "url": "https://github.com/MystenLabs/sui/commit/9c23e8d55c56692319fef39c4cdd6ee6c6ac0dcd"
        },
        "date": 1682543873524,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150444607,
            "range": "± 5853057",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312600,
            "range": "± 21187",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b586653b88bc54c9befc4ff3f1db03f57f83335",
          "message": "log rpc error code (#11377)\n\n## Description \r\n\r\nTo reduce cardinality.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T14:21:33-07:00",
          "tree_id": "fb930d8a7b00227ebf854cb479df351d4a09afb7",
          "url": "https://github.com/MystenLabs/sui/commit/6b586653b88bc54c9befc4ff3f1db03f57f83335"
        },
        "date": 1682544686926,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147251675,
            "range": "± 4575482",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319838,
            "range": "± 20560",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f5be6d99f1a17cb67a86db87b7426096850128f8",
          "message": "add network identifier and send to telemetry (#11346)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:07:17Z",
          "tree_id": "dd1bad739a24cc3b2b68a840ec26be95add0a6c2",
          "url": "https://github.com/MystenLabs/sui/commit/f5be6d99f1a17cb67a86db87b7426096850128f8"
        },
        "date": 1682547406320,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147035924,
            "range": "± 4208168",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 327649,
            "range": "± 88511",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53a427908a26c4ea309d14cc20b92781d6068abe",
          "message": "Upgrade Rust docker image version (#11387)\n\n## Description \r\n\r\nDocker image version was not updated.\r\n\r\n## Test Plan \r\n\r\nCI\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:18:48Z",
          "tree_id": "09c067135847cbbbe44e0e68c6f2432f1ebe4b0c",
          "url": "https://github.com/MystenLabs/sui/commit/53a427908a26c4ea309d14cc20b92781d6068abe"
        },
        "date": 1682548141702,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148792216,
            "range": "± 4620663",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311885,
            "range": "± 16930",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8c037734e417a3269ef2d94f2e05582b89d8b853",
          "message": "rpc: add ref gas price to epoch (#11388)\n\n## Description \r\n\r\nPer request from FE team, add gas price field to Epoch data rpc type\r\n\r\n## Test Plan \r\n\r\nlocal run to make sure that rpc call of get_epochs will return gas price\r\nas well.\r\n```\r\ncurl --location --request POST http://127.0.0.1:3030 \\\r\n--header 'Content-Type: application/json' \\\r\n--data-raw '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"id\": 1,\r\n    \"method\": \"suix_getEpochs\",\r\n    \"params\": []\r\n}' | jq\r\n...\r\n        \"epochTotalTransactions\": \"0\",\r\n        \"firstCheckpointId\": \"9770\",\r\n        \"epochStartTimestamp\": \"1682528442321\",\r\n        \"endOfEpochInfo\": null,\r\n        \"referenceGasPrice\": null\r\n```",
          "timestamp": "2023-04-26T15:49:33-07:00",
          "tree_id": "e328f28be5f885b34f86f1789086e8ef8e4031a7",
          "url": "https://github.com/MystenLabs/sui/commit/8c037734e417a3269ef2d94f2e05582b89d8b853"
        },
        "date": 1682549869008,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105961133,
            "range": "± 4592442",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 304140,
            "range": "± 32331",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90a1c044b8e1da767e4cea449556738a936dcc94",
          "message": "indexer stability: re-enable move call population (#11384)\n\n## Description \r\n\r\nmove calls are still used by Explorer move call metrics\r\n\r\n## Test Plan \r\n\r\nTest locally and make sure that only move calls can be populated while\r\nothers are not.",
          "timestamp": "2023-04-26T15:49:53-07:00",
          "tree_id": "28af6fbcf4950ecdebe125309b4ce7655c1a8f0e",
          "url": "https://github.com/MystenLabs/sui/commit/90a1c044b8e1da767e4cea449556738a936dcc94"
        },
        "date": 1682549972636,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153335854,
            "range": "± 5084349",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 337444,
            "range": "± 41998",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8f648f0bb22828b92761387a65d2296b9ad0242c",
          "message": "Shut down the sim node when SuiNodeHandle is dropped.  (#11383)\n\nFixes memory leak in multi-iteration tests\r\n\r\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:51:01Z",
          "tree_id": "54d201dbd17780e85ac6f050853dce6c3aed3419",
          "url": "https://github.com/MystenLabs/sui/commit/8f648f0bb22828b92761387a65d2296b9ad0242c"
        },
        "date": 1682550034298,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149240404,
            "range": "± 5135984",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 307511,
            "range": "± 10763",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "05f0b9d72c7547154fe41d252958b23728f0359f",
          "message": "Log running consistency checks (#11385)\n\n## Description \r\n\r\n## Test Plan \r\n\r\n👀 + 🧪 \r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T16:00:07-07:00",
          "tree_id": "188218f56d39c55179a5481a93246ff2f062e87e",
          "url": "https://github.com/MystenLabs/sui/commit/05f0b9d72c7547154fe41d252958b23728f0359f"
        },
        "date": 1682550612280,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155459909,
            "range": "± 4791859",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 378793,
            "range": "± 74069",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a31938134082d918b15d511da40997d66971b8f4",
          "message": "fix flaky safe mode reconfig test (#11391)\n\n## Description \r\n\r\nChange the override to take in a start and end epoch instead.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T00:22:08Z",
          "tree_id": "19ee97e10177bbfa267b368955c8f83ec91c2d26",
          "url": "https://github.com/MystenLabs/sui/commit/a31938134082d918b15d511da40997d66971b8f4"
        },
        "date": 1682555510053,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147709915,
            "range": "± 4403907",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 392970,
            "range": "± 65985",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "2895723+tzakian@users.noreply.github.com",
            "name": "Tim Zakian",
            "username": "tzakian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3c5d52b5e182440760c2fce8a7e16695a08b7cb8",
          "message": "[transaction fuzzer] Add bounds testing within programmable transactions (#11394)",
          "timestamp": "2023-04-26T18:40:39-07:00",
          "tree_id": "8e0e26a64e8030fc872cbb201f5f948414d20e30",
          "url": "https://github.com/MystenLabs/sui/commit/3c5d52b5e182440760c2fce8a7e16695a08b7cb8"
        },
        "date": 1682560245955,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 160704045,
            "range": "± 5033535",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 379366,
            "range": "± 43811",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9c416d4557e42e8ac16be17e93430a636ac5310e",
          "message": "with_tracing to instrument info or error logs (#11324)\n\n## Description \r\n\r\nWrapper function to help instrument info or error logs. info logs are\r\nstill subject to sampling, but error logs will always log.\r\n\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"method\": \"suix_getDynamicFieldObject\",\r\n    \"jsonrpc\": \"2.0\",\r\n    \"params\": [\r\n        \"0x7d1237b9f8ab28ce64322b1f7b09d18909205a55c0f301f36838abbbfb234516\",\r\n        {\r\n            \"type\": \"address\",\r\n            \"value\": \"0x82d7715ff1213dbfd740b5761133c6b7b19d5a5d1e1854d74ba6be53b36a9ca0\"\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n```\r\n```\r\n2023-04-25T19:55:34.558917Z ERROR connection{remote_addr=127.0.0.1:63470 conn_id=6}:get_dynamic_field_object{parent_object_id=0x7d1237b9f8ab28ce64322b1f7b09d18909205a55c0f301f36838abbbfb234516 name=DynamicFieldName { type_: Address, value: String(\"0x82d7715ff1213dbfd740b5761133c6b7b19d5a5d1e1854d74ba6be53b36a9ca0\") }}: sui_json_rpc::indexer_api: get_dynamic_field_object failed: Call(Failed(Cannot find dynamic field [DynamicFieldName { type_: Address, value: String(\"0x82d7715ff1213dbfd740b5761133c6b7b19d5a5d1e1854d74ba6be53b36a9ca0\") }] for object [0x7d1237b9f8ab28ce64322b1f7b09d18909205a55c0f301f36838abbbfb234516].))\r\n```\r\n\r\n\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"method\": \"suix_getOwnedObjects\",\r\n    \"params\": [\r\n        \"0xadfb89b000e97a30bd485bffbff80f883096a8a98cdce33641ec924393d8fbe8\",\r\n        {\r\n            \"options\": {\r\n                \"showType\": true,\r\n                \"showOwner\": false,\r\n                \"showPreviousTransaction\": false,\r\n                \"showDisplay\": false,\r\n                \"showContent\": true,\r\n                \"showBcs\": false,\r\n                \"showStorageRebate\": false\r\n            }\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n```\r\n\r\n```\r\n2023-04-25T19:56:01.066520Z  INFO connection{remote_addr=127.0.0.1:63477 conn_id=12}:get_owned_objects{address=0xadfb89b000e97a30bd485bffbff80f883096a8a98cdce33641ec924393d8fbe8 query=Some(SuiObjectResponseQuery { filter: None, options: Some(SuiObjectDataOptions { show_type: true, show_owner: false, show_previous_transaction: false, show_display: false, show_content: true, show_bcs: false, show_storage_rebate: false }) }) cursor=None limit=None}:multi_get_objects{object_ids=[] options=Some(SuiObjectDataOptions { show_type: true, show_owner: false, show_previous_transaction: false, show_display: false, show_content: true, show_bcs: false, show_storage_rebate: false })}: sui_json_rpc::read_api: multi_get_objects\r\n```\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T21:19:49-07:00",
          "tree_id": "4a8f0e00c1e69e1fbfb57b37b7407322af5d8c0f",
          "url": "https://github.com/MystenLabs/sui/commit/9c416d4557e42e8ac16be17e93430a636ac5310e"
        },
        "date": 1682569774762,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148640330,
            "range": "± 4720566",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320377,
            "range": "± 73488",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "127570466+wlmyng@users.noreply.github.com",
            "name": "wlmyng",
            "username": "wlmyng"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "39b55e8bfd503bf2e46604bb2c0117b97767138a",
          "message": "new DynamicFieldNotFound error (#11356)\n\n## Description \r\nIf a DynamicFieldName is not found on a parent object, return\r\nSuiObjectResponse error response instead of stock RpcResult error\r\nPreviously:\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"method\": \"suix_getDynamicFieldObject\",\r\n    \"jsonrpc\": \"2.0\",\r\n    \"params\": [\r\n        \"0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398\",\r\n        {\r\n            \"type\": \"address\",\r\n            \"value\": \"0x672ed3533decef3721c463b599f934cce4d13c894dd9f14d2f65d773ce604f21\"\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"error\":{\"code\":-32000,\"message\":\"Cannot find dynamic field [DynamicFieldName { type_: Address, value: String(\\\"0x672ed3533decef3721c463b599f934cce4d13c894dd9f14d2f65d773ce604f21\\\") }] for object [0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398].\"},\"id\":1}%    \r\n```\r\nNow:\r\n```\r\ncurl --location 'http://127.0.0.1:9000' \\\r\n--header 'Content-Type: application/json' \\\r\n--data '{\r\n    \"method\": \"suix_getDynamicFieldObject\",\r\n    \"jsonrpc\": \"2.0\",\r\n    \"params\": [\r\n        \"0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398\",\r\n        {\r\n            \"type\": \"address\",\r\n            \"value\": \"0x672ed3533decef3721c463b599f934cce4d13c894dd9f14d2f65d773ce604f21\"\r\n        }\r\n    ],\r\n    \"id\": 1\r\n}'\r\n{\"jsonrpc\":\"2.0\",\"result\":{\"error\":{\"code\":\"dynamicFieldNotFound\",\"parent_object_id\":\"0x12d392ea9753ca2313e3f954fe2deadca0eda906e158e0901bacca21501b0398\"}},\"id\":1}%  \r\n```\r\n\r\nNote: chose not to include the dynamicFieldName itself as\r\nDynamicFieldName.value is a serde_json object that does not appear to\r\n`#[derive(Hash)]` which is required by `SuiObjectResponseError`. And\r\nit's in the client call anyways.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-26T22:14:33-07:00",
          "tree_id": "8f4795d69cc5bad45b8e148adb946312f8730e8c",
          "url": "https://github.com/MystenLabs/sui/commit/39b55e8bfd503bf2e46604bb2c0117b97767138a"
        },
        "date": 1682573122396,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 110401512,
            "range": "± 5600324",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 349917,
            "range": "± 26021",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5e5379b521f20824ca528e18d311d8e63b3af851",
          "message": "[tx fuzzer] add rgp tests (#11325)\n\n## Description \r\n\r\nAdd fuzzing tests that start up an authority state with random reference\r\ngas price values and process transactions.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T07:07:49Z",
          "tree_id": "0009ceb190d31f4a342f26f1b25b5c1b98030f31",
          "url": "https://github.com/MystenLabs/sui/commit/5e5379b521f20824ca528e18d311d8e63b3af851"
        },
        "date": 1682579836736,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146591526,
            "range": "± 4486719",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313839,
            "range": "± 13781",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "081cd51e76f3d930b4147b36cded71b2bf4c0b37",
          "message": "[pruner] revert 9ae7afbf6a20466b23cd7d90a46280d284ef9f2f (#11397)\n\nthis PR:\r\n* reverts\r\nhttps://github.com/MystenLabs/sui/commit/9ae7afbf6a20466b23cd7d90a46280d284ef9f2f\r\n* disables multi_get objects call in environments that do not have\r\nindirect objects",
          "timestamp": "2023-04-27T07:52:04-07:00",
          "tree_id": "8d5384581b87859b728d6b1d44265b32c944405b",
          "url": "https://github.com/MystenLabs/sui/commit/081cd51e76f3d930b4147b36cded71b2bf4c0b37"
        },
        "date": 1682607682153,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109527796,
            "range": "± 6736483",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310634,
            "range": "± 8056",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "51927076+phoenix-o@users.noreply.github.com",
            "name": "phoenix",
            "username": "phoenix-o"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "524c109514650662ba19f62e304306a758f28048",
          "message": "[pruner] delay first execution (#11415)",
          "timestamp": "2023-04-27T10:19:56-07:00",
          "tree_id": "cd55d039d22cf122a2a608a3327a484a431df727",
          "url": "https://github.com/MystenLabs/sui/commit/524c109514650662ba19f62e304306a758f28048"
        },
        "date": 1682616708527,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145547311,
            "range": "± 6588881",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309316,
            "range": "± 21759",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "maria@mystenlabs.com",
            "name": "Maria Siopi",
            "username": "siomari"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "aa6f9faf895b4ad1726d488f03a59588f467f893",
          "message": "Add conversions keytool (#11250)\n\n## Description \r\n\r\nAdd conversions:\r\n-hex<>base64\r\n-base64<>bytearray\r\n-hex<>bytearray\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T20:27:28+03:00",
          "tree_id": "6ad6fd82712c282080f53758a2d45b314741ebd3",
          "url": "https://github.com/MystenLabs/sui/commit/aa6f9faf895b4ad1726d488f03a59588f467f893"
        },
        "date": 1682617043062,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149648337,
            "range": "± 5058403",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 371771,
            "range": "± 47126",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "76067158+666lcz@users.noreply.github.com",
            "name": "Chris Li",
            "username": "666lcz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "334a7f1e19bbf81548e1a61aaa4728f9afe408a4",
          "message": "[rpc] wrap multi_get_transaction_blocks with spawn async (#11414)\n\n## Description \r\n\r\nLoad testing shows that there's some perf regression in\r\n`multi_get_transaction_blocks` after\r\nhttps://github.com/MystenLabs/sui/pull/10913 because some of the\r\nblocking queries such as computing object/balance changes are not\r\nwrapped in spawn_async. This also impacts the perf for\r\n`query_transaction_blocks` which also uses\r\n`multi_get_transaction_blocks` under the hood.\r\n\r\n## Next steps\r\nAudit rest of the codebase and make sure all blocking calls are wrapped\r\nin spawn_async\r\n\r\n## Test Plan \r\n\r\nTested against loadgen client and observed that performance regression\r\nis gone\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T17:55:14Z",
          "tree_id": "24ee1ff2fc45d6ed127b8b7190f23f14c1936a04",
          "url": "https://github.com/MystenLabs/sui/commit/334a7f1e19bbf81548e1a61aaa4728f9afe408a4"
        },
        "date": 1682618687944,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153694870,
            "range": "± 4779345",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317552,
            "range": "± 32131",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "95463a9ff22da72feb0fc850341966cd39b0cad2",
          "message": "Prune and compact checkpoints before upload (#11343)\n\n## Description \r\n\r\nAs title says, we are enabling a config which allows us to prune objects\r\nand invoke compaction on the objects table before uploading the snapshot\r\nto s3.\r\n## Test Plan \r\n\r\nEnhanced current unit tests.",
          "timestamp": "2023-04-27T20:07:29Z",
          "tree_id": "ab21bb09eeea0e18e4b7ab87da2392d9f3218300",
          "url": "https://github.com/MystenLabs/sui/commit/95463a9ff22da72feb0fc850341966cd39b0cad2"
        },
        "date": 1682626773308,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105725177,
            "range": "± 3717455",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 343045,
            "range": "± 21611",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "distinct": true,
          "id": "f88e450c28ddabe0d0686cb70f6f291d12028430",
          "message": "[TestInfra] Consolidate WalletContext gas code (#11392)\n\nThis PR moves all the gas object read code using wallet context into\r\nWalletContext.",
          "timestamp": "2023-04-27T13:32:58-07:00",
          "tree_id": "395db168b6317d9b85f46a7d52320bf52c3ece7d",
          "url": "https://github.com/MystenLabs/sui/commit/f88e450c28ddabe0d0686cb70f6f291d12028430"
        },
        "date": 1682628164222,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148567786,
            "range": "± 4218436",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319165,
            "range": "± 55819",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abd46dbf0c6b0aa1c9f3c3fb1bc62bfe3786c8c7",
          "message": "Limit Move identifier length (#11413)\n\n## Description \r\n\r\nLimits lengths of Move identifiers to 128.\r\nBumps protocol config to 9.\r\n\r\n## Test Plan \r\n\r\nUnit tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T21:39:46Z",
          "tree_id": "9d126b6a215f68420106b4a7de22277f24b9b4a5",
          "url": "https://github.com/MystenLabs/sui/commit/abd46dbf0c6b0aa1c9f3c3fb1bc62bfe3786c8c7"
        },
        "date": 1682632244347,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 140608310,
            "range": "± 5007916",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318799,
            "range": "± 18980",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d394f8f67ca74dd557fdba972c25fab18965ba4",
          "message": "Fix checkpoint store used in db checkpoint handler (#11434)\n\n## Description \r\n\r\nAs title says\r\n## Test Plan \r\n\r\nExisting",
          "timestamp": "2023-04-27T22:38:42Z",
          "tree_id": "abda2fd6f3b4be2b679ec8bf7d61caf44c05bd40",
          "url": "https://github.com/MystenLabs/sui/commit/4d394f8f67ca74dd557fdba972c25fab18965ba4"
        },
        "date": 1682635716600,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146444313,
            "range": "± 4694172",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 365770,
            "range": "± 54763",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "118224482+ronny-mysten@users.noreply.github.com",
            "name": "ronny-mysten",
            "username": "ronny-mysten"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "081776165193a623895b01c97287a467f51a26ef",
          "message": "Examples for API ref (#11281)\n\n## Description \r\n\r\nExamples for rpc api ref. Resubmitting PR to capture updates made to Sui\r\nrepo since previous submission. A few additional examples added since\r\nthen, too.\r\n\r\n## Test Plan \r\n\r\nLocally\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-27T17:21:29-06:00",
          "tree_id": "69fb4b699b184027471685da630e1740f31e3a03",
          "url": "https://github.com/MystenLabs/sui/commit/081776165193a623895b01c97287a467f51a26ef"
        },
        "date": 1682638221159,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108171576,
            "range": "± 3332580",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325544,
            "range": "± 24746",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0aacca3192f9e17016dae4e38171f35e4fa7f215",
          "message": "Split out ExecutionStatus from messages.rs (#11431)\n\nmessages.rs is growing too much. It's time to split it into smaller\r\nfiles.\r\nThere is no functional change but to move ExecutionStatus related types\r\nto a separate fle.",
          "timestamp": "2023-04-27T17:00:59-07:00",
          "tree_id": "b9e9ecb7abc8f29c4c45a568614c9e7826acc4da",
          "url": "https://github.com/MystenLabs/sui/commit/0aacca3192f9e17016dae4e38171f35e4fa7f215"
        },
        "date": 1682640879921,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147584210,
            "range": "± 4691947",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315898,
            "range": "± 18493",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "eaed49f03e22c680ee39094392f3147585144801",
          "message": "[move] Ban extraneous module bytes and metadata (#11393)\n\n## Description \r\n\r\n- Ban extraneous module bytes\r\n- Ban metadata\r\n\r\n## Test Plan \r\n\r\n- New tests \r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T00:48:07Z",
          "tree_id": "94e33074c23bfe3fbadc5b3b73624ebfb2eba3f3",
          "url": "https://github.com/MystenLabs/sui/commit/eaed49f03e22c680ee39094392f3147585144801"
        },
        "date": 1682643492363,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146370101,
            "range": "± 4566426",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 327274,
            "range": "± 17995",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7915de5319955de4f87c908a445c5f4076a98190",
          "message": "[sui-transaction-builder] Remove dependency on sui-adapter (#11163)\n\n## Description\r\n\r\nRemove logic in the transaction builder that relies on the execution\r\nlayer, namely:\r\n\r\n- Type checking move call parameters, which other SDKs do not do, and is\r\ncomplicated by execution versioning.\r\n- Preventing calls to non-entry functions in `Normal` execution mode\r\n(which is not longer a restriction with the introduction of programmable\r\ntransactions).\r\n\r\nThis removes the dependency on `sui-adapter` from `sui-json` and\r\n`sui-sdk`.\r\n\r\n## Test Plan\r\n\r\n```\r\n$ cargo simtest\r\n$ env SUI_SKIP_SIMTESTS=1 cargo nextest run\r\n```\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [x] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n- `unsafe_moveCall` and `unsafe_batchTransaction` now ignore their\r\n`execution_mode` parameter, and always allow calls to non-entry\r\nprogrammable transactions.\r\n- Rust SDK no longer performs type resolution and checks (matching\r\nbehaviour with TypeScript SDK).",
          "timestamp": "2023-04-27T19:13:27-07:00",
          "tree_id": "36ba6e75b5d83fc39c7e4380e3a3ec57e02eb160",
          "url": "https://github.com/MystenLabs/sui/commit/7915de5319955de4f87c908a445c5f4076a98190"
        },
        "date": 1682648590452,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146299831,
            "range": "± 5159403",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 324684,
            "range": "± 20745",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4d2ef9071d8bda02d624b3892f759e1d297e3007",
          "message": "[kiosk] Adds delist function to kiosk + security patches (#11378)\n\n## Description \r\n\r\nAdds missing `delist` function to the Kiosk.\r\n\r\n## Test Plan \r\n\r\nIncludes tests for the delist function + type checking.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n- adds `kiosk::delist` function to remove a listing\r\n- adds `kiosk::has_item_with_type<T>` to check if an item exists and its\r\ntype T\r\n- fixes the issue allowing tx sender to choose arbitrary `T` in some\r\nfunctions",
          "timestamp": "2023-04-28T08:39:31Z",
          "tree_id": "db281d5ecc8a9324205971bd001ae9481b918694",
          "url": "https://github.com/MystenLabs/sui/commit/4d2ef9071d8bda02d624b3892f759e1d297e3007"
        },
        "date": 1682671960453,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150422791,
            "range": "± 5118757",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 579905,
            "range": "± 51214",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "105368040+xydas97@users.noreply.github.com",
            "name": "xydas97",
            "username": "xydas97"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "699c8f7c7382b800af0eff187ddc6831d4d7c229",
          "message": "[Sui-sdk] Expose get_checkpoints method to rust sdk (#11419)\n\n## Description \r\n\r\nExpose get_checkpoints method to rust sdk\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T17:04:44+03:00",
          "tree_id": "970f1ad882a1c1b8384cbf737a747b8cc6e51b9a",
          "url": "https://github.com/MystenLabs/sui/commit/699c8f7c7382b800af0eff187ddc6831d4d7c229"
        },
        "date": 1682691346301,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 104289275,
            "range": "± 8072276",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309017,
            "range": "± 24368",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7f2c57e99324790c84ebe165017cd1f20cb05b3",
          "message": "Bump narwhal network's max_idle_timeout. (#11463)",
          "timestamp": "2023-04-28T17:42:51Z",
          "tree_id": "799e01975c199d32d5eb77597eeea7c096de917a",
          "url": "https://github.com/MystenLabs/sui/commit/f7f2c57e99324790c84ebe165017cd1f20cb05b3"
        },
        "date": 1682704350915,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145891584,
            "range": "± 4926197",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 337082,
            "range": "± 83111",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8916d0ff4dcb08c6278d216ebc1466ceb87f82f",
          "message": "Move advance_to_highest_supported_protocol_version to version 9 to track release branch mishap (#11445)",
          "timestamp": "2023-04-28T11:01:40-07:00",
          "tree_id": "25b9efd05872ee2b7d6c85c2342979074c2157f8",
          "url": "https://github.com/MystenLabs/sui/commit/e8916d0ff4dcb08c6278d216ebc1466ceb87f82f"
        },
        "date": 1682705486282,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149340843,
            "range": "± 4643003",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 382550,
            "range": "± 38343",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jonas-lj@users.noreply.github.com",
            "name": "Jonas Lindstrøm",
            "username": "jonas-lj"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "16d1b6fa6260f0f7d5a4f367ec0c92e6aa54fec6",
          "message": "Optimise ecdsa over secp256r1 (#11410)",
          "timestamp": "2023-04-28T14:29:07-04:00",
          "tree_id": "cd6f6164899f7a1eba34d3863b3e0c4e96d6df63",
          "url": "https://github.com/MystenLabs/sui/commit/16d1b6fa6260f0f7d5a4f367ec0c92e6aa54fec6"
        },
        "date": 1682707166379,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148366220,
            "range": "± 4781278",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 372425,
            "range": "± 33505",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106119108+gegaowp@users.noreply.github.com",
            "name": "Ge Gao",
            "username": "gegaowp"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bd7418c65f9775e8cec08848eb3401613ba612b7",
          "message": "indexer stability: epoch commit fix (#11465)\n\n## Description \r\n\r\n- move epoch commit from tx to obj commit\r\n- move epoch tx count from checkpoint handling to obj\r\n\r\n## Test Plan \r\n\r\nThis has been used to backfill mainnnet data and worked well;\r\nAlso tested locally",
          "timestamp": "2023-04-28T12:28:58-07:00",
          "tree_id": "ff19def84b5532995ad2cbbba2cbaabb6aa99dfd",
          "url": "https://github.com/MystenLabs/sui/commit/bd7418c65f9775e8cec08848eb3401613ba612b7"
        },
        "date": 1682710756764,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 156380813,
            "range": "± 5247166",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 478079,
            "range": "± 43798",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "188d24981fb3771798d84fa8606d8dc56430f3fa",
          "message": "[node] adding error handling and also piping length from config (#11337)\n\n## Description \r\n\r\nMoved from constant length to new length allowed in protocol verifier\r\n\r\n## Test Plan \r\n\r\nLocally,\r\n\r\nTODO: check on write\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T15:33:04-04:00",
          "tree_id": "9a0dacdbb716c5b29ffb0e81eb4698791aec4107",
          "url": "https://github.com/MystenLabs/sui/commit/188d24981fb3771798d84fa8606d8dc56430f3fa"
        },
        "date": 1682710984936,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147913326,
            "range": "± 4927591",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315087,
            "range": "± 24990",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec34d4b84ba3766650391e6181084d1c762f966b",
          "message": "[bugfix] - do not return balance and object change if local execution failed (#11466)\n\n## Description \r\n\r\ndo not return balance and object change if local execution failed",
          "timestamp": "2023-04-28T12:34:17-07:00",
          "tree_id": "2b4c62b2ed9c8f3dace1fc12600226256813a7e4",
          "url": "https://github.com/MystenLabs/sui/commit/ec34d4b84ba3766650391e6181084d1c762f966b"
        },
        "date": 1682711048840,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145622453,
            "range": "± 5655755",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310623,
            "range": "± 10918",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e5f6d393d6060cff92e9aa67d8ed3f094a6eb196",
          "message": "add get validators apy endpoint (#11293)\n\n## Description \r\n\r\nAdded a new endpoint `suix_getValidatorsApy` to get the list of APY for\r\nall active validators.\r\nthe APY is calculated using the current staking pool and 30 days staking\r\npool exchange rate\r\n\r\nthis PR also added cache for validator exchange rate, which will be\r\nrepopulated when epoch change, `get_states` method will be using this\r\ncache instead of resolving the rate from move tables to improve the read\r\nperformance.\r\n\r\n## Test Plan \r\n\r\nTested manually on testnet\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"apys\": [\r\n            {\r\n                \"address\": \"0x44b1b319e23495995fc837dafd28fc6af8b645edddff0fc1467f1ad631362c23\",\r\n                \"apy\": 0.03927171044129407\r\n            },\r\n            {\r\n                \"address\": \"0x3d618b03660f4e8b4ec99c52af08a814f5248154937782d22b5a8f2e44ba15fc\",\r\n                \"apy\": 0.03927182250212513\r\n            },\r\n            {\r\n                \"address\": \"0x24e8511a01aa7ab06eb8ce61d6c002ac5b8b7e0fde809554ca3662fb184ce257\",\r\n                \"apy\": 0.03927171891132608\r\n            },\r\n            {\r\n                \"address\": \"0x4ce8d9d329879f3b361c9515f48acc0f91b283a7305f6c9c789b0c8d1ebf43f2\",\r\n                \"apy\": 0.039271936185637735\r\n            },\r\n            {\r\n                \"address\": \"0x4c05f4f76ed81d210e9a29ac0756c7a3129e4b9ecacbbb9fc1579505947630cf\",\r\n                \"apy\": 0.039272011483796776\r\n            },\r\n            {\r\n                \"address\": \"0x6881875df60daf5528d66a62b66dc5710bf06b220fa9266ffdfeeb9cd8d6ed94\",\r\n                \"apy\": 0.039271851914000955\r\n            },\r\n            {\r\n                \"address\": \"0xab4fb3eeaa7b0ab4f91eedab33adf140c6750e60ca5e44b3df82491937d7bab4\",\r\n                \"apy\": 0.039271687290090895\r\n            },\r\n            {\r\n                \"address\": \"0x2079cb58f32c868deb0f4f20f509b7f034c7bea84c964cb1316f77fc987445b8\",\r\n                \"apy\": 0.03927190475122777\r\n            },\r\n            {\r\n                \"address\": \"0xaaec0462f9286f2aa9db25143eaa428cc6527b1ef669772b40b011983837de77\",\r\n                \"apy\": 0.03927179016703497\r\n            },\r\n            {\r\n                \"address\": \"0xf941ae3cbe5645dccc15da8346b533f7f91f202089a5521653c062b2ff10b304\",\r\n                \"apy\": 0.03927192198581797\r\n            },\r\n            {\r\n                \"address\": \"0x2622b55585033f26b0a86b378de1a6284c2dda531e52ef30ea87a8df81f4630a\",\r\n                \"apy\": 0.03927168099244316\r\n            },\r\n            {\r\n                \"address\": \"0x43ff72d09170ab4712d7bf26f0475d7f94f60f7076d5da9ebcfe7dde87faf2a7\",\r\n                \"apy\": 0.039271755979213285\r\n            },\r\n            {\r\n                \"address\": \"0x9062fc51d91056246dc31f2b818a4ddb113a044ec22c8dd0674616bbe56f7192\",\r\n                \"apy\": 0.039271682672775476\r\n            },\r\n...\r\n```",
          "timestamp": "2023-04-28T12:33:56-07:00",
          "tree_id": "415cfb91e80a65356aed00f8e59c527700d21191",
          "url": "https://github.com/MystenLabs/sui/commit/e5f6d393d6060cff92e9aa67d8ed3f094a6eb196"
        },
        "date": 1682711055218,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 150986019,
            "range": "± 4523398",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 328390,
            "range": "± 23221",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "aschran@mystenlabs.com",
            "name": "Andrew Schran",
            "username": "aschran"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9d6fd7126051771231c74ebe70f18c255fafa583",
          "message": "Refactor checkpoint contents download flow in state sync (#11433)\n\n## Description \r\n\r\n- Adds tx concurrency limit to complement checkpoint count concurrency\r\nlimit.\r\n- Continuously starts new `GetCheckpointContents` requests up to the\r\nlimit instead of doing this in chunked batches.\r\n\r\n## Test Plan \r\n\r\nUnit tests",
          "timestamp": "2023-04-28T20:36:06Z",
          "tree_id": "f058386f1e71627fe0c9ba77ccfc6b5dc84b957a",
          "url": "https://github.com/MystenLabs/sui/commit/9d6fd7126051771231c74ebe70f18c255fafa583"
        },
        "date": 1682714675302,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 102226602,
            "range": "± 3078774",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305211,
            "range": "± 9771",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "452f3c3358612acdbac50967d1fba83ec11dfb01",
          "message": "Filter empty log files during snapshot upload (#11470)\n\n## Description \r\n\r\nRocksDB leaves empty .log files after compaction which fails during\r\nupload to S3 with errors like:\r\n```\r\n Generic S3 error: Error performing put request epoch_0/store/perpetual/000059.log: response error \\\"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<Error><Code>MissingContentLength</Code><Message>You must provide the Content-Length HTTP header.</Message><RequestId>PHNPR5VQNTY0GW4Y</RequestId><HostId>D08UaQcJIVUVKFwpo3MrwLAYYqHWNM1FQxHSZfcNiCwkU0cTN0PPN+x+2ot6g1Q+hQ+cuVIsrTw=</HostId></Error>\\\r\n```\r\nAdding a filter for such files, as they are also unused during restore.\r\nAlso updated the deletion of old checkpoints to directly invoke delete\r\non the directory vs doing it file by file earlier by using object store\r\ndelete functionality.\r\n\r\n## Test Plan \r\n\r\nVerified with a restore.",
          "timestamp": "2023-04-28T13:49:09-07:00",
          "tree_id": "e2f55d6d494bc34dd4aecb3d361f80dba01921bd",
          "url": "https://github.com/MystenLabs/sui/commit/452f3c3358612acdbac50967d1fba83ec11dfb01"
        },
        "date": 1682715548311,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141213950,
            "range": "± 5974533",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 375056,
            "range": "± 58551",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "750655cac733de21d95afee01fc33f35ce85c4ec",
          "message": "[rpc] - improve get_states performance  (#11334)\n\nuse multi get instead of using get object read in a loop to reduce\r\nget_stakes latency.\r\nalso added extra metrics",
          "timestamp": "2023-04-28T14:04:49-07:00",
          "tree_id": "71d7b2cc5f0cfb882f406d043c17742e93d81f49",
          "url": "https://github.com/MystenLabs/sui/commit/750655cac733de21d95afee01fc33f35ce85c4ec"
        },
        "date": 1682716474483,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142201257,
            "range": "± 4978235",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 475702,
            "range": "± 82411",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f8b5ad9aaecc3c4b30a060ec5e00bdad9ba75a93",
          "message": "doc: Add page for signatures and crypto agility (#11347)\n\n## Description \r\n\r\nadd more docs. i find the signature requirement is hard to find (the\r\noffline signing page is more of a practical and concrete example) so i\r\ncreated a new page for sui-signatures. it fits well to discuss crypto\r\nagility as well.\r\n\r\n## Test Plan \r\n\r\nn/a\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T15:02:38-07:00",
          "tree_id": "9293432ce6a413a26f4296f95970c286d16610f3",
          "url": "https://github.com/MystenLabs/sui/commit/f8b5ad9aaecc3c4b30a060ec5e00bdad9ba75a93"
        },
        "date": 1682720020454,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 102278689,
            "range": "± 5733882",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308588,
            "range": "± 17346",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "deb8d58f5faa2a745e086c04699d97a47c08f62e",
          "message": "do not fail the request if objects are pruned for object and balance change (#11476)\n\n## Description \r\n\r\nas titled.\r\n\r\nTested on testnet:\r\n\r\nrequest\r\n```\r\n{\r\n  \"jsonrpc\": \"2.0\",\r\n  \"id\": 1,\r\n  \"method\": \"sui_getTransactionBlock\",\r\n  \"params\": [\"Cgww1sn7XViCPSdDcAPmVcARueWuexJ8af8zD842Ff43\", {\"showBalanceChanges\": true, \"showObjectChanges\":true}]\r\n}\r\n```\r\n\r\nresponse:\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"digest\": \"Cgww1sn7XViCPSdDcAPmVcARueWuexJ8af8zD842Ff43\",\r\n        \"timestampMs\": \"1679936400000\",\r\n        \"checkpoint\": \"0\",\r\n        \"errors\": [\r\n            \"Cannot retrieve balance changes: Error checking transaction input objects: ObjectNotFound { object_id: 0x0000000000000000000000000000000000000000000000000000000000000002, version: Some(SequenceNumber(1)) }\",\r\n            \"Cannot retrieve object changes: Error checking transaction input objects: ObjectNotFound { object_id: 0x0000000000000000000000000000000000000000000000000000000000000002, version: Some(SequenceNumber(1)) }\"\r\n        ]\r\n    },\r\n    \"id\": 1\r\n}\r\n```",
          "timestamp": "2023-04-28T15:18:24-07:00",
          "tree_id": "9aeb2b1a2f2a2758dbb52d8e4cfafa90f15c1c00",
          "url": "https://github.com/MystenLabs/sui/commit/deb8d58f5faa2a745e086c04699d97a47c08f62e"
        },
        "date": 1682720873200,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141035582,
            "range": "± 5170530",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311619,
            "range": "± 20269",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "313c3701bbb07e8aeb5b027b96a68bd6073de662",
          "message": "[framework] Deprecate CurrencyCreated event (#11480)\n\n## Description \r\n\r\nDeprecates CurrencyCreated event - it's no longer emitted.\r\n\r\n## Test Plan \r\n\r\nTests pass, change is minor.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n- coin::CurrencyCreated event is no longer emitted, CoinMetadata can be\r\nused instead\r\n\r\n---------\r\n\r\nCo-authored-by: Brandon Williams <brandon@mystenlabs.com>",
          "timestamp": "2023-04-28T22:49:42Z",
          "tree_id": "c4d530ae9116ab429c369866d6c498c2cbcd2e6a",
          "url": "https://github.com/MystenLabs/sui/commit/313c3701bbb07e8aeb5b027b96a68bd6073de662"
        },
        "date": 1682722776872,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147089113,
            "range": "± 5410396",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 333271,
            "range": "± 35462",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "411fd70107ae3f997105351abdd2fcb1e25799d0",
          "message": "[move][test] Fix test code counting (#11488)\n\n## Description \r\n\r\n- Add counting to test only function\r\n- Hardening in the future if it is used outside of tests\r\n\r\n## Test Plan \r\n\r\n\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-28T17:08:56-07:00",
          "tree_id": "320ab8ff098397c1ac7caf9c1c7a05ef07467c9e",
          "url": "https://github.com/MystenLabs/sui/commit/411fd70107ae3f997105351abdd2fcb1e25799d0"
        },
        "date": 1682727534905,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105394424,
            "range": "± 6426267",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 296096,
            "range": "± 26773",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5fbb89d0a53f6f18a42e6ad0f195154142a7bf6",
          "message": "HandleCertificateV2 (#11423)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\n\r\nCo-authored-by: Lu Zhang <8418040+longbowlu@users.noreply.github.com>",
          "timestamp": "2023-04-28T17:16:22-07:00",
          "tree_id": "c0e6cd147eb38e8085fb30c2d4a12a7abc696745",
          "url": "https://github.com/MystenLabs/sui/commit/c5fbb89d0a53f6f18a42e6ad0f195154142a7bf6"
        },
        "date": 1682727983976,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139326094,
            "range": "± 4419917",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305959,
            "range": "± 28853",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e038e62caaabcac4b1f1bd3d64730e0f14c95dd1",
          "message": "Sui v1.0.0 version change (#11468)\n\n## Description \r\nSui v1.0.0 version change\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-04-29T00:33:31Z",
          "tree_id": "d460d71dba3ba129d2a2fdb9958922300a7761b1",
          "url": "https://github.com/MystenLabs/sui/commit/e038e62caaabcac4b1f1bd3d64730e0f14c95dd1"
        },
        "date": 1682728881865,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 107593737,
            "range": "± 7778001",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 346541,
            "range": "± 22176",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8440912aa60c6965ba07266a81ea756a8ad3e635",
          "message": "Fix race in db checkpoints (#11490)\n\n## Description \r\n\r\nAs title says, we can otherwise run into this race which throws an\r\nerror:\r\n\r\nT0 -> Take perpetual snapshot\r\nT1 -> Insert effects\r\nT2 -> Insert checkpoints\r\nT3 -> Take checkpoints snapshot\r\n\r\nLonger term plan is to prune extra effects and checkpoints which are not\r\na part of the current epoch from the snapshot.\r\n \r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T01:20:02Z",
          "tree_id": "ada6cf7bda8e9bf235791c05508d1eecc0fadb1c",
          "url": "https://github.com/MystenLabs/sui/commit/8440912aa60c6965ba07266a81ea756a8ad3e635"
        },
        "date": 1682731830155,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 108284974,
            "range": "± 13167948",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 348016,
            "range": "± 25794",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "09b2081498366df936abae26eea4b2d5cafb2788",
          "message": "Split out effects from messages.rs (#11479)\n\nmessages.rs is growing too much. Split out TransactionEffects and\r\nrelated structures.\r\nThere are a few more that I would want to split out latter.\r\n\r\n---------\r\n\r\nCo-authored-by: ade <ade@mystenlabs.com>",
          "timestamp": "2023-04-29T04:50:26Z",
          "tree_id": "2670c1bc6e3402c8e1900dd90518d69e92772317",
          "url": "https://github.com/MystenLabs/sui/commit/09b2081498366df936abae26eea4b2d5cafb2788"
        },
        "date": 1682744304520,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105453049,
            "range": "± 4582723",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308793,
            "range": "± 7911",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "williamprincesmith@gmail.com",
            "name": "William Smith",
            "username": "williampsmith"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "9bbbc81537813e335ed0dbba16b2f5e86ff14e40",
          "message": "[CheckpointExecutor] Better logging for missing tx effects (#11482)\n\n## Description \r\n\r\nAs in title \r\n\r\n## Test Plan \r\n\r\nSimtests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T07:56:07-07:00",
          "tree_id": "85cf55a95a6eaec2f3cf35f32e0bb8a8df544f45",
          "url": "https://github.com/MystenLabs/sui/commit/9bbbc81537813e335ed0dbba16b2f5e86ff14e40"
        },
        "date": 1682780767058,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 153455519,
            "range": "± 4791611",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308757,
            "range": "± 75583",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d05b26c372f90b42776554e3046e3f7431cc3582",
          "message": "Add certificate deny config (#11462)\n\nAdd ability for validators to immediately execute a cert to execution\r\nerror without actually executing it, based on either a config or a\r\nhardcoded list.",
          "timestamp": "2023-04-29T18:37:58Z",
          "tree_id": "0f93e0cf5c9c137c100d053156b1263aebbb5bdb",
          "url": "https://github.com/MystenLabs/sui/commit/d05b26c372f90b42776554e3046e3f7431cc3582"
        },
        "date": 1682794257600,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 157839269,
            "range": "± 5029797",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 325724,
            "range": "± 64050",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e78f315e178fccc40bdf7761c808cb712d6e0aba",
          "message": "[transactional tests] Add support for PT Publish and Upgrade commands  (#11206)\n\n## Description \r\n\r\n- Factored out some shared publishing/upgrading logic\r\n- Added a \"staging\" command for publish to compile a package but use it\r\nin a later command\r\n- Added a set-address command that sets the address via a value or an\r\nobject ID\r\n- Added support for `Publish` and `Upgrade` commands\r\n\r\n## Test Plan \r\n\r\n- Example tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T11:54:39-07:00",
          "tree_id": "dacd5cb55af4b640f936aedad382b1779f14fb5c",
          "url": "https://github.com/MystenLabs/sui/commit/e78f315e178fccc40bdf7761c808cb712d6e0aba"
        },
        "date": 1682794976442,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105781783,
            "range": "± 3912643",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 306951,
            "range": "± 22804",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3191244b2b4c3e2440e706d19b1fe79e95aaa0cf",
          "message": "Add node config metrics (#11495)\n\nReport a few metrics based on the NodeConfig, just to give more insights\r\ninto what goes into the node config.",
          "timestamp": "2023-04-29T17:31:07-07:00",
          "tree_id": "f56514f29663017c8e0d3b6bf941d8302b6f110e",
          "url": "https://github.com/MystenLabs/sui/commit/3191244b2b4c3e2440e706d19b1fe79e95aaa0cf"
        },
        "date": 1682815341458,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106143464,
            "range": "± 5038588",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 260269,
            "range": "± 29352",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7ad12b7436507ddf4e607a165494a31b6b2ef63c",
          "message": "debug log for notify_read_effects (#11512)",
          "timestamp": "2023-04-30T01:50:25Z",
          "tree_id": "54f42bdc4e926ffe6963471353e1ae7d76224b2d",
          "url": "https://github.com/MystenLabs/sui/commit/7ad12b7436507ddf4e607a165494a31b6b2ef63c"
        },
        "date": 1682820014757,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144534202,
            "range": "± 5157786",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313014,
            "range": "± 15436",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4300278a2e1dadd846b4c393a670591048dc351b",
          "message": "[CI] reserve additional disk as swap space (#11516)\n\n## Description \r\n\r\nIncrease swap space to accommodate high memory usage during linking.\r\nOther strategies are removing debug info from build artifacts, or\r\nreducing build and test parallelism which are less ideal.\r\n\r\nIt is mentioned that github large runners have\r\n[2040GB](https://docs.github.com/en/actions/using-github-hosted-runners/using-larger-runners)\r\nof disk space but reserving 512GB of swap failed.\r\n\r\n## Test Plan \r\n\r\nBuild passing at\r\nhttps://github.com/MystenLabs/sui/actions/runs/4842516246/jobs/8629516910#step:7:1719\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-29T22:21:19-07:00",
          "tree_id": "17808014a49ef872fe96e50ae7fc07de03fd6f2c",
          "url": "https://github.com/MystenLabs/sui/commit/4300278a2e1dadd846b4c393a670591048dc351b"
        },
        "date": 1682832718248,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 141333621,
            "range": "± 5156004",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315413,
            "range": "± 13120",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2596ff65c97d611ff2d4c87f6688291744b3305e",
          "message": "Fix checkpoint builder tx sequence wait logging (#11514)\n\nLogging and scope around the actual wait",
          "timestamp": "2023-04-30T05:38:19Z",
          "tree_id": "37fd734a4742635fc10f018b5b4af0aaba7c85de",
          "url": "https://github.com/MystenLabs/sui/commit/2596ff65c97d611ff2d4c87f6688291744b3305e"
        },
        "date": 1682833579720,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 105920489,
            "range": "± 10523779",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 332219,
            "range": "± 32971",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "250221a6defc2fee77dc745b2f7b32a39693208d",
          "message": "Enable expensive checks by default in default network config (#11326)\n\nToday expensive checks are already enabled by default in tests. But not\r\nif say, we are running a release version of sui swarm locally.\r\nThis change enables it by default whenever we use network config builder\r\n(which is either tests or local tools)",
          "timestamp": "2023-04-30T11:54:44-07:00",
          "tree_id": "6c86af6f1003ceb7ee0ce99585e1de5a4ef9aa40",
          "url": "https://github.com/MystenLabs/sui/commit/250221a6defc2fee77dc745b2f7b32a39693208d"
        },
        "date": 1682881647280,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146888850,
            "range": "± 6246845",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 312564,
            "range": "± 17664",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "akihidis@gmail.com",
            "name": "Anastasios Kichidis",
            "username": "akichidis"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a5a0fa8a8f7680e3bbe7468eb0a08570aa13abe2",
          "message": "[refactor] validator to submit with configurable position and delay step (#11517)\n\n## Description \r\n\r\nProviding the ability to configure the maximum position\r\n(`max_submit_position`) of a validator to submit to consensus. Provided\r\na max position `N`, we guarantee that a validator even if is elected to\r\nsubmit to position `M` , where `M > N`, it will submit on position `N`.\r\n\r\nSimilar, if the `submit_delay_step_millis` property is set, then we\r\nensure that on the consensus adapter the delay step will get overwritten\r\nwith this constant value instead of using the latency observer logic.\r\n\r\n## Test Plan \r\n\r\nAdded unit tests.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-04-30T20:47:08-07:00",
          "tree_id": "f9e484607727774c5a11bc8d2b58ea677cc449e2",
          "url": "https://github.com/MystenLabs/sui/commit/a5a0fa8a8f7680e3bbe7468eb0a08570aa13abe2"
        },
        "date": 1682913603519,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143413485,
            "range": "± 4616116",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309736,
            "range": "± 16243",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "distinct": true,
          "id": "cdd4607a546c00aa937302ec06819d28be36cb45",
          "message": "Bump baptiste0928/cargo-install from 1 to 2\n\nBumps [baptiste0928/cargo-install](https://github.com/baptiste0928/cargo-install) from 1 to 2.\n- [Release notes](https://github.com/baptiste0928/cargo-install/releases)\n- [Changelog](https://github.com/baptiste0928/cargo-install/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/baptiste0928/cargo-install/compare/v1...48c92f3d491efa23daace9891498a14c5aaa1afd)\n\n---\nupdated-dependencies:\n- dependency-name: baptiste0928/cargo-install\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2023-04-30T21:29:51-07:00",
          "tree_id": "269fe768e5160f6a3e2b4ced71ccc5c1bc8f7f7a",
          "url": "https://github.com/MystenLabs/sui/commit/cdd4607a546c00aa937302ec06819d28be36cb45"
        },
        "date": 1682915956820,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146946774,
            "range": "± 4477017",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 359732,
            "range": "± 80716",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b9d2a61b317534e5c504d2981980b5e65e025410",
          "message": "add an admin endpoint to print node config (#11549)\n\n## Description \r\n\r\nAs title \r\n\r\n## Test Plan \r\n\r\ntested locally\r\n\r\n```\r\ncurl 127.0.0.1:49932/node-config | grep package_deny_list\r\n```\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T05:21:28Z",
          "tree_id": "f648edb41137bffabe25fe7b2c95a9b10184786e",
          "url": "https://github.com/MystenLabs/sui/commit/b9d2a61b317534e5c504d2981980b5e65e025410"
        },
        "date": 1682918978351,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106630971,
            "range": "± 3072146",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 350087,
            "range": "± 19712",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "387e72c805c1d8dbd0e337de6fefc881a2b16869",
          "message": "best efforts post quorum cert broadcasting (#11548)\n\n## Description \r\n\r\nWe use best efforts to send tx certs to validators post quorum, with the\r\nhope that this could reduce the chance of slow validators miss their\r\nslot to submit to consensus.\r\n\r\nmeat is https://github.com/MystenLabs/sui/pull/11548/files#r1181387700\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T08:50:59Z",
          "tree_id": "09b6c9621471b184344b21e20c9a60b3d193a4b6",
          "url": "https://github.com/MystenLabs/sui/commit/387e72c805c1d8dbd0e337de6fefc881a2b16869"
        },
        "date": 1682931698699,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152260231,
            "range": "± 5735247",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308215,
            "range": "± 87778",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6b78962fc6d2e9f09ae3e0a5d06ec940ef9230b0",
          "message": "[deepbook] Deepbook snapshots patch (#11562)\n\n## Description \r\n\r\nReplaces #11550, adds snapshots.\r\n\r\n## Test Plan \r\n\r\n-\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\nCo-authored-by: wiggins-dev <zlnju@outlook.com>",
          "timestamp": "2023-05-01T10:36:53Z",
          "tree_id": "d3b010aca59cd9f5d46ffd291983f4da7a27c311",
          "url": "https://github.com/MystenLabs/sui/commit/6b78962fc6d2e9f09ae3e0a5d06ec940ef9230b0"
        },
        "date": 1682938156181,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144483479,
            "range": "± 4439987",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 319866,
            "range": "± 18478",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "103447440+mystenmark@users.noreply.github.com",
            "name": "Mark Logan",
            "username": "mystenmark"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3559766a161fee531b414384b5e88e5be26b37d",
          "message": "Improve logging when loading epoch start config (#11524)",
          "timestamp": "2023-05-01T07:09:15-07:00",
          "tree_id": "d9b7a42689c968f830f4b027ecf3053d900ea93b",
          "url": "https://github.com/MystenLabs/sui/commit/a3559766a161fee531b414384b5e88e5be26b37d"
        },
        "date": 1682950941999,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142638731,
            "range": "± 5126475",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 317386,
            "range": "± 22392",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "afff076c09ef3bd0906cce065ecdfe8f0eb3ba17",
          "message": "use mysten histogram in consensus adapter (#11553)\n\n## Description \r\n\r\nTo avoid another metrics disruption, we add new metrics and will delete\r\nold ones later.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T09:50:18-07:00",
          "tree_id": "29d46dbae646eb055070926846e20daeb66e4a69",
          "url": "https://github.com/MystenLabs/sui/commit/afff076c09ef3bd0906cce065ecdfe8f0eb3ba17"
        },
        "date": 1682960338320,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 110338170,
            "range": "± 6826894",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 348329,
            "range": "± 29055",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6a5d33b4b2c075cd0b16c0ba6f987516f68a771d",
          "message": "[ConsensusAdapter] reduce the min expected consensus latency (#11547)\n\n## Description \r\n\r\np50 consensus latency is < 2s on testnet, so min resubmission latency\r\nshould be lower, e.g. 2s * 1.5 ~ 3s, instead of 5s * 1.5 ~ 7.5s. If the\r\np50 latency increases for various reasons, we rely on `LatencyObserver`\r\nto provide a more accurate value.\r\n\r\n## Test Plan \r\n\r\nCI. Private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T10:10:00-07:00",
          "tree_id": "3314f8c1859164f80679189e523b7d00e9c09a27",
          "url": "https://github.com/MystenLabs/sui/commit/6a5d33b4b2c075cd0b16c0ba6f987516f68a771d"
        },
        "date": 1682961625361,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 158703814,
            "range": "± 5700449",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 343904,
            "range": "± 49444",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bbcf24fc2fc543080e18bd05ce1ea29a196bed5d",
          "message": "[deepbook] Adds paranoid checks for quantity (#11571)\n\n## Description \r\n\r\nDescribe the changes or additions included in this PR.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T20:12:56+03:00",
          "tree_id": "0ce5d90c886f6e05e0ce27abd2f3fe649fa88cb8",
          "url": "https://github.com/MystenLabs/sui/commit/bbcf24fc2fc543080e18bd05ce1ea29a196bed5d"
        },
        "date": 1682961830354,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 136393786,
            "range": "± 4682659",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 320809,
            "range": "± 31079",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7f7e68ad144cf480f6af6200b9f0ce30dd062d2",
          "message": "[sui-system] add constant for max gas price a validator can set (#11577)\n\n## Description \r\n\r\nRight now the reference gas price can be set to whatever the validators\r\nwant. If it's higher than the `max_gas_price` than no transaction will\r\ngo through. This PR adds asserts to make sure the gas price set by\r\nvalidators is not greater than the max gas price.\r\n\r\n## Test Plan \r\n\r\nAdded a test.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T13:06:24-07:00",
          "tree_id": "c7008aa31e95718f91005383e155687ad97348cd",
          "url": "https://github.com/MystenLabs/sui/commit/d7f7e68ad144cf480f6af6200b9f0ce30dd062d2"
        },
        "date": 1682972175366,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 149804030,
            "range": "± 4997397",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 497469,
            "range": "± 32491",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "andrey@mystenlabs.com",
            "name": "Andrey Chursin",
            "username": "andll"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f9e72894e27ce13834bcdf717092ab64392e683f",
          "message": "[checkpoints] typo: rename casual->causal (#11595)",
          "timestamp": "2023-05-01T20:56:42Z",
          "tree_id": "97583ff138be472108e6d0ddf9ca90b47faf24b4",
          "url": "https://github.com/MystenLabs/sui/commit/f9e72894e27ce13834bcdf717092ab64392e683f"
        },
        "date": 1682975075591,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 98773051,
            "range": "± 7715162",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 254217,
            "range": "± 21194",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44773a5ac5b7f5f19a276b218e04792f9332bef0",
          "message": "[ConsensusAdapter] monitor observed latency and submission interval separately (#11584)\n\n## Description \r\n\r\nIt seems currently observed latency is < 5s most of the time, so their\r\nactual values are not exposed via metrics. Re-using the\r\n`sequencing_estimated_latency` metric to expose the observed latency, so\r\nwe can tune the threshold for resubmission better.\r\n\r\n## Test Plan \r\n\r\nCI.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T14:24:01-07:00",
          "tree_id": "86263c94198d5a2832bc67274cc08d381b4e34b7",
          "url": "https://github.com/MystenLabs/sui/commit/44773a5ac5b7f5f19a276b218e04792f9332bef0"
        },
        "date": 1682976746761,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 102508953,
            "range": "± 6279413",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305898,
            "range": "± 41457",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "eugene@mystenlabs.com",
            "name": "Eugene Boguslavsky",
            "username": "ebmifa"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cbee8cb15ccac3a6ec265863b0851458926230a",
          "message": "Sui version bump `v1.1.0` (#11594)\n\n## Description \r\nSui version bump to `v1.1.0`\r\n\r\n## Test Plan \r\n👀",
          "timestamp": "2023-05-01T22:29:14Z",
          "tree_id": "a8bbfd3c5f2255d4ce9bf48cdef512975fe9857d",
          "url": "https://github.com/MystenLabs/sui/commit/8cbee8cb15ccac3a6ec265863b0851458926230a"
        },
        "date": 1682980830635,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155273276,
            "range": "± 4651641",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 453003,
            "range": "± 83990",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ec53be069aa10b669526b9d311f4b865f9653466",
          "message": "[sui-replay] Remove extra newline in diff output (#11607)\n\n## Description\r\n\r\nRemove the extra newline being added after each line in the diff output.\r\n\r\n## Test Plan\r\n\r\nOutput from this command (which forks due to lack of historical objects)\r\nis no longer output on every other line:\r\n\r\n```\r\ncrates/sui-tool$ cargo run replay            \\\r\n  --rpc https://fullnode.testnet.sui.io:443  \\\r\n  tx -t Fr9hm2fYGAz7tTxTVUrbDPR1esH9NUzijoQA2DhHKj9q\r\n```\r\n\r\nOutputs:\r\n\r\n```\r\nOn-chain vs local diff\r\nEffectsForked: Effects for digest Fr9hm2fYGAz7tTxTVUrbDPR1esH9NUzijoQA2DhHKj9q forked with diff\r\n   SuiTransactionBlockEffectsV1 {\r\n       status: Success,\r\n       executed_epoch: 767,\r\n       gas_used: GasCostSummary {\r\n           computation_cost: 1000000,\r\n           storage_cost: 4218000,\r\n...[snip]...\r\n```\r\n\r\nAnd not:\r\n\r\n```\r\nOn-chain vs local diff\r\nEffectsForked: Effects for digest Fr9hm2fYGAz7tTxTVUrbDPR1esH9NUzijoQA2DhHKj9q forked with diff\r\n   SuiTransactionBlockEffectsV1 {\r\n\r\n       status: Success,\r\n\r\n       executed_epoch: 767,\r\n\r\n       gas_used: GasCostSummary {\r\n\r\n           computation_cost: 1000000,\r\n\r\n           storage_cost: 4218000,\r\n\r\n...[snip]...\r\n```",
          "timestamp": "2023-05-01T17:20:11-07:00",
          "tree_id": "fa7c000de8c911c024b5b911b8b29a41c209cc54",
          "url": "https://github.com/MystenLabs/sui/commit/ec53be069aa10b669526b9d311f4b865f9653466"
        },
        "date": 1682987295540,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 104293093,
            "range": "± 4736828",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 302362,
            "range": "± 25844",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2f6abf97636794aece8adcadba68af9c2f59add4",
          "message": "[rpc doc] - fix get_events example bug (#11608)\n\n## Description \r\n\r\n* fix get_events example bug\r\n* added examples for multi_get_objects, multi_get_transaction and\r\nget_validators_apy\r\n\r\nthe following methods example are missing, will be adding them in a few\r\nsubsequence PRs\r\n```\r\nsui_devInspectTransactionBlock\r\nsui_dryRunTransactionBlock\r\nsui_getLoadedChildObjects\r\nsui_getMoveFunctionArgTypes\r\nsui_getNormalizedMoveFunction\r\nsui_getNormalizedMoveModule\r\nsui_getNormalizedMoveModulesByPackage\r\nsui_getNormalizedMoveStruct\r\nsui_tryMultiGetPastObjects\r\nsuix_getDynamicFieldObject\r\nsuix_getDynamicFields\r\nsuix_getLatestSuiSystemState\r\nsuix_getOwnedObjects\r\nsuix_getStakes\r\nsuix_getStakesByIds\r\nsuix_queryEvents\r\nsuix_resolveNameServiceAddress\r\nsuix_resolveNameServiceNames\r\nsuix_subscribeEvent\r\nsuix_subscribeTransaction\r\nunsafe_batchTransaction\r\nunsafe_mergeCoins\r\nunsafe_moveCall\r\nunsafe_pay\r\nunsafe_payAllSui\r\nunsafe_paySui\r\nunsafe_publish\r\nunsafe_requestAddStake\r\nunsafe_requestWithdrawStake\r\nunsafe_splitCoin\r\nunsafe_splitCoinEqual\r\nunsafe_transferObject\r\nunsafe_transferSui\r\n```",
          "timestamp": "2023-05-01T17:21:54-07:00",
          "tree_id": "c2febd5c2032a91788a0f2cf5a1eb1dde9c3b9b1",
          "url": "https://github.com/MystenLabs/sui/commit/2f6abf97636794aece8adcadba68af9c2f59add4"
        },
        "date": 1682987521181,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155518768,
            "range": "± 7161590",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 474530,
            "range": "± 39377",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4f397e2bcd4faf7bb58f72f4b8e07e21b1cbe042",
          "message": "Protocol upgrade compatibility test mainnet (#11581)",
          "timestamp": "2023-05-02T00:28:56Z",
          "tree_id": "aae6cc945399b96a2b75dc460c86c3f5c8182630",
          "url": "https://github.com/MystenLabs/sui/commit/4f397e2bcd4faf7bb58f72f4b8e07e21b1cbe042"
        },
        "date": 1682987826542,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 106154541,
            "range": "± 8779027",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 306550,
            "range": "± 29889",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca973e1e32582c0d8a0eb597c6a8dbdc458986f0",
          "message": "[framework] Expose transaction digest to Move (#11606)\n\n## Description\r\n\r\nAs in title\r\n\r\n## Test Plan\r\n\r\n```\r\n$ cargo simtest\r\n$ env SUI_SKIP_SIMTEST=1 cargo nextest run\r\n```\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [x] breaking change for FNs (FN binary must upgrade)\r\n- [x] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nExpose Transaction Digest to move via `tx_context::digest`",
          "timestamp": "2023-05-01T18:43:47-07:00",
          "tree_id": "317a4ac7f96c97abe711ff55892b829bff633670",
          "url": "https://github.com/MystenLabs/sui/commit/ca973e1e32582c0d8a0eb597c6a8dbdc458986f0"
        },
        "date": 1682992645963,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145504676,
            "range": "± 5367540",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 355981,
            "range": "± 63164",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "78d738540cf96c537b6d6104d0230c7f2aedb4d9",
          "message": "[sui-proxy/ remove remote_host label] (#11603)\n\nSummary:\r\n\r\n* this causes undesirable behavior with some of our queries when we add\r\nmultiple proxy backends.\r\n* we don't need this data so, lets remove it. It should fall out of\r\nscope from the tsdb in time, without issue.\r\n\r\nTest Plan:\r\n\r\ncargo build\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-01T21:58:12-05:00",
          "tree_id": "84e24bf65807f02b5e0f7d496c525436077b88e0",
          "url": "https://github.com/MystenLabs/sui/commit/78d738540cf96c537b6d6104d0230c7f2aedb4d9"
        },
        "date": 1682996993252,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152078923,
            "range": "± 5107922",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 396949,
            "range": "± 57823",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f26163beb8f9188764605717b37688e4bd9a9d53",
          "message": "Replay from authority state (#11591)\n\n## Description \r\n\r\n* Previously the entrypoint for replays was in the execution engine at\r\n`sui_adapter::execution_engine::execute_transaction_to_effects_impl`\r\n\r\n* This PR allows replaying from a much earlier point in transaction\r\nexecution `sui_core::authority::AuthorityState::try_execute_immediately`\r\nwhich examines the cert, etc\r\n\r\nThis will allow for more coverage during replays.\r\nOne can specify if the replay tool should use authority with the\r\n`--authority` flag\r\n\r\n```\r\n./target/debug/sui-tool replay --authority  --rpc   https://fullnode.testnet.sui.io:443  tx -t 8SB4pnHhJmUtEq1QvmN6efed9RZ78D8V3mCoMNkxRCwP \r\n2023-05-01T19:43:14.378355Z  INFO sui_replay: Executing tx: 8SB4pnHhJmUtEq1QvmN6efed9RZ78D8V3mCoMNkxRCwP\r\n2023-05-01T19:43:27.543915Z  WARN sui_replay::replay: Object 0x0000000000000000000000000000000000000000000000000000000000000002 at version 0x2 does not exist on RPC server. This might be due to pruning. Historical replays might not work\r\n2023-05-01T19:43:33.068368Z  INFO sui_config::genesis_config: Creating accounts and token allocations...\r\n2023-05-01T19:43:33.802197Z  INFO sui_core::authority::authority_store: Starting SUI conservation check. This may take a while..\r\n2023-05-01T19:43:33.858056Z  INFO sui_core::authority::authority_store: Scanned 37 live objects, took 55.819584ms\r\n2023-05-01T19:43:33.858371Z  INFO sui_core::authority::authority_store: Total SUI amount in the network: 10000000000000000000, storage fund balance: 0, total storage rebate: 0 at beginning of epoch 0\r\n2023-05-01T19:43:33.859483Z  INFO sui_protocol_config: restoring override fn\r\n2023-05-01T19:43:34.302349Z  INFO sui_core::authority::authority_per_epoch_store: in_memory_checkpoint_roots = true\r\n2023-05-01T19:43:34.582598Z  INFO sui_core::authority: current protocol version is now ProtocolVersion(9)\r\n2023-05-01T19:43:34.582630Z  INFO sui_core::authority: supported versions are: SupportedProtocolVersions { min: ProtocolVersion(1), max: ProtocolVersion(9) }\r\n2023-05-01T19:43:34.583724Z  INFO sui_core::execution_driver: Starting pending certificates execution process.\r\n2023-05-01T19:43:35.073419Z  INFO sui_core::authority::authority_per_epoch_store: in_memory_checkpoint_roots = true\r\n2023-05-01T19:43:35.399887Z  WARN sui_core::transaction_manager: Ignoring committed certificate from wrong epoch. Expected=0 Actual=774 CertificateDigest=TransactionDigest(8SB4pnHhJmUtEq1QvmN6efed9RZ78D8V3mCoMNkxRCwP)\r\n2023-05-01T19:43:35.429747Z  INFO typed_store::rocks: Returning the cf metric logging task for DBMap: transaction_cert_signatures\r\n2023-05-01T19:43:35.429740Z  INFO typed_store::rocks: Returning the cf metric logging task for DBMap: effects_signatures\r\n```\r\n\r\n## Test Plan \r\n\r\nUsual random sampling.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T03:55:31Z",
          "tree_id": "38bc0c44ae835f31814bb94ded50609c6d47d881",
          "url": "https://github.com/MystenLabs/sui/commit/f26163beb8f9188764605717b37688e4bd9a9d53"
        },
        "date": 1683000302346,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 147030644,
            "range": "± 4650293",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 316924,
            "range": "± 14571",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8cf7c05c095cfedf993321cfe1dff86edb9c4075",
          "message": "Split more types out of messages.rs (#11556)\n\nThis PR moves around the following types:\r\n1. Move all quorum driver related types out of messages.rs to\r\nquorum_driver_types.rs\r\n2. Move all grpc request and response types to a new file\r\nmessages_grpc.rs\r\n3. Move all consensus messages to a new file messages_consensus.rs\r\n4. Merge ExecutableTransaction and CertificateProof to the same file\r\n\r\nAfter this PR, messages.rs only contains transaction related types.\r\n\r\nNo functional changes. Pure refactoring moving types around.",
          "timestamp": "2023-05-01T21:32:21-07:00",
          "tree_id": "7d9e0ea2a57a2cb12b489f89d6e2fcb1e8dfbef6",
          "url": "https://github.com/MystenLabs/sui/commit/8cf7c05c095cfedf993321cfe1dff86edb9c4075"
        },
        "date": 1683002598453,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109278613,
            "range": "± 4931339",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308458,
            "range": "± 16225",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "kostas@mystenlabs.com",
            "name": "Konstantinos Chalkias",
            "username": "kchalkias"
          },
          "committer": {
            "email": "chalkiaskostas@gmail.com",
            "name": "Kostas Chalkias",
            "username": "kchalkias"
          },
          "distinct": true,
          "id": "10759481d1e3dbb22cc6c51342e76bcebd5c3e94",
          "message": "prefer using individual return statements",
          "timestamp": "2023-05-02T08:57:06-07:00",
          "tree_id": "efc83adfdc99f771bc8ef8d19516d4c4e7e9cc8b",
          "url": "https://github.com/MystenLabs/sui/commit/10759481d1e3dbb22cc6c51342e76bcebd5c3e94"
        },
        "date": 1683043643901,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144054496,
            "range": "± 4165901",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 315683,
            "range": "± 31644",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "damirka.ru@gmail.com",
            "name": "Damir Shamanaev",
            "username": "damirka"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "63c1966168b07797cdd954c52ce3fa9553a2b090",
          "message": "[framework] Adds vec_set::keys() method (#11623)",
          "timestamp": "2023-05-02T19:58:56+03:00",
          "tree_id": "0ce06d62f638ad9c66c35e80151401bdae02465c",
          "url": "https://github.com/MystenLabs/sui/commit/63c1966168b07797cdd954c52ce3fa9553a2b090"
        },
        "date": 1683047471192,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 152760838,
            "range": "± 37589456",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 522318,
            "range": "± 229166",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "942876e3670d0296091761dbeee5815109cfc230",
          "message": "[sui-proxy/ use string instead of socketaddr] (#11637)\n\nSummary:\r\n\r\n* we'll convert the string to a tcplistener after serde.\r\n\r\nTest Plan:\r\n\r\ntests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T10:17:44-07:00",
          "tree_id": "42b05cf0efd40e4402610b31fca7666d7799050c",
          "url": "https://github.com/MystenLabs/sui/commit/942876e3670d0296091761dbeee5815109cfc230"
        },
        "date": 1683048478560,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151941090,
            "range": "± 5215680",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310811,
            "range": "± 17543",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7ac39e54534ea687efe8e3a4806ed2a26d123f1",
          "message": "[Checkpoint] add latency metric and read less effects for creation (#11599)\n\n## Description \r\n\r\nAdd a metric to track the latency from Narwhal certificate to finishing\r\ncheckpoint creation.\r\nAlso, try to avoid reading duplicated effects when the effects are\r\nalready roots previously.\r\n\r\n## Test Plan \r\n\r\nCI.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T18:05:54Z",
          "tree_id": "53e7630f9bca4e8e4b8fcbecd6e7f3ef7457d8a1",
          "url": "https://github.com/MystenLabs/sui/commit/d7ac39e54534ea687efe8e3a4806ed2a26d123f1"
        },
        "date": 1683051400391,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142646689,
            "range": "± 4812579",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 318046,
            "range": "± 23771",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d8535a24d3e4b5926a67496a266afd7a421c799e",
          "message": "[move-cli] Update framework branch in sui move new template (#11614)\n\n## Description\r\n\r\nDifferentiate the branch that node operators build their software off of\r\n(e.g. `mainnet`) from the branch that Move package developers depend on\r\nthe framework at (e.g. `framework/mainnet`).\r\n\r\nThis is to account for the fact that when a protocol version/binary\r\nupgrade includes a framework change, there is a period of time between\r\nwhen the tracking branch for node operators (e.g. `mainnet`) is updated\r\nand when the network performs the protocol upgrade where an attempt to\r\npublish a package that depends on a system package will fail because of\r\ndependency source validation.\r\n\r\nThis PR also introduces some other minor changes to the new package\r\ntemplate:\r\n\r\n- Remove an extraneous space in the `addresses` output.\r\n- Don't include the address for `sui` because it will be inherited from\r\nthe `Sui` dependency automatically.\r\n\r\n## Test Plan\r\n\r\nTest output from `sui move new`\r\n\r\n```\r\ncrates/sui$ cargo run -- --path /tmp/example example\r\ncrates/sui$ cat /tmp/example/Move.toml\r\n[package]\r\nname = \"example\"\r\nversion = \"0.0.1\"\r\n\r\n[dependencies]\r\nSui = { git = \"https://github.com/MystenLabs/sui.git\", subdir = \"crates/sui-framework/packages/sui-framework\", rev = \"framework/testnet\" }\r\n\r\n[addresses]\r\nexample = \"0x0\"\r\n```\r\n\r\nTest script that checks compatibility against localnet:\r\n\r\n```\r\ncrates/sui$ cargo build\r\nsui$ export SUI=$(git rev-parse --show-toplevel)/target/debug/sui\r\nsui$ $SUI genesis -f && $SUI start\r\n\r\n     # In a new terminal session\r\nsui$ export SUI=$(git rev-parse --show-toplevel)/target/debug/sui\r\nsui$ $SUI client switch --env localnet\r\nsui$ ./scripts/check-framework-compat.sh\r\n```\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nThe revision that the framework used by `$NETWORK` is found it is now\r\n`framework/$NETWORK` and not just `$NETWORK`.",
          "timestamp": "2023-05-02T11:55:03-07:00",
          "tree_id": "cc3b2c8a40c1f4c7280f8f129d2ea82841fcc2ad",
          "url": "https://github.com/MystenLabs/sui/commit/d8535a24d3e4b5926a67496a266afd7a421c799e"
        },
        "date": 1683054502196,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 142704632,
            "range": "± 4975766",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 338832,
            "range": "± 79844",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3f19f40e3a1881364ebb97def58f948249bb5057",
          "message": "[rocksdb] specify blob size threshold per column family (#11428)\n\n## Description \r\n\r\nAllow specifying different blob size threshold per column family. Column\r\nfamilies in per-epoch databases have less worry about size overhead and\r\ncan use a lower blob size threshold.\r\n\r\nAlso increase the write buffer size inside the\r\n`optimize_for_large_values_no_scan()` function as well, so the function\r\ndoes not require calling `optimize_for_write_throughput()` before.\r\n\r\n(not urgent)\r\n\r\n## Test Plan \r\n\r\nCI. Deployed to private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T12:07:16-07:00",
          "tree_id": "d063504070add84ef5b82ff28b31fb98a0cabbad",
          "url": "https://github.com/MystenLabs/sui/commit/3f19f40e3a1881364ebb97def58f948249bb5057"
        },
        "date": 1683055042733,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139906169,
            "range": "± 5643357",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311118,
            "range": "± 15592",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "tmn@mystenlabs.com",
            "name": "Todd Nowacki",
            "username": "tnowacki"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7e198fd9bb41077d0a8bb2f210972953d79721e3",
          "message": "[fmt] Fix checked_arithmetic suppressed fmt and clippy (#11648)\n\n## Description \r\n\r\n- Fixed formatting and clippy hidden by checked_arithmetic\r\n- Additional if-let-else hardening\r\n\r\n## Test Plan \r\n\r\n- nfc\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T20:04:04Z",
          "tree_id": "6d983453edef4fb83d21fec3499328c4d26fcd3b",
          "url": "https://github.com/MystenLabs/sui/commit/7e198fd9bb41077d0a8bb2f210972953d79721e3"
        },
        "date": 1683058437783,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 144378659,
            "range": "± 7631431",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 313222,
            "range": "± 17932",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f01da71c43a4f5bb4f295be65350f3c06a1830ad",
          "message": "change APY calculation to include stake_subsidy_start_epoch (#11646)\n\n## Description \r\n\r\nchange APY calculation to use 30 days average of daily APY, also exclude\r\ndata point before `stake_subsidy_start_epoch`\r\n\r\n## Test Plan \r\n\r\nManual testing on testnet\r\n\r\n\r\n```\r\n{\r\n    \"jsonrpc\": \"2.0\",\r\n    \"result\": {\r\n        \"apys\": [\r\n            {\r\n                \"address\": \"0x44b1b319e23495995fc837dafd28fc6af8b645edddff0fc1467f1ad631362c23\",\r\n                \"apy\": 0.06367719923107278\r\n            },\r\n            {\r\n                \"address\": \"0x3d618b03660f4e8b4ec99c52af08a814f5248154937782d22b5a8f2e44ba15fc\",\r\n                \"apy\": 0.0644859486532715\r\n            },\r\n            {\r\n                \"address\": \"0x24e8511a01aa7ab06eb8ce61d6c002ac5b8b7e0fde809554ca3662fb184ce257\",\r\n                \"apy\": 0.06389054258577678\r\n            },\r\n            {\r\n                \"address\": \"0x4c05f4f76ed81d210e9a29ac0756c7a3129e4b9ecacbbb9fc1579505947630cf\",\r\n                \"apy\": 0.06450673689670251\r\n            },\r\n            {\r\n                \"address\": \"0x6881875df60daf5528d66a62b66dc5710bf06b220fa9266ffdfeeb9cd8d6ed94\",\r\n                \"apy\": 0.06450271281790321\r\n            },\r\n            {\r\n                \"address\": \"0xab4fb3eeaa7b0ab4f91eedab33adf140c6750e60ca5e44b3df82491937d7bab4\",\r\n                \"apy\": 0.06389171441107323\r\n            },\r\n            {\r\n                \"address\": \"0x2079cb58f32c868deb0f4f20f509b7f034c7bea84c964cb1316f77fc987445b8\",\r\n                \"apy\": 0.06435875500691252\r\n            },\r\n            {\r\n                \"address\": \"0xaaec0462f9286f2aa9db25143eaa428cc6527b1ef669772b40b011983837de77\",\r\n                \"apy\": 0.0644953761240235\r\n            },\r\n            {\r\n                \"address\": \"0xf941ae3cbe5645dccc15da8346b533f7f91f202089a5521653c062b2ff10b304\",\r\n                \"apy\": 0.06426658468803233\r\n            },\r\n            {\r\n                \"address\": \"0x2622b55585033f26b0a86b378de1a6284c2dda531e52ef30ea87a8df81f4630a\",\r\n                \"apy\": 0.06388688803532751\r\n            },\r\n            {\r\n                \"address\": \"0x43ff72d09170ab4712d7bf26f0475d7f94f60f7076d5da9ebcfe7dde87faf2a7\",\r\n                \"apy\": 0.06433257912493434\r\n            },\r\n            {\r\n                \"address\": \"0x9062fc51d91056246dc31f2b818a4ddb113a044ec22c8dd0674616bbe56f7192\",\r\n                \"apy\": 0.06389736912122047\r\n            },\r\n            {\r\n                \"address\": \"0xc397477d8b445e6295bc34e593b9a95d5d233cec1a8fe3740d0ab86012a460f6\",\r\n                \"apy\": 0.06389143306049831\r\n            },\r\n            {\r\n                \"address\": \"0xae1af1a8f2ab31a01c4552f08e07d6bb01722a0fc3932ef3c1b4cd2e00efdb39\",\r\n                \"apy\": 0.0636996581664304\r\n            },\r\n            {\r\n                \"address\": \"0x22b35a7481fb136e5585c43421cf8ab49d0e219e902dedc40c2778acdcc7bc9c\",\r\n                \"apy\": 0.06369987497328876\r\n            },\r\n            {\r\n                \"address\": \"0xd32da9c87c1164f7c686067067e37cc3bdd8ad3fc7ef62d5f24c5dc908bb5fcb\",\r\n                \"apy\": 0.06429543790329038\r\n            },\r\n            {\r\n                \"address\": \"0x407f2bd2d36f40e57e4b725e7b80d4afc588fd2deb746ad62ccc6ed086798e48\",\r\n                \"apy\": 0.06438211710029564\r\n            },\r\n            {\r\n                \"address\": \"0x2b761dda04b324c8f2aaf8429c0e160aa3772df37d00a37e6ec948aa1efebd1a\",\r\n                \"apy\": 0.06429566198073071\r\n            },\r\n            {\r\n                \"address\": \"0xbc1c3a11c476169457fd4b57b62e0ea17c3f87864d13d2ab2470a12b817e5e93\",\r\n                \"apy\": 0.06445673315770278\r\n            },\r\n            {\r\n                \"address\": \"0x58baf5de9454ce6e6d17ebcf7d31513d700d012f304b16ef02e4a5b187cd9c13\",\r\n                \"apy\": 0.06420046807086355\r\n            },\r\n            {\r\n                \"address\": \"0x51c0c51634393f904cbeed910714943a30a47a6dafaab99c59bdcac2521ba733\",\r\n                \"apy\": 0.06268428814559913\r\n            },\r\n            {\r\n                \"address\": \"0xcd65f892b2cf35c64864151b5f268f627294768fa74f445b30553edfbe50bcd6\",\r\n                \"apy\": 0.06415466449375312\r\n            },\r\n            {\r\n                \"address\": \"0x6d6e9f9d3d81562a0f9b767594286c69c21fea741b1c2303c5b7696d6c63618a\",\r\n                \"apy\": 0.05029878640536349\r\n            },\r\n            {\r\n                \"address\": \"0x88c0bb8c1ceefe9ebba35296cb1d4ef43189e1b66c3fb84bba85321ca414420c\",\r\n                \"apy\": 0.0642935026561264\r\n            },\r\n            {\r\n                \"address\": \"0x155d5e5f1904db5f3a16924d0211b4c34cfcc947f345a1deff1452fc5373fed4\",\r\n                \"apy\": 0.06389261295985307\r\n            },\r\n            {\r\n                \"address\": \"0x3b04afb1540fc9661aaaad152d4b63c5f59807a3da1ee432b3635bd92614d87c\",\r\n                \"apy\": 0.06389702268311954\r\n            },\r\n            {\r\n                \"address\": \"0x884515e99dab69c4c28662149db81ca563ed4c36e0c8ce44a58e40e25a0a64a1\",\r\n                \"apy\": 0.06449947208256572\r\n            },\r\n            {\r\n                \"address\": \"0x3cea1fe33a40499de25d10770da9cdc9fe67122bf11fbe2b5a1133b1e56021d6\",\r\n                \"apy\": 0.06419217807990049\r\n            },\r\n            {\r\n                \"address\": \"0xb750411294aeaf85851623aae6d58f91d057ee1ee14c7954ce29ea2323f79814\",\r\n                \"apy\": 0.06429268425232637\r\n            },\r\n            {\r\n                \"address\": \"0x0a9a3eaa26bfc6f66e47d136f288fa2174d2c43623479896148c94b22ff0c8b5\",\r\n                \"apy\": 0.06370437504593317\r\n            },\r\n            {\r\n                \"address\": \"0xf61e2528ce519e0644703f4da66cacc5180aba728fa76705021b1337c363741d\",\r\n                \"apy\": 0.06419037447310942\r\n            },\r\n            {\r\n                \"address\": \"0x6c21eaf4812308dd6ade04693a75453eeba8da61cce4900e5a6b35e58dbf3557\",\r\n                \"apy\": 0.06456196228372404\r\n            },\r\n            {\r\n                \"address\": \"0xe1fb42ed4790a5f61067ebe63d32dd4189531d619c043929463e9f135dba0afa\",\r\n                \"apy\": 0.06417158230098827\r\n            },\r\n            {\r\n                \"address\": \"0x788fc51bd21e0898e68c106306a9357a7e37416e9b2bfd6a416e56e11393cba6\",\r\n                \"apy\": 0.06428304356313551\r\n            },\r\n            {\r\n                \"address\": \"0xd07503d1bbe8c4dc2b905c70d379ace08e02f809eab131dc9c675cc146246b0c\",\r\n                \"apy\": 0.06420696487430567\r\n            },\r\n            {\r\n                \"address\": \"0x10052a36a52989971951f741b8497e7d93a5ce1a621dd30e0ae7dbef80e6f982\",\r\n                \"apy\": 0.06383863718052575\r\n            },\r\n            {\r\n                \"address\": \"0x1f446cc6caa6dff121d1540568e91e89b7e0d36f6e009522c59265c627ed0361\",\r\n                \"apy\": 0.06446069121202148\r\n            },\r\n            {\r\n                \"address\": \"0xb60d557602fc1913d9e1de30df280a2ab5e4cf9d0ae47ab151972e6f01017866\",\r\n                \"apy\": 0.06416045248586905\r\n            },\r\n            {\r\n                \"address\": \"0xd7601c6697b7eb561b0122708b76b0e74da9fd6d7b66a88527e563783b710004\",\r\n                \"apy\": 0.06420243487216196\r\n            },\r\n            {\r\n                \"address\": \"0xbc3d9f492df168d1f30a2a03c39b3a0f3875d81c4ff34b17c9a732f21b328653\",\r\n                \"apy\": 0.06421517754272452\r\n            },\r\n            {\r\n                \"address\": \"0xce2039cd80188004f995cdfe1360b31d4118bd4257febee958b6c6dcd861131d\",\r\n                \"apy\": 0.06420341519600596\r\n            },\r\n            {\r\n                \"address\": \"0xca5804bfb7e04282122dabc3a20157e2002e539dbab9a8ca6cb1b0f22a5254a2\",\r\n                \"apy\": 0.06420759860924162\r\n            },\r\n            {\r\n                \"address\": \"0xf72a0dc5295a03f8d39ce2b38e050053380ea8c3e1f3be21160ea3bb74b3d784\",\r\n                \"apy\": 0.06419843198507366\r\n            },\r\n            {\r\n                \"address\": \"0x77c2e69f6a03354c2e685a0d5bf49b26cd7efbb61f6b13582a3b3979760a5b23\",\r\n                \"apy\": 0.06420799599544474\r\n            },\r\n            {\r\n                \"address\": \"0x88127002d43aac4a92422b4b35d41e17d72b62d0336751ec52e341c8b8d10ba7\",\r\n                \"apy\": 0.0641921590521337\r\n            },\r\n            {\r\n                \"address\": \"0x531fc96d6a471d5dfe0d8f48a74f8c636af0f9f15900ac1a928a4cac34f1aa0f\",\r\n                \"apy\": 0.06419020900754725\r\n            },\r\n            {\r\n                \"address\": \"0x51653766eaeadac58fef860a588ad34d97e1ed3dd0f7703abd91b8c48fd5f714\",\r\n                \"apy\": 0.063881540853694\r\n            },\r\n            {\r\n                \"address\": \"0x605a355de6d115d4c6d0a4e0386b430581a86eb175bb734a170198c243c7c165\",\r\n                \"apy\": 0.06464032126616373\r\n            },\r\n            {\r\n                \"address\": \"0xf5ce4d13da3c011655b02fa28880b88aa68e1373eb22e385bcfd21cb7c541e56\",\r\n                \"apy\": 0.06454367996660385\r\n            },\r\n            {\r\n                \"address\": \"0x8933942921bd522d69d7af12f875ba4f4963ad01431df8403597dfa8692f417d\",\r\n                \"apy\": 0.06426812133066645\r\n            },\r\n            {\r\n                \"address\": \"0x10d435282b483abb93487d946f18239e445ae81a15fa4b93761160b3ae508a3a\",\r\n                \"apy\": 0.06389549562784066\r\n            },\r\n            {\r\n                \"address\": \"0x5d6c4b01c92fd7d76273e4b818c0dbd16f8ae5e3a46f03910ec847fc8e935073\",\r\n                \"apy\": 0.06429296146215063\r\n            },\r\n            {\r\n                \"address\": \"0x9c4155f9e901324198fc9c737e15e6b14da5b9d2f38243213f115a7d45f3d048\",\r\n                \"apy\": 0.0642451744893266\r\n            },\r\n            {\r\n                \"address\": \"0x0a392298244ca2694098d015b00cf49ae1168118b28d13cb0baafd5884e5559a\",\r\n                \"apy\": 0.06696864976070477\r\n            },\r\n            {\r\n                \"address\": \"0x764c9ed72c944d314290a257b4a88211c8e529257fc2fd00d3cb0b5b5666d8a7\",\r\n                \"apy\": 0.06408637170122725\r\n            },\r\n            {\r\n                \"address\": \"0xd42927d7a446332d9593d359cd1f9a63a719723568f514e65a3f2d0c6d2c6308\",\r\n                \"apy\": 0.0642095865813636\r\n            },\r\n            {\r\n                \"address\": \"0x9336c4c9d891e263cfac99adc397853a7392e5cf84cbd5df92207a57c7fbdadc\",\r\n                \"apy\": 0.06381626353709163\r\n            },\r\n            {\r\n                \"address\": \"0xe228873333285a6c34279c1a0c1b9e00b9b27cb1a803dde6c524f52dfae320ed\",\r\n                \"apy\": 0.0686803060051965\r\n            },\r\n            {\r\n                \"address\": \"0xe70aaff920dd38013abff4469c0632fdae96ee43d8451e767c1bce1201471b9d\",\r\n                \"apy\": 0.06430776536274536\r\n            },\r\n            {\r\n                \"address\": \"0xc64c306856aa14ad8a281e2b54a9a02b742d4485cd677527c377f48a9d12b332\",\r\n                \"apy\": 0.06419273028211317\r\n            },\r\n            {\r\n                \"address\": \"0x85d33c89396aa2fa606b214e8b7804a8f8d254283db7aed7c87ebca2f898462a\",\r\n                \"apy\": 0.06442428833485356\r\n            },\r\n            {\r\n                \"address\": \"0x18fed7071bb90b5f2093f7ded14874b5fabe7e32b8ac01f353ebfc002ba4fedf\",\r\n                \"apy\": 0.0642598000174871\r\n            },\r\n            {\r\n                \"address\": \"0xe0ecd8bb71c889b1bb6de0d1ce31fb4b8ee4f5de93a4f24c84e1f0af46a80f5a\",\r\n                \"apy\": 0.06389680571663087\r\n            },\r\n            {\r\n                \"address\": \"0xa020639deea73801fd9e7227a91d959446553c5f3c703f97ea6d57122bee9868\",\r\n                \"apy\": 0.06381579483648374\r\n            },\r\n            {\r\n                \"address\": \"0x986e642d1aef8a8174ee2da51a629383e8d807a1dd6417d1c7df58185d28f734\",\r\n                \"apy\": 0.0642096444926484\r\n            },\r\n            {\r\n                \"address\": \"0x9275c6e27c1ce98b08edb3d88e71880520aa114fbf3745d333252f7a47672882\",\r\n                \"apy\": 0.06370258106229555\r\n            },\r\n            {\r\n                \"address\": \"0x5de0810e785b33127446f752b00a67c04b834fbc375aba3037274fadf4c9ba46\",\r\n                \"apy\": 0.06388608616695013\r\n            },\r\n            {\r\n                \"address\": \"0x163f66f793f03ac3f309fc97058f5997283ccbdf92e4d4fa3323d290801375d8\",\r\n                \"apy\": 0.06420223290706073\r\n            },\r\n            {\r\n                \"address\": \"0x520289e77c838bae8501ae92b151b99a54407288fdd20dee6e5416bfe943eb7a\",\r\n                \"apy\": 0.030894384587994806\r\n            },\r\n            {\r\n                \"address\": \"0x1522781514015f10f4d4d98b77204f04a79f7a7f7d2c23ecb81eba99f39e4b60\",\r\n                \"apy\": 0.06421236539303407\r\n            },\r\n            {\r\n                \"address\": \"0x0cf761fee0542dbdad239aacd91a868ee9eadd3f68dc9aaa9554e5a653f9fe2d\",\r\n                \"apy\": 0.06421431903774306\r\n            },\r\n            {\r\n                \"address\": \"0xdf2dda5c0d8f86a950bd9aeed1ef68a13048505298e0031ae867c1445299f050\",\r\n                \"apy\": 0.06519410478251837\r\n            },\r\n            {\r\n                \"address\": \"0xba4d20899c7fd438d50b2de2486d08e03f34beb78a679142629a6baacb88b013\",\r\n                \"apy\": 0.06870470441210123\r\n            },\r\n            {\r\n                \"address\": \"0x6ac8c08225b9d54e32d314056e20d9da2283289236b6fa1f06a8c801b4957171\",\r\n                \"apy\": 0.06420343713694031\r\n            },\r\n            {\r\n                \"address\": \"0x70977fada000eb0da05483191f19de7cda9a9aa63db18d17bb55c69756b8454e\",\r\n                \"apy\": 0.06421947500058987\r\n            },\r\n            {\r\n                \"address\": \"0xf95ef0315cdf53688337437622fda6f854389d898c02ce9423be393cdde063de\",\r\n                \"apy\": 0.06389784041176003\r\n            },\r\n            {\r\n                \"address\": \"0xec2f944506291b18f7c7143317df63b738581894a12695daab6af35358174655\",\r\n                \"apy\": 0.06388881050623908\r\n            },\r\n            {\r\n                \"address\": \"0x9370070960e294f92c1427ed0a814605476155fa6452d59de16ed5c38c4746f9\",\r\n                \"apy\": 0.06421520839599339\r\n            },\r\n            {\r\n                \"address\": \"0x2ade594485fb795616b74156c91097ec517a05ac488364dd3ad1ec5f536db3f4\",\r\n                \"apy\": 0.06644187738546438\r\n            },\r\n            {\r\n                \"address\": \"0x07fffa5cb91c8522b6a5d57b8fda97deb803238b23dc3b0a3b3b723546483098\",\r\n                \"apy\": 0.06421324246893255\r\n            },\r\n            {\r\n                \"address\": \"0xc304e3d55fee31e7612a135ab4f3c48ca71ae332c0081afcf546d4e92bcfde34\",\r\n                \"apy\": 0.06370677080281482\r\n            },\r\n            {\r\n                \"address\": \"0x07466289c5f00ce745b24336a0efac170d8811379a62b2b87458126a9636bc3e\",\r\n                \"apy\": 0.0638892129318431\r\n            },\r\n            {\r\n                \"address\": \"0x72169c90b7ea87f8101285c849c09cacced9968f83aa30786dad546bb94c78ab\",\r\n                \"apy\": 0.06429211775242547\r\n            },\r\n            {\r\n                \"address\": \"0xbfaf08e600526abe628f4f5351278de290268c81c8ccd0217d6bd302e9645617\",\r\n                \"apy\": 0.06437915882806111\r\n            },\r\n            {\r\n                \"address\": \"0x4f9791d5c689306862b4eb9a25914c5433b7dfd5cb4827b461f7dfc813f28a7c\",\r\n                \"apy\": 0.06421800884365342\r\n            },\r\n            {\r\n                \"address\": \"0x1d451f7dd59b0ed8bdfbdcb8a0307a1e7285ba2ae7efaee45baffa2a1ee3b47f\",\r\n                \"apy\": 0.06370534150355646\r\n            },\r\n            {\r\n                \"address\": \"0x5c1b16b520fccd546b21e67d4e457bbf9579010f2f7090409561a011c8d15c05\",\r\n                \"apy\": 0.0645868705039813\r\n            },\r\n            {\r\n                \"address\": \"0xef2576680cb79c981db9a1e78484461cc3871ac1314bb434ab99cb982a6c6fc2\",\r\n                \"apy\": 0.06421884247389681\r\n            },\r\n            {\r\n                \"address\": \"0x1877ffe212141e1b59c71e80a12fea8150590495ddb67b5154c10a998731f393\",\r\n                \"apy\": 0.06383651175390241\r\n            },\r\n            {\r\n                \"address\": \"0x7293d297ac499c7c7d2e4db00015f7c2a9dfe51385368d869e7c8cf727b2febf\",\r\n                \"apy\": 0.06765317329938855\r\n            },\r\n            {\r\n                \"address\": \"0x9e0f392d794c167a8745d14e0aad21e4900865d59e669bebf18fc654349833fc\",\r\n                \"apy\": 0.07241679895645393\r\n            },\r\n            {\r\n                \"address\": \"0x2081a93bcf642f5964e1f5c4b84e2a22801a62d0137e03d0311ee317163cd27a\",\r\n                \"apy\": 0.06862313871797839\r\n            },\r\n            {\r\n                \"address\": \"0x89afed39dde1ce7d5f1c78f8c832e254b75e7c13ddf5158fa460e46416bd8f00\",\r\n                \"apy\": 0.06006170948281884\r\n            },\r\n            {\r\n                \"address\": \"0x8ffaea5d47a38291e5dd390b6d4c40fd3b1f17864aec217a2f808d8f1ca9b26b\",\r\n                \"apy\": 0.06465441506135745\r\n            },\r\n            {\r\n                \"address\": \"0x8c2feb7de11ec9ca97bdede1c0f8018d4564cc7e015cc57ef863708bbb6bb031\",\r\n                \"apy\": 0.06580730869094088\r\n            },\r\n            {\r\n                \"address\": \"0xb88d7b5d8a48a2d37438fc3eaf1170541880c9b3070e87d9a6dcbfc1ef991dfc\",\r\n                \"apy\": 0.06441475068669297\r\n            },\r\n            {\r\n                \"address\": \"0x421b21543d1c8aba69deb9ba4bf1cf7e5313ebe0e3ad606339378bb8a33ff7da\",\r\n                \"apy\": 0.06440442954348491\r\n            }\r\n        ],\r\n        \"epoch\": \"772\"\r\n    },\r\n    \"id\": 10\r\n}\r\n```",
          "timestamp": "2023-05-02T13:18:26-07:00",
          "tree_id": "3eb466369e1a413b3068fb00275e0875ea8e36ea",
          "url": "https://github.com/MystenLabs/sui/commit/f01da71c43a4f5bb4f295be65350f3c06a1830ad"
        },
        "date": 1683059353665,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 148529480,
            "range": "± 5131827",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 327695,
            "range": "± 78413",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "81660174+mwtian@users.noreply.github.com",
            "name": "mwtian",
            "username": "mwtian"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "84bf6e399caaecff91fd716f2e5d58d27737df3f",
          "message": "Add additional monitored scopes to time executions (#11660)\n\n## Description \r\n\r\nThese monitored scopes provide more information on execution, e.g. time\r\nspent on reading input and actual executions, vs committing the results.\r\n\r\n## Test Plan \r\n\r\nCI. Deployed a more detailed version to private testnet.\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-02T16:35:35-07:00",
          "tree_id": "6db358673a89a233931aeeeea2edc5f65b2ec99f",
          "url": "https://github.com/MystenLabs/sui/commit/84bf6e399caaecff91fd716f2e5d58d27737df3f"
        },
        "date": 1683071058561,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 109754626,
            "range": "± 6167506",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 257981,
            "range": "± 15523",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "108701016+joyqvq@users.noreply.github.com",
            "name": "Joy Wang",
            "username": "joyqvq"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b12ae273ea82e75005217e2133d0025a1e0b0ab2",
          "message": "keytool: show phrase in command output (#11699)\n\n## Description \r\n\r\nshow output in keytool command to match `sui client new-address`\r\n\r\n## Test Plan \r\n\r\ntarget/debug/sui keytool generate ed25519\r\n\r\nCreated new keypair for address wrote to file path\r\n\"0x26526b4396bb01cf6762c3f9d756bb19692e1b30dbd8779579848a5eaf92e9d5.key\"\r\nwith scheme ED25519:\r\n[0x26526b4396bb01cf6762c3f9d756bb19692e1b30dbd8779579848a5eaf92e9d5]\r\nSecret Recovery Phrase : [visa enact radio buzz dial helmet enlist speak\r\nweapon census million leaf]\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-03T13:56:41-04:00",
          "tree_id": "9a55e61b9152f3979eb4a5c41eacd69c14e16086",
          "url": "https://github.com/MystenLabs/sui/commit/b12ae273ea82e75005217e2133d0025a1e0b0ab2"
        },
        "date": 1683137262222,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 139971898,
            "range": "± 5387608",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 308594,
            "range": "± 16290",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "106645797+sadhansood@users.noreply.github.com",
            "name": "Sadhan Sood",
            "username": "sadhansood"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dad2a431bfa2cf19d9e967d3067b5f7b54040005",
          "message": "Take db snapshot after epoch start config is added to db (#11700)\n\n## Description \r\n\r\nBefore this PR, we would snapshot before epoch start config is added for\r\nthe next epoch. Which would mean a restored snapshot would start in the\r\ncurrent epoch and then reconfigure (and run accumulator again which\r\nbreaks with aggressive snapshot because we also aggressively prune the\r\nsnapshots).\r\n\r\n## Test Plan \r\n\r\nUpdated integration test to use aggressive pruning.",
          "timestamp": "2023-05-03T11:46:29-07:00",
          "tree_id": "15a10846ebc812678571cf2d905db3e2f5951f9c",
          "url": "https://github.com/MystenLabs/sui/commit/dad2a431bfa2cf19d9e967d3067b5f7b54040005"
        },
        "date": 1683140194864,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 145516813,
            "range": "± 4443002",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 310598,
            "range": "± 21734",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "202954621793b112d9d70bc7f033e1fe04f406ee",
          "message": "Increase move verifier timeout & add metrics (#11714)\n\n## Description \r\n\r\nIncreases the verifier timeout limits, adds test\r\nAdds metrics and metrics tests\r\n\r\n## Test Plan \r\n\r\nUnit tests\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [x] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\n\r\n---------\r\n\r\nCo-authored-by: Ashok Menon <ashok@mystenlabs.com>",
          "timestamp": "2023-05-03T17:15:34-04:00",
          "tree_id": "317e7c2936f68e4344745d97918b0442f42064e2",
          "url": "https://github.com/MystenLabs/sui/commit/202954621793b112d9d70bc7f033e1fe04f406ee"
        },
        "date": 1683149399880,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 155828007,
            "range": "± 4564697",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 390131,
            "range": "± 23150",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123987499+suiwombat@users.noreply.github.com",
            "name": "Joe Hrbek",
            "username": "suiwombat"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1c5968e1f466b5dffa647e742f1c5b232df13243",
          "message": "[sui-proxy/add debug logging] (#11716)\n\nDescription\r\n* add debug logging for the inventory_hostname so we can, if we wish,\r\nlog what host is hitting what proxy.\r\n* this was previously in the metric labels but caused too many\r\ndimensions\r\n\r\nTest Plan \r\n* cargo build/test/fmt/clippy\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-03T22:43:14Z",
          "tree_id": "32c259a51e9a6ed89cc86cb2ef5b1aefb4ea7632",
          "url": "https://github.com/MystenLabs/sui/commit/1c5968e1f466b5dffa647e742f1c5b232df13243"
        },
        "date": 1683154655043,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146121716,
            "range": "± 4768286",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 322394,
            "range": "± 41855",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "laura@mystenlabs.com",
            "name": "Laura Makdah",
            "username": "laura-makdah"
          },
          "committer": {
            "email": "51134415+laura-makdah@users.noreply.github.com",
            "name": "laura",
            "username": "laura-makdah"
          },
          "distinct": true,
          "id": "b31970a06b75b7dd49941d3e4e023c6c58581505",
          "message": "refine buckets and split out tags into separate histograms",
          "timestamp": "2023-05-03T15:46:06-07:00",
          "tree_id": "e58e127b3d17a58dfba01849fe9d87f2e1c85feb",
          "url": "https://github.com/MystenLabs/sui/commit/b31970a06b75b7dd49941d3e4e023c6c58581505"
        },
        "date": 1683154716127,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 137508056,
            "range": "± 5652157",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 323159,
            "range": "± 19213",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ashok@mystenlabs.com",
            "name": "Ashok Menon",
            "username": "amnn"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "216a6a9f4a753cc173d7798d88c75fd67aa9109d",
          "message": "[sui-verifier] Additional tests (#11715)\n\n## Description\r\n\r\nAs in title\r\n\r\n## Test Plan\r\n\r\n```\r\ncrates/sui-verifier-transactional-tests$ cargo nextest run -- id_leak/infinite_loop.mvir\r\n```",
          "timestamp": "2023-05-03T16:29:06-07:00",
          "tree_id": "3a1870fd5859cbc5dea94b8e2c8d32905c804f85",
          "url": "https://github.com/MystenLabs/sui/commit/216a6a9f4a753cc173d7798d88c75fd67aa9109d"
        },
        "date": 1683157155152,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146827341,
            "range": "± 5206894",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309404,
            "range": "± 12102",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "da7a1dc2ee1bd63eef2ba798532d87fd8fa9789f",
          "message": "use validator display name in metrics reporting (#11663)\n\n## Description \r\n\r\nas title.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-03T20:45:47-07:00",
          "tree_id": "ad0cf53cb169c3d3c5572c6477468079bda14e94",
          "url": "https://github.com/MystenLabs/sui/commit/da7a1dc2ee1bd63eef2ba798532d87fd8fa9789f"
        },
        "date": 1683172762643,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 137390648,
            "range": "± 4502936",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 323424,
            "range": "± 17840",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "123408603+healthydeve@users.noreply.github.com",
            "name": "Jian Lu",
            "username": "healthydeve"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2518eb6d1590cd4b93f045f6632691e89ce88258",
          "message": "[Faucet] changing max concurrency option in faucet build (#11712)\n\n## Description \r\n\r\nAdding max_concurrency as a client option on the faucet.\r\n\r\n## Test Plan \r\n\r\nCI/CD\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-04T09:25:50-04:00",
          "tree_id": "e0740d7f16042c576b8d9416dc7204c23ef47d81",
          "url": "https://github.com/MystenLabs/sui/commit/2518eb6d1590cd4b93f045f6632691e89ce88258"
        },
        "date": 1683207374546,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 151741745,
            "range": "± 4554642",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 309932,
            "range": "± 9321",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "emma@mystenlabs.com",
            "name": "Emma Zhong",
            "username": "emmazzz"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ba31e3757f28aa7c71b3fbf72e2d3cd802708c29",
          "message": "[sui-system] update max commission rate cap (#11720)\n\n## Description \r\n\r\nChange the max commission rate to 20%.\r\n\r\n## Test Plan \r\n\r\nHow did you test the new or updated feature?\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-04T11:00:20-07:00",
          "tree_id": "dfdb7a9ebcafc4c96dd26fee6541ec6926113f39",
          "url": "https://github.com/MystenLabs/sui/commit/ba31e3757f28aa7c71b3fbf72e2d3cd802708c29"
        },
        "date": 1683223979786,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 146117858,
            "range": "± 5043572",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 381769,
            "range": "± 64483",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "8418040+longbowlu@users.noreply.github.com",
            "name": "Lu Zhang",
            "username": "longbowlu"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "891b17a60284e7e22d2cad2184e37ef8c09359e6",
          "message": "lock down fast path object insertion to clock object (#11654)\n\n## Description \r\n\r\nas title\r\n\r\n## Test Plan \r\n\r\nCI\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes\r\nlock down fast path object insertion to clock object.",
          "timestamp": "2023-05-04T11:42:33-07:00",
          "tree_id": "d27ed0b5cdbd1273c57b2f11deb58937e22084ff",
          "url": "https://github.com/MystenLabs/sui/commit/891b17a60284e7e22d2cad2184e37ef8c09359e6"
        },
        "date": 1683226354999,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 136946965,
            "range": "± 4370641",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 311909,
            "range": "± 12918",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "patrickkuo@me.com",
            "name": "Patrick Kuo",
            "username": "patrickkuo"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "458a16cba90677d4c052e3db89de38ed98039679",
          "message": "[bug fix] - struct tag serialization should not trim leading zeros (#11732)\n\n## Description \r\n\r\nstruct tag serialization should not trim leading zeros\r\n\r\n## Test Plan \r\n\r\nadded unit test",
          "timestamp": "2023-05-04T13:31:00-07:00",
          "tree_id": "878a065602bd420964b7220f4321efa7c1e58db2",
          "url": "https://github.com/MystenLabs/sui/commit/458a16cba90677d4c052e3db89de38ed98039679"
        },
        "date": 1683233030743,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 138455824,
            "range": "± 4719982",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 314844,
            "range": "± 17157",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "lxfind@gmail.com",
            "name": "Xun Li",
            "username": "lxfind"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ced4a537e8d1eba3d8e2fa83f4c45f1a5cd94ce2",
          "message": "[Part 2/2] Delete test utils messages (#11738)\n\nThis PR fully deletes test-utils/messages.rs",
          "timestamp": "2023-05-04T22:45:03Z",
          "tree_id": "08555d33ea0dca7795721815a2c1f2f573187651",
          "url": "https://github.com/MystenLabs/sui/commit/ced4a537e8d1eba3d8e2fa83f4c45f1a5cd94ce2"
        },
        "date": 1683241085413,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 143408991,
            "range": "± 4809882",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 305444,
            "range": "± 19885",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "93547199+oxade@users.noreply.github.com",
            "name": "oxade",
            "username": "oxade"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1f4fc1428a6c92f8fc8c9594608a50bea29ce3e7",
          "message": "fix resolution issue (#11747)\n\n## Description \r\n\r\nFixes replay issue due to not being able to find objects at some protocol\r\nversions\r\n\r\n## Test Plan \r\n\r\nRegression\r\n\r\n---\r\nIf your changes are not user-facing and not a breaking change, you can\r\nskip the following section. Otherwise, please indicate what changed, and\r\nthen add to the Release Notes section as highlighted during the release\r\nprocess.\r\n\r\n### Type of Change (Check all that apply)\r\n\r\n- [ ] user-visible impact\r\n- [ ] breaking change for a client SDKs\r\n- [ ] breaking change for FNs (FN binary must upgrade)\r\n- [ ] breaking change for validators or node operators (must upgrade\r\nbinaries)\r\n- [ ] breaking change for on-chain data layout\r\n- [ ] necessitate either a data wipe or data migration\r\n\r\n### Release notes",
          "timestamp": "2023-05-04T23:41:26Z",
          "tree_id": "25a5caa775733cdcd1a029c031fdd1001f61dd8a",
          "url": "https://github.com/MystenLabs/sui/commit/1f4fc1428a6c92f8fc8c9594608a50bea29ce3e7"
        },
        "date": 1683244298387,
        "tool": "cargo",
        "benches": [
          {
            "name": "persist_checkpoint",
            "value": 157081004,
            "range": "± 6183100",
            "unit": "ns/iter"
          },
          {
            "name": "get_checkpoint",
            "value": 445549,
            "range": "± 62692",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}