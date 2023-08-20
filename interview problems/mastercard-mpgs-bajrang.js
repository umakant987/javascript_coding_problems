// 1. 
var a;
(function () {
    var a = 5;
});
console.log(a); // undefined

// 2. 
var a;
(function () {
    var a = 5;
})();
console.log(a); // undefined

// 3. 
var x = true;
var y = 1;
var z = '1';
console.log(x + y + z); //21

// 4. 
var x = true;
var y = false;
var z = '1';
console.log(x + y + z); //11

// how can we add a custom method to Array class. 
/* Array.prototype = function sum() { */  // doesn't work
Array.prototype.sum = function () {
    let sum = 0;
    for (let i = 0; i < this.length; i++) {
        sum += this[i];
    }
    return sum;
};

const nums = [1, 2, 3, 4, 5];
const result = nums.sum();
console.log("result sum", result);
