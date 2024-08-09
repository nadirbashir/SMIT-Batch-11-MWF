import {
  app,
  auth,
  collection,
  db,
  doc,
  getDoc,
  getDocs,
  onAuthStateChanged,
  signOut,
} from "./utils/firebase-config.js";

const getAllProducts = async () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const products_list = document.getElementById("products_list");
  const querySnapshot = await getDocs(collection(db, "products"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    const { id, title, description, price, picture, createdBy } = doc.data();
    products_list.innerHTML += `<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 h-[400px]">
    <a href="#">
        <img class="rounded-t-lg" src="${picture}" alt="product" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${title}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${description}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">${price}</p>
       
        <a href="./update-product/index.html?p=${doc.id}" class="${
      createdBy === currentUser.uid ? "block" : "hidden"
    } inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Edit
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>`;
  });
};

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    // loader display block
    getDoc(doc(db, "users", uid))
      .then((snapshot) => {
        const userData = snapshot.data();
        const status = document.getElementById("status");
        const phone = document.getElementById("phone");
        status.innerHTML = userData?.firstName || "";
        phone.innerHTML = userData?.phone || "";
        localStorage.setItem(
          "currentUser",
          JSON.stringify({ uid, firstName: userData?.firstName })
        );
        getAllProducts();
      })
      .catch((err) => {
        console.log(err);
      });
    //loader display none
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
      localStorage.removeItem("currentUser");
    })
    .catch((error) => {
      // An error happened.
    });
});
