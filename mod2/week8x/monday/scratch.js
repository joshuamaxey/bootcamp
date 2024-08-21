//! Three Kinds of Context

// function context
// class context
// global context

function func() {
    console.log(this)
};

func(); // global context

/* <ref *1> Object [global] {
  global: [Circular *1],
  queueMicrotask: [Function: queueMicrotask],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  structuredClone: [Getter/Setter],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [AsyncFunction: fetch]
} */

const person = {
    name: "Joshua",
    greet: function() {
        console.log(`${this.name} says hi!`)
    }
};

person.greet(); // Joshua says hi!

// 'this' refers to the object that we're calling the function on

person2 = {
    name: "Robert"
};

person2.greet = person.greet;

person2.greet(); // Robert says hi!

// 'this' refers to whichever object the method is called on. In this case, it's 'Robert'

class Dog {
    constructor(name) {
        this.name = name;
    }

    bark() {
        console.log(`${this.name} barks!`)
    }
}

const macy = new Dog("Macy");

let macyBark = macy.bark;

macy.bark(); // Macy barks!

// macyBark(); // TypeError! We lose the context of the method when we try to call the variable that we've used to save the method call.

let macyBarkBound = macy.bark.bind(macy);

macyBarkBound(); // Macy barks! We can bind the context to the macy object so that macy remains the context of the method no matter where we call it.

// setTimeout(macy.bark(), 2000); // Throws an error because we lose the context of the method and the 'timeout' object becomes the context. Since the Timeout object doesn't have this method (or a .name property), this causes an error to be thrown.

setTimeout(macy.bark.bind(macy), 4000) // prints 'Macy barks'! We can use the .bind() method to bind the context of the .bark() method to the 'macy' object so that we don't lose the context when we use the setTimeout() method.

//! Functions are First-Class Objects

//^ This means:

// Functions can be returned from functions
// Functions can be stored in a variable
// Functions can be passed into functions as a parameter (callbacks)

// When we pass a function around or assign it to a variable, it may lose its original execution context.

// Arrow function definition, as well as the .bind(), .call(), and .apply() methods provide a solution to this problem.

function greet(greeting, timeOfDay) {
    console.log(greeting + ", " + this.name + "! " + "Good " + timeOfDay + "!");
}

const person3 = {name: "Bob"};
const person4 = {name: "Chuck"}

greet.call(person3, "Hi", "morning") // Here, our first argument is the CONTEXT that we want to use (the person3 object), next is the argument required for by the function we're calling (in this case, the greeting) //^ Prints "Hi, Bob! Good morning!"

const greetBob = greet.bind(person3) // Because .bind() creates a function that we can call multiple times, we do not need to pass in the arguments for the function here. WE only pass in the context.

greetBob("Hello", "afternoon") // Prints "Hello, Bob! Good afternoon!"
