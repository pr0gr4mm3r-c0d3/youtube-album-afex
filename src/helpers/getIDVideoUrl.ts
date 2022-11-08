// import { handlerErrors } from '@/utils';
import { checkFormatURL } from '@/validators';

export const getIDVideoUrl = (url: string) => {
	const check = checkFormatURL(url);
	const ytUrl = new URL(url);
	return ytUrl.searchParams.get('v') || ytUrl.toString().split('/').at(-1);
};
