// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "makaannama.firebaseapp.com",
  projectId: "makaannama",
  storageBucket: "makaannama.appspot.com",
  messagingSenderId: "435607813211",
  appId: "1:435607813211:web:28b9e502621e9651ef937e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);