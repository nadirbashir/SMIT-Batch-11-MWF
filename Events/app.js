// var globalVariable = "foo";

// function foo() {
//   var local = "hello";
//   console.log(local);
//   console.log(globalVariable, "in function");
// }

// foo();
// console.log(globalVariable, "outer scope");
// console.log(local);

// function greet(elem) {
//   // alert("Assalam walaikum");
//   // console.log(elem);
//   console.dir(elem);
// }
// function swap(elem) {
//   elem.src = "./images/big.jpg";
// }
// function restore(elem) {
//   elem.src = "./images/banner.webp";
// }
// function resize(elem, size) {
//   console.dir(elem);
//   if (size === "big") {
//     elem.width = 300;
//     elem.height = 300;
//   } else {
//     elem.width = 100;
//     elem.height = 100;
//   }
// }
function swapImage() {
  // console.log(document);
  // console.dir(document);
  document.getElementById("banner").src = "./images/big.jpg";
  //  var elem = document.getElementById('banner');
}
