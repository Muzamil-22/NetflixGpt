// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8f0FV9YQdD12MQkgVOio10GjqswFlObc",
  authDomain: "netflix-gpt-d69c8.firebaseapp.com",
  projectId: "netflix-gpt-d69c8",
  storageBucket: "netflix-gpt-d69c8.appspot.com",
  messagingSenderId: "1097670012461",
  appId: "1:1097670012461:web:94d882ecca1def782c92a4",
  measurementId: "G-2F5FHLG3XJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
