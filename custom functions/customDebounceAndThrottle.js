function debounce(callback, delay = 1000) {
    var time;
    return (...args) => {
        clearTimeout(time);
        time = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

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