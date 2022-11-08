import { VideoCtrl } from '@/controllers';
import { getIDVideoUrl } from '@/helpers';
import { ref } from 'vue';
export const useAddVideo = () => {
	const url = ref<string>('');
	const inputRef = ref<HTMLInputElement>();

	const handlerAddVideo = async (e: Event) => {
		e.preventDefault();
		const urlTrim = url.value.trim();
		if (urlTrim === '') throw new Error('Este campo es requerido');
		const idVideo = getIDVideoUrl(urlTrim);
		idVideo && (await VideoCtrl.addVideo(urlTrim, idVideo));
		url.value = '';
		inputRef.value?.focus();
	};
	return {
		url,
		inputRef,
		handlerAddVideo,
	};
};
