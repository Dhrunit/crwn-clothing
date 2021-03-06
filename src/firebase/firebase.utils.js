import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyDaieOtRIDZPycUxdAmGihrN7i1R9PuV0Q',
	authDomain: 'crwn-db-7ab56.firebaseapp.com',
	databaseURL: 'https://crwn-db-7ab56.firebaseio.com',
	projectId: 'crwn-db-7ab56',
	storageBucket: 'crwn-db-7ab56.appspot.com',
	messagingSenderId: '116251587688',
	appId: '1:116251587688:web:e8d1b4ec802b0fac9577dd',
	measurementId: 'G-KSWWKLL9K2',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	console.log(snapShot);

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
