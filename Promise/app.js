// setTimeout(function () {
//   console.log("async");
// }, 1000);

// const myPromise = new Promise(function (resolve, reject) {
//   if (false) {
//     resolve("data");
//   } else {
//     reject("rejected");
//   }
// });

// myPromise
//   .then(function (res) {
//     console.log(res, "---->");
//   })
//   .catch(function (err) {
//     console.log(err, "=====>");
//   });

// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve("res data");
//   }, 3000);
// });

// console.log(promise);
// promise.then(function (res) {
//   console.log(res);
//   console.log(promise);
// });

//API Request Methods

//GET
//POST
//PUT
//PATCH
//DELETE

fetch("https://dummyjson.com/produts?limit=100", {
  method: "GET",
})
  .then(function (res) {
    console.log(res);
    return res.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err, "----->");
  });
