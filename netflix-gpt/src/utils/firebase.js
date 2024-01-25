// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCii36ejmg8jXd3zHaDPlFkRPMWQopvckc",
  authDomain: "netflixgpt-edf8f.firebaseapp.com",
  projectId: "netflixgpt-edf8f",
  storageBucket: "netflixgpt-edf8f.appspot.com",
  messagingSenderId: "881217591395",
  appId: "1:881217591395:web:d2ec433fdfeee2753c4056",
  measurementId: "G-KNWP7E1J3L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();