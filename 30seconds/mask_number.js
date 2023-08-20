// Create a function that masks a string of characters with # except for the last four (4) characters.
// mask("123456789") // "#####6789"

const mask = (str, maskChar = "#") =>
    maskChar.repeat(str.slice(0, -4).length) + str.slice(-4)

const input = "123456789";
const result = mask(input, '*');
console.log(result);