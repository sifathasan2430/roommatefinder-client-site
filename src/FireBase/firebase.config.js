// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADdNOsIA77VyRpakjWh79vtVxIkQf4jCw",
  authDomain: "roomatefinder-5e9a6.firebaseapp.com",
  projectId: "roomatefinder-5e9a6",
  storageBucket: "roomatefinder-5e9a6.firebasestorage.app",
  messagingSenderId: "937399519743",
  appId: "1:937399519743:web:c9a34d7777d0537b2a3fca"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth