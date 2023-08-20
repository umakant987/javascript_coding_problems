//10--------
// consider the array accounts = [[1,2,3], [1,2,1]];
// row is user and column is bank balance find user with max balance
// input : [[1,2,3], [1,2,1]] output : 6
const findMaxBalance = (arr) => {
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        let balance = 0;
        for (let j = 0; j < arr[i].length; j++) {
            balance = balance + arr[i][j];
        }
        max = Math.max(balance, max);
    }
    return max;
};

input = [[1, 2, 3], [1, 2, 1]] // output : 6
console.log(findMaxBalance(input));