//! IIFEs (iffy's)

// IIFE sstands for "Immediately-Invoked Function Expression"

// An IIFE is an anonymous function that runs immediately, as soon as it is defined.

//^ Learning Objectives:

//^ Identify an Immediately-Invoked Function Expression (IIFE, iffy)
//^ Write your own Immediately-Invoked Function Expression

//! Review of Function Expressions

// A function expression is when you define a function and assign that function to a variable:

const sayHiExpression = function sayHello() {
    console.log("Hello, World!"); //Function expression;
}

const sayHiAnonymous = function() {
    console.log("Hello, World!"); //Function expression (anonymous);
}

function sayHiRegular() {
    console.log("Hello, World!"); //Regular function;
}

const sayHiArrow = () => console.log("Hello, World!"); //Arrow function;

//^ As you can see, we currently have four different ways to write functions.

sayHiExpression(); // Hello, World!
sayHiAnonymous(); // Hello, World!
sayHiRegular(); // Hello, World!
sayHiArrow(); // Hello, World!

//^ An Immediately-Invoked Function Expression (IIFE, iffy) is a function that is called immediately after it has been defined.
//^ The typical syntax we use to write an IIFE is the same as writing a regular anonymous function that is wrapped in parenthesis (the grouping operator).
//^ To invoke the IIFE, you add another pair of closed parenthesis. This is what an IIFE function definition/call looks like:

(function() {
    console.log("run me immediately!");
})(); // run me immediately!

//^ Because IIFEs are IMMEDIATELY INVOKED, attempting to assign an IIFE to a variable will return the value of the invoked function, like this:

let IIFE = (function() {
    return "I'm an IIFE!";
})();

console.log(IIFE); // I'm an IIFE!

//^ NOTICE that when we assign a variable to an IIFE, it allows us to STORE the value that is produced by the function. The IIFE runs immediately, which is why we print "I'm an IIFE" instead of [anonymous function] when we console.log the variable that we assigned the IIFE to. The function is invoked immediately, and the output is stored in the variable.

console.log(IIFE); // I'm an IIFE!

//& Using IIFEs can protect global variables

//^ IIFEs can protect global variables by making sure that they CANNOT ever b read or overwritten by our program. Like this:

function nameGen() {
    const jName = "Joshua";
    console.log(jName);
}

// console.log(jName); // yields an "ERROR: jName has not been defined" because jName was defined inside of nameGen's local scope, it cannot be accessed by the global scope.
console.log(nameGen()); // prints "Joshua"

//^ So by calling this function, we can access its output "Joshua" but cannot access the variable that is declared within the function. In this way, the variable is "private" and protected by the IIFE.

//^ So what if we didn't want the outer (global) scope to be able to access our function whatsoever? What if we wanted our function to be called ONCE, only, and then we wanted to make sure that it could never be accessed or invoked by our program again? We can accomplish this using IIFEs.

// One of the primary advantages of using an IIFE is that it CANNOT be invoked after its initial invocation following the function declaration/invocation. It runs as soon as it is defined, and then it can never run again. No part of our program will ever be able to access this function again:

(function() {
    const jName = "Joshua";
    console.log(jName);
})(); // prints "Joshua"

//we cannot access the variable "jName" from outside this function, just like in the prior example where we wrote a regular function with the variable declaration inside of its local scope.

//now we also can NEVER run this function again, since it is an IIFE and there is no way to invoke it again after the first invocation following the function definition.

//! Unassigned Variables and Default Values ========================================================

//^ There are 3 ways to declare a variable in JavaScript:

let letVariable // = undefined
var varVariable // = undefined
const constant = "constant"

// The "let" and "var" keywords both create variables with default values of "undefined". This is because both of these kinds of variables can be changed after they have been declared.

// The "const" keyword CANNOT be used without assigning the constant to a value. This is because constant variables can never be changed. So if we were to create one with a value of undefined, we would never be able to define it following the variable declaration.

const hoistBuddy = () => {
    console.log(hello);
    var hello = "Hello"
}

hoistBuddy();

//^ Here you can see that variables declared with "var" are hoisted to the top of the function when they are declared. You can call them BEFORE they are declared without causing an error.

//^ Variables declared with "let" on the other hand cannot be called before they are declared. JavaScript will throw an error if you try to do so.

//^ Additionally, remember that "let" and "const" can both be block-scoped. "var" creates variables that can only be either globally or locally (function) scoped.

//! IIFE Quiz ================================================================================================================

// function() {
//     console.log("hello world!");
//   }(); // => 'hello world!'

  //True or False: The above IIFE syntax is correct. //! FALSE. The function should be contained within parenthesis.

  const result = (function() {
    return "food";
  })();

  console.log(result);

// (function() {
//     const test = "Hello World!";
// })();

// console.log(test); // This throws an error because we cannot access the "test" variable from the global scope.

//! Primitive Data Types (In-Depth) ============================================================================================

// There are TWO data types in JavaScript:

// Primitive: Immutable

//^ Boolean: true/False
//^ Null: The intentional absence of value
//^ Undefined: default return value in JavaScript
//^ Number: Numerical values
//^ String: Collection of characters, ordered by numbered indices
//^ Symbol: Defined as "a UNIQUE primitive value"
//^ BigInt: represents larger integers than the NUMBER data type can handle.

// Reference: Mutable

//^ Object: collection of properties and methods (includes arrays)

// When we learned about the OBJECT data type, we learned about the definition of a METHOD. A method is a function that belongs to an object:

const method = {
    func: function() {
        console.log("This is a method!");
    }
};

method.func(); // "This is a method!";

//^ The OBJECT data type is the ONLY data type in JavaSCript that has methods. PRIMITIVE DATA TYPES CANNOT HAVE METHODS. We cannot declare new methods or use any methods on JavaScript primitive data types because they are NOT Objects. For instance:

let root = Math.sqrt(25); // = 5. This works because we are calling the Math object's sqrt method.

// let num = 25.sqrt; //SYNTAX ERROR because the number primitive type has NO METHODS.

// Again- primitive data types are NOT Objects and therefore do not have methods.

//& What about PRIMITIVES WITH OBJECT WRAPPERS?

// You're probably wondering how we can have or use string methods like string.toUpperCase, since strings are primitive data types and we cannot create methods for or use methods on primitive data types.

// The actual primitive data type, the string, does NOT have methods. In JavaScript, string data type is WRAPPED in a STRING OBJECT that covers the string primitive data type. This means that the STRING OBJECT will be responsible for constructing new STRING primitive data types as well as alowing us to call methods upon it since it is an OBJECT.

//^ Consider the following:

let str1 = "apple";

str1.toUpperCase(); // returns apple

let str2 = str1.toUpperCase();

console.log(str1); // prints "apple"
console.log(str2); // prints "APPLE"

//^ Notice that using the str.toUpperCase method does NOT mutate the original string, it prints a NEW string using the STRING OBJECT WRAPPER and then tells the variable str2 to point to THAT place in the computer's memory. This is why the original string remains unchanged even after we use string object methods on it- BEcause we cannot mutate the original string, since it is a primitive data type.

//& The most important takeaway here is that primitive data types are NOT objects in JavaScript and therefore cannot have methods.

//! Falsey Values in JavaScript

console.log({} == false); // false, NOT FALSEY
console.log([] == false); // true, //! FALSEY (MUST BE THIS ONE, ALWAYS RETURNS FALSE WITH ===)
console.log("" === false); // true, //! FALSEY (This one returns true with ===, so not it? )
console.log(17 == false); // false, NOT FALSEY

console.log("" == true)
console.log([] == true)

if (!"0") {
    console.log("Hello!");
} else if (!-42) {
    console.log("Goodbye!");
} else if (!-Infinity) {
    console.log("Have a nice day!");
} else {
    console.log("We meet again");
}

if ("false") {
    console.log("Hello!");
} else if ([]) {
    console.log("Goodbye!");
} else if ("") {
    console.log("Have a nice day!");
} else {
    console.log("party time is over");
}

console.log(!0n);
console.log(!"")
console.log(!undefined);
console.log(!0);
console.log(!false);
console.log(!NaN);
console.log(!null);

console.log(![])
console.log(!17)
console.log(!{})

//! Variable Evaluations Quiz ==================================================================================================

// var hello;
// console.log(hello); //prints undefined

let goodbye;
console.log(goodbye); // undefined

// const goodbye2;
// console.log(goodbye); // throws an error "Missing initializer in const declaration"

let func1 = () => {
    let hello;
    console.log(hello);
};

//! Function Hoisting ======================================================================================================

// FUNCTION DECLARATIONS are hoisted to the top of the scope they are defined within. This allows them to be accessible ANYWHERE in your code.

// FUNCTION EXPRESSIONS WITH VAR are NOT hoisted within their scope! They behave as if they are variables, since they are functions assigned to variables.

// FUNCTION EXPRESSIONS WITH LET are NOT hoisted within their scope. They will throw an error if you try to invoke them before they are assigned to a variable.

console.log(shoutWord("apple")); // This prints APPLE even though the function is defined later because regular function definitions are HOISTED in JavaScript.

function shoutWord(word) {
    return word.toUpperCase();
};

// console.log(goodNight()); // This will throw a reference error because in JavaScript, functions declared with function definition syntax are treated as variables, since they are defined as variables. This means that these functions are NOT hoisted. //! Correct: "ReferenceError: Cannot access 'goodNight" before initialization.

// let goodNight = function goodNight() {
//     return "Good Night!";
// }

// console.log(goodNight()); // prints "TypeError: goodNight is not a function," indicating that functions declared using "var" (function expression syntax with var instead of let) have the same behavior as other functions declared using function expression syntax with different keywords- They are treated like variables, and are not hoisted to the top of their scope. Cannot be run before they have been declared.

// var goodNight = function() {
//     return "Good Night!";
// };

// hello(); //! See above

// var hello = function() {
//     console.log("hello!");
// };

let hello = "hello";

function hello(num) {
    console.log("hello!");
}

console.log(hello); // "SyntaxError: Identifier 'hello' has already been declared". Variable and function declarations cannot have the same name in the same scope.
