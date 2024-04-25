const colors = require('colors');

console.log('hello'.green)
console.log('goodbye'.underline.red);
console.log('invert'.inverse);
console.log('rainbow?'.rainbow);
console.log('trap!'.trap)

// Back to Wednesday for continued notes.

//! Since you want to use the Book and Movie classes in this module, this module is dependent on those classes. That eans that you need to iport them from the classes module.

const classes = require("./classes"); // Use the require() method to import the 'classes' module.

// Then, for readability, declare constants for each of the imported properties that you will be using:

const Book = classes.Book;
const Movie = classes.Movie;

// Now lets write some instances of the Book and Movie classes:

const theGrapesOfWrath = new Book (
    "The Grapes of Wrath",
    null, // because this book is not a part of a series
    "John Steinbeck"
);

const aNewHope = new Movie (
    "Episode 4: A New Hope",
    "Star Wars",
    "George Lucas"
);

console.log(theGrapesOfWrath.getInformation()); // prints "The Grapes of Wrath [written by John Steinbeck]";
console.log(aNewHope.getInformation()); // prints "Episode 4: A New Hope (Star Wars) [directed by George Lucas]"
