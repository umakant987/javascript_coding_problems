// 30 Seconds of Iterview
var myObject = {
    property: this,
    regularFunction: function () {
        return this
    },
    arrowFunction: () => {
        return this
    },
    iife: (function () {
        return this
    })()
}
myObject.regularFunction() // myObject
myObject["regularFunction"]() // my Object

myObject.property // NOT myObject; lexical `this`
myObject.arrowFunction() // NOT myObject; lexical `this`
myObject.iife // NOT myObject; lexical `this`
const regularFunction = myObject.regularFunction
regularFunction() // NOT myObject; lexical `this`


// w3
/* Preserving this
When a function is used as a callback, this is lost. */

const person = {
    name: "Umakant",
    displayName: function () {
        console.log(this.name);
    }
}

setTimeout(person.displayName, 3000); // undefined
setTimeout(person.displayName.bind(person), 3000); // Umakant

// Lenovo: Nitin Lavaniya
const obj = {
    name: 'abc',
    greeting: function () {
        console.log('Hello, ' + this.name)
    }
}

setTimeout(obj.greeting, 1000);