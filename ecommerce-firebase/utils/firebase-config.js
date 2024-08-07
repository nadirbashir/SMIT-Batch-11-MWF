import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";
import {
  getFirestore,
  addDoc,
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7cFBs5ppwdF4VAwLkPxQ5BKNsWbuTg_Y",
  authDomain: "authentication-47dae.firebaseapp.com",
  projectId: "authentication-47dae",
  storageBucket: "authentication-47dae.appspot.com",
  messagingSenderId: "797172471447",
  appId: "1:797172471447:web:a615cd44b36a32670dbbd2",
  measurementId: "G-0XK4D35B1P"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  app,
  auth,
  onAuthStateChanged,
  db,
  createUserWithEmailAndPassword,
  addDoc,
  setDoc,
  doc,
  collection,
  signOut,
  signInWithEmailAndPassword,
  getDoc,
  storage,
  ref,
  getDownloadURL,
  uploadBytes,
  getDocs
};
