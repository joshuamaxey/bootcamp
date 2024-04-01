//! CALLBACK FUNCTIONS

//! CALLBACK FUNCTIONS ARE FUNCTIONS THAT ARE PASSED TO ANOTHER FUNCTION AS AN ARGUMENT.

//^CALLBACK LEARNING OBJECTIVES:

//^ 1. Identify why fuctions are called "first Class Objects" in JavaScript
//^ 2. Given a code nsippet containing an anonymous callback, a named callback, and multiple console.logs, predict what will be printed.
//^ 3. Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.
//^ 4. Write a function, myMap, which takes in an array and a callback as arguents. The functio nshould mimic the behavior of Array.map.
//^ 5. Write a function, myFilter, that akes in an array and a callback as arguments. The functio nshould mimic the behavior of Array.filter.
//^ 6. Write a function, myEver, that takes in an array and a callback as arguments. The function shoudl mimic the behavior of Array.every.

//Defining a function that accepts another functio nas an argument is no different than specifying a regular parameter.


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
