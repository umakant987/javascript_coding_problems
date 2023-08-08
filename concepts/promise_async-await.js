// promise and async await

// Promise:  Promise is an object representing intermediate state of operation which is guaranteed to complete 
// its execution at some point in future.
const promise = new Promise(function (resolve, reject) {
    const string1 = "geeksforgeeks";
    const string2 = "geeksforgeeks";
    if (string1 === string2) {
        resolve();
    } else {
        reject();
    }
});

promise
    .then(function () {
        console.log("Promise resolved successfully");
    })
    .catch(function () {
        console.log("Promise is rejected");
    });


// async await
// - syntactic sugar for promises
// - is used to work with promises in asynchronous functions
// - makes asynchronous code look more like synchronous/procedural code
// - we can avoid promise.chaining
// - Error handling is done using .try() and .catch() methods.

const helperPromise = function () {
    const promise = new Promise(function (resolve, reject) {
        const x = "geeksforgeeks";
        const y = "geeksforgeeks";
        if (x === y) {
            resolve("Strings are same");
        } else {
            reject("Strings are not same");
        }
    });

    return promise;
};

async function demoPromise() {
    try {
        let message = await helperPromise();
        console.log(message);
    } catch (error) {
        console.log("Error: " + error);
    }
}

demoPromise();


