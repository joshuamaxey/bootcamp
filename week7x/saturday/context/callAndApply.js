//! Other Ways to Bind Context

//^ We can also use .call() and .apply() to directly bind a certain context to a function call

// .bind() returns a function that can be called multiple times.

// .call() and .apply() immediately invoke the bound function, returning its return value.

//& let callReturn = func.call(context, ...args);

//& let applyReturn = func.apply(context, [...args]);

// Both .call() and .apply() take a context ('this' value) as an argument.

//^ .apply() takes an array of arguments
//^ .call() takes an indefinite number of comm-separated arguments

class Dog {
    constructor(name, sound = "woof") {
        this.name = name;
        this.sound = sound;
    }
}

class Cat {
    constructor(name, sound = "meow") {
        this.name = name;
        this.sound = sound;
    }

    speakNTimes(n) {

        for (let i = 0; i < n; i++) {

            console.log(`${this.name} says: ${this.sound}`);
        }
    }
}

let dog = new Dog("Macy");

let cat = new Cat("Butthead");

cat.speakNTimes.call(cat, 5);
// Butthead says: meow
// Butthead says: meow
// Butthead says: meow
// Butthead says: meow
// Butthead says: meow

cat.speakNTimes.apply(dog, [3]);
// Macy says: woof
// Macy says: woof
// Macy says: woof

//^ Notice how both methods are able to bind the context of the method to any object that we choose, but these function calls cannot be stored in a variable for later use because they both invoke the method immediately. If we want to store a function call for later use, we'd have to use .bind():

let speak = cat.speakNTimes

let boundSpeak = cat.speakNTimes.bind(dog, 5);

boundSpeak();
// Macy says: woof
// Macy says: woof
// Macy says: woof
// Macy says: woof
// Macy says: woof
