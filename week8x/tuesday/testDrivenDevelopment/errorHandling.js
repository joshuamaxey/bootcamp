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

printNumber("string");

// Error: Input must be a number
//     at printNumber (/home/joshuamaxey/aA/bootcamp/gitBootcamp/week8x/tuesday/testDrivenDevelopment/errorHandling.js:64:15)
//     at Object.<anonymous> (/home/joshuamaxey/aA/bootcamp/gitBootcamp/week8x/tuesday/testDrivenDevelopment/errorHandling.js:70:1)
//     at Module._compile (node:internal/modules/cjs/loader:1364:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1422:10)
//     at Module.load (node:internal/modules/cjs/loader:1203:32)
//     at Module._load (node:internal/modules/cjs/loader:1019:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:128:12)
//     at node:internal/main/run_main_module:28:49
