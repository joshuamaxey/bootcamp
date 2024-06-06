//! Object-Oriented Programming Objectives

//^ These objectives capture how we will be evaluated on the assessments with respect to this material. We will learn to do the following:

    // 1.  Plan an object-oriented approach to JavaScript development using principles like encapsulation
    // 2.  Construct a JavaScript class and instantiate instances of that class
    // 3.  Compare and contrast references to objects vs. references to primitives
    // 4.  Create a reference to a class instance
    // 5.  Create a deep copy of a class instance
    // 6.  Debug errors caused by confusion of references to class instances vs copies of class instances
    // 7.  Create, identify, and use class instance methods and variables
    // 8.  Use the 'this' keyword to access and manipulate class instance methods and variables
    // 9.  Compare and contrast a function and a method
    // 10. Create, identify, and use class static methods and variables
    // 11. Apply class inheritance as appropriate
    // 12. Implement JavaScript classes that inherit from other classes
    // 13. Modify behavior of a child class using principles of polymorphism such as overriding
    // 14. Determine whether it's appropriate to override a parent method vs. write a new method for the child class
    // 15. Identify when to apply principles of object-oriented programming

//! Introduction to OOP (Object-Oriented Programming)

// In object-oriented programming, we break down large, complex projects into smaller pieces.

// The smaller pieces are then implemented and tested separately.

// OOP often enables us to make our code more readable and maintainable.

//! What is OOP?

// As stated above on line 23, object-oriented programming is a design pattern within which we break down large, complex projects into smaller pieces.

// We use OOP to abstract the implementation details of our code behind APIs which, in turn, interact with other APIs that correspond to different features.

//^ An OBJECT (noun) is an item with its own PROPERTIES (adjectives) and METHODS (verbs)

//^ An OBJECT's characteristics (adjectives) are called PROPERTIES or ATTRIBUTES.

//^ An OBJECT's actions (verbs) are called METHODS.

//! Breaking Down an Example Problem with OOP

// Consider a pen.

//^ In order to determine the properties of a Pen API, think about what we might ask about pen in order to distinguish it from other pens...

    // What is its body color?
    // What is its ink color?
    // What is its ink level?
    // What style is the tip?
    // Is it refillable?
    // What is its composition (metal/plastic)?

//^ Now lets translate these qualiteis into property names:

    // .bodyColor
    // .inkColor
    // .inkLevel
    // .tipStyle
    // .refillable
    // .composition

//^ To determien the methods of a Pen API, think about: 1. What can it do? 2. What can be done to it?

    // A pen can write
    // A refillable pen can be refilled

//^ Lets translate these actions into methods:

    // .write()
    // .refill()

//! Summary

// OOP (object-oriented programming) is an approach to solving problems wherein we break down large projects into smaller parts and abstract implementation details behind APIs which have their own properties and methods.

// Using OOP to break a problem down into smaller parts makes our code more readable, testable, and maintainable
