// Memoization : Optimization Technique
// - the process of caching the output of function calls so that subsequent calls are faster.
// - Calling the function again with the same input will return the cached output without needing to do the calculation again

// Memoization helper function
function memoize(func) {
    const cache = {};
    return function (...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            return cache[key];
        }
        const result = func.apply(this, args);
        cache[key] = result;
        return result;
    };
}

// Function to calculate the sum of an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Memoized sum function
const memoizedSumArray = memoize(sumArray);

// Testing the memoized sum function
console.log(memoizedSumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(memoizedSumArray([1, 2, 3, 4, 5])); // Output: 15 (Fetched from cache, not recomputed)
console.log(memoizedSumArray([2, 4, 6, 8, 10])); // Output: 30
console.log(memoizedSumArray([2, 4, 6, 8, 10])); // Output: 30 (Fetched from cache, not recomputed)
