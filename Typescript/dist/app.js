"use strict";
const btn = document.querySelector("button");
const sum = (num1, num2) => num1 + num2;
btn.addEventListener("click", () => {
    const num1 = document.getElementById("num1");
    const num2 = document.getElementById("num2");
    alert(sum(Number(num1.value), Number(num2.value)));
});
// const result = sum(value1, value2);
// alert(result);
