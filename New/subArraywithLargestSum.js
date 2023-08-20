//7. Given an array of length N, find the continuous sub array of length M with largest sum.
/* const minSubArrayLen = (arr, no) => {
    let result = Infinity;
    let sum = 0;
    let left = 0;
    let right = 0;

    while (left < arr.length) {
        if (sum < no && right < arr.length) {
            sum += arr[right];
            right++;
        } else if (sum >= no) {
            result = Math.min(result, right - left);
            sum -= arr[left];
            left++;
        } else {
            break;
        }
    }
    console.log("result: ", result);
    return result === Infinity ? 0 : result;
};

console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 33, 19], 52)); */



function findMaxSubarray(arr, N, M) {
    if (M > N) {
        return null; // Invalid input
    }

    let maxSum = arr.slice(0, M).reduce((sum, num) => sum + num, 0); // Initial sum
    let maxSubarray = arr.slice(0, M); // Initial subarray
    let currentSum = maxSum;

    for (let i = 1; i <= N - M; i++) {
        currentSum = currentSum - arr[i - 1] + arr[i + M - 1];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            maxSubarray = arr.slice(i, i + M);
        }
    }

    return maxSubarray;
}

// Example usage
const arr = [1, 2, 3, -2, 5]; // Replace this with your array
const N = arr.length;
const M = 3;
const result = findMaxSubarray(arr, N, M);
console.log("Maximum subarray:", result);
console.log("Sum of maximum subarray:", result.reduce((sum, num) => sum + num, 0));
