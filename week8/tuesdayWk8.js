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

//^ NOTE: Many SyntaxErrors can't be caught using try..catch blocks.

//! ...finally

// The try..catch block can have one additional element- the //^ finally block
// The finally block runs whether an error occurs or not. It ALWAYS runs.

function trySafeDivide(n) {
    try {
        console.log(safeDivide(30, n));
    } catch (error) {
        console.error(error.name + ": " + error.message); // Error: cannot divide by zero
        return;
    } finally {
        console.log("This will ALWAYS run");
    }
}

trySafeDivide(1);
trySafeDivide(0);

//! How to Use Errors

// try-catch blocks slow down your code.
// try-catch blocks also clutter your code.
// When possible, write DEFENSIVE CODE that checks for bad values/handles edge cases BEFORE errors are thrown in your code.

// That being said, error messages are effective for telling you exactly where the flaws in your code are located and (often) how to fix them.
// Code that fails silently leads to greater problems downstream.

// Learning to read and use error messages will help yo uwrite better code and debug much faster.

//! SUMMARY

//^ Create, throw, and catch errors in JavaScript.

//! Error Handling Quiz

//^ 1. In JavaScript, errors that are thrown and NOT caught will stop code execution and exit the program.

//^ 2. You should use try...catch blocks sparingly as necessary. Try to write DEFENSIVE CODE that catches errors and handles edge cases before errors are thrown.

//^ 3. What happens when you run the code below?

const hello = "Hello World";

try {
    hello();
} catch {
    console.log("Invoking 'Hello World' failed");
}

// Prints 'Invoking 'Hello World' failed. I believe that this would have been a ReferenceError, lets see:

// hello();

// WRONG. Throws TypeError: hello is not a function (which makes sense).

//^ 4. What happens when you run the code below?

try {
    const hello = 'Hello World';
    if (typeof hello !== 'string') {
        throw new Error("Hello?");
    }
} catch(e) {
    console.log(e.message);
}

// Nothing happened. I think this is because 'Hello World' IS a string, which is what this conditional expects. In this case, 'hello' being a string does not cause an error to be thrown. What happens if we copy this code and change the condtiional to throw the error if 'hello' IS a string (which it is)? See below:

try {
    const hello = 'Hello World';
    if (typeof hello === 'string') {
        throw new Error("Hello?");
    }
} catch(e) {
    console.log(e.message);
}

// Prints 'Hello?' to the console. '

//^ 5. What happens when you run the code below?

function errorThrown(message) {
    console.log(message);
}

try {
    const num = 10;
    if (typeof num !== 'string') {
        throw new Error('Need a string');
    }
} catch(e) {
    errorThrown(e.message) // Ok, Im starting to see that 'e' stands for 'error' when used in this context?
}

// In this case, the code will throw the error since 'num' is not a string. But because of the try...catch block, this error will not stop code execution and exit the program. Rather, it will log the error message to the console and then allow the program to keep running.

// Yep. When run, the try...catch block prints 'Need a string' to the console (as the error message) but does not stop code execution. As far as I'm aware. To be sure, I'll add an extra console.log to the code below (following the try..catch block)

console.log("test");

// Yep. "test" still prints, which means the try...catch block allowed us to print the error without stopping code execution or exiting the program.

//^ 6. What happens when you run the code below?

try {
    const num = 10;
    if (num !== 0) {
        console.log("Not zero!");
    }
} catch (e) {
    if (e instanceof SyntaxError) {
        console.log("There was a SyntaxError");
    }
} finally {
    console.log("Was it zero?");
}

// First, this code will print "Not zero!" because 'num' is not zero (per the first conditional);
// Because the error is not a SyntaxError, the second console.log never executes.
// The finally statement runs no matter what, printing "Was it zero?" to the console.

// Yep, prints:

"Not Zero!"
"Was it zero?"

// I was wrong! When copying this code, I failed to copy over a SynaxError that was intentionally left in the code. THe ending parenthesis around the (num !== 0 in the first part of the code was left out. IF this is the case, then the code inside of the block throws a SyntaxError. Since SyntaxErrors CANNOT be caught, this Error stops code execution.

// BUT if we fix the syntax error (which I did but didn't realize it), the code executes as expected and as I explained in lines 356 - 358. Be aware that test questions may do this-- intentionally write small, easy-to-miss syntax errors and expect us to catch them.

//! ====================== Testing Pyramid ===========================

// Testing individual functions is tedious, repetetive, and leaves your code vulnerable to false positives or negatives.

// Automated testing allows developers to write code that will specify the behavior of a function, module, or class.

// As a programmer, you will need to understand how and why we test as well as how to read automated tests without necessarily knowing the syntax of the code in question.

//! Why Do We Test?

//^ To make sure our code works

//^ To increase flexibility and reduce fear (of code[??])

// Imagine that you're a developer. You have written a lot of functional code, there are other developers working on your code, and you're deep into the project.

// Suddenly, you realize you have to refactor big chunks of it.

// Testing allows you to aggressively refactor with confidence that if anything breaks, you will know. You'll know what the expectations are for the module you're working on.

// As long as your code meets your test's specs, you're good.

// Testing critical parts of your code also ensures that anyone who modifies your code in the future does not break anything that matters.

//^ When you are writing AUTOMATED TESTS for an application, you are writing the SPECIFICATIONS for how that application should behave. In the software industry, automated tests are often caled 'specs,' which is short for 'specifications.'

//* This sounds very similar to the way that we write code and then test it using 'test specs' for our projects and assessments here at AppAcademy.
