import { useUIStore } from '@/stores';
export const useDeleteVideo = () => {
	const uiStore = useUIStore();
	const handlerClickDeleteVideo = async () => {
		// TODO: VideoCtrl execute deleteVideo()
		uiStore.setModal(false);
	};
	return { setModal: uiStore.setModal, handlerClickDeleteVideo };
};
