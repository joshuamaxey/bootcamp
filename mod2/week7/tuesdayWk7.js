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

//~ Commented out for use later in the notes

// class Book {
//     constructor(title, series, author) {
//         this.title = title;
//         this.series = series;
//         this.author = author;
//     }

//     getInformation() {
//         return `${this.title} by ${this.author}`;
//     }
// }

//^ Notice that class names begin with a capital letter.

//^ The constructor method is not REQUIRED, but:

// Constructor methods do not explicitly return a value.
// Within a constructor method's body, the 'this' keyword references the newly created object instance. This allows you to initialize properties on the object instance.

//! Instantiating an instance of a class

//^ Use the 'new' keyword to create or INSTANTIATE an instance of a class:

//~ commented out for use later in notes

// const fellowshipOfTheRing = new Book (
//     "The Fellowship of the Ring",
//     "The Lord of the Rings",
//     "J.R.R. Tolkien"
// );

// console.log(fellowshipOfTheRing)

// Three things happen when instantiating an instance of a class:

// 1. A new empty object is created
// 2. The constructor method is called and 'this' is bound to the new object
// 3. The new object is returned after the 'constructor' method has completed.

//! Defining Methods.

// A method is a function that is part of the class. It performs an action (verb) for the class.

// Methods are typically invoked on an instance of a class that is stored in a variable. Thus, they are often called INSTANCE METHODS. //! See the 'Book' class above, and the 'getInformation' method specified within.

// console.log(fellowshipOfTheRing.getInformation()); // prints 'The Fellowship of the Ring by J.R.R Tolkien.

//! Using the instanceof operator to check an object's type.

// console.log(fellowshipOfTheRing instanceof Book); // True

//! ============================== Writing Classes Demo =============================================

class Scripture { // Classes are TEMPLATES FOR CREATING OBJECTS. They encapsulate data together with the code that works on that data.
    constructor(text, book, number) { // Constructor turns raw data into properies - It builds and organizes our data.
        this.text = text;
        this.book = book; // The THIS keyword allows us to maintain the context of a specific instance when we call on our isntance methods.
        this.number = number;
    }

    getVerse() { // Instance methods allow us to interact with our data once the object is built.
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

//! Class Syntax 1 Quiz

class Person {
    constructor(firstName) {
        this.firstName = 'Caleb';
    }

    greet() {
        console.log(`${this.firstName} says hello!`);
    }
}

const kristen = new Person('Kristen');

console.log(kristen.firstName) // should return 'Caleb'
console.log(Person.firstName); // should return 'Caleb' //! Wrong. Returned 'undefined'

//! Inheritance

// In additiona to ENCAPSULATION, OOP relies on INHERITANCE, where classes receive teh properties and methods of their parent or parents.

//! Inheritance Class Syntax

class MyClass {}; // This class is, by default, a child of the 'Object' class.

class MyChildClass extends MyClass {} // MyChildClass is a child of MyClass, which is its parent class.

//^ When a child class extends, or inherits from, a parent class, it inherits the methods of the parent class. This means that you can use all the methods defined in the parent class within the ethods of the child class.

class Animal {
    constructor(name, sound) {
        this.name = name;
        this.sound = sound;
    }

    speak() {
        console.log(`${this.name} goes ${this.sound}!`);
    }
}

class Dog extends Animal {
    //constructor is inherited from Animal.
}
const fluffy = new Dog("Fluffy", "woof");

fluffy.speak(); // Fluffy goes woof!

// Lets say that you want to create a Cat cass and want all cats to have a 'meow' sound. You can create a constructor in the Cat class using the name parameter. Inside of the Cat constructor, you call the constructor of the Animal class using the super function and pass in the name parameter long with the 'meow' sound.

class Cat extends Animal {
    constructor(name) {
        super(name, 'meow');
    }
}

const butthead = new Cat('Butthead');

butthead.speak(); // Butthead goes meow!

// Now you instantiate a new Cat with just a name. THe sound will be 'meow' for every cat.

const leo = new Cat('Leo');

leo.speak(); // Leo goes meow!

//! ======================================== Static Methods and Variables =========================================

//^ What are static methods and variables?
//^ How do static methods and variables differ from instances?
//^ How do we declare stati methods and variables?

//! Static Methods

// Static methods are invoked direclty on a class (they are called CLASS METHODS);
// Define a static method using the STATIC keyword;

class Book {
    constructor(title, series, author) {
        this.title = title;
        this.series = series;
        this.author = author;

        Book.numBooks++ // numBooks will be incremented each time the constructor method is run (whenever a new Book instance is created)
    }

    getInformation() {
        return `${this.title} by ${this.author}`;
    }

    static getTitles(...books) {
        return books.map((book) => book.title);
    }

    static numBooks = 2; // Every time we create a new book, this count increases.
}

const fellowshipOfTheRing = new Book (
    "The Fellowship of the Ring",
    "The Lord of the Rings",
    "J.R.R. Tolkien"
);

const theTwoTowers = new Book(
    "The Two Towers",
    "The Lord of the Rings",
    "J.R.R. Tolkien"
);

const bookTitles = Book.getTitles(fellowshipOfTheRing, theTwoTowers);

console.log(bookTitles); // prints ["The Fellowship of the Ring", "The Two Towers"]

//^ Notice that the Math functions (Math.random, Math.max, Math.floor, etc) are all called starting with the "Math" class name. This is because the Math object actually consists fo ONLY static methods. The Math.random, Math.max, etc functions are called directly on the Math class object, not on an instance.

//! Static Variables

// Static variables (or properties) are accessed directly from the class. They are declared like static methods using the static keyword vollowed by the variable name and value assignment.

// Static variables are useful for caching information about the class, configurations of the class, or other data that you don't nee to repicate across instances.

// Consider the static variable numBooks in the Book class above ^^

//^ Static variables are variables that we DON'T need to store on every instance.

//! Class Syntax 2 Quiz

class Task {
    static taskList = [];

    static printTaskList() {
        console.log(this.taskList);
    }

    static addTask(task) {
        this.taskList.push(task);
    }

    constructor(taskDetail) {
        this.taskDetail = taskDetail;
        Task.addTask(this);
    }
}

const laundry = new Task('laundry');
const dishes = new Task('dishes');

// Task.printTaskList();

// laundry.printTaskList();

// laundry.taskList;

//! Class Inheritance Demo

// Class inheritance is when one class receives properties and methods from another.

// We use class inheritance to keep our code DRY so that your code can be re-used and doesn't need to be written multiple times.

// You make a class inherit from another using the 'extends' keyword.

// You use the 'super' keyword when you want to pass a part of your constructor from the parent to the child class.

//! Class Inheritance Quiz

// class Fruit {
//     constructor(color, taste) {
//         this.color = color;
//         this.taste = taste;
//     }

//     eat() {
//         console.log(`You ate a(n) ${this.constructor.name}.`);
//     }
// }

// class Apple extends Fruit {
//     constructor() {
//         super('red', 'sweet');
//     }
// }

// const apple = new Apple();
// const orange = new Fruit ('orange', 'tangy');

// console.log(apple.color);

// apple.eat();
// orange.eat();

//! ===================================== Polymorphism ======================================

//^ Polymorphism is the practice of procesing multiple data types and class through a single interface.

//^ Two commonn types of polymorphism are 'overloading' and 'overriding'

// Consider the 'toString()' method of the OBject class. Since evvery object in JavaScript is a child class (or grandchild, or great-grandchild, etc) class of the original Object class, that means that every object in JavaScript has a toString() method.

//* To try it out, open a terminal, start node, adn type the following:

// > [1, 2, 3].toString();
// '1,2,3'
// > "some text".toString();
// 'some text'
// > new Date().toString();
// '«the current date and time»'
// > new Object().toString();
// [object Object]

// The toString() method does different things depending on which data type it is applied to.

// Arrays: Takes the value in the array and turns the into a comma-delimited string.
// String: Does nothing and returns the string object.
// Date: returns a long textual represeentation of the date and time, which is represented by the Date object.
// Object: returns "[object Object" because that's all it knows about itself in this case.

//! In Summary:

//^ Polymorphism is a way of extending the functionality of a given method within a child class to do something more or something different than the method within its parent class.

//! Polyomrphism Demo

//^ There are TWO reasons to use polymorphism in programming.

// 1. FUNCTION OVERLOADING: When a function needs to have different behavior based on its input. Maybe we need to accept different input types (numbers vs strings using the "+" operator). Maybe we need to accept different numbers of inputs (Maybe we want to do X when we have one number of inputs, or Y when we have no inputs, etc). Or maybe we need the function to perform different logic based on the input.

// 2. FUNCTION OVERRIDING: Because of class inheritance, a parent passes on all of its methods and properties and variables to its child classes. Maybe that child doesn't need to have exactly the same functionality with respect to one of the methods that it has inherited. In this case, we would say that we want to OVERRIDE that method. Consider a 'findArea()' method of a parent class called 'Shape'. The 'Square' and 'Circle' classes both inherit from 'Shape', but need to implement the 'findArea()' method differently.

//^ So how do we override an inherited function or method?

// Declare a method with the same name as the method within the parent class.
// Write the new method.

//! Polymorphism Quiz

class Fruit {
    constructor(color, taste) {
        this.color = color;
        this.taste = taste;
    }

    eat() {
        console.log(`You ate a ${this.constructor.name}`);
    }
}

class Apple extends Fruit {
    constructor() {
        super('red', 'sweet');
    }

    eat() {
        console.log(`You ate a ${this.taste}, ${this.color} apple!`);
    }
};

const apple = new Apple();

apple.eat();

const orange = new Fruit('orange', 'tangy');

orange.eat();

//! ========================== Overriding a method in a parent class ===================================

class Charity {};

class Business {
    toString() {return `Give us your money.`;}
}

class Restaurant extends Business {
    toString() {return `Eat at Joe\'s`}
};

class AutoRepairShop extends Business {};

class Retail extends Business {
    toString() {return `Buy some stuff!`;}
}

class ClothingStore extends Retail {};

class PhoneStore extends Retail {
    toString() {return `Upgrade your perfectly good phone, now!`;}
}

console.log(new PhoneStore().toString()); // "Upgrade your perfectly good phone, now!"
console.log(new ClothingStore().toString()); // "Buy some stuff!" (inherited from 'retail')
console.log(new Restaurant().toString()); // Eat at Joe's!
console.log(new AutoRepairShop().toString()); // "Give us your money!" (inhrited from 'business')
console.log(new Charity().toString()); // nothing //! WRONG! prints "object Object," Which makes sense as this is what happened earlier when we used the toString() method on an object with no properties or methods.

//! Super Demo

class ExampleParent {
    print(arg) {
        console.log(arg);
    }
}

class ExampleChild extends ExampleParent {
    print(args) { // Here we OVERRIDE the parent's 'print' method using the same method name
        args.foreach((arg) => super.print(arg)); // Here, we call the parent's 'print' method as part of the child'd NEW print method using the 'super' keyword.
    }
}

//^ The point here is that we STILL have access to the parents' method by using the 'super' keyword EVEN IF we override that method.
