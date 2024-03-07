var password = prompt("Enter password");

if (password.indexOf(" ") !== -1) {
  console.log("password can not contain spaces");
} else {
  if (password.indexOf(".") === -1) {
    console.log("password must contain .");
  }
  if (password.length < 8) {
    console.log("password must contain atleast 8 characters");
  } else {
    console.log("correct password");
  }
}

// if (password.length >= 8) {
//   if (password.indexOf(" ") !== -1) {
//     console.log("password can not contain spaces");
//   } else {
//     console.log("correct");
//   }
// } else {
//   console.log("password must contain atleast 8 characters");
// }

//falsy values

//false
// 0
// '' | ""
// null
// undefined
// NaN

// if (false) {
//   console.log("truthy value");
// } else {
//   console.log("falsy value");
// }
// if (0) {
//   console.log("truthy value");
// } else {
//   console.log("falsy value");
// }

// if (undefined) {
//   console.log("truthy value");
// } else {
//   console.log("falsy value");
// }
// if (NaN) {
//   console.log("truthy value");
// } else {
//   console.log("falsy value");
// }
// if (null) {
//   console.log("truthy value");
// } else {
//   console.log("falsy value");
// }

// var value = +prompt("Enter value");
// console.log(value);
// if (value) {
//   console.log(value++);
// } else {
//   console.log("invalid input");
// }
// if (!value) {
//   console.log("invalid input");
// } else {
//   console.log(value++);
// }
