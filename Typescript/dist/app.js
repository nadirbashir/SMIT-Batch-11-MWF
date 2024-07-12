"use strict";
const sum = (num1, num2) => {
    return num1 + num2;
};
const showSum = () => {
    const num1 = document.getElementById("num1");
    const value1 = Number(num1.value);
    const num2 = document.getElementById("num2");
    const value2 = Number(num2.value);
    const result = sum(value1, value2);
    alert(result);
};
