// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8eI_bOysyC3EuW1bA-x1dPv7urGmIGdQ",
  authDomain: "selaras-wellness.firebaseapp.com",
  projectId: "selaras-wellness",
  storageBucket: "selaras-wellness.firebasestorage.app",
  messagingSenderId: "337444913494",
  appId: "1:337444913494:web:1562da71b5286a5256d6f7",
  measurementId: "G-N87QZEY97L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);