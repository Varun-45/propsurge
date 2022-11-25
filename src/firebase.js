// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig1 = {
    apiKey: "AIzaSyAEfqHAIWjM649F41aX2jsvlcTcQReLPiU",
    authDomain: "fb-cru.firebaseapp.com",
    projectId: "fb-cru",
    storageBucket: "fb-cru.appspot.com",
    messagingSenderId: "729465420013",
    appId: "1:729465420013:web:2c879c307993ab0cee34e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig1);
export const db = getDatabase(app);