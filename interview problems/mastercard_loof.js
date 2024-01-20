
/* Remove duplicate character (assumed)
  Longest Substring Without Repeating Characters
input =  "abbbcabcdefef"
output = abcdef 
aabcd  . answer - abcd
abcd. Answer - abcd
aaaaaaaa.   Answer - a
zabbbcabcdefef.  answer - abcdef
*/
// 1. using filter
/* let showUnique = function(str){
  let arr = str.split('');
  let result = arr.filter(function(item, i, self){
    return self.indexOf(item) == i;
  });
  return result.join('');
} 

const input =  "abbbcabcdefef"
zabbbcabcdefef.  answer - abcdef
const result = showUnique(input);
console.log(result);  */


// Remove duplicates using frequency Obj
/* const longestSeq = function (str) {
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
} 
const input =  "abbbcabcdefef"
console.log(longestSeq(input)); */


// 3. using Set
/* const input =  "abbbcabcdefef"
const input2 = "zabbbcabcdefef"
const input3 = "aaaaaaaa";

let longestSeq = [...new Set(input2)];
console.log(longestSeq.join('')); */


/* **************************************** */
/* let rotateClockwise = function(arr){
  let result = new Map();
for(let i= 0; i< arr.length; i++){
      for(let j= 0; j< i; i++){
        result.push(arr[i][i]);
      }
    }
    
    let 
}

const inputArr= [
 [0, 1, 2],
 [3, 4, 5],
 [6, 7, 8],
];
const result = rotateClockwise(inputArr); */


// Nidhi
var input = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
]

var output = [
    [6, 3, 0],
    [7, 4, 1],
    [8, 5, 2],
]

function getResult(input) {
    var output = [];
    for (var i = input.length - 1; i >= 0; i--) {
        for (var j = 0; j < input[i].length; j++) {
            if (!output[j]) {
                output[j] = [];
            }
            output[j].push(input[i][j])
        }
    }
    return output;
}

// console.log(getResult(input))


// 2
// Reverse then transpose(rows will become column) 
var input = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

// Reverse the order of rows
var reversed = input.reverse();
    // [
    //     [6, 7, 8],
    //     [3, 4, 5],
    //     [0, 1, 2]
    // ];

// Transpose the matrix
var output = [];
for (var i = 0; i < reversed[0].length; i++) {
    output[i] = [];
    for (var j = 0; j < reversed.length; j++) {
        output[i][j] = reversed[j][i];
    }
}

// console.log(output);


// 3
// Transpose any matrix
var input = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

var transposed = [];
for (let i = 0; i < input[0].length; i++) {
    transposed.push([]);
    for (let j = 0; j < input.length; j++) {
        transposed[i].push(input[j][i]);
    }
}

// console.log(transposed);
