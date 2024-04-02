//! CALLBACK FUNCTIONS

//! CALLBACK FUNCTIONS ARE FUNCTIONS THAT ARE PASSED TO ANOTHER FUNCTION AS AN ARGUMENT.

//^CALLBACK LEARNING OBJECTIVES:

//^ 1. Identify why fuctions are called "first Class Objects" in JavaScript
//^ 2. Given a code nsippet containing an anonymous callback, a named callback, and multiple console.logs, predict what will be printed.
//^ 3. Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.
//^ 4. Write a function, myMap, which takes in an array and a callback as arguents. The functio nshould mimic the behavior of Array.map.
//^ 5. Write a function, myFilter, that akes in an array and a callback as arguments. The functio nshould mimic the behavior of Array.filter.
//^ 6. Write a function, myEver, that takes in an array and a callback as arguments. The function shoudl mimic the behavior of Array.every.

//!Defining a function that accepts another functio nas an argument is no different than specifying a regular parameter.

/*

let foobar = function(callback) {
    console.log("foo");
    callback();
    console.log("bar");
};

let sayHello = function() {
    console.log("hello");
};

foobar(sayHello); // foo, hello, bar
//notice that the callback function doesn't have to be declared BEFORE defining the function that calls it.

foobar(function() {
    console.log("Hello");
})

//^ In this case the function definition is written directly into the function as a parameter. Use anonymous callbacks for single-use functions.

*/

//! Callback funcitons, like any othe function, can accept its own arguments and return values:

/*

let add = function(num1, num2, cb) {
    let sum = num1 + num2;
    let result = cb(sum); // Call a callback function that takes 'sum' as an argument
    return result;
}

let double = function(num) { //Here, we define a regular function.
    return num * 2;
}

let negate = function(num) { //Here, we define another regular function.
    return num * -1;
}

console.log(add(2, 3, double)); //Here, we call the add function and use the DOUBLE function as input for the callback.
console.log(add(4, 5, negate)); //Here, we call the add function and use the NEGATE function as input for the callback.

//! We are also able to pass in built-in functions as callbacks. For instance, "Math.sqrt" is a built-in function that takes in a number and returns its square root.

console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(25)); // 5
console.log(Math.sqrt(64)); // 8

console.log(add(60, 4, Math.sqrt)); //8

//! Refactoring for an OPTIONAL CALLBACK

let greet = function(firstName, lastName) {
    console.log("Hey " + firstName + "! Your last name is " + lastName + ".");
}

greet("Joshua", "Maxey"); // Hey, Joshua! Your last name is Maxey
greet("Joshua"); // Hey, Joshua! Your last name is undefined

//^ Notice (This is just a regular function) that JavaScript is not strict when it comes to passing too few arguments into a function. With this fact in mind, lets refactor our "add" function to optionally accept a callback:

let addRefactored = function(num1, num2, cb) {
    if (cb === undefined) {
        return num1 + num2;
    } else {
        return cb(num1 + num2);
    }
};

console.log(add(9, 40));

//^ In this function, we specifically account for the edge case wherein the callback function (cb) is not specified. When that is the case, the function returns the regular sum. This way, the callback function is optional and is only applied when specified.

*/
