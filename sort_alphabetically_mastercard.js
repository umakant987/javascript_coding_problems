/* localeCompare()
- compares two strings in the current locale.
- returns sort order -1, 1, or 0 (for before, after, or equal)
- current locale is based on the language settings of the browser.
- string.localeCompare(compareString) */

const inputArray = ["A", "a", "B", "b", "Z", "c", "Y", "C", "D", "R", "K"];
// output => ['A','B','C','D','K','R','Y','Z','a','b','c']

// Custom comparison function
function compare(a, b) {
    const lowerA = a.toLowerCase();
    const lowerB = b.toLowerCase();

    if (lowerA < lowerB) {
        return -1;
    } else if (lowerA > lowerB) {
        return 1;
    } else {
        return a.localeCompare(b);
    }
}

// Sort the array using the comparison function
const sortedArray = inputArray.sort(compare);
console.log(sortedArray);    // ['a', 'A', 'b', 'B', 'c', 'C', 'D', 'K', 'R', 'Y', 'Z']

let upperAlphabets = [];
let lowerAlphabets = [];
for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] === sortedArray[i].toUpperCase()) {
        upperAlphabets.push(sortedArray[i]);
    } else {
        lowerAlphabets.push(sortedArray[i]);
    }
}

console.log(upperAlphabets);
console.log(lowerAlphabets);
let outputArray = upperAlphabets.concat(lowerAlphabets);
console.log(outputArray);


//Alternate Sorting Technique
/* const sortedArray2 = inputArray.sort((a, b) => {
  const lowerA = a.toLowerCase();
  const lowerB = b.toLowerCase();
  if (lowerA < lowerB) {
    return -1;
  }  
  if (lowerA > lowerB) {
    return 1;
  }
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
}); */