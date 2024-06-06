//! CommonJS Modules

// We are accustomed to using Node to run single JavaScript files. This is effective for very small applications.

// We should organize our code into multiple files. Each file will contain a logical unit of code.

//^ Now we will learn to:

    // 1. Add a local module to a Node.js application
    // 2. Use the modeule.exports property to export from a module
    // 3. Export multiple items or a single item from a module
    // 4. Use the require() function to import from a module

//! Node.js Modules

//^ In Node.js, every JavaScript file defines a module.

// Modules defined within our project are called local modules. Each local module should have a single purpose and implement a single function.

//! Exporting Multiple Items From a Module

// Variables and functions defined within a module (file) must be exported so that they can be accessed within other files.

// There are several ways to export from a module.

//! Option A: Assigning an Object to the module.exports Property

// The new object should have a property for each item that you want to export.

//^ Consider the calculator.js file located in the same folder as this commonJsModules.js file...

//! Option B: Set Properties on the module.exports Object

// We can assign a property directly on the module.exports object.

//^ Consider the calculator2.js file...

//! Option C: The exports Shortcut

// Node also provides an exports variable that's initialized to the module.exports object already. We can use the exports variable as a shortcut.

//^ See the calculator3.js file...

//! Exproting a Single Item From a Module

// To export a single item, assign module.exports to the single item you want to export.

//^ See the calculator4.js file...

//! Import Using require

// When a module needs something from another module, it is dependent on that module.

// A module's dependencies are the other modules that are required in order for it to run correctly.

// Another way to think of a dependency is a REQUIREMENT.

//^ The built-in require function allows you to import item(s) from another module.

const calculator = require('./calculator') // Here we initialize a constant variable to hold the dependency or requirement that we are importing. We use the require keyword, and we provide the relative path to file/module we're importing as a string (enclosed in quotes).

// Now we can access properties of the 'calculator' object we've imported...

console.log(calculator.add(5, 6)) // returns 11

console.log(calculator.subtract(10, 5)) // returns 5

// etc.

//! Importing Multiple Items from a Module

// We can extract specific properties from the module.exports object we exported in our other file, like this...

const add = calculator.add;
const subtract = calculator.subtract;
const multiply = calculator.multiply;
const divide = calculator.divide;

// Now that we've extracted these specifc propertis from our exported object (the functions in our calculator file), we can assign them to variables and use them as regular functions in this file:

console.log(add(10, 20)); // returns 30

console.log(multiply(5, 6)); // returns 30

//^ Note that we can also use object destructuring to extract specific properties from the module.exports object we've imported. For instance, we can import the functions from our calculator2 function like this:

const { add2, subtract2, multiply2, divide2 } = require('./calculator2');

console.log(add2(20, 30)); // 50

console.log(multiply2(30, 3)); // 90

//! Importing an Item from a Module with a Single Export

// To import a single item from a module that only has one item exporte, like our calculator4.js file, we use the require function without any object destructuring.

const operations4 = require('./calculator4')

console.log(operations4); // [ '+', '-', '*', '/' ]

//! Folder Module

// We can also import a folder as a module in Node.js.

// The folder must have a file called 'index.js'

// The index.js file is all that will be imported/loaded. So this is not really a way of importing an entire folder, it is just a way of looking for a single file to export within a folder.

//! Summary

// Learned how to add a local module to a Node.js application.

// Learned how to use the module.exports property to export multiple items or a single item from a module

// Learned how to use the require() function to import from a module

// Learned how to import an index.js file from a folder in Node.js
