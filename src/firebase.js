import firebase from "firebase/app";
import "firebase/auth";



var firebaseConfig = {
    apiKey: "AIzaSyA9NffT5d8m1soOFZN7HibAL67f9DmDKUg",
    authDomain: "project-react-hunter.firebaseapp.com",
    projectId: "project-react-hunter",
    storageBucket: "project-react-hunter.appspot.com",
    messagingSenderId: "462331687529",
    appId: "1:462331687529:web:7d170b9a1e74f7e2e3a8f8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
//export const googleAuthProvider = new firebase.auth.GoogleAuth