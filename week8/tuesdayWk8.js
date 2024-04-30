let obj = {
    word: "world"
}

function sayHello(arg1, arg2) {
    console.log(arg1 + " " + this.word)
    console.log(arg2 + " " + this.word)
}

let boundSayHello = sayHello.bind(obj)
boundSayHello('hello', 'goodbye');

//! ============ Test-Driven Development (TDD) ==================

//^ Throw, catch, and create errors
//^ identify and research common JavaScript error types
//^ Compare and contrast unit vs. integration vs. end-to-end testing
//^ Create, modify, and pass a suite of Mocha test using the Chair assertion library
//^ Understand and pply Red-Green-Refactor cycle of Test-Driven Development (TDD)
//^ Understand given test specs and refer to and navigate the Mocha and CHai docs when encountering unknown syntax
//^ Construct a high-quality informed question based on an error message
//^ Create appropriate unit tests using the Single Responsiblity Principle and DRY
//^ Plan for appropriate test coverage
//^ Identify and test for edge cases
//^ Interpret a test spec to determine a project's requirements

//! ================= JavaScript Error Types ===========================

// As a programmer, you will need to be able to:

//^ Identify the difference between SyntaxError, ReferenceError, and TypeError
//^ Read and look up unfamiliar errors

//! Types of JavaScript Errors

//^ SyntaxError
//& Error in the syntax of the code
// (MDN) "SyntaxError is thrown when trying to interpret code that is syntactically invalid. It is thrown when the JavaScript engine encounters tokens or token order that does not conform to the syntax of the language when parsing code."
//^ ReferenceError
//& Error thrown when an invalid reference is made
// (MDN) "The ReferenceError is thrown when a variable is references which does not exist or hasn't been initialized within the current scope."
//^ TypeError
//& Error thrown when a variable or parameter is not of the correct (valid) type
// (MDN) "The TypeError is thrown when an operation cannot be performed, USUALLY because a value is not of the expected type."
//^ RangeError
//& Error thrown when a numberic variable of parameter is outside of its valid range.
// (MDN) "A RangeError is thrown when a value is not in the set or range of allowed values."
//^ InternalError
//& Represents an error in the internal JavaScript engine.
// (MDN) "InternalError is thorwn when an error occurs internally within the JavaScript engine"
//^ EvalError
//& An error pertaining to the global 'eval' function.
// (MDN) "The EvalError is thrown when an error occurs which pertains to the global eval() function"
//! Not thrown by JavaScript any more but the EvalError object remains for compatibility
//^ URIError
//& Error thrown when encodeURI() or decodeURI() are passed invalid parameters.
// (MDN) "The URIError is thrown when a global URI handling function was used in a wrong way."

//* The three most common errors we've encountered so far are: SyntaxError, ReferenceError, and TypeError

//! SyntaxError

// A SyntaxError is thrown when the JavaScript engine attempts to parse code that does not conform to the syntax of the JavaScript language. This happens when you run code wherein the syntax is not correct. //^ Commonly occurs when there are missing brackets/braces/parenghesis or misspelled keywords.

//! ReferenceError

// The ReferenceError is thrown when you reference a variable that does not exist or has not yet been declared within the current scope. //^ Commonly occurs when we misspell variable names, when we attempt to reference a variable that does not exist within the current scope, or when you attempt to reference a variable that does not exist at all.

//! TypeError

// A TypeError is thrown when an operation cannot be performed, usually because a value is not of the correct/expected type. //^ TypeErrors commonly occur because an operand is the wrong type or because you are attempting to modify a value that cannot be changed.

//! Looking Up Errors

// When you run into an error:

// Make sure that you understand the function you're trying to perform and know the expected behavior.
// Look up the error message.
// Determine the type of error.

//! SUMMARY

// Learned about some of the most common JavaScript errors and what to do when you come across an unfamiliar error. In the future, it might be smart to research and become familiar with EVERY error that you encounter, regardless of whether you already understand what it means in a practical sense or if you already know what you need to do to achieve the desired outcome.

//! ====================== Error Types Quiz ==================================

//^ 1. What error occurs when you run the code below?

// console.log(potato) // Should be a ReferenceError, since we are attepting to reference a variable which does not exist.

//! ReferenceError: potato is not defined

//^ 2. What error occurs when you run the code below?

// const num = 10;
// num();

//! TypeError: num is not a function

//^ 3. What error occurs when you run the code below?

// class User {
//     constructor(name) {
//         this.name = name;
//     }

//     changeName(newName) {
//         this.name = newName;
//         this.speak(); //! Here we should get a reference error since we are trying to invoke a function before it has been declared/defined. I don't think that speak (line 112) will be hoisted to the top of this scope, which means that the function will not yet exist when we try to invoke it here.
//     }

//     speak() {
//         console.log(this.name)
//     }
// }

// const user = new User("Brady");
// changeName = user.changeName;
// changeName("Brian");

// Wrong, we got: TypeError: Cannot set properties of undefined (setting 'name'). I don't understand this.

//^ 4. What error occurs when you run the code below?

// const 1 = 10;

//! SyntaxError: Unexpected number

//^ 5. What error occurs when you run the code below?

// console.log(potato);
// const potato = "potato"

//! Throws a ReferenceError: Cannot access 'potato' before initialization. Variables are not hoisted to the top of their scope and cannot be referenced before they have been declared.

//^ 6. What error occurs when you run the code below?

// function foo() {
//     foo();
// }

// foo();

//! RangeError: Maximum call stack size exceeded

//! =========================== Error Handling ==================================

//^ JavaScript comes with built-in errors that are thrown whenever your code violates certain standards.
//^ You can throw these errors within your own functions.
//^ You can create your own errors to alert users when they are using your code incorrectly.
//^ You can "catch" errors that you expect to be handled gracefully without causing a system crash.

//! JavaScript Error Object/Constructor

// In JavaScript the Error constructor function is responsbile for creating different instances of Error objects. The Error object is how JavaSCript deals with runtime errors and the TYPE of error created and thrown will attept to comunicate WHY that error occurred.

//! Creating Your Own Errors

// Since the Error constructor is just a constructor function, we can use it to create new Error object instances with the following syntax:

//^ new Error([message[, fileName[, lineNumber]]]);

// You can call the Error constructor with OR without the 'new' keyword and it will still return a new Error object. You can optionally supply a message, fileName, and lineNumber to the constructor.

const first = Error("I'm an Error");
const second = new Error("I'm an Error too");

//notice that you have to actually console.log() these 'first' and 'second' Errors in order for the errors to print to the console. Just initializing a new Error does not automatically cause that error to be thrown.

//! Throwing Your Own Errors

// We can use the 'throw' keyword to throw your own runtime errors that will stop program execution.

function giveMeNumber(num) {
    if (typeof num !== "number") {
        throw new Error("Input must be a number")
    } else {
        return `The number is ${num}`;
    }
}

// console.log(giveMeNumber(5));
// console.log(giveMeNumber("hello"));
// console.log(giveMeNumber(false));

//^ As we can see here, throwing an error stops program execution. If we want to throw an error WITHOUT stopping program execution, we can use a try...catch block. This is the basic syntax for a try...catch block:

try {
    // Statement to attempt to run
} catch (error) {
    //if an error is thrown it will be "caught"
    //program will continue to execute
}

//^ Normally, we use try...catch blocks with functions that might throw an error.

function safeDivide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    } else {
        return a / b;
    }
}

try {
    console.log(safeDivide(30, 0)) // prints 6
} catch (error) {
    console.error(error.name + ": " + error.message);
}

console.log("hello")

//^ Here we can see that even if the error is thrown within the try...catch block, the error message is logged using the console.error() method and the program continues to run. After the error message is printed to the console, the console.log("hello") on line 211 still runs as expected. In this way, the error was 'caught' and instead of being thrown, printed an error message to the console and allowed the program to keep running.

//! Catching Known Errors

// You can combine try...catch with JavaScript's built-in errors to catch specific types of errors using instanceof:

function callThatArg(arg) {
    arg(); //This will throw a TypeError because callThatArg is being passed a number
}

try {
    callThatArg(42);
    console.log("call successful"); // this line will not execute
} catch (error) {
    if (error instanceof TypeError) {
        console.error(`Wrong Type: ${error.message}`); // prints: Wrong Type: arg is not a function
    } else {
        console.error(error.message); // prints any errors that are NOT TypeErrors;
    }
}

console.log("done"); // prints done
