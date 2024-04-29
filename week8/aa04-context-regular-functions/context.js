function eat() {
  console.log(`${this.name} eats fish food`);
}

class Fish {
  constructor(name) {
    this.name = name;
  }

  swim() {
    console.log(`${this.name} swimming in the water`);
  }
}

const nemo = new Fish('Nemo');

/********************************* Scenario 1 *********************************/
eat(); // ?

//^ Guess: "undefined eats fish food"
// Actual: "undefined eats fish food"

//! The default value for most things in JavaScript is 'undefined.' so if we call this function without an argument, the argument should default to undefined. And undefined.name = undefined. So invoking the function without any arguments should log "undefined eats fish food" to the console.


/********************************* Scenario 2 *********************************/
nemo.eat = eat;
nemo.eat(); // ?

//^ Guess: "Nemo eats fish food"
// Actual: "Nemo eats fish food"

//! With respect to this code, invoking the 'eat()' function on Nemo will return the string 'Nemo eats fish food' since Nemo is a regular object with a name property, which is what the function expects.

/********************************* Scenario 3 *********************************/
nemo.eat = eat;
eat(); // ?

//^ Guess: "Nemo eats fish food";
// Actual: "Undefined eats fish food";

//! Here we return undefined because we're calling the 'eat()' function directly without any parameters, the same as in the first example above ^^. So we get undefined.name, which returns undefined. Assigning the variable first in this case is irrelevant to the output of this code.



/********************************* Scenario 4 *********************************/
nemo.swim(); // ?

//^ Guess: "Nemo swimming in the water"
// Actual: "Nemo swimming in the water"

//! Here, we're just invoking the swim() instance method on the nemo instance of the Fish class. Clear and simple.


/********************************* Scenario 5 *********************************/
const swim = nemo.swim;
swim(); // ?

//^ Guess: "undefined swimming in the water"
// Actual: TypeError: Cannot read properties of undefined (reading 'name')

//! I think this error occurs because we're calling the swim() instance method without any arguments.
