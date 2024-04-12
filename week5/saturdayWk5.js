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

function sayHiRegular() {
    console.log("Hello, World!"); //Regular function;
}

const sayHiArrow = () => console.log("Hello, World!"); //Arrow function;
