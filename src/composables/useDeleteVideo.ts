import { useUIStore } from '@/stores';
import { VideoCtrl } from '@/controllers';
import { useModal } from './useModal';
export const useDeleteVideo = () => {
	const { handlerCloseModal } = useModal();
	const handlerClickDeleteVideo = async () => {
		await VideoCtrl.delVideo();
		handlerCloseModal();
	};
	return { handlerCloseModal, handlerClickDeleteVideo };
};
