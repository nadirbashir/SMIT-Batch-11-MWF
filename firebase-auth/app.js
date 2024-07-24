import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC7cFBs5ppwdF4VAwLkPxQ5BKNsWbuTg_Y",
  authDomain: "authentication-47dae.firebaseapp.com",
  projectId: "authentication-47dae",
  storageBucket: "authentication-47dae.appspot.com",
  messagingSenderId: "797172471447",
  appId: "1:797172471447:web:a615cd44b36a32670dbbd2",
  measurementId: "G-0XK4D35B1P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const auth_container = document.getElementById("auth_container");
const dashboard = document.getElementById("dashboard");
const signup_email = document.getElementById("signup_email");
const signup_password = document.getElementById("signup_password");
const signin_email = document.getElementById("signin_email");
const signin_password = document.getElementById("signin_password");
const user_info = document.getElementById("user_info");
const signup_btn = document.getElementById("btn");
const signin_btn = document.getElementById("signin_btn");
const logout_btn = document.getElementById("logout");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log(user, "loged in");
    const uid = user.uid;
    auth_container.style.display = "none";
    dashboard.style.display = "block";
    user_info.innerHTML = user.email;
  } else {
    console.log("user not logged in");
    auth_container.style.display = "block";
    dashboard.style.display = "none";
    // User is signed out
    // ...
  }
});

logout_btn.addEventListener("click", () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
});

const createUser = () => {
  const email = signup_email.value;
  const password = signup_password.value;
  if (!email || !password) {
    return alert("invalid email/password");
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user, "===> success");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, "===> error");
      // ..
    });
};

const signInUser = async () => {
  const email = signin_email.value;
  const password = signin_password.value;
  if (!email || !password) {
    return alert("invalid email or password");
  }
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
  } catch (err) {
    console.log(err, "error");
  }
};

signup_btn.addEventListener("click", createUser);
signin_btn.addEventListener("click", signInUser);
