// for (var i = 0; i <= 5; i++) {
//   for (var j = 10; j < 15; j++) {
//     console.log(i, j);
//   }
// }

// variable declaration
// while(condition){
// code to repeat
//     increment; //optional
// }

// var i = 0;
// while (i < 5) {
//   alert(i);
//   i++;
// }

var targetNum = Math.floor(Math.random() * 10) + 1;

var userInp = parseInt(prompt("Guess the number"));
if (!userInp) {
  alert("invalid input");
}
while (userInp != targetNum) {
  userInp = parseInt(prompt("Wrong Guess the number again"));
  if (userInp === targetNum) {
    alert("congrats you win a Rooh afza");
    break;
  }
  console.log(userInp, targetNum);
}
