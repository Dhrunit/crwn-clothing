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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
