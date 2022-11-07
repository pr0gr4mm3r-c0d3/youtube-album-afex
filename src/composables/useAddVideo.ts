import { ref } from 'vue';
export const useAddVideo = () => {
	const url = ref<string>('');
	const inputRef = ref<HTMLInputElement>();
	const handlerAddVideo = async (e: Event) => {
		e.preventDefault();
		console.log(url.value, inputRef.value?.focus());
	};
	return {
		url,
		inputRef,
		handlerAddVideo,
	};
};
