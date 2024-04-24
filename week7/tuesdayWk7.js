//! Object-Oriented Programming

//^ Plan an object=oriented approach to JavaScript development using the Encapsulation Principle
//^ Construct a JavaScript class and instantiate an instance of it
//^ Compare and contrast a reference to an object and a reference to a primitive
//^ Create a referece to a class instance
//^ Create a deep copy of a class instance
//^ Debut an error caused by confusion of a reference to a class instance and a copy of a class instance
//^ Create, identify, and use class instance methods and variables
//^ use the 'this' keyword to access adn manipulate a class instance's methods and variables.
//^ Understand when to apply class inheritance
//^ Implement a JavaScript class that inherits from another class
//^ Modify the behavior ina child class by using the Polymorphism principle to override a class method in the parent class
//^ Evaluate the appropriateness of overriding a given parent method vs. writing a new method in the child
//^ Identify when a problem should use OOP

// Object-Oriented Programming is a mindset wherein complex problems are broken down into multiple simpler parts. The smaller parts can then be iplemented and tested separately. This approach makes you code more readable and maintainable.

// The object-oriented nature of the physical world is reflected in object-oriented programming. The goal is to approach complex problems by breaking them down into smaller problems.

// We can group data and related actions or functions together and then implement them as a single larger system.

//* An item containing attributes and behaviors is called an OBJECT.
//* The characteristics of an object are called PROPERTIES or ATTRIBUTES.
//* Actions that belong to the object are called METHODS.

// Properties are the "adjectives" of an object while methods are its "verbs".

// In the same way that the parts of a vehicle are fabricated separately and then joined together to form a whole, code can also be broken down into objects and and those objects further broken down into more objects. Each object needs only be concerned with the details that pertain to its specfic part of the whole. Together these objects form a larger code base.

//! Lets think about a PEN.

//^ In order to determine the properties of a pen API, lets think about the qualities of a pen that distinguish it from other pens:

// What color is the body?
// What color is the ink?
// How full is the ink level?
// What style is the writing tip?
// Can it be refilled?
// What is the composition of its casing? (plastic, metal)
// Does it have a clip?
// Is the tip fixed or retractable?

//^ Now, lets translate thse questions into property names:

const pen = {
    bodyColor: "black",
    inkColor: "black",
    inkLevel: .75,
    tipStyle: "fountain",
    tipFixed: true,
    refillable: true,
    composition: "metal",
    clip: true
};

//^ Next, think about what a pen can do and what can be done to a pen.

// A pen can write
// A refillable pen can be refilled

//^ Now lets translate these actions into methods of the pen API:

// pen.write();
// pen.refillInk();

//^ Now lets consider a pencil. Come up with some properties and methods for the pencil API.

const pencil = {
    type: "mechanical",
    material: "plastic",
    color: "blue",
    clip: true
}

// pencil.write();
// pencil.erase();
// pencil.refill();

// An API should be easy for other APIs to use or integrate. For example, our 'pen' and 'pencil' APIs might be used by a 'Person' API that can write a letter (writeLetter) or draw a picture (drawImage).

//! Summary

// Object-Oriented Programming involves breaking down complex problems into interactive objects or APIs which have their own properties and methods.

// Breaking down problems into smaller problems in this way makes code more readable, testable, and maintainable.

// As a programmer, you must know how to design readable and maintainable APIs that can be easily used by other APIs.

//! ========================================= Encapsulation ==============================================

// Encapsulation is the act of enclosing data and behavior together within an API that hides the implementation details. The code that uses the object doesn't need to know how it works, the complexity is hidden within the API.

//! Classes and Constructors

//^ The definition of an object with properties and methods is called a CLASS.

// A class is like a blueprint or computer model for a car or car part. It specifies the framework of the PROPERTIES AND METHODS (data and actions).

// In the same way that a function definition is just the framework of a function (nothing happens until the function has been called), a class is just a framework until it is //^ INSTANTIATED.

//^ An object made from a class is called an INSTANCE.

// For instnce, consider a class called 'Computer.' The device you are using to read this article would be a specific INSTANCE of 'Computer.'
// The Porsche sitting in someone's driveway is an instance of a class 'vehicle.'

// When a class is INSTANTIATED, there may be certain actions to perform or data to be set immediately.

//^ A special method called a CONSTRUCTOR handles this setup ^^.

// When you write a class, you put methods (behavior) and properties (or instance variables, fields, or members [data]) together.

//^ Classes enable us to deal with code that declares data structures in the same place as the code that modifies them.

//! Classes vs JavaScript Objects

//^ An OBJECT CLASS is the definition of an object, and an OBJECT INSTANCE is a use of that object.

//! Summary

// Encapsulation means containing all of an object's properties and methods within an API that abstracts the details of its functionality.

// Encapsulation helps developers break down large, complex problems into objects and hide implementation details within an object.

// Classes are like blueprints for objects, they define how properties and methods work together. An object can be created or INSTANTIATED from a class using the constructor method on the class.

//! ========================== Creating a Class, Instance Methods and Variables, and Context ====================================

//! Defining a JavaScript Class

// A class defines the attributes and behavior of an object. Classes in JavaScript are defined using the 'class' keyword, followed by the name of the class, and a set of curly braces:

// 'class' keyword
// class name
// curly braces

// The constructor function is marked ith the constructor keyword and act like a 'factory' creating instances of objects of the type that is defined within the class.

// Consider teh following book object:

class Book {
    constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;
    }

    getInformation() {
        return `${this.title} by ${this.author}`;
    }
}

//^ Notice that class names begin with a capital letter.

//^ The constructor method is not REQUIRED, but:

// Constructor methods do not explicitly return a value.
// Within a constructor method's body, the 'this' keyword references the newly created object instance. This allows you to initialize properties on the object instance.

//! Instantiating an instance of a class

//^ Use the 'new' keyword to create or INSTANTIATE an instance of a class:

const fellowshipOfTheRing = new Book (
    "The Fellowship of the Ring",
    "The Lord of the Rings",
    "J.R.R. Tolkien"
);

console.log(fellowshipOfTheRing)

// Three things happen when instantiating an instance of a class:

// 1. A new empty object is created
// 2. The constructor method is called and 'this' is bound to the new object
// 3. The new object is returned after the 'constructor' method has completed.

//! Defining Methods.

// A method is a function that is part of the class. It performs an action (verb) for the class.

// Methods are typically invoked on an instance of a class that is stored in a variable. Thus, they are often called INSTANCE METHODS. //! See the 'Book' class above, and the 'getInformation' method specified within.

console.log(fellowshipOfTheRing.getInformation()); // prints 'The Fellowship of the Ring by J.R.R Tolkien.

//! Using the instanceof operator to check an object's type.

console.log(fellowshipOfTheRing instanceof Book); // True

//! Writing Classes Demo =====================================================================

//^ Classes are TEMPLATES FOR CREATING OBJECTS. They encapsulate data together with the code that works on that data.

class Scripture {
    constructor(text, book, number) {
        this.text = text;
        this.book = book;
        this.number = number;
    }

    getVerse() {
        return `${this.text} - ${this.book} ${this.number}`
    }
}

const StrongAndCourageous = new Scripture (
    "Have I not commanded you? Be strong and courageous! Do not be afraid or discouraged, for I am with you always.",
    "Joshua",
    "1:9"
);

console.log(StrongAndCourageous);

console.log(StrongAndCourageous.getVerse());
