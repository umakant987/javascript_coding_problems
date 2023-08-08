//1.  Get max count of conjugative 1's in given below array
// var nums = [1,0,0,1,1,1,0,0,1,0,1,1,0,0,1];

let nums = [1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1];

const conjugativeMaxOneCount = (arr) => {
  let count = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count = 0;
    } else {
      count++;
      result = Math.max(result, count);
    }
  }
  return result;
};

console.log("conjugativeOneCount======>", conjugativeMaxOneCount(nums));