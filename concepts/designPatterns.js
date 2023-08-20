// SingleTon

// Example 0 : Created by me
let mySingleton = (function () {
    let instance;
    // let instanaceName;
    function createInstance(name) {
        // instanaceName = name;
        return {
            getName: function () {
                // return instanaceName;
                return name;
            }
        }
    }
    return {
        getInstance: function (name) {
            if (!instance) {
                instance = createInstance(name);
            }
            return instance;
        }
    }
})();

let Winner = mySingleton.getInstance('Winner');
let WinnerName = Winner.getName();
console.log(WinnerName); // Winner

let Looser = mySingleton.getInstance('Looser');
let LooserName = Looser.getName();
console.log(LooserName); // Winner

// Example 1
const Singleton = (function () {
    let instance;

    function createInstance() {
        // Private constructor
        return { /* Your singleton object properties */ };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
const obj1 = Singleton.getInstance();
const obj2 = Singleton.getInstance();

console.log(obj1 === obj2); // true (both obj1 and obj2 point to the same instance)

//Example 2:
let CreateSingleton = (function () {
    let instance;
    return function (name) {
        if (instance) {
            return instance;
        }
        this.name = name;
        return instance = this;
    }
})();
CreateSingleton.prototype.getName = function () {
    console.log(this.name);
}

let Winner1 = new CreateSingleton('Winner'); // Winner
let Looser1 = new CreateSingleton('Looser'); // Winner


// Example 3:
export const config = {
    env: 'prod',
    baseUrl: 'http://abc.com'
}

Object.freeze(config);

//***********************************************************************************
// Factory 
// Example 1
// Define a constructor function for different types of products
function Product(name, price) {
    this.name = name;
    this.price = price;
}

// Create a factory function that will produce different types of products
function ProductFactory() {
    // The factory method
    this.createProduct = function (type) {
        switch (type) {
            case "book":
                return new Product("Book", 10);
            case "shirt":
                return new Product("Shirt", 20);
            case "shoes":
                return new Product("Shoes", 50);
            default:
                throw new Error("Invalid product type.");
        }
    };
}

// Usage:
const factory = new ProductFactory();

const book = factory.createProduct("book");
console.log(book); // Output: Product { name: "Book", price: 10 }

const shirt = factory.createProduct("shirt");
console.log(shirt); // Output: Product { name: "Shirt", price: 20 }

const shoes = factory.createProduct("shoes");
console.log(shoes); // Output: Product { name: "Shoes", price: 50 }


//Example 2
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getInfo() {
        return `${this.make} ${this.model}`;
    }
}

class Motorcycle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    getInfo() {
        return `${this.make} ${this.model}`;
    }
}

// Factory
function createVehicle(type, make, model) {
    switch (type) {
        case 'car':
            return new Car(make, model);
        case 'motorcycle':
            return new Motorcycle(make, model);
        default:
            throw new Error('Invalid vehicle type');
    }
}

// Usage
const vehicle1 = createVehicle('car', 'Toyota', 'Corolla');
const vehicle2 = createVehicle('motorcycle', 'Harley-Davidson', 'Sportster');

console.log(vehicle1.getInfo()); // "Toyota Corolla"
console.log(vehicle2.getInfo()); // "Harley-Davidson Sportster"

//**************************************************************************
// Observer
class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers(data) {
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }

    update(data) {
        console.log(`${this.name} received update: ${data}`);
    }
}

// Usage
const subject = new Subject();
const observer1 = new Observer('Observer 1');
const observer2 = new Observer('Observer 2');

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Some data has changed.');
// Output:
// Observer 1 received update: Some data has changed.
// Observer 2 received update: Some data has changed.

subject.removeObserver(observer2);

subject.notifyObservers('Another update.');
// Output:
// Observer 1 received update: Another update.


//*************************************************************************
//Module Pattern
// by using closure we expose an object
// as a public API which manages the private objects array
var collection = (function () {
    // private members
    var objects = [];

    // public members
    return {
        addObject: function (object) {
            objects.push(object);
        },
        removeObject: function (object) {
            var index = objects.indexOf(object);
            if (index >= 0) {
                objects.splice(index, 1);
            }
        },
        getObjects: function () {
            return JSON.parse(JSON.stringify(objects));
        }
    };
})();

collection.addObject("Bob");
collection.addObject("Alice");
collection.addObject("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(collection.getObjects());
collection.removeObject("Alice");
// prints ["Bob", "Franck"]
console.log(collection.getObjects());



//************************************************************************8 
//Revealing Module Pattern 
// we write the entire object logic as private members and
// expose an anonymous object which maps the members we wish to reveal
// to their corresponding public members
var namesCollection = (function () {
    // private members
    var objects = [];

    function addObject(object) {
        objects.push(object);
    }

    function removeObject(object) {
        var index = objects.indexOf(object);
        if (index >= 0) {
            objects.splice(index, 1);
        }
    }

    function getObjects() {
        return JSON.parse(JSON.stringify(objects));
    }

    // public members
    return {
        addName: addObject,
        removeName: removeObject,
        getNames: getObjects
    };
})();

namesCollection.addName("Bob");
namesCollection.addName("Alice");
namesCollection.addName("Franck");
// prints ["Bob", "Alice", "Franck"]
console.log(namesCollection.getNames());
namesCollection.removeName("Alice");
// prints ["Bob", "Franck"]
console.log(namesCollection.getNames());