//! ES5 Class Syntax

// We've learned how to create classes using ES6 syntax (class keyword)

// Now we'll focus on ES5 syntax to create classes, constructors, and to add static and instance methods and variables to our classes.

// We will also learn monkey-patching and how to apply it using ES5 syntax

//! Creating a Class Constructor Function

class BookES6 {
    constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;
    }
}

function BookES5(title, series, author) {
    this.title = title;
    this.series = series;
    this.author = author;
}

//^ Both of these lcasses accomplish the same thing, but notice how ES6 syntax is much more explicit and irrefutably distinguishes our 'class' (constructor) from other functions. JavaScript does not recognize the ES5 syntax as a class constructor until we apply the 'this' keyword on line 20 but does recognize our ES6 as a class constructor before we use the 'this' keyword and even before we include the 'constructor' function on line 12.

class Test2 {

}

function Test3() {

}

//^ See? Our Test2 class cannot be mistaken for a regular function while our Test3 class is.

//! Static Methods and Variables

// We can add static methods or variables to a class from OUTSIDE the class constructor by adding it as a property onto the class itself:

BookES6.getTitles = function(...books) { // adding a static method
    console.log(this);
    return books.map(book => book.title);
}

BookES6.genres = ['fantasy', 'horror', 'classics', 'mystery'] // adding a static variable

//! Monkey-Patching Classes

// Using ES5 syntax, we can change the existing behavior of a class after it's been defined.

//^ This technique is mostly used when you want to add custom methods on existing built-in JavaScript classes like Array, String, and Object.

// For now, due to the low relevance of this material to our assessments, I'm gonna stop here. If we use these techniques in the future, I'll return to write more notes about the relevant applications of this material.
