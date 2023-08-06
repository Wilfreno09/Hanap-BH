// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWIBmCM0lHMR8ef97N1Sh55rwhJVBN2KE",
  authDomain: "hanap-bh.firebaseapp.com",
  projectId: "hanap-bh",
  storageBucket: "hanap-bh.appspot.com",
  messagingSenderId: "665388032896",
  appId: "1:665388032896:web:a9c10e0e0bbd0b762a1765",
  measurementId: "G-LPC1VYHZG8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
