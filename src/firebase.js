import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAEij-WUqqtTQ7kLN52nnmzpCnzllWS2GY",
  authDomain: "fir-login-tutorial-937ca.firebaseapp.com",
  projectId: "fir-login-tutorial-937ca",
  storageBucket: "fir-login-tutorial-937ca.appspot.com",
  messagingSenderId: "11634939314",
  appId: "1:11634939314:web:2d33c111aa27e70f29c0ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider };