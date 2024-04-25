// var days = ["sun", "mon", "tue", "wed", "thur", "fri", "sat"];
// var date = new Date();
// console.log(date.getDate()); // 1 - 31
// console.log(date.getMonth()); // 0 - 11 where 0 is january
// console.log(date.getFullYear()); // 2024
// console.log(date.getDay()); // 0 - 6 where 0 sunday
// console.log(date.getSeconds()); // 0 - 59
// console.log(date.getMilliseconds()); // 0 - 999
// console.log(date.getHours()); // 0 - 23
// console.log(date.getTime()); // milliseconds from jan, 1 1970

// console.log(days[date.getDay()]);
// date.setFullYear(2025);
// console.log(date);
// date.setMonth(0);
// console.log(date);

// var iccWorldCupDate = new Date("oct 15, 2027");
// var currentDate = new Date();

// var worldCupMilli = iccWorldCupDate.getTime();
// var currentMilli = currentDate.getTime();
// var diff = worldCupMilli - currentMilli;
// var secondsLeft = diff / 1000;
// var minutesLeft = diff / 1000 / 60;
// var hoursLeft = diff / 1000 / 60 / 60;
// var daysLeft = diff / 1000 / 60 / 60 / 24;

// console.log(daysLeft);

// function

// function greet() {
//   console.log("Assalam walaikum");
// }

// greet();
// greet();
// greet();

// function greet(name) {
//   console.log("Assalam walaikum ", name);
// }

// greet("salman");
// greet("Azfar");

function fullName(firstName, lastName) {
  console.log(firstName + " " + lastName);
}

fullName("Fakhar", "Zaman");

// function getDaysLeft(date) {
//   var futureDate = new Date(date);
//   var currentDate = new Date();

//   var futureMilli = futureDate.getTime();
//   var currentMilli = currentDate.getTime();
//   var diff = futureMilli - currentMilli;
//   var daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
//   console.log(daysLeft);
// }

// getDaysLeft("jan 01, 2025");
// getDaysLeft("may 01, 2024");
