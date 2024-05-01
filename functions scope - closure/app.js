// function callAlert(props, value) {
//   console.log(props.name, props.phone);

// for (let i = 0; i < value.length; i++) {
//   const element = value[i];
//   console.log(element);
// }
// }

// function sum(num1, num2) {
//   console.log(num1 + num2);
// }

// function square(num) {
//   return num * num;
//   if (num > 5) {  // function can only return once, after return code will not run
//     console.log();
//   }
// }
// console.log(square(3));
// console.log(square(4));
// alert(square(5));

// var products = [
//   { name: "banana", price: 20, isDisCounted: true },
//   { name: "apple", price: 40, isDisCounted: true },
//   { name: "mango", price: 50, isDisCounted: false },
// ];
// function applyDiscount(price) {
//   var discount = (price * 50) / 100;
//   return discount;
// }

// for (var i = 0; i < products.length; i++) {
//   if (products[i].isDisCounted) {
//     document.writeln(
//       "<p>" +
//         products[i].name +
//         ": was <s>" +
//         products[i].price +
//         "</s>" +
//         "now" +
//         applyDiscount(products[i].price),
//       "</p>"
//     );
//   } else {
//     document.writeln(
//       "<p>" + products[i].name + ": " + products[i].price,
//       "</p> "
//     );
//   }
// }

// var globalVariable = "global scope variable";

// function foo() {
//   var local = "local function scope variable";
//   if (true) {
//     var value = 5;
//     console.log(local);
//     console.log(globalVariable);
//   }
//   console.log(value);

//   if (false) {
//     var hoistedValue = 5;
//   }
//   console.log(hoistedValue); // not throw error because hoisted, declared in memory in execution time
// }
// // console.log(local); // this will throw reference error;
// foo();

// function displaySum(num1, num2, callbackFunc) {
//   var sum = num1 + num2;
//   callbackFunc(sum);
// }

function myCallback(sum) {
  document.write("this is a callback function returning sum", sum());
}

// foo(myCallback, 5);

// setTimeout(function () {
//   console.log("delayed log");
// }, 5000);

// var interval = setInterval(function () {
//   console.log("interval running");
// }, 1000);

// setTimeout(function () {
//   clearInterval(interval);
//   console.log("timer stoped");
// }, 5000);

// function outerFunc() {
//   function displayName() {
//     console.log("Hello salman");
//   }
//   displayName();
// }
// function outerFunc() {
//   var value = 0;
//   //lexical scope
//   return function add(x) {
//     value += x;
//     console.log(value);
//   };
// }

// var addValue = outerFunc();

// addValue(10);
// addValue(20);

// var subtractValue = outerFunc();

// subtractValue(-5);
// addValue(15);

// var dayOfWk = prompt();

// if (dayOfWk === "Sat" || dayOfWk === "Sun") {
//   alert("Whoopee!");
// } else if (dayOfWk === "Fri") {
//   alert("yayyy!");
// } else {
//   alert("uhoh!");
// }

// switch (dayOfWk) {
//   case "Sun":
//   case "Sat":
//     alert("whoopee!");
//     break;
//   case "Fri":
//     alert("yayyy!");
//     break;
//   default:
//     alert("uhoh");
// }

// var i = 5;
// do {
//   console.log(i); // always run once even condition is false
//   i++;
// } while (i < 4);

function greet() {
  alert("hello world");
}

function changeBackground(element) {
  element.style.width = "100px";
  element.style.height = "100px";
  element.style.backgroundColor = "#0000ff";
  element.style.color = "#fff";
}
function swapImage(element, city) {
  element.src = "./images/karachi.jpg";
  if (city === "karachi") {
    return;
  }
  element.src = "./images/lahore.jpg";
}
