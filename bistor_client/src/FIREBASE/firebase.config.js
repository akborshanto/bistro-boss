// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAZDEOvZwOnUpgQ4u1rxMr9BUwvrWcmiAY",
  authDomain: "bistroboss-7681a.firebaseapp.com",
  projectId: "bistroboss-7681a",
  storageBucket: "bistroboss-7681a.appspot.com",
  messagingSenderId: "861871402813",
  appId: "1:861871402813:web:6f78ea4f9512cb72ac5f54",
  measurementId: "G-6TWS38ENCV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

