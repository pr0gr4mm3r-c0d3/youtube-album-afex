import { VideoState, VideoStore } from './interfaces';

export const VIDEOS_INITIAL_STATE: VideoStore = {
	videos: [],
	idVideoToDelete: null,
	videoSelected: null,
};
const INITIAL_STATE: VideoState = {
	videosState: VIDEOS_INITIAL_STATE,
};

const state = (): VideoState => INITIAL_STATE;
export default state;
