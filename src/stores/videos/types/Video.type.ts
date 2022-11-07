import { StoreDefinition } from 'pinia';
import {
	VideoState,
	VideoStoreActions,
	VideoStoreGetters,
} from '../interfaces';
export type VideoStoreContext = StoreDefinition<
	'videoStore',
	VideoState,
	VideoStoreGetters,
	VideoStoreActions
>;
