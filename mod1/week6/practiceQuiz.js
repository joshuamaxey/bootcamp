//! 1. What will happen when we run the code below?

// console.log(sayGoodbye("Jeff"));

const sayGoodbye = function(name) {
    return `Goodbye ${name}`; // Notice the use of the string literal here, which avoids the need to concatenate.
}

//^ This throws a ReferenceError: Cannot access 'sayGoodbye' before initialization. This will happen when we declare the function with the let or const keywords.

//! 5. If you execute an asynchronous function call between the two console.logs below, will it print before "world"?

console.log("hello");

setTimeout(function() {
    console.log("goodbye moon")
});

console.log("world");

//^ No, "goodbye moon" prints last. Even with the timer set to 0, asynchronous functions still take longer to execute than synchronous functions.

//! 6. Will code in the if block below run?

if ("") {
    console.log("test")//will code here run? //! NOPE. It will not. see pseudocode below.
}

// console.log(!"") // returns true, which means "" is a falsey value. Therefore the code will NOT run.

//! 7 Which of the following should we add to prevent an error from the above function?
