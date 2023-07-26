var sum = function (a) {
    return function (b) {
        return a + b;
    }
};

//first way
var sum1 = sum(2);
var result = sum1(3);
sum1(6);
sum1(8)
// console.log(result);

//second way
var result2 = sum(2)(5);
// console.log(result2);


function add(a, b) {
    return a + b;
}

// console.log(add(1, 2));
// console.log(add(2, 3));

/////////////////////////////////////////////////////
