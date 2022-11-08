export const checkFormatURL = (url: string) => {
	const reg = /(?:\/|%3D|v=|vi=)([0-9A-z-_]{11})(?:[%#?&]|$)/gm;
	if (!url.match(reg)) throw new Error('Entre una URL valida');
};
