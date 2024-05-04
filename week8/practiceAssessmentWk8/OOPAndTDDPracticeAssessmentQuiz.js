//^ 1. Which coding principle is violated by the code below?

function getChangedStrig(op, str) {
    if (op === 'reverse') {
        return str.split('').reverse().join('');
    } else if (op === 'double') {
        return [str, str].join('');
    } else if (op === 'widen') {
        return str.split('').join(' ');
    } else if (op === 'print') {
        console.log(str);
    } else {
        console.log('Operation not found');
    }
}

// It must by DRY. It doesn't violate OOP, because this is not a problem that should be broken down into multiple programs that interact with one another.

//And it does not violate TDD (explicitly) beacause we are not told whether there are specs or not, and this does not appear to be a problem that needs to be solved with red/green/refactor (its just a simple function with no other explanations or directions provided). BUT it does use many lines of very similar code to accomplish its purpose. So of all of the principles provided as options, this function most violates the principle of DRY (Do not Repeat Yourself).

//! WRONG. It's SRP because 'the function contains multiple unrelated operations. In particular, printing is different from changin the string."

//^ 2. What is a 'static method'?

// I would operationally defie 'static method' as a method that belongs to and is invoked on a Class itself, as opposed to an instance of that class.

// The closest available option to this definition is //! "a method that is not connected to a particular object instance"

//^ 3. Which of the following are characteristics of Polymorphism?

// its name means 'many shapes'
// it can be achieved by 'overloading' methods.
//! these may not be all of the correct answers.
//! WRONG. All answers were correct, including:
// It allows different classes to be using the same interface (not even sure what they mean by 'interface' here)
// It can be achieved by 'inheriting' classes

//!(I looked at the reading- Inheritance was NEVER stated to be an example of inheritance direclty, but I guess it is.

//!Yep, inheritance is a requirement in order for polymorphism to occur, which makes it a correct answer in this context.)

//^ 4. Which of the following are characteristics of Inheritance?

// Class inheritance is avhieved in JavaScript using the keyword 'extends'
//! Inherited methods from from a parent class. WRONG. NOT AN ANSWER.
// Inherited methods are used to override parent methods

//^ 5. Which of the following methods are SPECIFIC to approaching OOP design?

// Break down the problem into logical equations (//! ??)
// Eliminate unnecessary repetition with inheritance (//! ??)
//! Label POJOs with intuitive keys and values (//! ??) WRONG. Not an answer.
// Design classes with intuitive interfaces //! Apparently this is also a correct answer. Still no operational definition given anywhere for what 'interface' means in this context.

//& "interface" means instance attributes in this context, per Jesse

//^ 6. Which of the following descriptions would thorw a JavaScript ReferenceError?

// The code returns a variable but misspells the variable name
// Invoking a variable that has not bee declared
// Invoking a function that has not been declared
//! Invoking an instance method that has not been declared. WRONG! Not an answer. Invokes a TypeError, not a ReferenceError

//^ 7. Based on the test specs below, what should the mystery function do?

// describe('Mystery function', function () {
//     it('should work correctly', function () {
//         expect(mystery("antelope")).to.equal("ape");
//         expect(myster("bandicoot")).to.equal("bot");
//         expect(mystery("cheetah")).to.equal("cah");
//         expect(mystery("dromedary")).to.equal("dry");
//         expect(myster("elephant")).to.equal("ent");
//     });
// });

// It should return the first letter of the word followed by the last two letters of the word.

//^ 8. Which word represents the 'context' of the class above?

// this

//^ 9. How would you fix the error in the code below?

class Dog {
    constructor(name) {
        this.name = name;
        this.sound = 'woof';
    }

    speak() {
        return `${this.name} says '${this.sound}'`
    }
}

let fido = new Dog("Fido");
// let fidoSpeak = fido.speak;

// console.log(fidoSpeak());

// What I did was take the parenthesis OFF of the function call in line 84 and add new parenthesis to fido.speak(); on line 82. Now the function works correctly.
// The only option I see that corresponds to this change is "speak cannot be used in this way" so I"m gonna choose that option. //! This may not be the correct answer.

//! WRONG! Aparrently the answer is 'bind the speak method to the fido instance.'
fidoSpeak = fidoSpeak.bind(fido);
console.log(fidoSpeak());

//^ 10. Which of the following is(are) true of fat arrow functions?

// can sometimes omit {} around the code
// can sometimes omit 'return' keyword
// establishes context based on scope where it was defined
//! introduces in ES5 JavaScript engine //! WRONG! Arrow functions were introduced in ES6, not ES5.

//^ 11. Which of the following describes TDD?

// Creating test specs that describe the functionality of code to be written, then writing code to meet those tests
