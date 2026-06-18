
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "intervio-6039e.firebaseapp.com",
  projectId: "intervio-6039e",
  storageBucket: "intervio-6039e.firebasestorage.app",
  messagingSenderId: "288878214845",
  appId: "1:288878214845:web:4f3f7d45af815c0109c1d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider= new GoogleAuthProvider();
export {auth,provider}