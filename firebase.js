// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCzYA4Rh6xPmPxZVA3v9QfCR8Ap23OAqoc",
	authDomain: "insta-clone-394d6.firebaseapp.com",
	projectId: "insta-clone-394d6",
	storageBucket: "insta-clone-394d6.appspot.com",
	messagingSenderId: "326320085261",
	appId: "1:326320085261:web:664e7a4391a15f639b3844",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
