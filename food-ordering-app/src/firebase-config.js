// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCseQ0mEp8dJ6XCstAIZ6lE0vOlV-GVGLQ",
  authDomain: "food-ordering-app-c10ae.firebaseapp.com",
  projectId: "food-ordering-app-c10ae",
  storageBucket: "food-ordering-app-c10ae.appspot.com",
  messagingSenderId: "371654325126",
  appId: "1:371654325126:web:e394fb5fd4bf128a677207",
  measurementId: "G-4N96GZT0J2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);