const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)

        let newNode = new SinglyLinkedNode(val); // create a newNode with the provided value

        if (!this.head) { // if the Queue is not epty
            this.head = newNode; // set the 'head' value of the queeu to the newNode
            this.tail = newNode; // set the 'tail' value of the queue to the newNode
        } else {
            let curr = this.tail; // store current tail node in the 'curr' variable

            while (!curr.next) { // While we are at the tail node (??)
                curr.next = newNode; // set the 'next' pointer of the current tail to point at newNode
                this.tail = newNode; // set the 'tail' pointer of the queue to the newNode;
            }
        }
        this.length++; // increment the length of the queue;
        return this.length; // return the new length of the queue (per spec?)
        // Write your hypothesis on the time complexity of this method here
    }

    dequeue() {
        // Remove node from front of queue (linked list)

        const currVal = this.head; // store the current head node of the queue in the currVal variable.

        let res = []; // initialize a new 'result' array;

        if (this.length === 1) { // if the length of the queue is currently 1
            res.push(currVal)
            this.head = null;
            this.tail = null;
            return res[0].value;
        }

        if (!this.head) { // if the queue is empty
            return null; // return null because there is nothing to dequeue
        }

        this.head = this.head.next; // set the 'head' pointer of the queue to the next node after the current head

        this.length--; // decrement the length of the queue by 1

        return currVal.value; // return the value stored within the node that we dequeued

        // Write your hypothesis on the time complexity of this method here
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
