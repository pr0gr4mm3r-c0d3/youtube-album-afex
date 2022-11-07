import { StoreDefinition } from 'pinia';
import { UIState, UIStoreActions, UIStoreGetters } from '../interfaces';
export type UIStoreContext = StoreDefinition<
	'uiStore',
	UIState,
	UIStoreGetters,
	UIStoreActions
>;
