// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-HXHvwMIB-B9PBEy9bRR9WYGW27hb5RQ",
  authDomain: "fir-auth-3364c.firebaseapp.com",
  projectId: "fir-auth-3364c",
  storageBucket: "fir-auth-3364c.appspot.com",
  messagingSenderId: "1065791104088",
  appId: "1:1065791104088:web:9b8867280b6705012d162d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log(result)
    const name = result.user.displayName;
    const email = result.user.email;
    const profile = result.user.photoURL;
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("profileImg", profile);
  } catch (error) {
    console.log(error);
  }
};

export { signInWithGoogle };
