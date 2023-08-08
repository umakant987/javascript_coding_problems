function max(numArr) {
    let max = numArr[0];

    for (let i = 1; i < numArr.length; i++) {
        if (numArr[i] > max) {
            max = numArr[i];
        }
    }

    return max;
}

let nums = [3, 1, 5, 7];
console.log("Max", max(nums));