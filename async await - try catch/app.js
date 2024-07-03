// let username = "stylish_bacha";
// let age = 25;
// let address = "wq8kasjlkaj";

// const user = {
//   username: username,
//   age: age,
//   address: address,
// };
// const user1 = {
//   username,
//   age,
//   address,
//   hobbies: ['football']
// };
// console.log(user, user1);

// const fruits = ["apple", "banana", "mango", "orange", "grapes"];

// const fruitsPrice = fruits.map((fruitName, idx) => ({
//   fruitName,
//   price: 20 + idx,
// }));

// const filteredFruits = fruitsPrice.filter((fruit, idx) => fruit.price > 22);
// console.log(filteredFruits);
// console.log(fruitsPrice);
// console.log(fruits);

const list = document.getElementById("list");

async function getSingleProduct(productId) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${productId}`);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("----->", err);
  }
  // .then(function (res) {
  //   console.log(res);
  //   return res.json();
  // })
  // .then(function (data) {
  //   console.log(data);
  //   appendToDOM(data.products);
  // })
  // .catch(function (err) {
  //   //   alert(err); // execute when API promise rejected
  // });
}

window.addEventListener("load", async (evt) => {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    appendToDOM(data.products);
  } catch (err) {
    console.log("=====>?>>", err);
  }

  // .then(function (res) {
  //   console.log(res);
  //   return res.json();
  // })
  // .then(function (data) {
  //   console.log(data);
  //   appendToDOM(data.products);
  // })
  // .catch(function (err) {
  //   //   alert(err); // execute when API promise rejected
  // });
});

const appendToDOM = (products) => {
  let p;
  for (let product of products) {
    let card = `<div class="card" style="width: 18rem;">
        <img src=${product.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text">Brand: ${product.brand}</p>
          <p class="card-text">Brand: ${p?.brand}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Price: ${product.price}</li>
          <li class="list-group-item">description: ${product.description}</li>
          <li class="list-group-item"><button onclick="getSingleProduct(${product.id})">show details</button></li>
        </ul>
      </div>`;
    list.innerHTML += card;
  }
};

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
