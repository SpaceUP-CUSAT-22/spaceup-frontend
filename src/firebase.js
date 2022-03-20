// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPipLardngh4xmRnotY4rw842M4VBdfaM",
  authDomain: "space-up-bc674.firebaseapp.com",
  projectId: "space-up-bc674",
  storageBucket: "space-up-bc674.appspot.com",
  messagingSenderId: "161103081167",
  appId: "1:161103081167:web:708048673f34468d1891ba",
  measurementId: "G-C2ZSKZHH4V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);