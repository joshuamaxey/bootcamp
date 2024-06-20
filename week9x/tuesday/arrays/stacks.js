//! Stacks

// Stacks are an abstract data type.

// Stacks allow us to store and access data according to one rule: Last in, first out.

// Think of a STACK like a STACK of plates.

//! push() and pop()

// You push() and pop() from the top (front) of the stack.

//! Stack Implementation

// Stacks are usually implemented using an array

class Stack {
    constructor() {
        this.data = []; // ininitalie a new array, 'data'
    }

    push(value) {
        this.data.push(value); // push a value to the top (front) of the 'this.data' array
    }

    pop() {
        this.data.pop(); // pop the top (front) element from the 'this.data' array
    }

    size() {
        return this.data.length; // return the length of the stack (length of the 'this.data' array)
    }
};


//& Alternatively (if creating an entire class is overkill)

const stack = []; // Initialie a new array, and limit ourselves to .push() and .pop() and .length. This gives us the same fuctionality as creating an entire stack class without all of the extra work.

//! Performance

//^ .push(), .pop(), and .size() all have average time complexities of O(1).

// .push() DOES have a worst-case time complexity of O(n) due to resizing, but resizing happens infrequently and pre-allocation and size limitations can help prevent it.

// Stacks have a space complexity of O(n) since they use (n) slots to store (n) values. But this O(n) is very efficient due to the contiguous nature of arrays.
