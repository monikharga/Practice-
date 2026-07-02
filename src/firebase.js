// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPDM0ZALC5XBkfmmgeUjpTzC1b6-oV-lg",
  authDomain: "loginpage-45198.firebaseapp.com",
  projectId: "loginpage-45198",
  storageBucket: "loginpage-45198.firebasestorage.app",
  messagingSenderId: "600817232209",
  appId: "1:600817232209:web:30d2cf01bc7a4708e34b70",
  measurementId: "G-7TE4BP1V5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);