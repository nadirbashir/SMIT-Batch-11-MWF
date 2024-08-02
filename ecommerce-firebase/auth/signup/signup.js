import {
  auth,
  db,
  addDoc,
  collection,
  createUserWithEmailAndPassword,
} from "../../utils/firebase-config.js";

const singup_form = document.getElementById("singup_form");

singup_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = e.srcElement[0].value;
  const password = e.srcElement[1].value;
  const confirmPassword = e.srcElement[2].value;
  const firstName = e.srcElement[3].value;
  const lastName = e.srcElement[4].value;
  const phone = e.srcElement[5].value;
  const company = e.srcElement[6].value;

  const userData = {
    email,
    password,
    firstName,
    lastName,
    phone,
    company,
  };
  console.log(userData);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      addDoc(collection(db, "users"), userData).then((userRef) => {
        window.location.href = "../../index.html";
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});
