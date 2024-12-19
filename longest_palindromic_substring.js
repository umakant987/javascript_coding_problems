// longest palindromic substring: Brute Force Technique
// Other techniques => "expand around center, DP-Dynamic programming
/* Given a string str, the task is to find the longest substring which is a palindrome. */

/* Examples:
Input: str = “forgeeksskeegfor” 
Output: “geeksskeeg”
Explanation: There are several possible palindromic substrings like “kssk”, “ss”, “eeksskee” etc. But the substring “geeksskeeg” is the longest among all.

Input: str = “Geeks” 
Output: “ee” */

function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function longestPalindrome(s) {
    let maxLength = 0;
    let longestPalin = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            let substr = s.substring(i, j + 1);
            if (isPalindrome(substr) && substr.length > maxLength) {
                maxLength = substr.length;
                longestPalin = substr;
            }
        }
    }

    return longestPalin;
}

// Example usage:
let s = "babad";
console.log(longestPalindrome(s)); // Output: "bab" or "aba"

s = "cbbd";
console.log(longestPalindrome(s)); // Output: "bb"


s = "forgeeksskeegfor";
console.log(longestPalindrome(s)); // Output: "bb"


// Asked Nagaraj in EPAM Interview
/* function isPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

function hasPalindromeSubstring(word) {
    const len = word.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= len; j++) {
            const substring = word.substring(i, j);
            if (isPalindrome(substring)) {
                return true;
            }
        }
    }
    return false;
} */



