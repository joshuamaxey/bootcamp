//! Queues

// A queue is an abstract data type

// A queue returns values in the same order that they are added

//! FIFO

// First In, First Out

// There are two important functions that define a queue:

//^ enqueue()
//^ dequeue()

// const queue = new Queue

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// queue.dequeue(); // 1
// queue.dequeue(); // 2

// queue.enqueue(4);

// queue.dequeue(); // 3
// queue.dequeue(); // 4

// '1' is the first value into the queue, so it's the first out when dequeue is called.
// '2' is the second in, so it is the second to come out.
// '4' is enqueued after '2', but since '3' was added before '4', 3 is the next to come out.

// class Queue {
//     constructor() {
//         this.data = [];
//     }

//     enqueue(value) {
//         this.data.push(value);
//     }

//     dequeue() {
//         return this.data.shift();
//     }
// }

// Note the distinction between QUEUE and STACK. In a stack, the last item on is the first one off. In a queue, the first item on is the first one off.

//^ In a queue, shift() returns values from the front of the array.
//^ In a stack, pop() returns values from the back of an array.

// Arrays are defined by a pointer to the start of a contiguous block of memory that is divided evenly into chunks.

// Calling shift(), which removes the first item from an array, requires moving every other element over to the left by one (one chunk of memory at a time). This makes dequeue(), which utilizes shift, an O of n operation. So it is very inefficient for large values of (n).

//^ Remember that with respect to linked lists, we can remove from the head and add to the tail in O of 1 time.

//* This means that queues are better implemented with a linked list than with an array.

//! Implementing a Queue with a Linked List

const LinkedList = require("../../../../projects/linkedLists1/aa05-linked-list-basics-temp/linked-list")

class Queue {
    constructor() {
        this.linkedList = new LinkedList();
    }

    enqueue(value) {
        this.linkedList.addToTail(value);
    }

    dequeue() {
        this.linkedList.removeFromHead();
    }
}

//^ When we use htis linked list implementation, instead of using an array, addToTail() and removeFromHead() both have time complexities of O(1). This means that now, our enqueue() and dequeue() operations are also O of 1 operations.

//! Performance Testing

// In your practices, you'll be iplementing a linked list.

q = new Queue();
n = 100000;

enqueueStartTime = Date.now();
for (let i = 0; i < n; i++) {
    q.enqueue(i);
}
enqueueEndTime = Date.now();

dequeueStartTime = Date.now();
for (let i = 0; i < n; i++) {
    q.dequeue();
}
dequeueEndTime = Date.now();

console.log(`Enqueue time: ${enqueueEndTime - enqueueStartTime}ms`);
console.log(`Dequeue time: ${dequeueEndTime - dequeueStartTime}ms`);

//! No. This just causes an infinite loop.
