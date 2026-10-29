// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyA8eI_bOysyC3EuW1bA-x1dPv7urGmIGdQ",
  authDomain: "selaras-wellness.firebaseapp.com",
  projectId: "selaras-wellness",
  storageBucket: "selaras-wellness.firebasestorage.app",
  messagingSenderId: "337444913494",
  appId: "1:337444913494:web:1562da71b5286a5256d6f7",
  measurementId: "G-N87QZEY97L"
};

// Inisialisasi Firebase
export const app = initializeApp(firebaseConfig);