// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-_DIya5YksXbqX2WRHdovf2EklrN5m5c",
  authDomain: "tiktok-clone-b363e.firebaseapp.com",
  projectId: "tiktok-clone-b363e",
  storageBucket: "tiktok-clone-b363e.appspot.com",
  messagingSenderId: "662520972759",
  appId: "1:662520972759:web:d7109c7792cd16bfcc7792",
  measurementId: "G-WKFXYSGN55"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;