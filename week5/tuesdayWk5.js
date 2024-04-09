//! The Call Stack

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
