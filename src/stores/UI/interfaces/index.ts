import { StateTree, _GettersTree, _ActionsTree } from 'pinia';
// *** State Types
export interface UIState extends StateTree {
	uiState: UIStore;
}

export interface UIStore {
	modalShow: boolean;
	loading: boolean;
}

export interface UIStoreGetters extends _GettersTree<UIState> {
	getModalStatus: (this: UIState) => boolean;
	getLoadingStatus: (this: UIState) => boolean;
}

export interface UIStoreActions extends _ActionsTree {
	setModal: (this: UIState, payload: boolean) => void;
	setLoading: (this: UIState, payload: boolean) => void;
}
