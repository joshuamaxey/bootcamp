//!  Putting the Class in JavaScript Classes

//^ Learning Objectives

    // 1. Define a JavaScript class with a constructor method
    // 2. Instantiate an instance of a class (using the 'new' keyword)
    // 3. Define instance methods
    // 4. Use the 'instanceof' operator to check if an object is an instance of a specific class
    // 5. Identify and solve bugs related to our classes

//! Defining a JavaScript class

//^ Classes in JavaScript are defined using the class keyword, followed by the Name of the class (with the first letter capitalized), and then a set of curly braces (similar to an object).

// Inside of the curly braces, we invoke the constructor method (keyword). The constructor is the blueprint for creating instances of this class.

class Book {
    constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;
    }
}

// The 'this' keyword references an individual instance of the class, allowing us to initialize the properties of the object instance.

//! Instantiating an Instance of a Class

// To create (or instantiate) an instance of a class, we use the 'new' keyword:

const fellowshipOfTheRing = new Book (  // Use the 'new' keyword to create an instance of the Book class
    'The Fellowship of the Ring',       // title
    'The Lord of the Rings',            // series
    'J.R.R. Tolkien'                    // author
);

console.log(fellowshipOfTheRing);

//  Book {
//   title: 'The Fellowship of the Ring',
//   series: 'The Lord of the Rings',
//   author: 'J.R.R. Tolkien'
// };

//^ Notice how the first line in the output tells us the name of the class.

// Three things occur when instantiating an instance of a class:

    // 1. A new empty object is created (i.e. {})
    // 2. The constructor method is called and 'this' is bound to the new object
    // 3. The new object is returned after the constructor method has completed

//! Defining Methods

// A method is a function that belongs to the class. It performs an action on the class or on an instance of the class.

// Instance methods are invoked on an individual instance of a class.

// Static methods are invoked on the class itself.

//! Defining an Instance Method

// Instance methods are invoked on a specific instance of a class.

//^ The syntax for defining a class instance method is very similar to the syntax that we use for defining a regular function. The difference is that we do NOT use the function keyword, and we DO use 'this' to refer to the instance that we're invoking the method on.

// Consider the following automobile class:

class Automobile {
    constructor(make, model, color) {
        this.make = make;
        this.model = model;
        this.color = color;
    }

    getInfo() {
        console.log(`This is a ${this.color} ${this.make} ${this.model}`) // In an instance method, the 'this' keyword refers to the specific instance of this class. So if we created a new Automobile called 'bus', then this.color = bus.color.
    }
}

const car = new Automobile("Toyota", "Corolla", "white") // So when we invoke an instance method on THIS instance of the automobile class (car), we know that 'this' will refer to 'car'

car.getInfo() // "This is a white Toyota Corolla"

// this.color = car.color = white
// this.make = car.make = Toyota
// this.model = car.model = Corolla

//! Using the instanceof Operator to Check and Object's Type

// The instanceof operator is similar to the typeof operator

console.log(car instanceof Automobile) // true, since we created a 'car' object which is an instance of the Automobile class (line 81)

console.log(fellowshipOfTheRing instanceof Book) // true, since we created a 'fellowshipOfTheRing' object that is an instance of the Book class (line 31)

console.log(fellowshipOfTheRing instanceof Automobile) // false, since 'fellowshipOfTheRing' is not an instance of the Automobile class

//! Summary

// Learned how to define a class using ES6 syntax with a Constructors
// How to define instance methods
// How to create an instance using the 'new' keyword
// Learned how to define an instance method
// Learned how to call instance methods on an instance
// Learned how to check if an object is an instance of a certain class using the instanceof operator
