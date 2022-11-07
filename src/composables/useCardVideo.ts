import { VideoDTO } from '@/DTO/VideoDTO';
import { useVideoStore } from '@/stores';
import { useModal } from '@/composables';
import { processDurationVideo } from '@/helpers';
export const useCardVideo = () => {
	const { handlerShowModal } = useModal();
	const videoStore = useVideoStore();
	const handlerClickOnDeleteVideo = (id: string) => {
		handlerShowModal();
		videoStore.setIdVideoToDelete(id);
	};
	const handlerClickViewDetailsVideo = (video: VideoDTO) => {
		handlerShowModal();
		videoStore.setVideoSelected(video);
	};
	return {
		handlerClickOnDeleteVideo,
		handlerClickViewDetailsVideo,
		processDurationVideo,
	};
};
