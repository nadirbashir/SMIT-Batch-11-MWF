"use strict";
// const btn = document.querySelector("button")!;
// const sum = (num1: number, num2: number) => num1 + num2;
// btn.addEventListener("click", () => {
//   const num1 = document.getElementById("num1")! as HTMLInputElement;
//   const num2 = document.getElementById("num2")! as HTMLInputElement;
//   alert(sum(Number(num1.value), Number(num2.value)));
// });
// // Data Types
// // Number: number
// // String: string
// // Boolean: boolean
// // Undefined: undefined
// // Null: null
// // object / {}
// // []
// // string[]
// let num = 1;
// let number = "12";
// num = 90;
// number = "anc";
// let firstName: string;
// firstName = "Nadir";
// const fruits: string[] = [];
// fruits.push("apple", "mango");
// type electricAppliance = "fan" | "Ac";
// let arr: electricAppliance[] = ["fan", "Ac"];
// type Person = {
//   name: string;
//   age: number;
//   hobbies: string[];
//   address?: string;
// };
// const person: Person = {
//   name: "Hamza",
//   age: 23,
//   hobbies: [ ],
// };
// person.address = "Gulshan";
// type Electric = {
//   name: string;
//   watt: number;
//   price: number;
// };
// type Vehicle = {
//   title: string;
//   price: number;
//   colors: string[];
//   transmission: "auto" | "manual";
// };
// type Product = Electric | Vehicle;
// type Product = Electric & Vehicle;
// const fan: Product = {
//   name: "fan",
//   price: 200,
//   watt: 1000,
//   colors: ["black", "white"],
//   transmition: "auto"
// }
// const logTitle = (product: Product) => {
//   if ("name" in product) {
//     // type guard
//     console.log(product.name);
//   }
//   if ("title" in product) {
//     // type guard
//     console.log(product.title);
//   }
// };
// logTitle({ name: "bulb", price: 100, watt: 20 });
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
// const merge = <T,U>(obj1: T, obj2: U) => {
//   return {...obj1,  ...obj2}
// }
// merge({app: "name", b: 1}, {d: "name", m: true})
class Species {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
// class Species { // short syntax
//   constructor(public id: number, public name: string, public age: number) {}
// }
// class Animal extends Species implements IMammal {
//   readonly favouriteFood = "grass";
//   runningSpeed;
//   constructor(id: number, name: string, age: number, runningSpeed: string) {
//     super(id, name, age);
//     this.runningSpeed = runningSpeed;
//   }
//   isEating(): void {
//     console.log(this.name + " is eating " + this.favouriteFood);
//   }
// }
// class Bird extends Species {
//   readonly favouriteFood = "seeds";
//   private flyingSpeed;
//   readonly legs = 2;
//   constructor(id: number, name: string, age: number, flyingSpeed: string) {
//     super(id, name, age);
//     this.flyingSpeed = flyingSpeed;
//   }
//   isEating(): void {
//     console.log(this.name + " is eating " + this.favouriteFood);
//   }
// }
// const bird = new Bird(1, "Parrot", 2, "20Km/hr");
// console.log(bird.legs);
// bird.isEating();
// type Mammal = {
//   id: number;
//   name: string;
//   age: number;
//   runningSpeed: string;
// };
// interface IMammal {
//   id: number;
//   name: string;
//   age: number;
//   runningSpeed: string;
// }
// const obj: IMammal = {
//   id: 3,
//   name: "lion",
//   age: 10,
//   runningSpeed: "50 km/ hr",
// };
// console.log(obj);
