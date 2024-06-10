// // const arr = ["a", "b", "c", "d"];

// // arr.forEach(function (element, idx) {
// //   console.log(element, idx);
// // });

// // for (let ele of arr) {
// //   console.log(ele);
// // }
// // for (let ele of "asdfgh") {
// //   console.log(ele);
// // }

// // const obj = {
// //   a: 1,
// //   b: 3,
// //   c: 5,
// // };

// // console.log(Object.keys(obj));
// // console.log(Object.values(obj));
// // console.log(Object.entries(obj));

// /* map is an array method takes callback as argument and call that callback for every element of the array to perform operation and return new array */

// // const arr = [1, 2, 3, 4];
// // const arrCopy = arr.map(function (ele, idx) {
// //   return ++ele;
// // });

// // console.log(arr);
// // console.log(arrCopy);

// const players = [
//   { firstName: "Babar", lastName: "Azam", strikeRate: 88.75 },
//   { firstName: "M.", lastName: "Rizwan", strikeRate: 120.75 },
//   { firstName: "Azam", lastName: "Khan", strikeRate: 0.75 },
//   { firstName: "Usman", lastName: "Khan", strikeRate: -75 },
//   { firstName: "Iftikhar", lastName: "Ahmed", strikeRate: 2.8 },
//   { firstName: "Imad", lastName: "waseem", strikeRate: -120.75 },
// ];

// // const playersName = players.map(function (player, idx) {
// //   return `${player.firstName} ${player.lastName}`;
// // });
// // const playersName = players.map(function (player, idx) {
// //   return `${player.firstName} ${player.lastName}`;
// // });

// // const playerPerformance = players.map(function (player, idx) {
// //   if (player.strikeRate > 100) {
// //     return { performance: "Good", ...player };
// //   } else {
// //     return { performance: "Bad", ...player };
// //   }
// // });

// // console.log(playerPerformance);
// // console.log(players);

// const bestPlayers = players.filter(function (ele, idx) {
//   return ele.strikeRate < 100;
// });

// console.log(bestPlayers);
