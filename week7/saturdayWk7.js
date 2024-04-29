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

//* From MDN (Function.prototype.bind()):

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

//* The syntax for the 'bind()' method is: bind(thisArg) and may include other arguments: bind(thisArg, arg1, arg2), etc

// Or, as described in the reading: //* let boundFunc = func.bind(context)

// class Cat {
//     purr() {
//         console.log("meow");
//     }

//     purrMore() {
//         this.purr();
//     }
// }

// let cat = new Cat();

// let sayMeow = cat.purrMore;

// sayMeow();

// I am still NOT getting the error message that the reading says I should be getting here. My console reads:

//^ TypeError: Cannot read properties of undefined (reading 'purr')

// The reading says my console should read:

//^ TypeError: this.purr is not a function

//so ?

// let boundCat = sayMeow.bind(cat);

// boundCat();

// The reading says that 'boundCat()' above should print 'meow' as expected. It does not. Instead, it throws the error:

//^ ReferenceError: sayMeow is not defined

// MDN's example worked correctly, so I'm gonna stick with that definition and example of how 'bind()' is supposed to work. This is my second time through these examples, my code is exactly the same as the code in the reading, but none of the results match.

// I'm gonna comment out the code above and move on to the next example to see if it functions correctly.

class Cat {
    constructor(name) {
        this.name = name;
    }

    sayName() {
        console.log(this.name);
    }
}

let cat = new Cat("Meowser")

class Dog {
    constructor(name) {
        this.name = name;
    }
}

let dog = new Dog("Fido");

let sayNameFunc = cat.sayName;

let sayHelloCat = sayNameFunc.bind(cat);
sayHelloCat(); //prints "Meowser"

let sayHelloDog = sayNameFunc.bind(dog);
sayHelloDog(); //prints "Fido"

// Ok, these are working correctly. Maybe the previous functions are an anomaly or somehow I keyed the code wrong TWICE (though I doubt it because the first time, I copied/pasted it to verify that my coding was correct and still printed the wrong errors/never printed the correct result. I dunno.)

//^ What's really cool here is that we are able to invoke a method of the Cat class on an instance of the Dog class by binding the context of that method to the dog object (instance of the Dog class). That means that the bind() method enables us to access methods that are unique to classes (bound to certain objects) from OTHER places by binding the context of that method to the object we intend to use it on.

// class Cow {
//     moo() {
//         console.log("mooo");
//     }

//     mooMore() {
//         this.moo();
//     }
// }

// let cow = new Cow();

// const boundMoo = cow.mooMore.bind(cow);

// globalThis.setTimeout(boundMoo, 5000)

// HERE'S ANOTHER COOL THING: remember earlier, when we said, "There is a very complicated eplanation for why this function call results in a TypeError. For now, just know that you cannot call an instance method from within ANOTHER instance method using the setTimeout function. If you try, JavaScript throws an error." //! SEE LINE 140 ^^

//^ Well, here, you can obviously see that using the bind() method allows us to successfully call an instance method from within another instance method using the setTimeout function! This was impossible (as shown in the example preceeding line 140 earlier in these notes) without the .bind() method.

//& So here, we have seen that using the .bind() method allows us to do two really cool things:

// 1. invoke instance methods of one class on instances of A DIFFERENT class by binding the context of that method to the instance of the other class that we intend to invoke it on.

// 2. Successfully call an instance method from within a nother instance method asynchronously using the setTimeout function without throwing an error.

//! In summary, per this reading, we have learned to:

//^ bind the contet of a method to an object
//^ understand that the 'bind' method returns a function with a fixed context ('this' value/object) which does not change regardless of where/how that function is invoked.

//! =========================== BIND QUIZ ================================

//^ 1. Calling bind on a function does not automaticaly invoke that function.

//^ 2. When bind is called, it returns a new function.

//^ 3. You cannot change the context of a function once it has been bound to that function.

//^ 4. Bind can accept an indefinite number of arguments in addition to the context argument.

//^ 5. What will be printed to the console by the code below?

// function hello() {
//     return `Hello ${this.firstName}`
// }

// const derek = {
//     firstName: 'Derek'
// }

// console.log(hello.bind(derek)); // returns [Function: bound hello]

// The closest of the provided answers to the result that I see in the console is:

// "The hello function bound to derek"

//^ 6. What will be printed to the cons0le by the code below?

// console.log(hello.bind(derek)()); // prints "Hello Derek"

// Interesting. So the code on line 423 returns a function bound to derek.
// But the code on line 431 above prints 'Hello Derek', which means that the hello function was actually invoked with its context bound to 'derek'. I understand what has happened but am not exactly sure why the difference in syntax has caused this difference in the way that the code functions.

//^ 7. What will be printed to the console by the code below?

// const helloDerek = hello.bind(derek);
// console.log(helloDerek()); // prints "Hello Derek" again.

// Ok. I'm starting to understand. THe bind() method does not automatically invoke the function that it creates, that's the point of these questions. I think.
// So 'hello.bind(derek)' creates a new 'hello' function with its context bound to 'derek'
// And 'console.log(heloDerek())' invokes that new function with its context bound to the 'derek' object, printing:
// "Hello Derek"

//^ 8. What will be printed to the console by the code below?

// function greeting(...messages) {
//     const that = this;
//     return messages.map(function(message) {
//         return `${that.firstName} says ${message}`;
//     });
// }

// // recall the 'derek' object declared on line 419 above!

// const derekMessages = greeting.bind(derek, "Hello class!");
// console.log(derekMessages("Goodbye, class!"));

// Prints [ 'Derek says Hello Class!', 'Derek says Goobye, class!' ]

// Gonnan need to look through this one more carefully later. Hard to track hwat is happening to 'this' throughout the code because of the way that it's written.

//! ================= Call and Apply: Other Ways to Bind Context ========================

// As a programmer, you will also need to know how to:

//^ Use 'call' and 'applyo' to directly attach a context to a function call
//^ Understand the difference between 'call' and 'apply'

// Function.prototype.call() (MDN): //& The call() method (of function instances) calls a function with a specific 'this' value and arguments that are provided individually.

function Product(name, price) {
    this.name = name;
    this.price = price;
}

function food(name, price) {
    Product.call(this, name, price); //We call the "Product" class as the context of this function
    this.category = 'food';
}

console.log(new food('cheese', 5).name); // "cheese";

//Function.prototype.apply() (MDN): //& The apply() method (of function instances) calls a function with a specific 'this' value and arguments provided as an array (or an array-like object).

//^ Note the distinction here between the call() and apply() methods- Call takes individual arguments as parameters following the initial 'thisArg' parameter, while Apply takes (potentially) an array as a second parameter

const numbers = [5, 6, 2, 3, 7];

const max = Math.max.apply(null, numbers);

console.log(max); // prints 7

const min = Math.min.apply(null, numbers);

console.log(min); // prints 2

//^ Also note that if thi9s function is not called in STRICT MODE, null and undefined will be replaced with the global object (when a context is not specified), and primitives will be converted to objects.

//! Other Ways to Bind Context

// Bind returns a function that can be called multiple times with the specified context
// Call and Apply invoke the bound function immediately, returning the return value from that function.

//* See below for call/apply syntax

// let callReturn = func.call(context, ...args) //^ takes a context and an indefinite number of arguments, then returns immediately

// let applyReturn = func.apply(context, [...args]); //^ takes a context and an array as an argument, then returns immediately

class Pig {
    constructor(name) {
        this.name = name;
    }
}

class Lion {
    constructor(name) {
        this.name = name;
    }

    roarNTimes(n) {
        for(let i = 0; i < n; i++) {
            console.log(`${this.name} says: ROAR`);
        }
    }
}

let pig = new Pig('Fido');
let lion = new Lion("Meowser")

lion.roarNTimes.call(pig, 5); // Fido says: ROAR (x5)
lion.roarNTimes.apply(pig, [5]); // Fido says: ROAR (x5)

// Note that call and apply are interchangeable and follow the same rules as bind EXCEPT for the arguments they take as parameters and the fact that call and apply invoke the function immediately while bind returns a function with a fixed context.

//! ================== Call and Apply Quiz ==========================

//^ 1. Calling 'call' on a function WILL invoke it immediately.

//^ 2. Calling 'apply' on a function WILL invoke it immediately.

//^ 3. Calling 'call' does NOT return a new function, but invokes the function it is called on.

//^ 4. Calling 'apply' does NOT return a new function, but invokes the function it is called on.

//^ 5. 'call' can accept an indefinite number of arguments.

//^ 6. 'apply' can only accept TWO arguments (the context and an array)

//^ 7. What will be printed to the console by the code below?

function eatFruits(...fruits) { // spread synax takes an indefinite number of 'fruits' (string arguments)
    return `${this.firstName} ate ${fruits.join(' and ')}` // Here, the .join() method concatenates all of the string arguments into a single string with each element separated by ' and '
}

class Person {
    constructor(firstName) {
        this.firstName = firstName;
    }
}

const mylo = new Person('Mylo');
console.log(eatFruits.call(mylo, 'apple', 'orange', 'banana')); // Here, we call the eatsFruits function using the call() method with the object (new instance of the Person class) 'mylo' as the context.

// This code returns 'Mylo ate apple and orange and banana'

//^ 8. What will be printed to the console by the code below?

// console.log(eatFruits.apply(mylo, 'apple', 'orange', 'banana'));

// Before I run this code I anticipate that it will throw an error because the apply() method can only take 2 arguments at most (context [in this case, 'mylo']) and an array of arguments. There is no array provided as an argument here and there are four arguments provided total, so I think the apply() method will break here.

// Yep, on line 571 (where we call the apply() method incorrectly above), this error is thrown:

// TypeError: CreateListFromArrayLike called on non-object.

//^ 9. What will be printed to the console by the code below?

console.log(eatFruits.call(mylo, ['apple', 'orange', 'banana']));

// Here, I can see that the syntax is correct for the 'call' function (there are only two arguments provided: the context 'mylo' and an array of fuits [strings]) AND based on what I know about the spread syntax, the eatFruits function should be able to spread the elements of the array into its string interpolation without any issues. So this function should (i think) return:

// "Mylo ate apple and orange and banana"

// Interesting. This is what printed to the console: "Mylo ate apple,orange,banana"

// So for some reason, the join(' and ') method didn't work correctly to concatenate the elements into an array of fruits separated by 'and', but the spread syntax DID spread the elements of the array into the string interpolation.

// AHH! This is because the 'call' method isn't supposed to take an array. I think that's the problem. See next question.

//^ 10. What will be printed to the console by the code below?

console.log(eatFruits.apply(mylo, ['apple', 'orange', 'banana']));

// Yep. The apply method is supposed to take a context and an array as arguments. When we use the apply() method instead of the call() method (which is not supposed to take an array) with these arguments, the eatFruits() function prints this message to the console as intended:

// Mylo ate apple and organce and banana

//^ 11. What will be printed to the console by the code below?

// See line 448 above for the 'greeting' function.

// function greeting(...messages) {
//     const that = this; // set 'this' = the constant 'that' just to add confusion
//     return messages.map(function(message) { // call the map method with a 'message' parameter
//         return `${that.firstName} says ${message}`; // return one instance of this interpolation for every 'message' as an element in the new array returned by the map method.
//     });
// }

// const derek = { // initialize a new object, 'derek'
//     firstName: 'Derek'
// };

// const derekMessages = greeting.call(derek, "Hello class") // initialize a new variable which creates a new function 'greeting' with 'derek' as the context and 'Hello class" as a parameter.
// console.log(derekMessages("Goodbye, class!")) // Call the function within the derekMessages variable with an additional parameter "Goobye, class!"

// If we were using the "bind" method (which returns a new function that can be invoked again and again), this would work. But because we are using teh 'call' method, the function that we call is invoked immediately and no new function is returned.d Thus, when we try to invoke 'derekMessages' (which has already been invoked because call invokes immediately), we throw an error:

//derekMessages is not a function.

//! ===================== Arrow Functions Review ===========================

// Arrow functions (Fat Arrows) are a concise way of declaring functions.

// From MDN: //^ An arrow function expression is a compact alternative to traditional function expression syntax, with some semantic differences and deliberate limitations in usage:

//^ Arrow function don't have thier own bindings to 'this', arguments, or 'super', and should NOT be used as methods.
//^ Arrow functions cannot be used as constructors. Calling them with 'new' throws a TypeError.
//^ Arrow functions cannot use 'yield' within their body and cannot be reated as generator functions.

//^ Syntax for arrow functions:

// () => expression

// param => expression

// (param) => expression

// (param1, param2, paramN) => expression

// () => {
//     statements
// }

// param => {
//     statements
// }

// (param1, param2, paramN) => {
//     statements
// }

//^ As a programmer, you should be able to:

// 1. Define an arrow function
// 2. Use implicit return with an arrow function
// 3. Use arrow functions as callbacks //^ This seems to be their most common use

//! Arrow functions for Solving Problems

// regular function (expression) declaration syntax

let doubleNum = function(num) {
    return num * 2;
};

// fat arrow function

let doubleNumArrow = num => num * 2;

//! Anatomy of an Arrow Function

// Below is the syntax for a multiple-statement arrow function:

// (parameter1, parameter2, parameterN) => {
//     statement1;
//     statement2;
//     return <value>;
// }

let average = (x, y, z) => {
    let sum = x + y + z;
    let avg = sum / 3
    return avg;
}

console.log(average(5, 10, 15))

// Remember that arrow functions use IMPLIED RETURNS and IMPLIED FUNCTION KEYWORD, meaning neither is necessary to explicitly state for single-expression arrow functions.

// Additionally, arrow functions are anonymous by default. Assign them to a variable if you want to keep them for later use.

//! Review Summary:

//^ how to define an arrow function
//^ How to implicitly return in a single-expression arrow function

// Here's an example of the single-expression arrow function using an implicit return:

let add5 = x => x + 5;

console.log(add5(10)); // 15

//! ====================== Context in Arrow Functions ========================

// Arrow functions apply context differently than other methods of function definition.

// Arrow functions are NOT inherently bound to any 'this' value. They have no inherent context.

// Their context ('this' value) is lexically bound.

// ^^ This means that arrow functions' context ('this' value) is bound to the code that CONTAINS it, not the code that CALLS it. In other words, the context of an arrow function is based on its scope.

// This makes arrow functions more flexible for use in method callbacks than normal anonymous functions.

class Mouse {
    constructor(name) {
        this.name = name;
    }

    squeak() {
        console.log(this.name);
    }

    delayedSqueak() {
        setTimeout(function() {
            console.log(this.name)
        }.bind(this), 5000)
    }
}

let mouse = new Mouse("Jerry")
mouse.squeak(); // Jerry
mouse.delayedSqueak(); // undefined because 'this' refers to the Timeout object, which has no 'name' property (there is no Timeout.name). So we can use the bind() method to bind the Dog object to the setTimeout function. When we do that, this delayedSqueak() method correctly prints 'Jerry'

// BUT the code is ugly. Lets take a look at how we could refactor similar code using arrow function syntax;

class Bird {
    constructor(name) {
        this.name = name;
    }

    chirp() {
        console.log(this.name);
    }

    arrowBoundChirp() {
        setTimeout(() => {
            console.log(this.name);
        }, 5000)
    }
}

let bird = new Bird("Tweety")
bird.arrowBoundChirp(); // "Tweety" after 5 seconds.

// Fucked up somewhere, running this code throws an error. FOUND THE ERROR. I had 'this.name' on line 742 written incorrectly like this: 'name.this'

// In the code above, we do not have to bind the Bird object to the callback because the context ('this' value) of the arrow function automatically refers to the code block it was written inside of, which is the Bird blass object. Thus we cut back on keywords AND shorten the syntax, making the code cleaner and easier to read.

//! Defining a Class Method as an Arrow Function

//* Before I continue, recall that MDN specifically says, "Arrow methods should not be used as methods"

// You can also define class methods using arrow function syntax. This automatically binds the context of that method to the class or an instance of the class.

class Fish {
    constructor(name) {
        this.name = name;
    }

    bloop = () => {
        console.log(`${this.name} made a bubble, bloop`);
    }
}

const nemo = new Fish("Nemo")
nemo.bloop(); // Nemo made a bubble, bloop

const nemoBloop = nemo.bloop;

nemoBloop() // Nemo made a bubble, bloop

// Note that you should ONLY define a class method as an arrow function if you will be binding the class method when using it more times than you are creating new instances of that class. or you can use it if you don't care about application memory and won't be creating very many instances of the class.

//! SUMMARY

//^ Learned the context of an arrow function
//^ Learned how to define a class methodu sing an arrow function
//^ Learned when to use arrow functions to define a class method

//! ================== Arrow Functions Review and Context Quiz ================

//^ 1. You CANNOT use bind, call, or apply to chagne the context of an arrow function

//^ 2. The context of an arrow function does NOT depend on how it is invoked.

// The context of an arrow function is determined by the context in which it is CREATED, NOT how it is INVOKED.

//^ 3. What will be printed to the console by the code below?

const sum = (...nums) => {
    nums.reduce((acc, num) => acc + num);
}

console.log(sum(1, 2, 3));

// returns undefined because the 'return' keyword is not used. This is the case because implicit returns in arrow functions ONLY work for single-expression arrow functions. Because there is a second function nested within the reduce method, this is not a single-expression arrow function and thus requires the use of the 'return' keyword.

//^ 4. What will be printed to the console by the code below?

const sum2 = (...nums) => {
    return nums.reduce((acc, num) => {
        acc + num;
    });
}

console.log(sum2(1, 2, 3))

// ALSO returns undefined even though the nums.reduce method is returned because there is no return value within the reduce method! In order for this function to correctly return the sum, it would need to look like this:

const sum3 = (...nums) => {
    return nums.reduce((acc, num) => {
    return acc + num;
    });
}

console.log(sum3(1, 2, 3)) // returns 6 as expected!

//^ 5. What will be printed to the console by the code below?

const sum4 = (...nums) => {
    return nums.reduce((acc, num) => acc + num);
}

console.log(sum(1, 2, 3)); // undefined. Similarly to the previous function, the callback never returns its value. In order for the code to work correctly, it would need to look like this:

const sum5 = (...nums) => {
    return nums.reduce((acc, num) => {
        return acc + num;
    });
};

console.log(sum5(1, 2, 3)); // returns 6 as expected.

//^ 6. What will be printed to the console by the code below?

class Vegetable {
    constructor(name) {
        this.name = name;
    }

    eat = () => {
        console.log(`${this.name} has a bite mark`);
    }
}

const bellPepper = new Vegetable("Bell Pepper");
const eat = bellPepper.eat;
setTimeout(eat, 5000);

// Prints 'Bell Pepper has a bite mark' after 5 seconds

//^ 7. What will be printed to the console by the code below?

eat(); // prints 'Bell Pepper has a bite mark

//^ 8. What will be printed to the console by the code below?

function greeter(...messages) {
    return messages.map(message => {
        return `${this.firstName} says ${message}`;
    });
}

const derek = {
    firstName: 'Derek'
};

const derekMessages = greeter.bind(derek, "Hello class!");
console.log(derekMessages("Goodbye class!"));

// I don't think this will work. If I remember correctly, we cannot use the bind(), call(), or apply() methods on arrow functions.

// I was wrong! It prints this to the console: [ 'Derek says Hello class!', 'Derek says Goodbye class!'];
