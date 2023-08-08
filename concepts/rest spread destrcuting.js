//Shallow Vs Deep copy : Spread Operators to copy objects and arrays
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
let numArrForRest = [1, 2, 3, 4, 5];

function restSum(a, b, ...rest) {
    let sum = 0;
    sum = a + b;
    for (let i = 0; i < rest.length; i++) {
        sum = sum + rest[i];
    }
    return sum;
}

let restSumResult = restSum(1, 2, 3, 4, 5);
// let restSumResult = restSum(...numArrForRest);
console.log("restSumResult<<<>>>", restSumResult);


// Using Array Destructuring to Extract Values from an Array to a Function’s Parameters
function getUserBio([firstName, lastName]) {
    return `My name is ${firstName} ${lastName}.`;
}

const profile = ["Umakant", "Lakhawar"];
console.log("getUserBio>>>", getUserBio(profile));