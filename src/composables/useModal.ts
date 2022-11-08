import { useUIStore, useVideoStore } from '@/stores';
export const useModal = () => {
	const [uiStore, videoStore] = [useUIStore(), useVideoStore()];
	const handlerCloseModal = () => {
		videoStore.setVideoSelected(null);
		videoStore.setIdVideoToDelete(null);
		uiStore.setModal(false);
	};
	const handlerShowModal = () => {
		uiStore.setModal(true);
	};
	return { handlerCloseModal, handlerShowModal };
};
