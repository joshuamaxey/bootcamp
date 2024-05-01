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

//* When you are writing AUTOMATED TESTS for an application, you are writing the SPECIFICATIONS for how that application should behave. In the software industry, automated tests are often caled 'specs,' which is short for 'specifications.'

//* This sounds very similar to the way that we write code and then test it using 'test specs' for our projects and assessments here at AppAcademy.

//^ To make collaboration easier

// Complex applications are built by teams of developers. It is not always the case that developers will directly interact with one another.

// Specs allow teams to be confident that each module performs a specific task and reduces the need for direct coordination (which is expensive). The specs themselves function as an effective method of communication between developers.

//^ Produce documentation

// If tests are written well, they can serve as documentation for the codebase. You should be able to understand what a module does by checking its specs. This also improves ease of collaboration between developers.

//! What Do We Test?

// What should you test for?

//^ Test the public interface

// What is the public interface of the module or class that we are writing? What functions will the outside world rely on and be able to access?

// https://kentcdodds.com/blog/how-to-know-what-to-test

//* When you look at code that has no tests, think: "What use cases are these lines of code supporting, and what tests can I add to support those use cases?"

//* "The more your tests resemble the way your software is used (the more your tests resemble the use cases), the more confidence they can give you."

//* "Think less about the code you are testing and more about the use cases that code supports."

//* "Test use cases, not code."

//* Ask these questions:

//& Which part of this application would make me most upset if it were broken?

// Or, more generally:

//& What would be the worst thing to break in this app?

//^ The Testing Pyramid

// There are THREE levels to the testing Pyramid:

//&                   === E2E ===

//&         ========= Integration ===========

//&===================== Unit ============================


// UNIT TESTS test pieces of your application in isolation. Tehir goal is to ensure that each piece works independently. Each unit test should focus on ONE thing. These are the fastest tests to write and run.

// INTEGRATION TESTS test the interactions between pieces of your application. Their goal is to ensure that the elements of your application work together coherently.

// END-TO-END (E2E) TESTS test the whole of your application. They should test uses cases for your application and simulate the user experience. THese are the slowest tests to write and run.

//* For an Example, consider writing a Chess Game:

// Unit tests would test each class you wrote in isolation.
// Integration tests would ensure that each piece instance interacts correctly with the Board class.
// End-to-End tests would test a round of chess and whether the Board, Game, and Piece classes all work together as expected.

//* Think of the pyramid like this:

// You want a solid foundation of unit tests, a moderate number of integration tests build upon that foundation, and then a small number of End-to-End tests.

// https://testing.googleblog.com/2015/04/just-say-no-to-more-end-to-end-tests.html

//! SUMMARY

//^ The WHY, WHAT, and HOW of testing
//^ How to read a test regardless of the syntax of the code

//! Testing Pyramid Quiz

//^ 1. We write tests because:

// To make sure the code works
// Test are like documentation
// For easier collaboration
// To modify code with confidence
// To refactor code with confidence

//^ 2. Test specs cover every part of the code that can change(?)
//! INCORRECT ^^

//^ 3. According to the testing pyramid, most of your test specs should be unit tests.

//^ 4. Integration test specs test the way that parts of your code work together.

//^ 5. End-to-End tests are the slowest tests to run.

//! =================== TEST-DRIVEN DEVELOPMENT (TDD) =====================

//^ The practice of writing tests BEFORE writing code is called Test-Driven Development.

//! Motivations for Test-Driven-Development(TDD)

//^ 1. Writing tests before code nsures that the code WORKS.

// Code written to pass specs is guaranteed to be testable.
// Code with pre-written tests easily allows other developers to add and test new code with confidence that nothing else will break as a consequence.

//^ 2. The only code that is written is REQUIRED code.

// Helps reduce bloaded code and unnecessary functionality.
// TDD supports single-responsibility and DRY

//^ 3. TDD supports and promotes code modularity.

// Code is written in small, testable chunks. Chunks are modular and can be tested individually.

//^ 4. Provides an understanding of the FUNCTIONALITY of the code.

// Ensures that developers writing the code know what they are trying to achieve in writing the code.

//! The Three Steps of Test-Driven-Development: Red, Green, Refactor

// Test-Driven-Development can be broken down into three steps: Red, Green, and Refactor.

//^ 1. Red: Write the tests and verify that they fail (failing tests are red ). Initial failure is important so that there are no false positives.
//^ 2. Green: Write the code that is required in order to pass the tests ( passing tests are green ).
//^ 3. Refactor: Evaluate and refactor your code to ensure maximum readability and maintainability.

// The TDD workflow is usually quick. Developers write small tests, ensure each part of their application works, then move on. This makes for a short evelopment cycle.

// The Red, Green, Refactor method of TDD is a form of Polya's Problem Solving framework.

// https://appacademy.instructure.com/courses/332/pages/how-to-solve-any-problem-polya

//! SUMMARY

//^ TDD stands for Test-Driven Development
//^ TDD is a repetitive process that revolves around three steps: Red, Green, Refactor
