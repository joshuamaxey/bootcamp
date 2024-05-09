//! Stacks

// Abstraction is everywhere in computer science.

// Array methods like shift() and splice() abstract away details like memory allocation, array resizing, and element rearrangement so that these operations can be carried out in one step, on one line of JavaScript code.

//^ Stacks are an ABSTRACT DATA TYPE

// Stacks store collections of data according to one rule: Last in, first out.

// Unlike data structures, ADTs (Abstract Data Types) have no implementation requirements.

// The only thing that matters with respect to stacks is the order of inputs and outputs.

//! LIFO: Last In, First Out ... FILO: First In, Last Out

// Consider a stack of plates in a restaurant.

// The plate on the top of the stack, the last one placed there, is the one that the chef will grab when they need to plate some food.

// The last item placed on the stack will always be the first that is taken off of the stack.

//! Push and Pop

// When an item is added to the top of a stack, it is PUSHED.

// When an item is removed from the top of a stack, it is POPPED.

//! Stack Implementation

// The stack ADT (Abstract Data Type) is implemented using an array data structure.

class Stack {
    constructor() {
        this.data = [];
    }

    push(value) {
        this.data.push(value);
    }

    pop() {
        return this.data.pop();
    }

    size() {
        return this.data.length;
    }
}

const stackOfPlates = new Stack();

stackOfPlates.push('plate 1');
stackOfPlates.push('plate 2');
stackOfPlates.push('plate 3')

console.log(stackOfPlates); // Stack { data: [ 'plate 1', 'plate 2', 'plate 3' ] }

stackOfPlates.pop();
stackOfPlates.pop();

console.log(stackOfPlates); // Stack { data: [ 'plate 1' ] }

stackOfPlates.push('plate 4');

console.log(stackOfPlates); // Stack { data: [ 'plate 1', 'plate 4' ] }

stackOfPlates.pop();
stackOfPlates.pop();

console.log(stackOfPlates); //Stack { data: [] }

console.log(stackOfPlates.pop()); // undefined, nothing left in the stack

//! Stack Applications

// Stacks can be used to implement features like a "back button" on a webpage:

function clickLink(newURL) {
    // Store current URL, then load the new URL
    browserHistory.push(currentURL);
    currentURL = newURL;
    load(currentURL);
}

function clickBack() {
    // Retrieve the most recently visited page and load it
    currentURL = browserHistory.pop();
    load(currentURL);
}

//! Stack Performance

// Performance depends on implementation.

// If a stack is implemented with a dynamic array:

//^ push(), pop(), and size() all have an average time complexity of O(1).

//^ push() has a worst-case time complexity of O(n) due to resizing, but we avoid this worst-case scenario by overallocating and limiting stack size.

// Stacks use (n) array slots to store (n) values, so the space complexity of a stack is O(n).
// Due to the contiguous nature of arrays, this O(n) time complexity remains relatively efficient.

//! Call Stack

// Stacks are also found in code execution.

//^ "Code" can be described as a list of instructions which execute one at a time.

// As code runs, the state of each function is stored in a //^ stack frame.

// The stack frame contains the function's local variables and state of execution.

// These frames are stored in LIFO order in a portion of memory called //^ the call stack.

// When a function is executed, its stack frame gets pushed to the top of the call stack.

// When that function returns, its stack frame is popped off the call stack.

function factorial(n) {
    if (n <= 1) return 1;

    return n * factorial(n - 1);
};

// Calling factorial(5) returns 5 * factorial(4)

// factorial(4) runs and returns 4 * factorial(3)

// factorial(3) runs and returns 3 * factorial(2)

// factorial(2) runs and returns 2 * factorial(1)

// factorial(1) hits the base case and returns 1 to factorial(2), then pops off the stack

// next factorial(2) returns the value 2 to factorial(3) and is popped off the call stack

// factorial(3) returns the value 6 to factorial 4 and is popped off the call stack

// factorial(4) returns the value 24 to factorial 5 and is popped off the call stack

// finally, factorial(5) returns its value and is popped off the call stack.

//^ The call stack occupies memory. The recursive factorial() function has a space complexity of O(n). ALL recursive functions have a minimum space compexity of O(n) where (n) is the depth of calls. If the stack grows too large, a STACK OVERFLOW ERROR is thrown.

n = 100000

// factorial(n); // RangeError: Maximum call stack size exceeded

//^ If your (n) is large and space is an issue, iterative solutions are usually superior to recursive solutions:

function factorialIterative(n) {

    let total = 1;

    for (let i = n; i > 0; i--) {
        total *= n;
    }

    return total;
}

console.log(factorialIterative(n)) // returns "Infinity," no error. //& Interesting, first time I've ever seen "Infinity" as a retun value. I'm assuming this means that the actual return value is large enough that JavaScript considers it infinite?

//! Summary

// Learned about stacks, input/output specification, and standard array implementation
// Practical applications including the call stack
