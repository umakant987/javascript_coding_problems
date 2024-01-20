// prime numbers: a natural number greater than 1, which is only divisible by 1 and itself.
// example: 2,3,5,7,11
// composite number: positive integer that has at least one divisor other than 1 and itself
// example 2*3 = 6; 
// Note: 1 is neither prime or composite number
// 
// Check number is prime or not. num = 7
const isPrime = num => {
    for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) return false; 
    return num > 1;
}
console.log(isPrime(7));

//Find prime numbers between range 5 - 20 
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


//geekforgeeks
/*     function isPrime(n) {
        // Corner case
        if (n <= 1)
            return false;
      
        // Check from 2 to n-1
        for (let i = 2; i < n; i++)
            if (n % i == 0)
                return false;
      
        return true;
    } */
  
    // Driver Code
    //isPrime(11) ? console.log("true") : console.log("false");

