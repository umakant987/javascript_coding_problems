// Type of sorting 
// Bubble Sort: This algorithm repeatedly steps through the list, compares adjacent elements, and swaps them if they're in the wrong order.

// Selection Sort: selects the smallest (or largest) element from the unsorted portion of the array and swaps it with the first unsorted element.

// Insertion Sort: builds the sorted array one element at a time, inserting each new element into its proper place.

// Merge Sort: divides the unsorted list into smaller sublists, sorts those sublists, and then merges them to produce a sorted list.

// Quick Sort: picks an element as a pivot and partitions the array around the pivot. It then recursively sorts the sub-arrays.

// Heap Sort: uses a binary heap data structure to build a sorted array.

/*
Time Complexity: Bubble Sort

Best Case: O(n) - Occurs when the input array is already sorted. 
                  The algorithm will iterate through the array once and won't need to perform any swaps.

Average Case: O(n^2) - The algorithm compares and swaps elements in the worst case for each element in the array.

Worst Case: O(n^2) - Occurs when the input array is sorted in reverse order. 
                    The algorithm will compare and swap elements in each iteration of both loops.

Space Complexity: 
- Bubble Sort is an in-place sorting algorithm, meaning it doesn't require additional space for sorting. 
- The space complexity is O(1), constant space, as it only uses a temporary variable for swapping.
*/

/* Drawbacks of buuble sort
    Since Bubble Sort has a time complexity of O(n^2), it might not be the most efficient sorting algorithm for larger arrays. 
    Other sorting algorithms like Quick Sort or Merge Sort generally offer better performance for larger datasets.
    However, Bubble Sort can still be useful for educational purposes or for small datasets where its simplicity may outweigh its performance drawbacks.
*/

//************************************************************************************************************ */
// Custom Bubble Sort using do while loop and swapping
function bubbleSortDoWhile(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;

        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap elements
                const temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSortDoWhile(unsortedArray.slice()); // Create a copy of the array to preserve the original
console.log(sortedArray); // Output: [11, 12, 22, 25, 34, 64, 90]

// 2nd Approach
// Custom Buble sort using 2 for loops and swapping
function bubbleSortForLoop(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

const numbers = [64, 34, 25, 12, 22, 11, 90];
bubbleSortForLoop(numbers);
console.log(numbers); // Output: [11, 12, 22, 25, 34, 64, 90]


//************************************************************************************************************ */
/*
Merge Sort 
time complexity  => O(n log n) in all cases (best, average, and worst),
space complexity => higher due to creation of temporary arrays during the merging process.
*/
function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const numberArr = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = mergeSort(numberArr);
console.log(sortedNumbers); // Output: [11, 12, 22, 25, 34, 64, 90]
