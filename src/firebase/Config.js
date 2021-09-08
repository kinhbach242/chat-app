import firebase from "firebase/compat/app";

import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyA9-5Mf9on-laGzfOG6DwUDX4fC4v-C2Gc",
  authDomain: "chat-app-e6533.firebaseapp.com",
  projectId: "chat-app-e6533",
  storageBucket: "chat-app-e6533.appspot.com",
  messagingSenderId: "859989523084",
  appId: "1: 859989523084: web: 84cbda5a2a078183a259a9",
  measurementId: "G-06Q4ZPQRKY",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

// if (window.location.hostname === "localhost") {
//   auth.useEmulator("http://localhost:9099");
//   db.useEmulator("localhost", "8080");
// }

export { db, auth };
export default firebase;
