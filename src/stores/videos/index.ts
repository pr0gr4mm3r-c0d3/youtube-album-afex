import { defineStore } from 'pinia';

import { VideoStoreContext } from './types/Video.type';
import { VideoState, VideoStoreActions, VideoStoreGetters } from './interfaces';

import state from './state';
import getters from './getters';
import actions from './actions';

export const useVideoStore: VideoStoreContext = defineStore<
	'videoStore',
	VideoState,
	VideoStoreGetters,
	VideoStoreActions
>('videoStore', {
	state,
	getters,
	actions,
});
