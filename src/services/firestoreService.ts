import {
	collection,
	getDocs,
	doc,
	setDoc,
	getDoc,
	deleteDoc,
} from 'firebase/firestore/lite';
import { db } from '@/config';
import { VideoDTO } from '@/DTO/VideoDTO';
export const useFireStoreService = () => {
	const collectionName: string = 'videos';
	const getAllVideos = async () => {
		try {
			const querySnapshot = await getDocs(collection(db, collectionName));
			return querySnapshot.docs.map((doc) => doc.data());
		} catch (error) {
			const { message } = error as { message: string };
			throw new Error(message);
		}
	};
	const existsVideo = async (id: string) => {
		const docRef = doc(db, collectionName, id);
		const docSnap = await getDoc(docRef);
		if (docSnap.exists())
			throw new Error(
				'Ya existe este video, no se admiten registros duplicados'
			);
	};
	const postVideo = async (idVideo: string, data: VideoDTO) => {
		try {
			const newVideo = doc(db, collectionName, idVideo);
			await setDoc(newVideo, data);
		} catch (error) {
			throw new Error(' No se ha guardado el video');
		}
	};
	const deleteVideo = async (idVideo: string) => {
		try {
			await deleteDoc(doc(db, collectionName, idVideo));
		} catch (error) {
			throw new Error('No se ha eliminado el video');
		}
	};
	return { getAllVideos, existsVideo, postVideo, deleteVideo };
};
