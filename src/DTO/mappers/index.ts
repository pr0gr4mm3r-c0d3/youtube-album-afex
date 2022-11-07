import { GETVideoDto, Item } from './../GETVideoDTO';
import { VideoDTO } from '../VideoDTO';

export const videoMapper = (video: Item[], url: string): VideoDTO => {
	const {
		id,
		snippet: { title, description, thumbnails },
		contentDetails: { duration },
	} = video[0];
	return {
		id,
		url,
		title,
		description,
		duration,
		thumbnails: thumbnails.high.url,
	};
};
