

//! Asynchronous JavaScript

//^ Learning Objectives:

//^ 1. Identify JavaScript as a language that utilizes an EVENT LOOP model

//! The Message Queue and Event Loop

// JavaScript is ASYNCHRONOUS and can handle unpredictable events that occur during our application's runtime. This is what makes JavaScript so dynamic and what enables it to be interactive.

//^ Learning Objectives:

//^ 1. Explain how the JavaScript runtime uses the CALL STACK and MESSAGE QUEUE in its EVENT LOOP.
//^ 2. Identify the two operations that characerize a QUEUE data structure.

//& The Event Loop

// JavaScript uses a model of execution called an EVENT LOOP. The Event Loop has two parts:

// 1. The first part of the EVEN LOOP is the CALL STACK. The call stack is the structure used to keep track of function calls and their execution. It keeps track of the current "task" in progress. A task may consist of multiple function calls. For example, if one function calls another function, both are considered to be a part of the same task.

// 2. The other part of the EVENT LOOP is called the MESSAGE QUEUE. The message queue keeps track of tasks taht cannot be executed at this moment but will be executed once the current task is finished. Remember that JavaScript is SINGLE-THREADED, which means taht it can only perform one task at a time. This means that ONE TASK will NEVER be interupted by ANOTHER TASK.

//^ Effectively, the EVENT LOOP is what cycles MESSAGES from the MESSAGE QUEUE onto the CALL STACK, where they are handled as tasks. SYNCHRONOUS tasks (like functions called by other functions) are executed together by the call stack before the next ASYNCHRONOUS message can be added to the callstack for execution.

//& In summary:

// 1. CALL STACK: The current task and all SYNCHRONOUS tasks are performed on the stack.
// 2. MESSAGE QUEUE: Incoming ASYNCHRONOUS events wait on the queue.

// The queue ensures that events which occurred first will be handled first, and so on. Once the stack is empty, that means the current ttask is complete and the next task can be moved from the queue to the stack for execution. This cycle repeats again and again, which is why it is called the Event LOOP.

//^ 2. Identify JavaScript as a SINGLE-THREADED LANGUAGE

// JavaScript is a SINGLE-THREADED language, which means that it can only perform ONE TASK at a time. This is important because it means that NO TASK IN JAVASCRIPT can be interuupted by ANOTHER TASK.

//^ 3. Describe the difference between ASYNCHRONOUS and SYNCHRONOUS code

//& Synchronous code

// Synchronous code has an inherent order of execution that is GUARANTEED. Like this:

console.log("one");
console.log("two");
console.log("three");

// In the code above, it is guaranteed that "one" will print first, that "two" will print second, and that "three" will print third.

// Synchronous code only guarantees that three is an ORDER OF EXECUTION and that it is GUARANTEED. It //! does not mean that the order of execution will always be in the same order as the positional order of the lines of code. Consier the following:

// let foo = function() {
//     console.log("two")
// };

// console.log("one")
// foo();
// console.log("three");

// Even though this code ^^^ may jump around from line to line, the code is synchronous because we can predict with total certainty the relative order of the statements that will be printed (order of execution);

//& Asynchronous code

// When code is ASYNCHRONOUS, it means that there is no guarantee as to the order in which the commands are executed.
// The setTimeout method enables us to execute a callback after a given amount of time:

console.log("start");

setTimeout(function() {
    console.log("time is up!");
}, 1500);

console.log("end");

// Because the setTimeout function is ASYNCHRONOUS, it does NOT prevent the execution of lines 6 AND 72 while we are waiting for the 1.5 seconds (1500 milliseconds) to pass. Thus, "start" and "end" can both be printed while the computer waits to execute the callback that we've called within the setTimeout method.

//! Note that setTimeout can NEVER be treated as synchronous under ANY circumstances because the time that we specify within the method is not exact. RATHER it is the MINIMUM time that will elapse before executing the callback. If we set the timeout for three seconds, we could in practice actually wait three seconds, or five, or ten before the callback is invoked. If there is no guaranteed timing, then it is asynchronous.

// Consider the following:

console.log("first");

setTimeout(function() {
    console.log("second");
}, 0);

console.log("third")

// When we execute the code above ^^^ we find that "first" and "third" are still printed before "second" because EVEN THOUGH we set a timeout of 0 milliseconds within our execution of the setTimeout method, it still takes longer to execute the setTimeout method than it takes to execute the other two console.logs. This is because that "0 milliseconds" is not EXACTLY how long the function will wait before executing the code- It is the MINIMUM time that the method must wait before executing the code. Therefore in practice, the setTimeout method here actually took longer than 0 milliseconds which is why "second" was the last thing to print to the console despite that this function call was written BEFORE the "third" console.log.

//& Note also that in addition to the setTimeout(function()) method, there is also a setInterval(function()) method which continually executes a callback after a number of milliseconds, repeatedly!

//^ 4. Execute the ASYNCHRONOUS function setTimeout with a callback.

setTimeout(function(x = 5, y = 10) {
    let sum = x + y;
    console.log(sum);
}, 3000);

setTimeout(function() {
    console.log("Timeout 2");
}, 2000);

//^ 5. Given the function, "function asyncy(cb) { setTimeout(cb, 1000); console.log("async") }"
//^ and the function, "function callback(" {console.log("callback"); }" predict the output of "asyncy(callback);"



//^ 6. Use setInterval to have a function execute 10 times with(in) a 1-second time-period. After the 10th cycle, clear the interval.



//^ 7. Write a program that accepts user input using Node's readline module.

//! Timeouts and Intervals

//^ Name the arguments that can be passed into setTimeout and setInterval
//^ Predict the asynchronous nature of code snippets that utilize setTimeout and setInterval

// In its most basic form, setTimeout accepts a callback and an amount of time in milliseconds:

// const foo = () => console.log("food");

// setTimeout(foo, 2000);

// Remember that because setTimeout is asynchronous, any commands that come AFTER the setTimeout may be executed BEFORE the callback is complete.

console.log("drink");

// When we run all of the code on this page, "drink" is printed BEFORaE the five functions that precede it. This is because the setTimeout method is asynchronous so it does NOT block the execution of further lines of code.

// In addition to the CALLBACK and DELAY, an unlmited number of ADDITIONAL ARGUMENTS can be provided to the setTimeout method:

// function foo(food1, food2) {
//     console.log(food1 + " for breakfast");
//     console.log(food2 + " for lunch");
// }

// setTimeout(foo, 2000, "pancakes", "couscous"); // prints:
// //pancakes for breakfast
// //couscous for lunch

//& Cancelling Timeouts

// Now we have complete knowledge of all possible arguments we can use for setTimeout (CALLBACK, DELAY, ARGUMENTS)
// setTimeout(functionRef, delay, param1, param2)

// But what does the setTimeout function actually RETURN?

const val = setTimeout(foo, 2000);
console.log(val);

/*
Timeout {
  _idleTimeout: 2000,
  _idlePrev: [TimersList],
  _idleNext: [Timeout],
  _idleStart: 38,
  _onTimeout: [Function: foo],
  _timerArgs: undefined,
  _repeat: null,
  _destroyed: false,
  [Symbol(refed)]: true,
  [Symbol(kHasPrimitive)]: false,
  [Symbol(asyncId)]: 11,
  [Symbol(triggerId)]: 1
}
*/

//^ This "Timeout object" can be passed into the "clearTimeout" function tto CLEAR the setTimeout before the timer expires, preventing the code within the method from running!

clearTimeout(val);

//& Running Intervals

// The setInterval function executes a callback repeatedly at the specified delay.
//^ setInterval accepts the SAME ARGUMENTS as setTimeout.

function foo(food1, food2) {
    console.log(food1 + " and " + food2 + "!");
}

setInterval(foo, 1000, "pancakes", "couscous");

//^ When you run the program just above this line of pseudocode, you will find that it repeats infinitely at the specified time interval (every second it prints "pancakes and couscous!")

//& To stop it, use the hotkey "ctrl + c," which kills the program without killing the terminal.

//! Threading

// If WRITING the code is the birth of a program, then its EXECUTION is the lifetime of that program. Instead of the word 'lifetime', programmers use the word 'runtime" to refer to the execution (lifetime) of a program.

//^ Explain the difference between single-threaded and multi-threaded execution
//^ Identify JavaScript as a single-threaded language

// In single-threaded execution, only ONE command can be processed at a time. There is only "one cook in the kitchen". In JavaScript, we may run into situations where we are currently in the process of carrying out a command when an "important" event (like a user clicking a button or hitting a key) happens. In JavaScript, its single-threaded runtime dicatates that the user will just have to wait. If a command is in progress and some event occurs, the current command will run to full completion before the vent is handled.

// Consider the follow code:

setTimeout(function() {
    console.log("time's up!");
}, 1000);

//^ In the code above, we set a timeout for one second...

let i = 0;
while (true) {
    i++;
}

//^ Then we write and execute this infinite loop.

// While the infinite loop is running, the timer on our setTimeout function expires and JavaScript recognizes that it is time to run our callback, which would print "time's up!" to the console.
// HOWEVER, JavaScript's runtime policy for handling new events is to ONLY handle the next event after the current comand is complete. That means that it will only execute the callback in our setTimeout function after it is finished handling the loop, since it began executing the loop while we were waiting for the timeout of 1000ms to complete.
// Unfortunately, the infinite loop never ends, so we are never able to execute the callback within our setTimeout function.

//^ This ^^^ is one of the PRIMARY causes of slow, unresponsive pages.

//! The Call Stack
