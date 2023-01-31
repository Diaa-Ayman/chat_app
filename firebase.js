import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDPAsiIRijnSgeVfESFrEdpAfBYm3QfG7k",
  authDomain: "chatapp-50353.firebaseapp.com",
  projectId: "chatapp-50353",
  storageBucket: "chatapp-50353.appspot.com",
  messagingSenderId: "689736554265",
  appId: "1:689736554265:web:6423870cd2dda550409788",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { db, auth, provider };
