// "use strict";

//! JavaScript Context

//^ Understand when the original context is lost inside of a method
//^ Predict the context inside of a function
//^ Bind the ocntext of a method to an object
//^ Change the context of a function using call and apply
//^ Compare and contrast context in normal functions and arrow functions

//Scope and context are distinct and separate ideas

//* Scope refers to the visiblility and availability of variables
//* Context refers to the value of the 'this' keyword when code is executed

// As a programmer, you will need to know how to:

// 1. Define a method that references 'this' on an object
// 2. Identify what 'this' refers to in a code snippet

//! THIS

// A METHOD is a function that belongs to an object.
// 'this' isp resent in every function and evaluates to the object that is currently invoking that function
// the value of 'this' relies entirely on WHERE a function is invoked.

// class Dog {
//     constructor(name, isSitting) {
//         this.name = name;
//         this.isSitting = isSitting;
//     }

//     stand() {
//         this.isSitting = false;
//         return this.isSitting;
//     }

//     test() {
//         return this === dog;
//     }
// }

// let dog = new Dog("Bowser", true)

// //Bowser is is sitting
// console.log(dog.isSitting); // returns 'true'

// //make Bowser stand
// console.log(dog.stand()); // returns 'false'

// //now he's standing
// console.log(dog.isSitting); // returns 'false'

// // The 'this' keyword refers to the object that is calling a method.
// // When we call dog.stand() and you invoke the code of the 'stand' method, 'this' refers to the 'dog' object.

// dog = new Dog();

// console.log(dog.test()); // returns 'true' because the dog is sitting.

//^ so 'dog' is 'this' because dog is the object that the method is called on (dog.test()). If it was cat.test(), then 'this' would refer to 'cat' instead.

// class Cat {
//     purr() {
//         console.log("meow");
//     }

//     purrMore() {
//         this.purr();
//     }
// }

// let cat = new Cat();
// let cat2 = new Cat();

// cat.purrMore();
// cat2.purrMore();

// By using the 'this' variable in the 'purrMore()' instance method, we are able to call the method on 'this' cat (whichever instance of the Cat class that we're currently calling the method on) because 'this' refers to the object (instance) that the function is called on.

// So CONTEXT refers to the value of 'this' within a function and 'this' refers to WHERE a function is invoked. I would also phrase this:

// Context refers to the value of 'this,' which reflects the object that a function is called upon.

//! Issues with Scope and Context

// With respect to context, the value of 'this' is determined by HOW a function is invoked.
// when we use METHOD-STYLE INVOCATION (like we do when we define instance methods within classes, etc), 'this' is set to the object the method was called upon.

//^ But what is 'this' when we use normal FUNCTION-STYLE INVOCATION?

// function testMe() {
//     console.log(this);
// }

// testMe(); // prints "Object [global] { etc..."

//^ In the function above, 'this' is set to the 'global' object.
// Functions that you invoke will always have both a CONTEXT and a SCOPE.

// Functions in node that are not defined on an object (as a method on a class, etc) have the global object as their 'this' (their context)

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }

//     changeName() {
//         return this.name = "Layla";
//     }
// }

// let dog = new Dog("Bowser");

// let change = dog.changeName();
// console.log(change);

// console.log(dog);

// =======================================================

// const hello = () => console.log("hello!");

// global.setTimeout(hello, 5000); // waits 5sec then prints "hello!"

// class Cat {
//     purr() {
//         console.log("meow");
//     }

//     purrMore() {
//         this.purr();
//     }
// }

// let cat = new Cat();

// global.setTimeout(cat.purrMore, 5000); // TypeError: this.purr is not a function

//^ There is a very complicated eplanation for why this function call results in a TypeError. For now, just know that you cannot call an instance method from within ANOTHER instance method using the setTimeout function. If you try, JavaScript throws an error.

//! Strictly Protecting the Global Object

// JavaScript has something called 'strict mode.' This mode was released in ECMAScript version 5.

// JavaScript's default mode/environment is referred to as 'sloppy mode.'

// You can run JavaScript in STRICT MODE by adding the command (string) //^ "use strict"; at the top of your file.

// Regularly, the GLOBAL OBJECT is the context of functions that are invoked in Node (using regular function definition, meaning that he functions are not defined explicitly on declared objects)

// So referencing 'this' within a regular function will give us access to the global object:

// function hello() {
//     console.log(this);
// }

// hello(); // accesses the global object

// hello(); // AFTER we put "use strict"; at the top of our file, returns undefined. Won't let us access the global object.

//! Summary

// How to define a method that references 'this' on an object
// Identify what 'this' refers to in a code snippet

//! Context in Regular Functions Quiz

// class Person {
//     constructor(firstName) {
//         this.firstName = firstName;
//     }

//     printName() {
//         console.log(this.firstName);
//     }
// }

// const johnny = new Person("Johnny");

// function hello() {
//     console.log(`Hello ${this.firstName}`)
// }

// const greeting = new hello();

// const brian = new Person("Brian");
// brian.printName();

// const adrian = new Person('Adrian');

// printName();

// //! ======================================= Bind ============================================

// // We have established that there are places where context is lost.

// //^ Binding a context to a function solves this problem.

// // As a programmer, you will need to know how to:

// //* Bind the context of a method to an object
// //* Understand what the 'bind' function returns and the functionality of the results

// // The operational definition of "function.prototype.bind" is:

// //& "The simplest use of 'bind()' is to make a function that no matter how it is called, retains a specific context ('this' value)"

// // let boundFunc = func.bind(context);

// // when bind() is called, it returns what is called an //^ exotic function.

// //* An exotic function is a function that retains its context ('this' value) no matter where/how it is invoked.

// // class Cat {
// //     purr() {
// //       console.log("meow");
// //     }

// //     purrMore() {
// //       this.purr();
// //     }
// //   }
// //   let cat = new Cat();

// //   let sayMeow = cat.purrMore;
// //   sayMeow(); // TypeError: this.purr is not a function

// //   // You can now use the built in Function.bind to ensure your context, `this`,
// //   // is the cat object
// //   let boundCat = sayMeow.bind(cat);

// //   // You still *need* to invoke the function
// //   boundCat(); // prints "meow"

//   //! I literally copied this from the notes and it still prints an error that is never mentioned in the notes. This does not work the way that they say that it does. I don't understand the purpose of this 'bind' bullshit. Skipping this shit. It doesn't work.

//   class Cat {
//     constructor(name) {
//       this.name = name;
//     }
//     sayName() {
//         console.log(this.name);
//     }
//   }

//   let cat = new Cat("Meowser");

//   class Dog {
//     constructor(name) {
//       this.name = name;
//     }
//   }

//   let dog = new Dog("Fido");

//   let sayNameFunc = cat.sayName;

//   let sayHelloCat = sayNameFunc.bind(cat);
//   sayHelloCat(); // prints Meowser

//   let sayHelloDog = sayNameFunc.bind(dog);
//   sayHelloDog(); // prints Fido

  //! Ok, this copied code works for reasons that I don't understand. Skip.

  //! Nope. Just gonna come back when I"m less irritated, since apparently this half-broken 'bind' function is important.

  //! ALRIGHT, let's try this again.

  //! ============================== BIND =====================================

  // As a programmer, you will need to know how to:

  //^ Bind the conte a method to an object.

//^ Understand what the 'bind()' function returns and how its result functions

//& "The simplest use of bind() is to produce a function that retains a particular context ('this' value) no matter where or how it is called"

//From MDN (Function.prototype.bind()):

const module1 = { // initialize an object called 'module1'
    x: 42, // create a key-value pair key: x, value: 42
    getX: function () { // write a function that returns the value of 'this' for 'x'
        return this.x;
    },
}

const unboundGetX = module1.getX;

console.log(unboundGetX()); // Here, we try to invoke the function at the global scope. This means that the 'context' ('this' value) of 'x' would be the global object. But x is not defined in the global scope. Thus, we return 'undefined'.

const boundGetX = unboundGetX.bind(module1); // Here, we invoke the function with the 'bind' method with the argument 'module1'. This binds the context of the function to 'module1,' which is the context in which the key-value pair exists and within which the function was initially declared.

console.log(boundGetX()); //Because we bound the context to the module1 object, it retains this context even when we call the function in the global scope. Thus, we are able to invoke the function in the global scope using the bind() method to return the intended value of 42.
