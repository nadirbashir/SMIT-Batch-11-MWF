import {
  ref,
  storage,
  uploadBytes,
  getDownloadURL,
  addDoc,
  db,
  collection,
  getDoc,
  doc,
} from "../utils/firebase-config.js";

const product_form = document.getElementById("product_form");
const searchParams = new URLSearchParams(window.location.href);
let id;
for (const value of searchParams.values()) {
  id = value;
}
let productData;
getDoc(doc(db, "products", id)).then((snapshot) => {
  productData = snapshot.data();
  console.log(productData);
});
// const title = document.getElementById();
// const description = document.getElementById();
// const price = document.getElementById();
// const file = document.getElementById();
product_form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  const button = e.srcElement[4];
  const loader = document.getElementById("loader");
  console.log(picture);
  if (!picture) {
    return alert("picture is required");
  }
  button.setAttribute("disabled", "true");
  loader.style.display = "block";

  const storageRef = ref(storage, picture.name);
  uploadBytes(storageRef, picture).then((snapshot) => {
    getDownloadURL(storageRef).then((url) => {
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      const productData = {
        title,
        description,
        price,
        picture: url,
        createdBy: currentUser.uid,
      };
      addDoc(collection(db, "products"), productData).then((snapshot) => {
        // loader display none
        window.location.href = "../index.html";
      });
    });
    button.removeAttribute("disabled");
    loader.style.display = "none";
  });

  //   const productData = {
  //     email,
  //     password,
  //     firstName,
  //     lastName,
  //     phone,
  //     company,
  //   };
  //   console.log(userData);
});
