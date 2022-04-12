/* eslint-disable prettier/prettier */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCErOnnky0kaV9bc0wvuFdQYIgPxSCNCm8',
  authDomain: 'instagram-clone-66c69.firebaseapp.com',
  projectId: 'instagram-clone-66c69',
  storageBucket: 'instagram-clone-66c69.appspot.com',
  messagingSenderId: '484007598275',
  appId: '1:484007598275:web:78760aa3d9372bafd86a76',
  measurementId: 'G-DLVWYZBTXV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

export function LOGIN(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function SIGNUP(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function SIGNOUT() {
  return auth.signOut();
}


