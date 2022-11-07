import { VideoDTO } from './../DTO/VideoDTO';
import { useFireStoreService } from '@/services';
import { useUIStore, useVideoStore } from '@/stores';
const { getAllVideos } = useFireStoreService();
export default class VideoCtrl {
	static async getAllVideos() {
		const data = (await getAllVideos()) as VideoDTO[];
		data && useVideoStore().setVideos(data);
		const uiStore = useUIStore();
		uiStore.setLoading(false);
	}
	static async addVideo(url: string, id: string) {
		console.log('Add Video CTRL');
	}
	static async delVideo() {
		console.log('Delete Video CTRL');
	}
}
