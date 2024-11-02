import firebase from "firebase/app";

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPK3NA07XlBlIHn4IQLlJPeJ-pA16oDuE",
  authDomain: "tiki-b4b1c.firebaseapp.com",
  projectId: "tiki-b4b1c",
  storageBucket: "tiki-b4b1c.appspot.com",
  messagingSenderId: "723098534999",
  appId: "1:723098534999:web:5c6123a0400870de948f12",
  measurementId: "G-8W75YEYQ2J",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
export default firebase;
