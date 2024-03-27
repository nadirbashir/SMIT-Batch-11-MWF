// function greeting() {
//   console.log("Assalam Walaikum");
// }

// greeting();

// function sum() {
//   var value1 = 5,
//     value2 = 4;
//   console.log(value1 + value2);
// }

// function sum(value1, value2) {  // values to be passed to function are called parameter
//   console.log(value1 + value2);
// }

// function sum(value1, value2) {
//   var ans = value1 + value2;
//   console.log(ans);
//   return ans;

//   console.log("hello");
// }
// sum(3, 12); function call with argument
// var foo = sum(3, 12);

// console.log("sum = " + foo);

function sum(value1, value2) {
  var ans = value1 + value2;
  return ans;
}
function multiply(value1, value2) {
  var ans = value1 * value2;
  return ans;
}
function divide(value1, value2) {
  var ans = value1 / value2;
  return ans;
}
function substract(value1, value2) {
  var ans = value1 - value2;
  return ans;
}

function calculate(val1, val2, operator) {
  if (!parseInt(val1) || !parseInt(val2)) {
    alert("invalid input numbers");
    return;
  }

  if (operator === "+") {
    return sum(val1, val2);
  } else if (operator === "-") {
    return substract(val1, val2);
  } else if (operator === "*") {
    return multiply(val1, val2);
  } else if (operator === "/") {
    return divide(val1, val2);
  } else {
    alert("can not perform operation");
    return;
  }
}

// calculate(10, 2, " ");

console.log(calculate("10", 2, "+"));
console.log(calculate(10, 2, "*"));
console.log(calculate(10, 2, "/"));
console.log(calculate(10, 2, "-"));
