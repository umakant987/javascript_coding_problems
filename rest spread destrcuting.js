//Shallow Vs Deep copy :Spread Operators to copy objects and arrays
const a = [1, 2, 3]
let b = [...a]

const obj = { firstname: 'Umakant' };
let newObj = { ...obj };
// console.log("Obj ", obj);
// console.log("newObj", newObj);


//Spread Operator
function myBioSpread(firstName, lastName, company) {
    return `${firstName} ${lastName} works at ${company}`;
}
const resultSpread = myBioSpread(...['umakant', 'lakhawar', 'EPAM']);
console.log(resultSpread);


//Rest Operator 
function myBio(firstName, lastName, ...otherInfo) {
    return otherInfo;
}
const resultMyBio = myBio('umakant', 'lakhawar', 'Male', 30, 'Web Developer');
console.log(resultMyBio);


//How to Use Array Destructuring to Extract Values from an Array to a Function’s Parameters

// Define an array with two items:
const profile = ["Oluwatobi", "Sofela"];

// Define a function with one destructuring array containing two parameters:
function getUserBio([firstName, lastName]) {
    return `My name is ${firstName} ${lastName}.`;
}

// Invoke getUserBio while passing the profile array as an argument:
getUserBio(profile);

// The invocation above will return:
"My name is Oluwatobi Sofela."z