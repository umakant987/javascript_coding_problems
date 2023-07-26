// // https://leetcode.com/problems/top-k-frequent-elements/description/
// nums = [1,1,1,2,2,3], k = 2;
nums = [3, 3, 1, 2, 3, 2], k = 2;
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
  console.log("Map>>>>", map.entries());
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

const result = topKFrequent(nums, k);
console.log("RESULT", result);
