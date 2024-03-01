import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCwT_XOmwV_V7ymRXpYDC9A0XdF1Akpj8s",
  authDomain: "clone-fa1b1.firebaseapp.com",
  projectId: "clone-fa1b1",
  storageBucket: "clone-fa1b1.appspot.com",
  messagingSenderId: "269712387535",
  appId: "1:269712387535:web:87448655c94011eaa8f6ba",
  measurementId: "G-NCY076FCXV",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
