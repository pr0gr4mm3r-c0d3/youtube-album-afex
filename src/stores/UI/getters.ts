import { UIState, UIStoreGetters } from './interfaces';

const getters: UIStoreGetters = {
	getLoadingStatus(this: UIState) {
		return this.uiState.loading;
	},
	getModalStatus(this: UIState) {
		return this.uiState.modalShow;
	},
};

export default getters;
