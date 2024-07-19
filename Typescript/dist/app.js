"use strict";
// const btn = document.querySelector("button")!;
// type Product = Electric & Vehicle;
// const fan: Product = {
//   name: "fan",
//   price: 200,
//   watt: 1000,
//   colors: ["black", "white"],
//   transmition: "auto"
// }
const logTitle = (product) => {
    if ("name" in product) {
        // type guard
        console.log(product.name);
    }
    if ("title" in product) {
        // type guard
        console.log(product.title);
    }
};
logTitle({ name: "bulb", price: 100, watt: 20 });
// let userRole = "student";
// enum ROLE {
//   admin = "admin",
//   student = "student",
//   teacher = "teacher",
// }
// if (userRole === ROLE.admin) {
//   alert("hello");
// }
// type FuncType = (num1: number, num2: number) => number;
// const sum: FuncType = (num1, num2) => {
//   return num1 + num2;
// };
// type CB = (num1: number, num2: number) => void;
// const sum = (num1: number, num2: number, cb: CB) => {
//   cb(num1, num2);
// };
// sum(3, 5, (num1, num2) => {
//   console.log(num1 + num2);
// });
const merge = (obj1, obj2) => {
    return Object.assign(Object.assign({}, obj1), obj2);
};
merge({ a: "name", b: 1 }, { d: "name", m: true });
