// 1. Check if a number is even or odd
const number = 7;
if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
} 

// 2.0 Find the largest among three numbers
const num1 = 15;
const num2 = 8;
const num3 = 12;
const largest = Math.max(num1, num2, num3);
console.log(largest);

// 2.1 Find the largest element in an array
const arr = [10, 5, 20, 15, 25];
const largestInArray = Math.max(...arr);
console.log(largestInArray);

// 2.2 Find the largest element in an array using math.max.apply
let numsArr = [1, 3, 20, 10, 15];
let firstMaxAppy = function (nums) {
    /*   return Math.max(...nums); */
    return Math.max.apply(null, nums);
}

// 2.3 Find the largest element in an array using sort method
let firstMaxSort = (nums) => {
  const sortedNums =  nums.sort((a,b) => b-a);
  return sortedNums[0];
} 

// 2.4 Custom function to find largest number in array
function max(numArr) {
    let max = numArr[0];

    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }

    return max;
}

let nums = [3, 1, 5, 7];
console.log("Max", max(nums)); 

// 3. Find second largest element. seperate file SecondMax.js

// 4. Find the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

const num = 5;
const result = factorial(num);
console.log(result); 


// 5. Fibonacci sequence up to a specified number of terms:
function fibonacciSeries(numTerms) {
  let fibonacciArray = [0, 1];

  for (let i = 2; i < numTerms; i++) {
    let nextTerm = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(nextTerm);
  }

  return fibonacciArray;
}

const numTerms = 10; // Change this value to generate a different number of terms
const fibonacciSequence = fibonacciSeries(numTerms);
console.log(fibonacciSequence); 

// prime numbers: a natural number greater than 1, which is only divisible by 1 and itself.
// example: 2,3,5,7,11
// composite number: positive integer that has at least one divisor other than 1 and itself
// example 2*3 = 6; 
// Note: 1 is neither prime or composite number
// 6.1 Check if a number is prime. 
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

const numP = 17;
console.log(isPrime(numP));

// 6.2 Check number is prime or not. num = 7
const isPrime = num => {
  for(let i = 2, s = Math.sqrt(num); i <= s; i++)
      if(num % i === 0) return false; 
  return num > 1;
}
console.log(isPrime(7));

//6.3 Find prime numbers between range 5 - 20 
function prime(low, high) {
let primeArr = [];
for (let i = low; i <= high; i++) {
  let isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }
  if (i > 1 && isPrime === true) {
    primeArr.push(i);
  }
}
return primeArr;
}

console.log(prime(5, 20));

// 7. Reverse a string. str = "hello"
const str = "hello";
const reversed = str.split("").reverse().join("");
console.log(reversed);

// 8.1 Check if a string is a palindrome using split, reverse, join. str = "radar", "level", "foobar"
const str1 = "level";
const reversed1 = str1.split("").reverse().join("");
if (str1 === reversed1) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
} 

// 8.2 Custom: Check palindrome string using for loop and charAt. str = "radar", "level", "foobar"
const str2 = "level";
reversed2 = "";
for(let i = str2.length - 1; i>=0; i--){
  reversed2 = reversed2 + str2.charAt(i);
}
if (str2 === reversed2) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
} 

// 8.3 Using recursive function. str = radar, level, foobar
function isPalindrome(str) {
  console.log(str);
  if (str.length === 0 || str.length === 1) return true;

  if (str[0] === str[str.length - 1]) {
      return isPalindrome(str.slice(1, str.length - 1));
  }
  return false;
}
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("radar"));  // true

// 9 reverse digits of a number
// 9.1 using bitwise operator
// write a javascript program using bitwise operator to produce below output.
// input = 12345
// output = 54321
function reverseDigits(input) {
  let result = 0;

  while (input !== 0) {
    result = (result * 10) + (input % 10);
    input = input / 10 | 0; // Using bitwise OR to truncate decimal part
  }

  return result;
}

const input = 12345;
const output = reverseDigits(input);
console.log("Input:", input);
console.log("Output:", output);

// 9.2 by converting number to string

// 10. number palindrome 
// input = 12321
// output = true
function isPalindromeNumber(number) {
  const originalNumber = number;
  let reversedNumber = 0;

  while (number > 0) {
    const digit = number % 10;
    reversedNumber = (reversedNumber * 10) + digit;
    number = Math.floor(number / 10); // to truncate decimal part
  }

  return originalNumber === reversedNumber;
}

const input2 = 12321; // Change this to test different numbers
const isPalindrome = isPalindromeNumber(input2);
console.log(`Input: ${input2}`);
console.log(`Is Palindrome: ${isPalindrome}`);

// 11.Remove duplicates from an array. seperate file duplicate_remove.js

// 12.Sum of Array Elements
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
  }
  return sum;
}

// 13. FizzBuzz. Seperate file FizzBuzz.js

// 14. Write the multiper function which can be called as  below:
  multiplier(2)(3);   // output: 6
    var multiplier = function (factor) {
		return function (num) {
			return num * factor;
		};
	};
	var doubler = multiplier(2);
	var tripler = multiplier(3);