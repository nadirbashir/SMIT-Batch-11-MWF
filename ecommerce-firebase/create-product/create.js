import {
  ref,
  storage,
  uploadBytes,
  getDownloadURL,
  addDoc,
  db,
  collection,
} from "../utils/firebase-config.js";

const product_form = document.getElementById("product_form");

product_form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
  const title = e.srcElement[0].value;
  const description = e.srcElement[1].value;
  const price = e.srcElement[2].value;
  const picture = e.srcElement[3].files[0];
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
