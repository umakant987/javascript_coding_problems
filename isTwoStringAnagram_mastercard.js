/* Write a function to check if given two input to a function is anagram.
LISTEN -> SILENT 
TRIANGLE -> INTEGRAL */
/* Anagram => is a word or phrase formed by rearranging the letters of a given word or phrase, typically using all the original letters exactly once.  */

function areAnagrams(input1, input2) {
    // Remove spaces and convert the inputs to lowercase to ignore case and spaces
    const sortedInput1 = input1.replace(/\s+/g, '').toLowerCase().split('').sort().join('');
    const sortedInput2 = input2.replace(/\s+/g, '').toLowerCase().split('').sort().join('');

    // Compare the sorted versions of the inputs to check if they are anagrams
    return sortedInput1 === sortedInput2;
}

// Test cases
// console.log(areAnagrams('listen', 'silent')); // true
// console.log(areAnagrams('hello', 'world')); // false
// console.log(areAnagrams('rail safety', 'fairy tales')); // true
// console.log(areAnagrams('Astronomer', 'Moon starer')); // true


// Second Approach: pubmatic L2
const isAnagram = function isSimilar(str1, str2) {
    let map1 = new Map();
    let map2 = new Map();

    for (let char of str1) {
        if (!map1.has(char)) {
            map1.set(char, 1);
        } else {
            map1.set(char, map1.get(char) + 1)
        }
    }

    for (let char of str2) {
        if (!map2.has(char)) {
            map2.set(char, 1);
        } else {
            map2.set(char, map2.get(char) + 1)
        }
    }

    for (let [k, v] of map1.entries()) {
        if (map1.get(k) !== map2.get(k)) {
            return false;
        }
    }

    return true;
}

// const result = isAnagram('listen', 'silent');
// const result = isAnagram('heelo', 'hello');
// const result = isAnagram('car', 'arc');
const result = isAnagram('rail safety', 'fairy tales');
console.log("Strings are anagram", result);