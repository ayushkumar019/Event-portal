// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "fir-db11e.firebaseapp.com",
  projectId: "fir-db11e",
  storageBucket: "fir-db11e.appspot.com",
  messagingSenderId: "800888954801",
  appId: "1:800888954801:web:e1de7435c8a8d3aedda790",
  measurementId: "G-LJKTLWNB1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);