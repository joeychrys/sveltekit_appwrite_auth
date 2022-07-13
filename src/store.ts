import { writable } from 'svelte/store';
import { sdk } from './appwrite';

export type Alert = {
	color: string;
	message: string;
};

const createState = () => {
	const { subscribe, set, update } = writable({
		account: null,
		alert: null
	});

	return {
		subscribe,
		login: async (email: string, password: string) => {
			await sdk.account.createEmailSession(email, password);
			const user = await sdk.account.get();
			state.init(user);
		},
		signup: async (email: string, password: string, name: string) => {
			await sdk.account.create('unique()', email, password, name);
		},
		logout: async () => {
			await sdk.account.deleteSession('current');
		},
		alert: async (alert: Alert) => {
			update((n) => {
				n.alert = alert;
				return n;
			});
		},

		init: async (account = null) => {
			return set({ account, alert: null });
		}
	};
};

export const state = createState();
