import { UIState, UIStore } from './interfaces';

export const UI_INITIAL_STATE: UIStore = { loading: true, modalShow: false };
const INITIAL_STATE: UIState = {
	uiState: UI_INITIAL_STATE,
};

const state = (): UIState => INITIAL_STATE;
export default state;
