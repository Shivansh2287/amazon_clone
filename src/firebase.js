import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA59GW3S2jmxTYocF3EhAXxYghXS_ihlbo",
  authDomain: "clone-31658.firebaseapp.com",
  projectId: "clone-31658",
  storageBucket: "clone-31658.appspot.com",
  messagingSenderId: "422677948528",
  appId: "1:422677948528:web:52694e11f37d3480a12cb5",
  measurementId: "G-07J7QL01TH",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
