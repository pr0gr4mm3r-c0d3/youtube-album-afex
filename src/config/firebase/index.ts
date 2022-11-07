import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore/lite';

// const {
// 	VITE_apiKey: apiKey,
// 	VITE_authDomain: authDomain,
// 	VITE_databaseURL: databaseURL,
// 	VITE_projectId: projectId,
// 	VITE_storageBucket: storageBucket,
// 	VITE_messagingSenderId: messagingSenderId,
// 	VITE_appId: appId,
// 	VITE_measurementId: measurementId,
// } = import.meta.env;

// const firebaseConfig = {
// 	apiKey,
// 	authDomain,
// 	databaseURL,
// 	projectId,
// 	storageBucket,
// 	messagingSenderId,
// 	appId,
// 	measurementId,
// };

const firebaseConfig = {
	apiKey: 'AIzaSyBLPc8GP6hnnthaSAnEPeBOK8AQRA98l3E',
	authDomain: 'album-fee94.firebaseapp.com',
	databaseURL: 'https://album-fee94-default-rtdb.firebaseio.com',
	projectId: 'album-fee94',
	storageBucket: 'album-fee94.appspot.com',
	messagingSenderId: '618677326409',
	appId: '1:618677326409:web:da0e5b0504ab0dbe312598',
	measurementId: 'G-VX5CMLBPXG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { app, db };
