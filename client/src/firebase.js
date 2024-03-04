// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-6387b.firebaseapp.com",
  projectId: "mern-blog-6387b",
  storageBucket: "mern-blog-6387b.appspot.com",
  messagingSenderId: "493459020107",
  appId: "1:493459020107:web:5ab9de11c62b64713af0ce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);