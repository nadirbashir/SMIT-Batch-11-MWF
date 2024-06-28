// const obj = {
//   id: 1,
//   title: "Essence Mascara Lash Princess",
//   price: 9.99,
//   tags: ["beauty", "mascara", "sports"],
//   dimensions: {
//     width: 20,
//     height: 14.43,
//     depth: 28.01,
//   },
//   meta: {
//     createdAt: "2024-05-23T08:56:21.618Z",
//     updatedAt: "2024-05-23T08:56:21.618Z",
//     barcode: "9164035109868",
//     qrCode: "https://cdn.dummyjson.com/public/qr-code.png",
//   },
// };
// const {
//   title,
//   dimensions: { width, depth },
//   tags: [, , a],
// } = obj;

// // console.log(title, width, depth);
// // console.log(a);

// const str = "title";
// const strsinglequote = "${width}";
// const templateLiteral = "${width}";

// // turnary syntax condition ? statement : statement (?) represent if. (:) represent else
// const turnary = `${
//   width > 20
//     ? "out of range"
//     : width < 20
//     ? width
//     : width === 20
//     ? "barabar hai"
//     : "kuch bhi"
// }`;
// let range;
// if (width > 20) {
//   range = width;
// } else {
//   range = "out of range";
// }

// console.log(str, strsinglequote, templateLiteral);
// console.log(range, turnary);

// function printSum() {
//   console.log(2 + 2);
// }

// const arrowFunc = () => {
//   console.log(2 + 2);
// }
// console.log(typeof func);

// function printSum() {
//   return 2 + 2;
// }
// // console.log(typeof printSum);

// const arrowFunc = () => { // EQUIVALANT SHORT SYNTAX IS const arrowFunc = () =>  2 + 2;
//   //Further short equivalant const arrowFunc = _ =>  2 + 2;
//   return 2 + 2;
// };

// function printSum(a) {
//   return a + 3;
// }

// const arrowFunc = a => a + 3;

// function printSum(a,b) {
//   return a + b;
// }

// const arrowFunc = (a,b) => a + b;

// alert("normal return " + printSum(4,7));
// alert("arrow return " + arrowFunc(4,7));

// const list = document.getElementById("list");

// function getSingleProduct(productId) {
//   fetch(`https://dummyjson.com/products/${productId}`)
//     .then(function (res) {
//       console.log(res);
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       appendToDOM(data.products);
//     })
//     .catch(function (err) {
//       //   alert(err); // execute when API promise rejected
//     });
// }

// window.addEventListener("load", function (evt) {
//   fetch("https://dummyjson.com/products")
//     .then(function (res) {
//       console.log(res);
//       return res.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       appendToDOM(data.products);
//     })
//     .catch(function (err) {
//       //   alert(err); // execute when API promise rejected
//     });
// });

// function appendToDOM(products) {
//   for (let product of products) {
//     let card = `<div class="card" style="width: 18rem;">
//         <img src=${product.thumbnail} class="card-img-top" alt="...">
//         <div class="card-body">
//           <h5 class="card-title">${product.title}</h5>
//           <p class="card-text">Brand: ${product.brand}</p>
//         </div>
//         <ul class="list-group list-group-flush">
//           <li class="list-group-item">Price: ${product.price}</li>
//           <li class="list-group-item">description: ${product.description}</li>
//           <li class="list-group-item"><button onclick="getSingleProduct(${product.id})">show details</button></li>
//         </ul>
//       </div>`;
//     list.innerHTML += card;
//   }
// }

// //POST REQUEST

// // fetch("https://dummyjson.com/products",{
// //     method: "POST",
// //     body: {
// //         // data to be sent to server
// //     }

// // })

// // fetch(`https://dummyjson.com/products/${id}`,{
// //     method: "PATCH",
// //     body:{
// //         //data to be updated
// //     }
// // })

// // DELETE REQUEST
// // fetch(`https://dummyjson.com/products/:id`,{
// // fetch(`https://dummyjson.com/products/${id}`,{
// //     method: "DELETE",
// // })

// function calculateDiscount(price = 1000, percentage = 20) { // Default parameters
//   const discount = price * (percentage / 100);
//   return price - discount;
// }

// const arrowFunc = (a, b = 20) => a + b;

// console.log("after discount " + calculateDiscount(1000));
// console.log("arrow return " + arrowFunc(4));\

// function(...) rest Parameters
// function sumAll(...params) {
//   let sum = 0;
//   // for (let i = 0; i < params.length; i++) {
//   //   sum = sum + params[i];
//   // }
//   // for (let value of params) {
//   //   sum = sum + value;
//   // }
//   params.forEach(function (item, index) {
//     sum = sum + item;
//     console.log(item, ",,,", index);
//   });
//   console.log(sum);
// }

// const arrowFunc = (a, b = 20) => a + b;

// sumAll(1, 2, 3, 50, 52, 3482, 23948);

const filterSingleDigit = (...params) => {
  const filteredValues = params.filter((item, idx) => item > 10);
  console.log(filteredValues);
};
filterSingleDigit(1, 2, 3, 50, 52, 3482, 23948);

//{...}[...] spread used for only array and objects
// const user = {
//   name: "salman",
//   age: "25",
//   hobbies: ["painting", "sports"],
//   contactInfo: {
//     phone: "348729",
//     email: "a@a.com",
//     address: {
//       houseNo: 573,
//       city: "Karachi",
//       country: "pakistan",
//     },
//   },
// };

// const userCopy = {
//   ...user,
//   contactInfo: { ...user.contactInfo },
//   hobbies: [...user.hobbies],
// };

// userCopy.hobbies[0] = "Walking";

// console.log("user", user);
// console.log("userCopy", userCopy);
