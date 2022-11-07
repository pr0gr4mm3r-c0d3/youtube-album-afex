export interface GETVideoDto {
	kind: string;
	etag: string;
	items: Item[];
	pageInfo: PageInfo;
}

export interface PageInfo {
	totalResults: number;
	resultsPerPage: number;
}

export interface Item {
	kind: string;
	etag: string;
	id: string;
	snippet: Snippet;
	contentDetails: ContentDetails;
}

export interface ContentDetails {
	duration: string;
	dimension: string;
	definition: string;
	caption: string;
	licensedContent: boolean;
	contentRating: ContentRating;
	projection: string;
}

export interface ContentRating {}

export interface Snippet {
	publishedAt: string;
	channelId: string;
	title: string;
	description: string;
	thumbnails: Thumbnails;
	channelTitle: string;
	tags: string[];
	categoryId: string;
	liveBroadcastContent: string;
	defaultLanguage: string;
	localized: Localized;
	defaultAudioLanguage: string;
}

export interface Localized {
	title: string;
	description: string;
}

export interface Thumbnails {
	default: Default;
	medium: Default;
	high: Default;
	standard: Default;
	maxres: Default;
}

export interface Default {
	url: string;
	width: number;
	height: number;
}
