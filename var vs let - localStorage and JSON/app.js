// var obj = {
//   name: "Hamza",
//   age: 27,
//   classes: ["web and app"],
//   present: true,
// };
// // console.log(normalObject); 
// // console.log(JSON.stringify(normalObject)); //JSON 
// localStorage.setItem("count", 10);
// // localStorage.removeItem("count");
// localStorage.setItem("user", JSON.stringify(normalObject));
// var user = localStorage.getItem("user");
// console.log(user);
// console.log(JSON.parse(user));

// console.log(x) x is undefined here
// x = 3;
// var x; //x scope is global
// console.log(x);
// if (true) {
//   var y = 50;
// }

// console.log(y);

// function foo() {
//   var value = "abc"; // var scope is function cannot be accessed outside function body
// }

// console.log(value); throw reference error
// console.log(a); // block scope variable cannot be accessed before initialization
// a = 15; // cannot assign value before declaration to block scope variable
// let a = 5;
// // let a = 10; block scope variable cannot be redeclared in same scope

// a = 10; // can re assign after declaration

// console.log(a)

if (true) {
  let value = "xyz"; // cannot be accessed outside curly brackets
  console.log(value);
}
// console.log(value); // throw reference error because value is not available outside of if state;
let value = "abc"; // however can be redeclared in different scope
console.log(value);

// for (var i = 0; i < 5; i++) {
//   console.log(i);
// }
// console.log(i) // var can be accessed out of loop body with last value saved

// for (let j = 0; j < 5; j++) {
//   console.log(j);
// }
// console.log(j); // throw reference error

// if (true) {
//   let z = 6;
//   console.log(z);
//   if (true) {
//     console.log(z, "inner if");
//   }
// }
// if (true) {
//   let z = 6;
//   if (true) {
//     let z = 5;
//     console.log(z);
//   }
//   console.log(z);
// }
