// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIqqZgmsLwVLt3h54pBytyRfMnbsP3y8Y",
  authDomain: "netflix-gpt-c9d45.firebaseapp.com",
  projectId: "netflix-gpt-c9d45",
  storageBucket: "netflix-gpt-c9d45.appspot.com",
  messagingSenderId: "88238687018",
  appId: "1:88238687018:web:c429ad6c2c9cfda60e9453",
  measurementId: "G-GTD9YBQYNH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();