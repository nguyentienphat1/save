// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGu1OP30lwsupJE25WLpm0q2_tTKw6s4M",
  authDomain: "chatapp-84829.firebaseapp.com",
  projectId: "chatapp-84829",
  storageBucket: "chatapp-84829.appspot.com",
  messagingSenderId: "1082184772057",
  appId: "1:1082184772057:web:aba96fbea06cc2185f51c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const fs = getFirestore();

export {auth,fs};