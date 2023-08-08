//5. write a code to check if any anagram of a string is palindrome or not i.e  Check if characters of a given string can be rearranged to form a palindrome.
//Solution: Count the frequency of each character in the string. If there is only one character, whose frequency is odd, and rest of the frequencies are even, 
//then print Yes, otherwise print No.

// Anagram => a word, phrase formed by rearranging the letters of another word.

function isAnagramOfStrIsPalindrome(str) {
    const obj = {};

    // for (let i = 0; i < str.length; i++) {
    //     obj[str[i]] = ++obj[str[i]] || 1;
    // }
    // create object with count of each character in the string.
    for (let i = 0; i < str.length; i++) {
        if (str[i] in obj) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }

    let count = 0;
    // for (let i in obj) {
    //     if (obj[i] % 2 === 1) {
    //         count++;
    //     }
    // }

    // Iterate through the values
    for (const val of Object.values(obj)) {
        // To check odd or not
        if (val % 2 === 1) {
            count++;
        }
    }


    if (count > 1) {
        return false;
    }
    return true;
}

const result1 = isAnagramOfStrIsPalindrome("geeksogeeks");
console.log(result1);  //true
const result2 = isAnagramOfStrIsPalindrome("geeksforgeeks");
console.log(result2);  //false
const result3 = isAnagramOfStrIsPalindrome("ACBDABD");
console.log(result3); //true