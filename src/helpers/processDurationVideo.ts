export const processDurationVideo = (duration: string): string => {
	const extractNumbers = duration.match(/\d+/g);
	return extractNumbers!.join(':');
};
