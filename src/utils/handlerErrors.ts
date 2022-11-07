import { useUIStore } from './../stores/UI/index';
import { useNotify } from '@/utils';

export const handlerErrors = (error: unknown) => {
	const { message } = error as { message: string };
	useNotify.error(message);
	const uiStore = useUIStore();
	uiStore.setLoading(false);
};
