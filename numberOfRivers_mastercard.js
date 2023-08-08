// Write a javascript program to find the number of rivers, max and min length river.
// var arr = [1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
// Where 1 is the river in the array.

// If there  are 2 consecutive 1, then its one river with length 2
// If there  are 3 consecutive 1, then its one river with length 3
// Above array has 4 rivers with minlength 1 and max length 5

/* I could write logic for max river length
function riversInArray(numArr) {
    let maxRiverLength = 0;
    let count = 0;
    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] == 0) {
            count = 0;
        } else {
            count++;
        }
        maxRiverLength = Math.max(count, maxRiverLength);
    }
    return maxRiverLength;
}

var arr = [1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]

let result = riversInArray(arr);
console.log("max river length: ", result); 
*/

function findRivers(arr) {
    let rivers = 0;
    let minRiverLength = Infinity;
    let maxRiverLength = 0;

    let currentRiverLength = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            currentRiverLength++;
        } else {
            if (currentRiverLength > 0) {
                rivers++;
                minRiverLength = Math.min(minRiverLength, currentRiverLength);
                maxRiverLength = Math.max(maxRiverLength, currentRiverLength);
                currentRiverLength = 0;
            }
        }
    }

    // After the loop ends, there might be an ongoing river. 
    // We repeat the same process as in step 4 to handle the last river if needed
    if (currentRiverLength > 0) {
        rivers++;
        minRiverLength = Math.min(minRiverLength, currentRiverLength);
        maxRiverLength = Math.max(maxRiverLength, currentRiverLength);
    }

    return {
        rivers: rivers,
        minRiverLength: minRiverLength,
        maxRiverLength: maxRiverLength
    };
}

var arr = [1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0]
// var arr = [1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1];  // ongoing river
var result = findRivers(arr);

console.log("Number of rivers:", result.rivers);
console.log("Minimum length of a river:", result.minRiverLength);
console.log("Maximum length of a river:", result.maxRiverLength);