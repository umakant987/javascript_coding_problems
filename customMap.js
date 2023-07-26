// custom map filter and reduce 
//https://www.freecodecamp.org/news/how-to-write-your-own-map-filter-and-reduce-functions-in-javascript-ab1e35679d26/

// map
const map = function (mapArr, mapFunc) {
    let resultArr = [];
    for (let i = 0; i < mapArr.length; i++) {
        let r = mapFunc(mapArr[i], i, mapArr);
        resultArr.push(r);
    }
    return resultArr;
}

let arr = [1, 2, 3, 4, 5];
let square = num => num ** 2;
let result = map(arr, square);
console.log(result);


///////////////////////////////////////////////////////////////////////////
// reduce 
const reduce = function (arr, reducerFunc, initialValue) {
    let accumulator = initialValue === undefined ? 0 : initialValue;
    for (let i = 0; i < arr.length; i++) {
        accumulator = reducerFunc(accumulator, arr[i], i, arr);
    }
    return accumulator;
}

let arr2 = [1, 2, 3, 4, 5]
let sum = (accumulator, currentValue) => accumulator + currentValue;
let result2 = reduce(arr2, sum, 0);
console.log(result2);


/////////////////////////////////////////////////////////////////////////
// filter
const filter = function (arr, filterFunc) {
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        let result = filterFunc(arr[i], i, arr);
        if (result) {
            resultArr.push(arr[i]);
        }
    }
    return resultArr;
}

let arr3 = [1, 2, 3, 4, 5, 6]
let even = num => num % 2 === 0;
let result3 = filter(arr3, even);
console.log(result3);