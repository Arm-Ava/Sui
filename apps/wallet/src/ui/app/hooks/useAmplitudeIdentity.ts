// Copyright (c) Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useEffect } from 'react';
import Browser from 'webextension-polyfill';

import { useActiveAccount } from './useActiveAccount';
import useAppSelector from './useAppSelector';
import { ampli } from '_src/shared/analytics/ampli';

export function useAmplitudeIdentity() {
	const activeAccount = useActiveAccount();
	const { apiEnv, customRPC, activeOrigin } = useAppSelector((state) => state.app);
	const activeNetwork = customRPC && apiEnv === 'customRPC' ? customRPC : apiEnv.toUpperCase();

	useEffect(() => {
		ampli.identify(undefined, {
			activeNetwork,
			activeAccountType: activeAccount?.type,
			activeOrigin: activeOrigin || undefined,
			walletVersion: Browser.runtime.getManifest().version,
		});
	}, [activeAccount?.type, activeNetwork, activeOrigin]);
}
