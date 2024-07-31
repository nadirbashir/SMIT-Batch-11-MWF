import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-storage.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const db = getFirestore(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);
const productsCollection = collection(db, "products");

console.log(storage);

const fileInput = document.getElementById("file-inp");
const save = document.getElementById("save");

save.addEventListener("click", () => {
  console.log(fileInput.files);
  if (!fileInput.files.length) {
    return alert("please choose a file to upload");
  }
//   if (fileInput.files[0].size > 1024) {
//     return alert("image size must be less than 1kb");
//   }
  const storageRef = ref(storage, fileInput.files[0].name);
  uploadBytes(storageRef, fileInput.files[0])
    .then((snapshot) => {
      getDownloadURL(storageRef).then((url) => {
        addDoc(productsCollection, {
          title: "Roses",
          price: 30,
          descript: "Roses are fresh",
          image: url,
        });
        console.log(url, "-->");
      });
    })
    .catch((err) => {
      console.log(err, "======");
    });
});
