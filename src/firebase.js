import firebase from 'firebase/app';// rollup bundle issue with ESM import
import 'firebase/auth';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: "AIzaSyCNGXNpOeRLQcJnuSgUXLv8sWcPhvJfyVA",
  authDomain: "fireship-lessons.firebaseapp.com",
  databaseURL: "https://fireship-lessons.firebaseio.com",
  projectId: "fireship-lessons",
  storageBucket: "fireship-lessons.appspot.com",
  messagingSenderId: "758773997881"
};

console.log(firebase)

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();


