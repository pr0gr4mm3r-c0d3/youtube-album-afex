import { VideoState, VideoStoreGetters } from './interfaces';

const getters: VideoStoreGetters = {
	getVideos(this: VideoState) {
		return this.videosState.videos;
	},
	getIdVideoToDelete(this: VideoState) {
		return this.videosState.idVideoToDelete;
	},
	getVideoSelected(this: VideoState) {
		return this.videosState.videoSelected;
	},
};

export default getters;
