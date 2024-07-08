// class Product {
//   constructor(title, price, quantity) {
//     this.title = title;
//     this.price = price;
//     this.quantity = quantity;
//     console.log("=====>", this);
//   }
//   inStock() {
//     return this.quantity > 0;
//   }
// }

// const product = new Product("keyboard", 200, 0);
// const product2 = new Product("Mouse", 50, 12);
// const product3 = new Product("Mic", 500, 1);

// const obj = {
//     name: 'mouse',
//     foo : function(){
//         console.log("func", this);
//     },
//     fooArrow : ()=> {
//         console.log("func", this);
//     }
// }

// obj.foo();
// obj.fooArr();

class Pet {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  eat() {
    console.log(`${this.name} is eating...`);
  }
}

class Cat extends Pet {}
class Parrot extends Pet {
  constructor(name, breed, flyingHours) {
    super(name, breed);
    this.flyingHours = flyingHours;
  }
}

const cat = new Cat("Dom", "persian");
// cat.eat();
const parrot = new Parrot("Mittoo", "Austrailian", 1);
console.log(cat.flyingHours); // undefined
console.log(parrot.flyingHours);
