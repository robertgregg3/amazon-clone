import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDpMXR7KIsNxKEVNLbBmww-qk_FtMur2HY",
  authDomain: "clone-robg.firebaseapp.com",
  projectId: "clone-robg",
  storageBucket: "clone-robg.appspot.com",
  messagingSenderId: "934854555820",
  appId: "1:934854555820:web:ae02725ff111a74edc4709",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
