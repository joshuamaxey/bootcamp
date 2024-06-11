//! Throwing and Catching Errors

// JavaScript comes with built-in errors (SyntaxError, ReferenceError, TypeError, etc) that are thrown under certain conditions.

// We can throw these errors ourselves.

// We can also create our own errors to alert users when our code is being used incorrectly.

// We can catch errros to handle them without halding code execution or causing a system crash.

//! JavaScript Errors

// The Error class constructor is responsible for creating different instances of Error objects.

// The Error object is how JavaScript deals with runtime errors

// The TYPE of error thrown will communicate to us WHY that error has occurred

//! Creating Your Own Errors

// Since the Error class constructor is just a constructor function like any other class constructor, we can use it to create new instances of the Error object using the following syntax:

//* new Error([message[, fileName[, lineNumber]]])

const firstError = Error("I'm Error 1"); // Also note that new instances of the Error class can be created with OR without the 'new' keyword

const secondError = new Error("I'm Error 2");

console.log(firstError); // w/out the new keyword

// Error: I'm Error 1
//     at Object.<anonymous> (/home/joshuamaxey/aA/bootcamp/gitBootcamp/week8x/tuesday/testDrivenDevelopment/errorHandling.js:25:20)
//     at Module._compile (node:internal/modules/cjs/loader:1364:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
//     at Module.load (node:internal/modules/cjs/loader:1203:32)
//     at Module._load (node:internal/modules/cjs/loader:1019:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
//     at node:internal/main/run_main_module:28:49

console.log(secondError); // w/the new keyword

// Error: I'm Error 2
//     at Object.<anonymous> (/home/joshuamaxey/aA/bootcamp/gitBootcamp/week8x/tuesday/testDrivenDevelopment/errorHandling.js:27:21)
//     at Module._compile (node:internal/modules/cjs/loader:1364:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
//     at Module.load (node:internal/modules/cjs/loader:1203:32)
//     at Module._load (node:internal/modules/cjs/loader:1019:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
//     at node:internal/main/run_main_module:28:49

//^ Works with or without the 'new' keyword.

//! Throwing Your Own Error

//^ We can use the 'throw' keyword to throw our own runtime errors that will stop program execution.

function printNumber(num) {

    if (typeof num === "number") {

        console.log(`The number is ${num}`);
    } else {

        throw new Error("Input must be a number")
    }
}

printNumber(25); // prints "The number is 25"

// printNumber("string");

// Error: Input must be a number
//     at printNumber (/home/joshuamaxey/aA/bootcamp/gitBootcamp/week8x/tuesday/testDrivenDevelopment/errorHandling.js:64:15)
//     at Object.<anonymous> (/home/joshuamaxey/aA/bootcamp/gitBootcamp/week8x/tuesday/testDrivenDevelopment/errorHandling.js:70:1)
//     at Module._compile (node:internal/modules/cjs/loader:1364:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
//     at Module.load (node:internal/modules/cjs/loader:1203:32)
//     at Module._load (node:internal/modules/cjs/loader:1019:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
//     at node:internal/main/run_main_module:28:49

//^ Regularly, throwing an error stops program execution. If we want to throw an error WITHOUT stopping program execution, we can use a try...catch block:

function safeDivide(a, b) {

    if (b === 0) {
        throw new Error("Cannot divide by 0");
    } else {
        return a / b;
    }
};

try {
    console.log(safeDivide(30, 5)); // prints 6
} catch (error) {
    console.error(error.name + ": " + error.message);
}

//^ Here, our function ran correctly because we provided two valid arguments for (a) and (b) within the try/catch block. Next, lets see what happens when we provide an invalid argument:

try {
    console.log(safeDivide(30, 0));
} catch (error) {
    console.error(error.name + ": " + error.message); // prints "Error: Cannot divide by 0"
}

//^ If we add another console.log after the error is caught, we can see that catching this error prevents the program from terminating and allows us to continue program execution:

console.log("Program is still running after error is caught.") // prints the message correctly

//! Catching Known Errors

//^ You can combine try...catch blocks with JavaScript's built-in errors and the instanceof operator to catch specific types of errors:

function callThatArg(arg) {
    arg(); // This throws a typeError becaus the function is expecting another function as an argument, which is why we try to invoke the argument as if it were a function in line 116. We're gonna pass it a number instead of a function. Since we can't 'call' a number the same way we might call a function, we'll throw a TypeError
}

try {
    callThatArg(42);
    console.log("call successful"); // this line won't execute because we cann't 'call' a number
} catch (error) {

    if (error instanceof TypeError) {
        console.error(`Wrong Type: ${error.message}`); // Since our error will be a TypeError, we print this error message to the console
    } else {

        console.error(error.mesage); // this line will execute if our error is not a TypeError
    }
}

console.log("Code is still executing."); // Because we used a try...catch block, our code never stopped executing and this message is printed to the console.

//^ Note that SyntaxErrors cannot be caught with a try...catch blocks because SyntaxErrors occur at COMPILE TIME, not RUNTIME. Errors that happen at COMPILE TIME cannot be caught using try...catch blocks.

//! Finally

//^ Our 'finally' block can be added to the end of our try...catch statement and will run whether an error occurs or not. It always runs:

function trySafeDivide(n) {

    try {
        console.log(safeDivide(30, n));
    } catch (error) {
        console.error(error.name + ": " + error.message);
        return;
    } finally {
        console.log("The finally block ALWAYS runs");
    }
}

trySafeDivide(1);
// 30
// The finally block ALWAYS runs

trySafeDivide(0);
// Error:
// Cannot divide by 0
// The finally block ALWAYS runs

//^ Here, we can see that the FINALLY block runs even though the function returns after the error is caught.
