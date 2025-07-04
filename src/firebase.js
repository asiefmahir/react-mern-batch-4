// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCLXDDUe5TWq7A7WTBauvVDEGPNUVybAf4",
	authDomain: "simple-e-com-with-react.firebaseapp.com",
	projectId: "simple-e-com-with-react",
	storageBucket: "simple-e-com-with-react.firebasestorage.app",
	messagingSenderId: "308907575022",
	appId: "1:308907575022:web:8e08ae349c817d2dffd5ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
