// comparison operators

// ==
// ===
// >
// <
// <=
// >=
// !==

// if (false) {
//   console.log("hello");
// }
// console.log("====>");
// if (true) {
//   console.log("world");
// }

// var product = prompt("Enter product");

// if (product === "biryani") {
//   console.log("Available");
// }
// if (product !== "biryani") {
//   console.log("sorry only biryani is available");
// }

// logical operators

// &&  and logical operator
// ||  OR  logical  operator

// console.log(true && true); // true
// console.log(true && false); // false
// console.log(false && true); // false
// console.log(false && false); // false
// console.log(true && false || false);
// console.log(false || true && false);

// var age = +prompt("Enter your age");

// if (age <= 17) {
//   console.log("Ticket price Rs. 5");
// }
// if (age >= 18 && age < 50) {
//   console.log("Ticket price Rs. 50");
// }
// if (age >= 50) {
//   console.log("free entry");
// }

// simple calculator

var valueOne = +prompt("Enter value one");
var valueTwo = +prompt("Enter value two");
var operator = prompt("Enter arithmetic operation");
// if (
//   operator === "+" ||
//   operator === "-" ||
//   operator === "*" ||
//   operator === "/"
// ) {
//   console.log("conditional block is running");
//   if (operator === "+") {
//     console.log(valueOne + valueTwo);
//   }
//   if (operator === "-") {
//     console.log(valueOne - valueTwo);
//   }
//   if (operator === "*") {
//     console.log(valueOne * valueTwo);
//   }
//   if (operator === "/") {
//     console.log(valueOne / valueTwo);
//   }
// } else {
//   alert("invalid operator, please use + - * /");
// }

// Note: else  and else if must be used with if statement

if (
  operator === "+" ||
  operator === "-" ||
  operator === "*" ||
  operator === "/"
) {
  console.log("conditional block is running");
  if (operator === "+") {
    console.log(valueOne + valueTwo);
  } else if (operator === "-") {
    console.log(valueOne - valueTwo);
  } else if (operator === "*") {
    console.log(valueOne * valueTwo);
  } else if (operator === "/") {
    console.log(valueOne / valueTwo);
  }
} else {
  alert("invalid operator, please use + - * /");
}
