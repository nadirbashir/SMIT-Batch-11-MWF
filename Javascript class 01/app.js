alert('Hello Javascript');

/* Primitive Data Types
 Number
 String
 Boolean
 Null
 Undefined
*/

// var my foo //illegal cannot use all special characters except $ and _
// var my.foo //illegal
// var 2myfoo //illegal cannot start with number
// var var = 'hello' // illegal cannot use reserved keyword
var $foo // legal  
var _foo  //legal
// var var = myFoo
var guyWhoKeepsSayingHisOwnName = 'Salman'; // camel case best practice
var guy_who_keeps_saying_his_own_name = 'Ahmed'; // snake case best practice

console.log(guyWhoKeepsSayingHisOwnName);
var sum = 4 + 3.87348;

// Basic arithmetic operations

// var value = 5;

// var sub = value - 2;

// var mult = value * 3;

// var division = value + 4/ 2; 

// var ans = (value + 4)/ 2; 

// var exponentiation = value ** 2 

alert(sum + " Sum of two numbers"); 
sum = sum + ' converted to string' // string concatination number + string type will be string

console.log("hello");

console.log(typeof(sum));