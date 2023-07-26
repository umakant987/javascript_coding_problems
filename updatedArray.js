//3. Convert input array to output array as shown below ?

var InputArr = [{ p: 4 }, { p: 2 }, { p: 9 }, { p: 6 }];
// var outputArr = [{ p: 2 }, {}, { p: 4 }, {}, { p: 6 }, {}, {}, { p: 9 }];

const updateArr = (arr) => {
    let result = [];
    arr = arr.sort((a, b) => a.p - b.p);
    // console.log(arr);

    // for (let i = 0; i < arr.length; i++) {
    //     // console.log(arr[i], i, arr.length - 1);
    //     if (i === 0) {
    //         result.push(arr[i]);
    //     } else {
    //         result.push({}, arr[i]);
    //     }
    // }

    for (let val of arr) {
        for (let i = 2; i <= 9; i++) {
            if (val.p == i && i <= val.p) {
                result.push(val);
            } else {
                result.push({});
            }
        }
    }

    // for (let i = 2; i <= 9; i++) {
    //     for (let val of arr) {
    //         if (!(val.p == i)) {
    //             result.push({});
    //         } else {
    //             result.push(val);
    //         }
    //     }
    // }

    return result;
};

const result = updateArr(InputArr);
console.log(result);
