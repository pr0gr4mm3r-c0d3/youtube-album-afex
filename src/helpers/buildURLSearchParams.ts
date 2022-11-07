export const buildURLSearchParams = (id: string): string => {
	const { VITE_YT_SECRET_KEY } = import.meta.env;
	const re =
		/(?![\x00-\x7F]|[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3})./g;
	return new URLSearchParams({
		key: VITE_YT_SECRET_KEY,
		part: 'snippet, contentDetails',
		id,
	})
		.toString()
		.replace('%E2%80%8B', '')
		.replace(re, '');
};
