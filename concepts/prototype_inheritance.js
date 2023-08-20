// https://javascript.info/prototype-inheritance
// https://www.freecodecamp.org/news/prototypes-and-inheritance-in-javascript/

const arr = [1, 2, 3]
const arrProto = Object.getPrototypeOf(arr)      // array proto
const objectProto = Object.getPrototypeOf(arrProto) // object proto
console.log(Object.getPrototypeOf(objectProto))  // null

// Properties
let animal = {
    eats: true
};
let rabbit = {
    jumps: true
};

rabbit.__proto__ = animal; // (*)

// we can find both properties in rabbit now:
console.log(rabbit.eats); // true (**)
console.log(rabbit.jumps); // true


// Methods
let animal = {
    eats: true,
    walk() {
        console.log("Animal walk");
    }
};

let rabbit = {
    jumps: true,
    __proto__: animal
};

let longEar = {
    earLength: 10,
    __proto__: rabbit
};

// walk is taken from the prototype chain
longEar.walk(); // Animal walk
console.log(longEar.jumps); // true (from rabbit)



// Writing doesn’t use prototype
let animal = {
    eats: true,
    walk() {
        /* this method won't be used by rabbit */
        console.log("Animal! Bounce-bounce!");
    }
};

let rabbit = {
    __proto__: animal
};

rabbit.walk = function () {
    console.log("Rabbit! Bounce-bounce!");
};

rabbit.walk(); // Rabbit! Bounce-bounce!



// getter setter properties
let user = {
    name: "John",
    surname: "Smith",

    set fullName(value) {
        [this.name, this.surname] = value.split(" ");
    },

    get fullName() {
        return `${this.name} ${this.surname}`;
    }
};

let admin = {
    __proto__: user,
    isAdmin: true
};

// console.log(admin.fullName); // John Smith (*)

// // setter triggers!
// admin.fullName = "Alice Cooper"; // (**)

// console.log(admin.fullName); // Alice Cooper, state of admin modified
// console.log(user.fullName); // John Smith, state of user protected