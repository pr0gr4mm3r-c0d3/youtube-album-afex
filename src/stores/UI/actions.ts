import { UIState, UIStoreActions } from './interfaces';

const actions: UIStoreActions = {
	setModal(this: UIState, payload: boolean) {
		this.uiState.modalShow = payload;
	},
	setLoading(this: UIState, payload: boolean) {
		this.uiState.loading = payload;
	},
};

export default actions;
