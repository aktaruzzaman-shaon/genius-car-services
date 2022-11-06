// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyLXCQh6QG0r9ON_R5nVl-QDjGM35PIDY",
  authDomain: "genius-car-services-b08bf.firebaseapp.com",
  projectId: "genius-car-services-b08bf",
  storageBucket: "genius-car-services-b08bf.appspot.com",
  messagingSenderId: "1076117858954",
  appId: "1:1076117858954:web:6f614c540d72eeed0b9b73"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;