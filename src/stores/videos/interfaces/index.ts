import { StateTree, _GettersTree, _ActionsTree } from 'pinia';
import { VideoDTO } from '@/DTO/VideoDTO';
// *** State Types
export interface VideoState extends StateTree {
	videosState: VideoStore;
}

export interface VideoStore {
	videos: VideoDTO[];
	idVideoToDelete: string | null;
	videoSelected: VideoDTO | null;
}

export interface VideoStoreGetters extends _GettersTree<VideoState> {
	getVideos: (this: VideoState) => VideoDTO[];
	getIdVideoToDelete(this: VideoState): string | null;
	getVideoSelected(this: VideoState): VideoDTO | null;
}

export interface VideoStoreActions extends _ActionsTree {
	setVideos: (this: VideoState, payload: VideoDTO[]) => void;
	setIdVideoToDelete(this: VideoState, payload: string): void;
	setVideoSelected(this: VideoState, payload: VideoDTO | null): void;
	addVideo: (this: VideoState, payload: VideoDTO) => void;
	deleteVideo: (this: VideoState, payload: string) => void;
}
