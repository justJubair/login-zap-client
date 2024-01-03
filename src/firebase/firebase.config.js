// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC9LB7KujGbzpKG0B4JCy4Ld8bObRGMWI",
  authDomain: "login-zap-client.firebaseapp.com",
  projectId: "login-zap-client",
  storageBucket: "login-zap-client.appspot.com",
  messagingSenderId: "713837666542",
  appId: "1:713837666542:web:f5905d75f5cd54a37ed3ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth