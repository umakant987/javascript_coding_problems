// Find length of the Longest Substring Without Repeating Characters
// 1. Using Set
var lengthOfLongestSubstringSet = function (s) {
    if (!s.length) return 0;

    let left = 0, right = 0;
    let maxLength = -Infinity;
    const set = new Set();

    while (right < s.length) {
        // If s[right] has not been seen yet
        if (!set.has(s[right])) {
            // Add it to the set
            set.add(s[right]);
            // Increase size of window to right
            right++;
            // Update maxLength; set size represents length of unique substring
            maxLength = Math.max(maxLength, set.size);
        } else {
            // We've seen s[right] so we need to shrink the window
            // Delete s[left] from set
            set.delete(s[left]);
            // Shrink window from left
            left++;
        }
    }

    return {
        length: maxLength,
        longestSubstr: s.slice(left, right + 1)
    };
}

// const input = "abcabcbb" // output: "abc" 3
// const result = lengthOfLongestSubstringSet(input);
// console.log("Longest substring and it's length>>>", result);


// 2. Using Map
var lengthOfLongestSubstringMap = function (s) {
    // keeps track of the most recent index of each letter.
    const seen = new Map();
    // keeps track of the starting index of the current substring.
    let start = 0;
    // keeps track of the maximum substring length.
    let maxLen = 0;

    for (let i = 0; i < s.length; i++) {
        // if the current char was seen, move the start to (1 + the last index of this char)
        // max prevents moving backward, 'start' can only move forward
        if (seen.has(s[i])) start = Math.max(seen.get(s[i]) + 1, start)
        seen.set(s[i], i);
        // maximum of the current substring length and maxLen
        maxLen = Math.max(i - start + 1, maxLen);
    }

    return maxLen;
};

// const input = "abcabcbb" // output: "abc" 3
// const result = lengthOfLongestSubstringMap(input);
// console.log("Longest substring", result);


// Using Object
var lengthOfLongestSubstringString = function (s) {
    var obj = {};
    var i = j = 0;
    var n = s.length;
    var len = 0;
    while (i < n && j < n) {
        if (!obj[s[i]]) {
            obj[s[i++]] = 1;
            len = Math.max(len, i - j);
        } else {
            obj[s[j++]] = 0;
        }
    }
    return len;
};
const input = "abcabcbb" // output: "abc" 3
const result = lengthOfLongestSubstringString(input);
console.log("Longest substring", result);



// Write a javascript program to find longest substrings without repeating characters from given string.
// input = "abcabcbb";
// output =  "abc";
function findLongestSubstring(input) {
    let longestSubstring = "";
    let currentSubstring = "";
    let charIndexMap = {};

    for (let i = 0; i < input.length; i++) {
        const char = input[i];

        if (charIndexMap[char] === undefined || charIndexMap[char] < i - currentSubstring.length) {
            currentSubstring += char;
        } else {
            currentSubstring = currentSubstring.slice(charIndexMap[char] - i + currentSubstring.length + 1) + char;
        }

        charIndexMap[char] = i;

        if (currentSubstring.length > longestSubstring.length) {
            longestSubstring = currentSubstring;
        }
    }

    return longestSubstring;
}

const input1 = "abcabcbb"; // abc
const input2 = "abbc" // output: "abc" 3
const input3 = "abbbcabcdefef" // abcdef 
const input4 = "aabcd"  // abcd
const input5 = "abcd" // "abcd"
const input6 = "aaaaaaaa" // a
const input7 = "zabbbcabcdefef" // output: 'abcdef' 6
// const longestSubstring = findLongestSubstring(input7);
// console.log(longestSubstring);

// Not working
// function longestSubstrWithoutRepeatChar(input) {
//     let maxLength = 0;
//     let startIndex = 0;
//     let charIndexMap = {}; // Store the most recent index of each character

//     for (let endIndex = 0; endIndex < input.length; endIndex++) {
//         const char = input[endIndex];

//         // If the character is already in the substring and its index is after the start index
//         if (charIndexMap[char] !== undefined && charIndexMap[char] >= startIndex) {
//             startIndex = charIndexMap[char] + 1;
//         }

//         charIndexMap[char] = endIndex;
//         maxLength = Math.max(maxLength, endIndex - startIndex + 1);
//     }

//     return input.slice(startIndex, startIndex + maxLength);
// }

// const input = "abcabcbb";
// const longestSubstring = longestSubstrWithoutRepeatChar(input);
// console.log("Longest Substring>>", longestSubstring); // Output: "abc"