//! The Call Stack---------------------------------------------------------------------------------------------------------------

//^ Learning Objectives:

//^ 1. identify the two operations that characterize a STACK data structure

// The CALL STACK is a structure JavaScript uses to keep track of the evaluation of function calls. It uses the STACK data structure. IN computer science, a STACK is a general pattern of organizing a collection of items. FOr our current use of a stack, the items being organized are our function calls (which occur during the execution of our program).

// Imagine a STACK as a vertical pile that obeys the following pattern:

//* New items are PUSHED to the top of the pile
//* The only item that can be removed is the TOP of the pile. We call this POPPING the top item from the stack.

// In JavaScript, the term "stack frames" describes the itemsbeing pushed and popped. There are two ways that JavaScript employs its stack mechanics during runtime:

//* There are two ways that JavaScript utilizes the above stack mechanics ^^^ at runtime:

//* 1. When a function is called, a new frame is PUSHED onto the stack.
//* 2. When a function returns, the frame on top of the stack is POPPED off the stack.

//The following program illustrates how frames are PUSHED TO and POPPED FROM the call stack:

function foo() {
    console.log("a");
    bar();
    console.log("e");
}

function bar() {
    console.log("b");
    baz();
    console.log("d")
}

function baz() {
    console.log("c");
}

foo(); // prints a b c d e.

//^ 2. sketch how the CALL STACK is manipulated during the runtime of a simple program like the one provided in this lesson.

/*
So...

6. foo is popped ("e")      ^
5. bar is popped ("d")      |   (baz popped, bar executed and popped, foo executed and popped)
4. baz is popped            |

3. baz is executed ("c")    ^
2. bar is executed ("b")    |   (foo added (executed) to the stack, bar added/executed, baz added executed)
1. foo is executed ("a")    |

*/

//* So what are the practical consequences of the callstack?

//  JavaScript is called a SINGLE-THREADED LANGUAGE because it uses a SINGLE CALL STACK that leads to a SINGLE THREAT OF EXECUTION.

// Thus the JavaScript runtime can only perform ONE "command" at a time and that one "command" currently being executed is whatever is at the TOP OF THE STACK.

//& Note that an EVENT can ONLY be handled once the call stack is EMPTY.

//* Events can be things like timeouts, user clicking a button, hitting a key, etc. Because we do NOT want to delay the handling of important events like that, we want to MINIMIZE the time that the callstack is NOT EMPTY.

//If we were to do something like push an infinite loop to the callstack, it would cause that function to never return. Since it never returns, it will never be popped from the stack, and the JavaScript runtime will never be able to handle those events.

//! Recursion------------------------------------------------------------------------------------------------------------------

//& Thus far, we have solved complex problems with ITERATION: the process of counting through eafch item in a collection.

//& Now we will learn RECURSION: the process of calling a function within itself.

//& Lets think about this in terms of a real-life example. You have a job and your boss has asked you to unpack crates of fruit. Some of them, as expected, are full of fruit. Others, however, are full of smaller crates. SOme of those contain even smaller crates.

// If we were to perform this task using ITERATION, we would have to one-by-one through each crate, pulling items out individually. //* RECURSION may offer a better way.

// What about if we open each crate, then look inside. If its more crates, we dump them out. If it's fruit, we gently remove it and set it aside.

function gentlyUnpackFruit(contents) {
    console.log("Your " + contents + " have been unpacked!");
}

function dump(crate) {
    if (crate.content_type === "crate") {
        dump(crate.contents);
    } else if (crate.content_type === "fruit") {
        gentlyUnpackFruit(crate.contents);
    }
}

// * Notice how, in the DUMP function, we actually call the DUMP function within itself! THIS IS RECURSION! The DUMP function may RECURSE if we have crates nested within each other.

// The word "recurse" is distinctly different from the word "recur". Consider the following code:

console.log("Hello"); console.log("Hello"); //This function RECURS, or happens more than once

//* VS

console.log(console.log("Hello")); //This function RECURSES, or calls itself within itself.

//* Researchers began using the term RECURSE specifically to refer to functions that are being called from within themselves. Creating a new word by removing a suffix (recursive => recurse) is called BACK-FORMATION.

//^ Learning Objectives

//^ 1. Given a recursive function, identify what is the base case and the recursive case

//& There are TWO cases within a recursive function: The BASE CASE and the RECURSIVE CASE.

//* The BASE CASE is when the function is processed WITHOUT any additional recursion. When it is executed, the function runs once and ends. Since the result of the BASE CASE is that the functions tops, we may also refer to this as the TERMINATING CASE.

//* The RECURSIVE CASE is the situation wherein the function recurses. This represents the DATA STATE that causes a function to call itself. Without a recursive case, a function is just another function.

// Consider our FRUIT CRATE example. The base case is "when the crate contains fruit" and the recursive case is "when the crate contains other crates." When we encounter fruit, we remove the fruit and the action is complete. When we encounter more crates, on the other hand, we go back to the start and repeat the whole process again.

//* ALWAYS identify the base and recursive cases before writing any code.

// Without a RECURSIVE CASE, we do not need recursion at all and should consider an alternative approach.

// Without a BASE CASE, we could create an infinite loop!

//* It is important to always know when to stop a process before we start it.

//& Here's another real-life example: Consider a Movie Theater Problem.

// Imagine you're meeting a frinend in a movie theater. The lights have gone down, it's totally dark, and your friend just sent you a message asking which row you're seated in. How can you figure out the row number without being able to see the rows or your ticket?

// Consider the following:

//* The theater is mostly occurpied, so you can rely on people being in front of and behind you.
//* You don't want to knock over anyone's drinks and snacks, so you must remain in your seat.
//* Your phone is almost dead, so you can't use the flashight or screen to illuminate the seats.

// What if we tap the person in front of us on the shoulder? If there's someone in front of us, we know that we're at least one row back from the front of the teater. If someone is in front of them, we're at least two rows back. And so on.

// If each person performs this action and they all report back, we can coutn how many rows back we are. WHenever someone reaches forward and theres no one else in front of them, we can assume we're reached the front of the theater and that person becomes "Row #1."

//* In this example, our BASE CASE is "No one in front of me = Row #1"
//* On the other hand, our RECURSIVE CASE is "Someone in front of me = Row #(1 + person in front of me's row #)".

// Now that we know both cases, we can build a recursive function out of them! Here's what it might look like:

determineRow = function(moviegoer) {
    if (moviegoer.personInFront) {
        return 1 + determineRow(moviegoer.personInFront);
    } else {
        return 1;
    }
}

//& Now lets practice IDENTIFYING the Base and Recursive cases

function echo(message, volume) {
    if (volume === 0) { //base case because it causes a return and stops the function
        return;
    }

    console.log(message); //if volume > 0 (??) recursive case
    echo(message, volume - 1);
}

echo("Hello there!", 10);

function exercise(bottle) {
    console.log("Just a few more reps!");
    drinkWater(bottle);
}

function drinkWater(bottle) {
    if (bottle.water > 0) { // recursive case ??
        exercise({water: bottle.water - 1});
    } else {
        console.log("Whew! Good workout.");
        return; // base case ?? because it ends the function
    }
}

exercise({water: 5})

// function justDance(song) {
//     justDance(song);
// }

// justDance("I Wanna Dance With Somebody (Who Loves Me)"); //// We need a BASE CASE and a RECURSIVE STEP.



// Now it doesn't matter how many rows the movie theater has, we have a toool to figure out where we are.

//^ 2. Identify and use default parameters for functions

//^ 3. Define what a "stack overflow" means in JavaScript's call stack

//^ 4. Identify what causes the error: [ RangeError: Maximum call stack ]

//^ 5. Map out the recursive call stack when running a test case through a recursion function

//^ 6. Solve problems using recursion.

//^ 7. Given a buggy recursive function, debug the function.

//! TOOL FOR RECURSION:

//! LECTURE NOTES

function addOneRecursively(n, x) {
    // for(let i = 0; i < n; i++) {
    //     x = x + 1
    // }
    // return x;

    if (n === 0) return x;
    // x = x + 1
    n = n - 1
    return addOneRecursively(n, x);
}

console.log(addOneRecursively(5, 2))

function sumNumbers(arr, sum) {
    // for (let i = 0; i < arr.length; i++) {
    //     sum = sum + arr[i];
    // }
    // return sum;

    if (arr.length === 0) return sum; //base case
    let currentValue = arr[arr.length - 1] //last element in the array
    sum = sum + currentValue //Add "sum" to the value of the last element in the array.
    arr.pop() //remove last element from the array
    return sumNumbers(arr, sum) //invoke the function again with the modified arguments

}

console.log(sumNumbers([1,2,3,4,5], 0));
