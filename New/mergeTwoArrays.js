const mergeSortedArr = (a1, a2) => {
    let i = 0,
        j = 0,
        result = [];

    while (a1.length > i && a2.length > j) {
        if (a1[i] <= a2[j]) {
            result.push(a1[i]);
            i++;
        } else {
            result.push(a2[j]);
            j++;
        }
    }

    while (a1.length > i) {
        result.push(a1[i]);
        i++;
    }

    while (a2.length > j) {
        result.push(a1[j]);
        j++;
    }

    return result;
};

const arr1 = [10, 20, 30, 45, 50]
const arr2 = [15, 25, 26, 35]
const result = mergeSortedArr(arr1, arr2);
console.log("sortedArray", result);
