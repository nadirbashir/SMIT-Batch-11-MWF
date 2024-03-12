// var attendees = [];

// attendees.push("salman");
// attendees.push("Ahmed", "Afzal");
// attendees.push("Fakhir");
// console.log(attendees);
// console.log(attendees.length);
// attendees.pop();

// attendees.unshift("Ubaid", "Rizwan");
// attendees.shift();
// console.log(attendees);
// console.log(attendees.length);

// var days = ["Monday", "Tuesday", "Saturday"];

// days.splice(2, 0, "wednesday");
// days.splice(3, 0, "Thursday", "friday", true, undefined);

// days.splice(5, 2);
// days.splice(2); // start deleting elements till last element
// days.splice(days.length - 3, 2);
// console.log(days);

// var birds = ["Macaw", "Eagle", "Hen", "Ostrich", "Peacok"];

// var copyAll = birds.slice();
// var copyFromCertainIndex = birds.slice(2);
// var copyMiddleElem = birds.slice(1, 4);
// var copyFromLast = birds.slice(-2);

// console.log(birds, copyAll);
// console.log(birds, copyMiddleElem);
// console.log(birds, copyFromLast);

// var Fish = ["King Fish", "Queen Fish", "Dolphin"];
// var pets = birds.concat(Fish);

// console.log(pets.includes("Dolphin"), birds);

//Non Premitive data types
// Arrays
// Objects

var player = {
  firstName: "Fakhar",
  lastName: "Zaman",
  age: 25,
  "phone#": "090078601",
  1: "anything",
  134: "anything",
};

console.log(player);
// console.log(player.firstName);

var fullName = player.firstName + " " + player.lastName;

// // console.log(fullName);
// console.log(player["phone#"]);

// // console.log(player["1"]);

// var prop = 134;

// console.log(player[prop]);

// player.age = 30;

// console.log(player);
