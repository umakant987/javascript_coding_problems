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
console.log(areAnagrams('listen', 'silent')); // true
console.log(areAnagrams('hello', 'world')); // false
console.log(areAnagrams('rail safety', 'fairy tales')); // true
console.log(areAnagrams('Astronomer', 'Moon starer')); // true

