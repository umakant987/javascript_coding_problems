//10. print each element from 3X3 matrix (time complexity)
var arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const printMatrix = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
};
printMatrix(arr);