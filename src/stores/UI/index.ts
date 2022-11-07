import { defineStore } from 'pinia';

import { UIStoreContext } from './types/UI.type';
import { UIState, UIStoreActions, UIStoreGetters } from './interfaces';

import state from './state';
import getters from './getters';
import actions from './actions';

export const useUIStore: UIStoreContext = defineStore<
	'uiStore',
	UIState,
	UIStoreGetters,
	UIStoreActions
>('uiStore', {
	state,
	getters,
	actions,
});
