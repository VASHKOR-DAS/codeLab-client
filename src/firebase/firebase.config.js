// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9dw0ef841filSloTF5xUz23kp-Ybu568",
  authDomain: "codelab-n.firebaseapp.com",
  projectId: "codelab-n",
  storageBucket: "codelab-n.appspot.com",
  messagingSenderId: "207456716409",
  appId: "1:207456716409:web:3d33226c9f43cb6975b6a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;