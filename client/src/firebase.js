// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth, GoogleAuthProvider} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "yourwebai.firebaseapp.com",
  projectId: "yourwebai",
  storageBucket: "yourwebai.firebasestorage.app",
  messagingSenderId: "429681246684",
  appId: "1:429681246684:web:8df374c3cdb4f4f4dc8f19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth,provider};