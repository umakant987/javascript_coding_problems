//11. flatten array problem solving

const flatArr = (arr) => {
    let flatArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flatArray = [...flatArray, ...flatArr(arr[i])];
        } else {
            flatArray.push(arr[i]);
        }
    }
    console.log("flatArray===>", flatArray);
    return flatArray;
};

console.log(
    flatArr([
        [1, 2],
        [3, 4],
        [
            [5, 6],
            [7, 8, 9],
        ],
        [10, 11, 12, 13, 14, 15],
    ])
);