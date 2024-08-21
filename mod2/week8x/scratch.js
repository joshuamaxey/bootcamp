//! Error Types Quiz

// console.log(potato); // ReferenceError: Potato is not defined

const num = 10;
// num(); // TypeError: num is not a function

class User {
    constructor(name) {
        this.name = name;
    }

    changeName(newName) {
        this.name = newName;
        this.speak();
    }

    speak() {
        console.log(this.name);
    }
}

// const user = new User("Brady");
// changeName = user.changeName;
// changeName("Brian"); // TypeError: Cannot set properties of undefined (setting 'name');

// const 1 = 10; // SyntaxError: Unexpected number

// console.log(potato); // ReferenceError: Cannot access 'potato' before initialization
const potato = "potato";

function foo() {
    foo();
}

// foo(); // RangeError: Maximum call stack size exceeded

//! Error Handling Quiz

const hello = 'Hello World';

try {
    hello();
} catch {
    console.log("Invoking 'Hello World' failed");
}

// Prints "Invoking 'Hello World' failed"

try {
    const hello = 'Hello World';

    if (typeof hello !== 'string') {
        throw new Error('Hello?');
    }
} catch(e) {
    console.log(e.message);
}

function errorThrown(message) {
    console.log(message);
}

try {
    const num = 10;

    if (typeof num !== 'string') {

        throw new Error('Need a string');
    }
} catch(e) {

    errorThrown(e.message);
}

try {
    const num = 10;
    if (num !== 0) {
        console.log("Not zero!");
    }
} catch (e) {
    if (e instanceof SyntaxError) {
        console.log("There was a SyntaxError");
    }
} finally {
    console.log("Was it zero?");
}

//! Mocha and Chai Quiz

describe("Person", () => {
    let alex;

    beforeEach(() => {
      alex = new Person("Alex");
    });

    afterEach(() => {
      alex = null;
    })

    describe("constructor", () => {
      it("should set the name property to the given name argument", () => {
        expect(alex.name).to.equal("Alex");
      });
    });
  });
