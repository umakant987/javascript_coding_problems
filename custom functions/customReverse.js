///////////////////////////////////////////////////////////////////////////////////////////
// Reverse an array without mutating orginal array.
// 1. First way
let numbers = [1, 2, 3, 4, 5];
let reversedNumbers = [...numbers].reverse();

console.log(reversedNumbers);
// [5, 4, 3, 2, 1]

// Second Way
let numbers2 = [1, 2, 3, 4, 5];
let reversedNumbers2 = numbers.slice().reverse();

console.log(reversedNumbers2);
// [5, 4, 3, 2, 1]

// Thirday way
let numbers3 = [1, 2, 3, 4, 5];
let reversedNumbers3 = [];

for (let i = numbers.length - 1; i >= 0; i--) {
    reversedNumbers3.push(numbers[i]);
}
console.log(reversedNumbers3);

// Custom Reverse
function customReverse(originalArray) {

    let leftIndex = 0;
    let rightIndex = originalArray.length - 1;

    while (leftIndex < rightIndex) {

        // Swap the elements with temp variable
        let temp = originalArray[leftIndex];
        originalArray[leftIndex] = originalArray[rightIndex];
        originalArray[rightIndex] = temp;

        // Move indices to the middle
        leftIndex++;
        rightIndex--;
    }

    return originalArray;
}

console.log(customReverse(numbers));
