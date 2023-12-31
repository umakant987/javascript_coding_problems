/* Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"?
input = a#bc#d        output =bd
input = abc####d##c#  output =''
input = abc#d##c      output ="ac" */

// approach 1: using split() and for lopp
const backspace = function (str) {
    let arr = str.split('');
    let result = [];
    /*   console.log(arr); */
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === '#') {
            result.pop();
        } else {
            result.push(arr[i]);
        }
    }
    return result.join('');
}

let input = 'a#bc#d';
const result = backspace(input);
console.log(result);



// approach 2: using for..of generated by ChatGpt
function processBackspaces(input) {
    const result = [];

    for (let char of input) {
        if (char === "#") {
            result.pop(); // Remove the last character
        } else {
            result.push(char);
        }
    }

    return result.join('');
}

// Test cases
console.log(processBackspaces("a#bc#d"));        // Output: "bd"
console.log(processBackspaces("abc####d##c#"));  // Output: ""
console.log(processBackspaces("abc#d##c"));      // Output: "ac"
