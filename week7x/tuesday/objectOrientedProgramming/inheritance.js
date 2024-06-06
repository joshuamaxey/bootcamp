//! What is Inheritance?

// Inheritance is a pillar of OOP

//! Implementation Inheritance

// "Implementation inheritance" refers to the fact that properties and methods of a 'parent' class are also available for use by its 'child' classes.

//! Inheritance in JavaScript

//^ We will learn to apply inheritance by:

    // 1. Extending an existing class
    // 2. Using methods inherited by a parent class
    // 3. Using the 'super' function in the constructor of a child class to call on the constructor of its parent class

//! Syntax

// We use the 'extends' keyword to create a 'child' class from a 'parent class'

class MyClass { // consider this to be the 'parent' class
    constructor() {

    }
}

class MyChildClass extends MyClass { // We use the 'extends' keyword to make MyChildClass a 'child' of MyClass
    constructor() {

    }
}

//! Inheriting Methods

// A child class inherits the methods of its parent class. This means that all child classes of a parent class can use the methods defined in its parent class.

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() { // This is an instance method, invoked on an individual instacne of this class
        console.log(this.sound);
    }

    static pet(animal) { // This is a static method, invoked on the class itself.
        console.log(`You attempt to pet ${animal.name}`)
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name, 'woof'); // Here, we use the 'super' keywored to call the constructor of the Animal class (which is the parent of our Dog class), then we pass in the arguments required by the Animal constructor (name, sound). Since we know that we want all dogs to make the 'woof' sound, we pass in 'woof' as a default parameter. Now we can create instances of the Dog class with only ONE parameter (name), and they will all have the sound 'woof' by default.
    }
}

const macy = new Dog('Macy')

macy.speak() // 'woof'

Dog.pet(macy) // 'You attempt to pet Macy'

//^ As you can see, both the .speak() instance method and the .pet() static method are available for use on the Dog class and on instances of the Dog class even though we did not explicitly define those methods within the Dog class. This is because Dog, which is a child of Animal, inherited these methods from the Animal class.

//! Summary

// Learned how inheritance allows child classes to use the class methods of its parent class

// Learned how to use the 'super' function inside of the child class to call the constructor function of its parent class
