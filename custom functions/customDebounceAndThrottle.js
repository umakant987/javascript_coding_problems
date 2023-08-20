function debounce(callback, delay = 1000) {
    var time;
    return (...args) => {
        clearTimeout(time);
        time = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

// const log = debounce(console.log, 2000);
// log('Hi');    // cancelled
// log('Hey');   // cancelled
// log('Hello'); // Logged at t=100ms


function throttle(callback, delay = 1000) {
    let shouldWait = false;

    return (...args) => {
        if (shouldWait) return;

        callback(...args);
        shouldWait = true;
        setTimeout(() => {
            shouldWait = false;
        }, delay);
    };
}

const logT = throttle(console.log, 2000);
const interval = setInterval(() => {
    console.log("From setInterval")
    logT('Hi from throttle');
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 8000)