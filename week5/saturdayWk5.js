//! IIFEs (iffy's)

// IIFE sstands for "Immediately-Invoked Function Expression"

// An IIFE is an anonymous function that runs immediately, as soon as it is defined.

//^ Learning Objectives:

//^ Identify an Immediately-Invoked Function Expression (IIFE, iffy)
//^ Write your own Immediately-Invoked Function Expression

//! Review of Function Expressions

// A function expression is when you define a function and assign that function to a variable:

const sayHiExpression = function sayHello() {
    console.log("Hello, World!"); //Function expression;
}

const sayHiAnonymous = function() {
    console.log("Hello, World!"); //Function expression (anonymous);
}

function sayHiRegular() {
    console.log("Hello, World!"); //Regular function;
}

const sayHiArrow = () => console.log("Hello, World!"); //Arrow function;

//^ As you can see, we currently have four different ways to write functions.

sayHiExpression(); // Hello, World!
sayHiAnonymous(); // Hello, World!
sayHiRegular(); // Hello, World!
sayHiArrow(); // Hello, World!

//^ An Immediately-Invoked Function Expression (IIFE, iffy) is a function that is called immediately after it has been defined.
//^ The typical syntax we use to write an IIFE is the same as writing a regular anonymous function that is wrapped in parenthesis (the grouping operator).
//^ To invoke the IIFE, you add another pair of closed parenthesis. This is what an IIFE function definition/call looks like:

(function() {
    console.log("run me immediately!");
})(); // run me immediately!

//^ Because IIFEs are IMMEDIATELY INVOKED, attempting to assign an IIFE to a variable will return the value of the invoked function, like this:

let IIFE = (function() {
    return "I'm an IIFE!";
})();

console.log(IIFE); // I'm an IIFE!

//^ NOTICE that when we assign a variable to an IIFE, it allows us to STORE the value that is produced by the function. The IIFE runs immediately, which is why we print "I'm an IIFE" instead of [anonymous function] when we console.log the variable that we assigned the IIFE to. The function is invoked immediately, and the output is stored in the variable.

console.log(IIFE); // I'm an IIFE!
