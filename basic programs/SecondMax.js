//1. Second Highest using Math.max.apply and splice(producess incorrect result if there are duplicate elements in the array)
function secondHighest() {
    let myArr = [4, 45, 45, 3, 4, 8];
    /*   let max = Math.max.apply(null,myArr); */
    let max = Math.max(...myArr);
    myArr.splice(myArr.indexOf(max), 1);
    return Math.max.apply(null, myArr);
}

var result = secondHighest();
console.log("Second Highest using Math.max.apply", result);


// 2. Second Highest using sort
// here's your array :
var stringArray = new Array('20', '120', '111', '215', '215', '54', '78');

// let's convert it to a real array of numbers, not of strings :
var numArray = stringArray.map(Number);

// now let's sort it and take the second element :
var second = numArray.sort(function (a, b) { return b - a })[1];
console.log("Second Highest using sort", second);



//************************************************************************************************ */
//Both of the above two ways gives incorrect second highest if there are duplicate highest number in the array
//Below two ways are correct:

// using sort with filter
let myArr = [4, 45, 45, 3, 4, 8];
function secondHighestUsingSort(myArray) {
    let numArray = myArray.map(Number);
    numArray.sort(function (a, b) {
        return b - a;
    })
    var filteredArr = numArray.filter((x) => x != numArray[0]);  //filter out the largest element
    console.log("Second Highest using sort", filteredArr[0]);
}

secondHighestUsingSort(myArr);

//using Math.max.apply and filter
function secondHighestUsingMathMax(myArray) {
    var largest = Math.max.apply(null, myArray);
    var filteredArr = myArray.filter((x) => x != largest);  //filter out the largest element
    var secondLargest = Math.max.apply(null, filteredArr)
    console.log("Second Highest using Math.max.apply", secondLargest);
}

secondHighestUsingMathMax(myArr);

//************************************************************************************************************** */
// secondMax without js functions like Math.max(), sort etc

// Custom Second max third way
let secondMax = (nums) => {
    let max, secondMax;
    if (nums[0] > nums[1]) {
        max = nums[0];
        secondMax = nums[1];
    } else {
        max = nums[1];
        secondMax = nums[0];
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
        } else {
            secondMax = nums[i];
        }
    }

    return secondMax;
}


/* const result = firstMax(nums);
console.log(result); */

const r = secondMax(nums);
console.log(r);