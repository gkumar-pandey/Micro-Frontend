// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0pQZHuopsL3w0NL9cSphZZ1Et7j_qjZ8",
  authDomain: "fir-auth-test-39765.firebaseapp.com",
  projectId: "fir-auth-test-39765",
  storageBucket: "fir-auth-test-39765.appspot.com",
  messagingSenderId: "879007956712",
  appId: "1:879007956712:web:c2575b7e95bafd7da3935d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
