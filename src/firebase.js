// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth ,signInWithEmailAndPassword } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx0WahBJZQqttFlUlQzhab3GVxOBgyieo",
  authDomain: "where-to-now-a1086.firebaseapp.com",
  projectId: "where-to-now-a1086",
  storageBucket: "where-to-now-a1086.firebasestorage.app",
  messagingSenderId: "679018596423",
  appId: "1:679018596423:web:a8ddf3fc131aae8f6f0962",
  measurementId: "G-QH7L8BNXQE"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Signed in successfully:", user);
  } catch (error) {
    console.error("Error signing in:", error.message);
  }
};

export { auth, signInUser };