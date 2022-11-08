import { useUIStore, useVideoStore } from '@/stores';
import { useFireStoreService, useYTService } from '@/services';
import { VideoDTO } from '@/DTO/VideoDTO';
import { videoMapper } from '@/DTO/mappers';
import { handlerSuccess } from '@/utils';
const fireStoreService = useFireStoreService();
export default class VideoCtrl {
	static async getAllVideos() {
		const data = (await fireStoreService.getAllVideos()) as VideoDTO[];
		data && useVideoStore().setVideos(data);
		const uiStore = useUIStore();
		uiStore.setLoading(false);
	}
	static async addVideo(url: string, id: string) {
		const videoFound = await useYTService('videos', id);
		videoFound && (await fireStoreService.existsVideo(id));
		const videoMapped = videoMapper(videoFound, url);
		await fireStoreService.postVideo(id, videoMapped);
		const videoStore = useVideoStore();
		videoStore.addVideo(videoMapped);
		handlerSuccess('Se ha añadido un nuevo video');
	}
	static async delVideo() {
		console.log('Delete Video CTRL');
	}
}
