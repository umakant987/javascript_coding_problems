// 1. Check if a number is even or odd
/* const number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
} */

//2. Find the largest among three numbers
/* const num1 = 15;
const num2 = 8;
const num3 = 12;
const largest = Math.max(num1, num2, num3);
console.log(largest); */

// 3. Find the largest element in an array
/* const arr = [10, 5, 20, 15, 25];
const largest = Math.max(...arr);
console.log(largest); */

// 3.2 customMax
/* function max(numArr) {
    let max = numArr[0];

    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }

    return max;
}

let nums = [3, 1, 5, 7];
console.log("Max", max(nums)); */

 // 4. Reverse a string
/* const str = "hello";
const reversed = str.split("").reverse().join("");
console.log(reversed); */

// 5. Check if a string is a palindrome
/* const str = "level";
const reversed = str.split("").reverse().join("");
if (str === reversed) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
} */


// 6. Check if a number is prime
/* function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const number = 17;
console.log(isPrime(number)); */


// 7. Find the factorial of a number
/* function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const num = 5;
const result = factorial(num);
console.log(result); */


// 8. Fibonacci sequence up to a specified number of terms:
/* function fibonacciSeries(numTerms) {
  let fibonacciArray = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    let nextTerm = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(nextTerm);
  }

  return fibonacciArray;
}

const numTerms = 10; // Change this value to generate a different number of terms
const fibonacciSequence = fibonacciSeries(numTerms);
console.log(fibonacciSequence); */