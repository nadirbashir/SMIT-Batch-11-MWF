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

function printSum(a,b) {
  return a + b;
}

const arrowFunc = (a,b) => a + b;

alert("normal return " + printSum(4,7));
alert("arrow return " + arrowFunc(4,7));

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
