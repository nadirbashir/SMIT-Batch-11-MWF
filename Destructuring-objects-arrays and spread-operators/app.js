// const arr = [];

// arr[0] = "apple";

// arr.push("mango");
// arr.unshift("banana");
// arr.splice(3, 0, "cherry", "orange");
// // arr = ["tomato"]; // throw error cannot re assign to const
// arr.pop();
// arr.shift();
// arr.splice(1, 1);
// console.log(arr);

// const obj = {
//   firstName: "Nadir",
//   LastName: "Bashir",
//   email: "nadir@gmail.com",
// };
// // obj = { phone: "12313" }; // throw error cannot re assign to const
// obj["phone"] = "030000000";
// obj.hobbies = ["Football", "painting"];
// obj.email = "a@a.com";

// delete obj.phone;
// console.log(obj);

/* Destructuring objects and arrays */
// const user = {
//   firstName: "Nadir",
//   LastName: "Bashir",
//   firstName: "hello",
//   email: "nadir@gmail.com",
//   hobbies: ["Football", "painting"],
//   address: {
//     country: "Pakistan",
//     city: "Karachi",
//     street: "abc",
//     house: "123",
//     zipCode: "73700",
//   },
// };

// // console.log(`${user.firstName} ${user.LastName} , ${user.address.city}`);

// const {
//   firstName,
//   LastName,
//   address: { city, zipCode },
//   hobbies: [firstHobby],
// } = user;

// console.log(`${firstName} ${LastName}, ${city}, favorite: ${firstHobby}`);

// const fruits = ["apple", "mango", "banana", "orange", { inStock: true }];

// const [a, b, , , { inStock }] = fruits;

// console.log(a, b, inStock);

// Spread Operators

// const user = {
//   firstName: "Nadir",
//   LastName: "Bashir",
//   firstName: "hello",
//   email: "nadir@gmail.com",
// };

// const userCopy = user; // donot do this will point to user object reference any change in userCopy also effect the user object
// console.log(user === userCopy);  log true because both user and user copy has same reference
// userCopy.firstName = "hi";
// console.log("user", user);
// console.log("user copy", userCopy);

// const userCopy = { ...user };
// console.log(user === userCopy); //log false because both user and user copy has different reference
// console.log("user", user);
// console.log("user copy", userCopy);

// spread operators Array

// const colors = ["Red", "Green", "Blue"];

// const colorsCopy = [...colors];

// console.log(colors);
// console.log(colorsCopy);

const user = {
  firstName: "Nadir",
  LastName: "Bashir",
  firstName: "hello",
  email: "nadir@gmail.com",
  hobbies: ["Football", "painting"],
  address: {
    country: "Pakistan",
    city: "Karachi",
    street: { streetName: "abc", streetNumber: 123 },
    house: "123",
    zipCode: "73700",
  },
};

const userCopy = { ...user };

console.log(user);
console.log(userCopy);

userCopy.address.country = "hi";
