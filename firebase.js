// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvOo6HTf3rivg9z1EMPhCtM1Xbq6ugnGY",
  authDomain: "pantry-750.firebaseapp.com",
  projectId: "pantry-750",
  storageBucket: "pantry-750.appspot.com",
  messagingSenderId: "756518728317",
  appId: "1:756518728317:web:428b85d706279668ceb714",
  measurementId: "G-MVFKPVY81E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export {firestore}