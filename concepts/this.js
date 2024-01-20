// 30 Seconds of Interview
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



/* Preserving this
When a regular function is used as a callback, this is lost. 
Solution:
1. Either convert regular function to arrow function
2. Or use fn.bind(this)
*/

// Lenovo: Nitin Lavaniya
const object = {
    name: 'abc',
    greeting: function () {
        console.log('Hello, ' + this.name)
    }
}
setTimeout(object.greeting, 1000);  // Hello, undefined   => in strict mode
setTimeout(object.greeting, 1000);  // Hello

const person = {
    name: "Rahul",
    displayName: function () {
        console.log('Hello, ' + this.name);
    }
}

const person2 = {
    name: "Rahul2",
    displayName: () => {    // changed to arrow funtion
        console.log('Hello2, ' + this.name);
    }
}

// in strict mode 
setTimeout(person.displayName, 3000); // // Hello, undefined
setTimeout(person.displayName.bind(person), 3000); // // Hello, Rahul
setTimeout(person2.displayName, 3000); // // Hello2, undefined

// in normal mode 
setTimeout(person.displayName, 3000); // // Hello, 
setTimeout(person.displayName.bind(person), 3000); // // Hello, Rahul
setTimeout(person2.displayName, 3000); // // Hello2,



// Improve below code
// Unwanted this
// Because this can change depending on the scope, it can have unexpected values when using regular functions.

var obj = {
  arr: [1, 2, 3],
  doubleArr() {
    return this.arr.map(function(value) {
      // this is now this.arr   => arr doesn't have double()
      return this.double(value)
    })
  },
  double() {
    return value * 2
  }
}
obj.doubleArr() // Uncaught TypeError: this.double is not a function

// improved code
var obj2 = {
    arr: [1, 2, 3],
    doubleArr() {
        return this.arr.map((value) => {
            // Now 'this' refers to the outer scope (obj2)
            return this.double(value);
        });
    },
    double(value) {
        return value * 2;
    }
};
console.log(obj2.doubleArr()); // Output: [2, 4, 6]  


// Event listeners
// this refers to the element listening to the event.
document.body.addEventListener("click", function() {
  console.log(this) // document.body
})

// Constructors
// this refers to the newly created object.
class Example {
  constructor() {
    console.log(this) // myExample
  }
}
const myExample = new Example()

// Manual
// With call() and apply(), this refers to the object passed as the first argument.
var myFunction = function() {
  return this
}
myFunction.call({ customThis: true }) // { customThis: true }
