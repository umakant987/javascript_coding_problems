//  Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 1. Brute Force Approach
var twoSumBrute = function (nums, target) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                result.push(i);
                result.push(j);
            }
        }
    }
    return result;
};

const nums = [8, 4, 5, 3, 7], target = 7
// const resultBrute = twoSumBrute(nums, target);
// console.log("resultBrute>>", resultBrute);

// 2. Using Map
var twoSumMap = function (nums, target) {
    let mp = new Map()
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i]
        if (mp.has(diff)) {
            return [i, mp.get(diff)]
        }
        mp.set(nums[i], i)
    }
};

// const resultMap = twoSumMap(nums, target);
// console.log("resultMap>>", resultMap);


// 3. Using Object
var twoSumObj = function (nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]

        if (diff in obj) return [i, obj[diff]]

        obj[nums[i]] = i;
    }
};

const resultObj = twoSumObj(nums, target);
console.log("resultObj>>", resultObj);