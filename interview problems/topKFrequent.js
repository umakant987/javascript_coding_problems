// // https://leetcode.com/problems/top-k-frequent-elements/description/
nums = [1, 1, 1, 2, 2, 3], k = 2;
// nums = [3, 3, 1, 2, 3, 2], k = 2;
var topKFrequent = function (nums, k) {
  let map = new Map();
  //find and store the frequency of each element in a map.
  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  console.log("numsArr>>>", nums);
  console.log("Map>>>>", map);
  console.log("Map Entries>>>>", map.entries());
  // console.log("Map>>>>", map.values());

  //sort the accrording to highest frequency
  const mapSort1 = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  console.log("Sorted Map>>>>", mapSort1);

  //print top k i.e 2 elements
  let result = [];
  let count = 0;
  for (let [key, val] of mapSort1.entries()) {
    if (count < k) {
      result.push(key);
      count++;
    }
  }
  return result;
}

// const result = topKFrequent(nums, k);
// console.log("RESULT", result);


//***************************************************** */
// My approach
// Steps
// 1. Find frequency of each element. use Object or Map
// 2.

const topKFrequentElement = function (numArr) {
  const frequencyObj = {};
  // for (let num of numArr) {
  //   if (!frequencyObj[num]) {
  //     frequencyObj[num] = 1
  //   } else {
  //     frequencyObj[num] = frequencyObj[num] + 1;
  //   }
  // }

  //alternative
  for (let i = 0; i < numArr.length; i++) {
    // if (!frequencyObj[numArr[i]]) {        // didn't work
    if (numArr[i] in frequencyObj) {
      frequencyObj[numArr[i]]++
    } else {
      frequencyObj[numArr[i]] = 1;
    }
  }

  console.log("frequencyObj<<<>>", frequencyObj);

  //third step: sorting
  let sortedArray = Object.entries(frequencyObj).sort((a, b) => b[1] - a[1])
  console.log("sortedArray", sortedArray);

  let result = [];
  let count = 0; // counter for k elements 
  for (const arrPair of sortedArray) {
    if (count < k) {
      result.push(arrPair[0]);
      count++;
    }
  }
  return result.map(Number);

  // Alternate
  // let kFrequentEle = [];
  // for(let i = 0; i < k; i++){
  //     kFrequentEle.push(sortedNums[i][0]);
  // }
  // return kFrequentEle;
}

numArr = [1, 1, 1, 2, 3, 3], k = 2;
const r = topKFrequentElement(numArr, k);
console.log("Top 2 frequest numbers are>>>", r);