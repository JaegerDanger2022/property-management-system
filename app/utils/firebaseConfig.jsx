// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD2GFafqKSZxUQgbNnCyYs18opRyWzK_WU",
  authDomain: "pmanagement-f3193.firebaseapp.com",
  projectId: "pmanagement-f3193",
  storageBucket: "pmanagement-f3193.appspot.com",
  messagingSenderId: "410178784997",
  appId: "1:410178784997:web:f2a5803f95765c99cace0c",
  measurementId: "G-99V7GVC1TH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// firestore databse
export const db = getFirestore(app);

// firebase storage
export const storage = getStorage(app);
