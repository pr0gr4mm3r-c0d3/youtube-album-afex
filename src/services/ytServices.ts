import { buildURLSearchParams } from '@/helpers';
export const useYTService = async (path: string, idVideo: string) => {
	const { VITE_BASE_URL } = import.meta.env;
	const params = buildURLSearchParams(idVideo);
	return fetch(`${VITE_BASE_URL}/${path}?${params}`)
		.then((res) => res.json())
		.then((ytRes) => {
			ytRes.items;
			if (ytRes.items.length === 0)
				throw new Error(
					'No se ha encontrado el video en YouTube, revise que la URL suministrada sea correcta'
				);
			return ytRes.items;
		});
};
