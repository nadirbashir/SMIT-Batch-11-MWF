import {
  app,
  auth,
  db,
  doc,
  getDoc,
  onAuthStateChanged,
  signOut,
} from "./utils/firebase-config.js";

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    getDoc(doc(db, "users", uid))
      .then((snapshot) => {
        const userData = snapshot.data();
        const status = document.getElementById("status");
        const phone = document.getElementById("phone");
        status.innerHTML = userData.firstName;
        phone.innerHTML = userData.phone;
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ uid, firstName: userData.firstName })
        );
      })
      .catch((err) => {
        console.log(err);
      });
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
