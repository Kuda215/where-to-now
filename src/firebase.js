// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWVCtDZqNNQiv2X5rTVZqqxcfT8Nm80tk",
  authDomain: "where-to-now-7d4b9.firebaseapp.com",
  projectId: "where-to-now-7d4b9",
  storageBucket: "where-to-now-7d4b9.firebasestorage.app",
  messagingSenderId: "579291111250",
  appId: "1:579291111250:web:09d0770ac7eb4de9b1648b",
  measurementId: "G-K9Y2C51CMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);


