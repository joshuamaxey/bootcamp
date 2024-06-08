//! Changing Context Using .bind()

//^ The .bind() method binds a certain context to a function so that the function retains that context no matter where or how it is invoked.

// The syntax of .bind() is like this:

//& let boundFunction = function.bind(context);

class Cat {
    constructor(name) {
        this.name = name;
    }

    purr() {
        console.log("meow");
    }

    purrMore() {
        this.purr();
    }

    sayName() {
        console.log(this.name);
    }
}

let cat = new Cat("Meowser");

let sayMeow = cat.purrMore; // Note that regularly, we cannot save the invocation of a class method to a variable like this...

// sayMeow(); // ...because when we do, we throw an error because we lose the context of the method when we try to save the invocation to a variable.

//^ This is where .bind() comes in:

let boundCat = sayMeow.bind(cat); // But by using bind, we can make sure that we invoke the method (cat.purrMore) saved in our sayMeow variable with the correct context (cat)

boundCat(); // meow

//^ So the purpose of .bind() is to allow us to CHOOSE the context of our functions manually, and to ensure that that context is retained no matter where or how we invoke the function.

class Dog {
    constructor(name) {
        this.name = name;
    }
}

let dog = new Dog("Fido");

let sayNameFunc = cat.sayName;

// sayNameFunc(); // Without using bind, throws an error. Remember that without bind, we CANNOT save our function calls of class methods to variables and then invoke them sucessfully.

let sayHelloCat = sayNameFunc.bind(cat); // By using .bind() we can invoke the '.sayName' method with our 'cat' object as its bound context, allowing us to call our 'sayNameFunc' variable successfully

sayHelloCat(); // Meowser

let sayHelloDog = sayNameFunc.bind(dog); // What's even more interesting is that we can actually use .bind to call our Cat class instance method with different contexts, including instances of OTHER classes. Because the '.sayName' function logs "this.name" to the console, it will work on ANY object that possesses a '.name' quality. Here, we bind the context of our sayName Cat class instance method on an instance of the Dog class...

sayHelloDog(); // ...which prints 'Fido'. This works because our 'dog' object has a .name property. So when we bind the sayName() method to the 'dog' instance, (this.name) = (dog.name).

//^ Note that regulary, we cannot use the .setTimeout() method to call instance methods for the same reason that we cannot assign an instance method function invocation to a variable for later use:

global.setTimeout(sayNameFunc, 5000) // undefined, because we lose the context of the method when we try to invoke the method on the global object

//^ But we can also use bind to call our instance methods successfully within the global.setTimeout function, like this:

global.setTimeout(sayHelloCat, 5000); // prints Meowser!

// This works because using .bind() enables us to bind the context of our choosing so that when we invoke our sayHello() method on the global object in order to use the .setTimeout() method, its context remains bound to 'cat'
