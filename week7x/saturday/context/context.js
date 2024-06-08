//! Context

//^ Learning objectives:

    // 1. Understand when 'context' becomes lost within a class method
    // 2. Predict the 'context' within a function
    // 3. Bind the context of a method to an object
    // 4. Change the context of a function using call and apply
    // 5. Compare and contrast context (regular functions vs. arrow functions)

//! Context in JavaScript

// (RECAP) scope refers to the visibility and availability of variables.

//^ Context refers to the value of the 'this' keyword

//! What about 'this'?

// Recall that a method is a function that belongs to an object

// The 'this' keyword exists in every function, and it evaluates to the object that is invoking that function.

// So the value of 'this' depends on WHERE a function is invoked.

class Dog {
    constructor(name, isSitting) {
        this.name = name;
        this.isSitting = isSitting;
    }

    stand() {
        this.isSitting = false
        return this.isSitting;
    }

    changeName(newName) {
        this.name = newName;
    }
}

let dog = new Dog("Bowser", true);

console.log(dog.isSitting); // true, Bowser is sitting

console.log(dog.stand()); // prints false

console.log(dog.isSitting); // false, Bowser is no longer sitting

// With respect to instance methods like .isSitting(), the 'this' keyword refers to the object that is calling that method.

// So when we call the .stand() method on our dog (this.stand()), we know that 'this' refers to the 'dog' object that we're invoking the method out.

class Cat {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    purr() {
        console.log("meow");
    }

    purrMore() {
        this.purr();
    }
}

let cat = new Cat("Butthead", "white and orange")

cat.purrMore() // meow
