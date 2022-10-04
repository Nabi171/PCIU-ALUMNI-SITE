// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "@firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD8aW5bpk5M17UNnTYlAPbijOWxQ-GrDN8",
    authDomain: "pciu-app.firebaseapp.com",
    projectId: "pciu-app",
    storageBucket: "pciu-app.appspot.com",
    messagingSenderId: "87233788330",
    appId: "1:87233788330:web:614b49f3c24ac73ba693d3",
    measurementId: "G-MQXZYV4K0L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
