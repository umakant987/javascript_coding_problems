/* call, apply, bind
- built-in methods available on every javascript functions
- helps to preserve/retain this reference inside functions.
call  - used to call a function with a specified this value and individual arguments 
      - takes arguments seperately
apply - similar to call, but it accepts an array-like object as its second argument.
      - takes arguments as an array 
*/

// call and apply without arguments
/*  const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
 }
 const person1 = {
  firstName:"John",
  lastName: "Doe"
 }
 const person2 = {
  firstName:"Mary",
  lastName: "Doe"
 }
 
 console.log(person.fullName.call(person1)); // John Doe
 console.log(person.fullName.apply(person2)); // Mary Doe */

// call and apply with arguments
/* const person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}

const person1 = {
  firstName:"John",
  lastName: "Doe"
}

console.log(person.fullName.call(person1, "Pune", "India"));
console.log(person.fullName.apply(person1, ["Oslo", "Norway"])); */

// Example 2 : apply
const numbers = [2, 4, 6, 8, 10];

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

const result = sum.apply(null, numbers);
console.log(result);
// Output: 30


/* bind()
- borrow's a method from another object.
- It creates a new function with a specified this value and initial arguments. 
- The bound function can be invoked later with additional arguments if needed 
*/
const car = {
  brand: 'Tata',
  showBrand: function () {
    console.log(`This car's brand is ${this.brand}.`);
  }
};

const mycar = {
  brand: 'Honda'
};

const showMyCarBrand = car.showBrand.bind(mycar);
showMyCarBrand();
// Output: "This car's brand is Honda."