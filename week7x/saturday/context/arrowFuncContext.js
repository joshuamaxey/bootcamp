//! Arrow Functions and Context

//* NOTE: MDN SPECIFICALLY SAYS: Arrow functions don't have their own bindings to this, arguments, or super, and should not be used as methods. Even though this reading says that we CAN use arrow functions as class methods, it is not a recommended or standard practice.

//^ Arrow functions do not have inherent bindings to a 'this' object based on context. Their 'this' value is lexically bound. Therefore the context of an arrow function is (effectively) equivalent to its scope.

// This means that arrow functions' 'this' value reers to the code that CONTAINS it (its scope), not the function that calls it. This means that arrow functions' context is always the scope of the code that it's called within. It has no context of its own.

class Dog {
    constructor(name, sound = "woof") {
        this.name = name;
        this.sound = sound;
    }

    bark() {
        console.log(`${this.name} says ${this.sound}!`);
    }
}

let dog = new Dog("Macy");

dog.bark(); // Macy says woof!

//^ So what happens if we want to create a similar method in a Cat class, but with a delay?

class Cat {
    constructor(name, sound = 'meow') {
        this.name = name;
        this.sound = sound;
    }

    delayedMeow() {
        setTimeout(function() {
            console.log(`${this.name} says ${this.sound}!`);
        }, 2000);
    }

    delayedMeowBound() {
        setTimeout(function() {
            console.log(`${this.name} says ${this.sound}!`)
        }.bind(this), 3500)
    }

    delayedMeowArrow() {
        setTimeout(() => {
            console.log(`${this.name} says ${this.sound}!`)
        }, 5000)
    }
}

let cat = new Cat("Butthead");

cat.delayedMeow(); // prints "undefined says undefined!"; This happens because when we use the setTimeout function, we are changing the context of the 'this' in our console log. Instead of referring back to the 'cat' object instance of our Cat class, we're referring to the Timeout object. Since the Timeout object has no .name or .sound properties, we print 'undefined' for both.

// So we COULD go back and create another method using the .bind() method, and see if that works... (see line 38)

cat.delayedMeowBound(); // prints "Butthead says meow!"; So this works!

// But the code on lines 38 - 41 is pretty messy.

//^ This is where the arrow function comes in (see line 43)

cat.delayedMeowArrow(); // prints "Butthead says meow!"; This also works! By using an arrow function, we avoid the need to bind the context, can omit the 'function' keyword, and don't have to worry about the context at all because it's automatically bound to the scope of the block that it's invoked within.
