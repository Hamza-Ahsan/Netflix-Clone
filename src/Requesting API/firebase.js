import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCpAb4HwAVdeeb9FqfN_Z0iLqYJfg-fYO0",
  authDomain: "netflix-clone4.firebaseapp.com",
  projectId: "netflix-clone4",
  storageBucket: "netflix-clone4.appspot.com",
  messagingSenderId: "376393912030",
  appId: "1:376393912030:web:4eae6c8424256919a77c4f",
  measurementId: "G-QXBS890V8R",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
