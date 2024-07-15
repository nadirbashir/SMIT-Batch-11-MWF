const btn = document.querySelector("button")!;

const sum = (num1: number, num2: number) => num1 + num2;

btn.addEventListener("click", () => {
  const num1 = document.getElementById("num1")! as HTMLInputElement;
  const num2 = document.getElementById("num2")! as HTMLInputElement;
  alert(sum(Number(num1.value), Number(num2.value)));
});

// Data Types
// Number: number
// String: string
// Boolean: boolean
// Undefined: undefined
// Null: null

let num = 1;
let number = "12";

num = 90;
number = "anc";

let firstName: string;

firstName = "Nadir";

const fruits: string[] = [];

fruits.push("apple", "mango");

type electricAppliance = "fan" | "Ac";

let arr: electricAppliance[] = ["fan", "Ac"];

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  address?: string;
};

const person: Person = {
  name: "Hamza",
  age: 23,
  hobbies: [ ],
};

person.address = "Gulshan";
