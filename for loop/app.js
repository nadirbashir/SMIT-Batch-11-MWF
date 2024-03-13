// // for(initialization; condition; increment/decrement){

// // }
// // var i;
// // for (i = 0; i < 10; ++i) {
// //   console.log(i);
// // }

// // for (i = 10; i >= 0; i--) {
// //   console.log(i);
// // }
// // for (i = 9; i <= 10; i--) {
// //   console.log(i);
// // }

// // for (i = 2; i <= 40; i *= 2) {
// //   console.log(i);
// // }
// var pslTeams = [
//   "karachi kings",
//   "lahore qalandar",
//   "multan sultan",
//   "Islamabad united",
//   "quetta gladiators",
// ];
// var userInp = prompt("Enter your city name");
// var i;
// var flag = false;
// for (i = 0; i < pslTeams.length; i++) {
//   if (pslTeams[i].includes(userInp)) {
//     flag = true;
//     alert("your city participated as " + pslTeams[i]);
//     // break;
//   }
//   console.log(pslTeams[i]);
// }
// if (!flag) {
//   alert("your city not qualified for psl");
// }
