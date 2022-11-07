import { VideoDTO } from '@/DTO/VideoDTO';
import { VideoState, VideoStoreActions } from './interfaces';
const actions: VideoStoreActions = {
	setVideos(this: VideoState, payload: VideoDTO[]) {
		this.videosState.videos = [...payload];
	},
	setIdVideoToDelete(this: VideoState, payload: string) {
		this.videosState.idVideoToDelete = payload;
	},
	setVideoSelected(this: VideoState, payload: VideoDTO | null) {
		this.videosState.videoSelected = payload;
	},
	addVideo(this: VideoState, payload: VideoDTO) {
		this.videosState.videos = [...this.videosState.videos, payload];
	},
	deleteVideo(this: VideoState, payload: string) {
		this.videosState.videos = this.videosState.videos.filter(
			(v) => v.id !== payload
		);
	},
};

export default actions;
