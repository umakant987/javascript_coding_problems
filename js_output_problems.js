// Mastercard
// 1
// a = 10;
// console.log(a); // No error, because a is global varibale without var keyword
// var a;    // hoisting

// 2
function myfunc() {
  var b = 20;
}
//console.log(b); // Reference error: b is not defined

// 3. Event Loop
/*  setTimeout(() => {
  console.log("Hello Js"); // Hello Js Printed after 2 sec
 }, 2000);  */

// 4.
/* var i;
for (i = 0; i < 5; ++i) {
  setTimeout(() => {
      console.log(i); // 5 is displays 5 times after 2 sec
  }, 2000);
}
console.log(i); // 5 is displays immediately */

// 5.
/* let i;
for (i = 0; i < 5; ++i) {
  setTimeout(() => {
      console.log(i); //  5 is displays 5 times after 2 sec
  }, 2000);
}
console.log(i); // 5 is displays immediately  */

// 5.2
/* for (let i = 0; i < 5; ++i) {
  setTimeout(() => {
      console.log(i); //  0, 1, 2, 3, 4
  }, 2000);
}
console.log(i); // Error: i is not defined */

//  6. passing less argument gives NaN. passing more argument is fine(it ignores)
// function overloading: should call fun with matching no of arguments. But it's calling  second func always. => here, it's considering order
/* function sum(a, b) {

  return a + b;

}
 function sum(a, b, c) {

  return a + b + c;

}
console.log(sum(10, 20)); // NaN
console.log(sum(10, 20, 30)); // 60
var sum = (a, b) => a + b;  */

// 7.
new Promise((resolve) => {
  setTimeout(() => {
    console.log('Promise');  // promise printed after 2 sec
    resolve();
  }, 2000);
});

// 8.
/* var p = setInterval(() => {
    console.log('setInterval');  // setInterval printed once after 2 sec
    clearInterval(p);
}, 2000); */

/* setTimeout(() => {
  console.log('setTimeout'); // setTimeout printed once
}, 0); */

/* used in Node js
setImmediate(() => {
  console.log('setImmediate');
});

process.nextTick(() => {
    console.log('nextTick');
});
*/

// 9
/* Swap this variable value with one line of code. */
/* let a = 10;
let b = 20;
[b, a] = [a, b]; */

// 10.
// Math.random() => return number between 0 to 1. Making 50% chance of Error or Success.
/* Review this code. */
/* async function x() {
    if (Math.random() > 0.5) throw new Error('...');
    return Promise.resolve(50);
}

x()
    .then(r => console.log(r))
    .catch(err => console.log(err)); */


// Mastercard
// to check let var scoping knowledge
// var x = 20;
// let x = 50;
// console.log(x); // SyntaxError: Identifier 'x' has already been declared

// var x = 20;
// var x = 50; // var allow's to redeclare a variable with same name but let doesn't
// console.log(x);

// to check prototype inheritance knowledge
// var person = {
//   course: 'java'
// }
// var ritu = Object.create(person); // creates a new object named ritu and sets its prototype to be the person object.
// console.log(ritu.course); // java
// console.log(delete ritu.course); // true: tries to delete the course property from the ritu object. but it is in prototype not directly on ritu obj
// console.log(ritu.course); // java

// to check event loop knowledge
// console.log(1)
// setTimeout(() => console.log(2), 0)
// Promise.resolve(2).then(res => console.log(3))
// console.log(4)


// From 30 second of interview
// To check hoisting knowledge
var foo = 1
var foobar = function () {
  console.log(foo) // undefined
  var foo = 2
}
foobar()

// console.log(hoist) // undefined
// var hoist = "value"

// myFunction() // No error; logs "hello"
// function myFunction() {
//   console.log("hello")
// }

// myFunction() // TypeError: `myFunction` is not a function
// var myFunction = function () {
//   console.log("hello")
// }