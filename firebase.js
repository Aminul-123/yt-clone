// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEE8x1R6Jnr4C9SGEGkLwRAvwsLod7bac",
  authDomain: "linkedin-clone-17366.firebaseapp.com",
  projectId: "linkedin-clone-17366",
  storageBucket: "linkedin-clone-17366.appspot.com",
  messagingSenderId: "122644995883",
  appId: "1:122644995883:web:a1549092c008bffc21af6e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
export const db = getFirestore(app);