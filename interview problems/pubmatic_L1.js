/* 
Input:  arr     = [50, 40, 70, 60, 90]
        index   = [3,  0,  4,  1,  2]
Output: arr[]   = [40, 60, 90, 50, 70]
        index[] = [0,  1,  2,  3,   4] 
*/
// 1. Using empty arrays
const rearrangeArraysInPlace = function (arr, index) {
    outputArr = [];
    indexOutputArr = []
    for (let i = 0; i < index.length; i++) {
        outputArr[index[i]] = arr[i];
        indexOutputArr[i] = i;
    }
    /*     for(let i in index){
        outputArr[index[i]]= arr[i];
      } */

    // return outputArr;
    return {
        outputArr: outputArr,
        indexOutputArr: indexOutputArr
    }
}

const arr = [50, 40, 70, 60, 90]
const index = [3, 0, 4, 1, 2]
const result = rearrangeArraysInPlace(arr, index);
console.log(result);



// 2. Without using empty arrays
function rearrangeArraysInPlace2(arr, index) {
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        while (index[i] !== i) {
            const tempValue = arr[i];
            const tempIndex = index[i];

            arr[i] = arr[tempIndex];
            index[i] = index[tempIndex];

            arr[tempIndex] = tempValue;
            index[tempIndex] = tempIndex;
        }
    }
}

//input
const arr2 = [50, 40, 70, 60, 90];
const index2 = [3, 0, 4, 1, 2];
rearrangeArraysInPlace2(arr2, index2);
console.log("arr[]   =", arr);
console.log("index[] =", index);

// Iterations
/* 
// 1st i=0
tempVal = 50;
tempInd = 3

arr[0] = 60
index[0] = 1

arr[3] = 50
index[3] = 3s
const arr = [60, 40, 70, 50, 90];
const index = [1, 0, 4, 3, 2];

// 2nd i=1
tempVal = 40;
tempInd = 0

arr[1] = 60
index[1] = 1

arr[0] = 40
index[0] = 0
const arr = [40, 60, 70, 50, 90];
const index = [0, 1, 4, 3, 2];

// 3rd i=2
tempval = 70
tmpind = 4

arr[2] = 90
index[2] = 2

arr[4] = 70
index[4] = 4
const arr = [40, 60, 90, 50, 70];
const index = [0, 1, 2, 3, 4]; 
*/


//************************************************************************** */
// console ouput programs

// Hoisting
/* var a;
console.log(a); // undefined
var a = 5;
var a; */

/*  function outer() {
  var a = 1;
  var b = 2;
  function inner1() {
    console.log(a); // 1
  }
  
  function inner2() {
    console.log(a); // 1
    console.log(b); // 2
  }
  inner1();
  inner2();
 }
 outer(); */
 

// this code snippet demonstrates the concept of variable scope in JavaScript and showcases how a variable can unintentionally become global when not declared properly.	
// a => local var  : declared with var keyword. it is local var within the scope of the IIFE,
// b => global var : assinged value 5 without using var let or const. (hence, it becomes global var)
/* (function(){
    var a = b = 5; // 'a' is a local variable, 'b' is a global variable.
})();
console.log(b); // Error  : Actual => 5
console.log(a) // Error: a is not defined */


// In each iteration of the loop, an IIFE is executed, which captures the value of i at that moment and assigns it to the variable x
// for (var i = 0; i < 5; i++) {
//     (function(x) {
//        setTimeout(function() {
//           console.log(x);  // 0 1 2 3 4 
//        },  1000 );
//     })(i);
// } 