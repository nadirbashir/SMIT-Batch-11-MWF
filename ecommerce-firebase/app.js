import {
  app,
  auth,
  db,
  onAuthStateChanged,
  signOut,
} from "./utils/firebase-config.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    console.log(uid, "===> loged in");
  } else {
    window.location.href = "./auth/signin/index.html";
  }
});

const logout_btn = document.getElementById("logout");

logout_btn.addEventListener("click", function () {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      // An error happened.
    });
});
