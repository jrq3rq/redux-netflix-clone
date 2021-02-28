import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC3ZTAIRmRwEXstoaHu69CmsIovzgs8sI0",
  authDomain: "netflix-redux-clone.firebaseapp.com",
  projectId: "netflix-redux-clone",
  storageBucket: "netflix-redux-clone.appspot.com",
  messagingSenderId: "19718861135",
  appId: "1:19718861135:web:7b1c13b475c8a08582553a",
  measurementId: "G-P9ENMF8ZSW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
