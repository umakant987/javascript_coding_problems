//Remove duplicates from an array
let arr = [1, 2, 3, 2, 4, 5, 4, 5, 6];

//1. using set
let arr1 = [...new Set(arr)];
/* console.log(arr1); */


//using filter and indexOf
//indexOf method returns the index of the first occurrence of an element in an array)
// uniqueArray = arr.filter(function (item, pos, self) {
//     console.log("loop", pos + " " + self.indexOf(item) + " " + self.indexOf(item) == pos);
//     return self.indexOf(item) == pos;
// });
// console.log(uniqueArray);


//using forEach and includes
/* let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [];
chars.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});
console.log(uniqueChars); */

// Remove duplicates using frequency Obj : Produces incorrect result.. use longestSubsequence program instead
const longestSeq = function (str) {
    let arr = str.split('');
    let freq = {};
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] in freq)) {
            freq[arr[i]] = 1;
        } else {
            freq[arr[i]]++;
        }
    }
    return Object.keys(freq).join('');
}
const input = "abbbcabcdefef"
console.log(longestSeq(input));