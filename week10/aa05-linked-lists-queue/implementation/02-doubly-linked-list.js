// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        let newNode = new DoublyLinkedNode(val); // create a new node with the provided value

        if (!this.head) { // if the list is empty...
            this.head = newNode; // ...set the head pointer of this list to the newNode;
            this.tail = newNode; // and also point the tail pointer of this list to the newNode;
        } else { // If the list is not empty
            this.head.prev = newNode; // set the 'prev' pointer of the current head to the newNode, making it the new head.
            newNode.next = this.head; // set the 'next' pointer of the newNode to the previous head.
            this.head = newNode; // set the 'head' pointer of the linkedList to the newNode.
        }

        this.length++; // increment the linkedList to reflect that there has been a new node added.

        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        // let newNode = new DoublyLinkedNode(val);
        // if (this.length >= 0) {
        //     this.head.previous = newNode;
        //     newNode.next = this.head;
        //     this.head = newNode;
        // } else {
        //     this.head = newNode;
        //     this.tail = newNode;
        // }
        // this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        let newNode = new DoublyLinkedNode(val); // Create a new node with the provided value and store it in the newNode variable.

        this.length++; // Increment the length of the linkedList to make room for the new node.

        if (!this.head) { // If the linkedList is empty...
            this.head = newNode; // ...set the 'head' pointer of the linkedList to the newNode
            this.tail = newNode; // then also set the 'tail' pointer of the linkedList to the newNode;
            return; // stop code execution and terminate the program since we've successfully added the node
        }

        this.tail.next = newNode; // IF the linkedList is not empty, set the 'next' pointer of the current tail to point at the newNode, making it the new tail.
        newNode.prev = this.tail; // Set the 'prev' pointer of the newNode to the previous tail.
        this.tail = newNode; // Set the 'tail' pointer of the linkedList to point at the newNode

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        let currHead = this.head; // store the current head node in the currHead variable;

        if (!this.head) { // If the linkedList is empty
            return; // stop code execution and terminate the program because there is nothing to remove
        }

        this.head = this.head.next; // If the linkedList is NOT empty, set the 'head' pointer of the linkedList to the next node in the list. This leaves the previous head floating in the ether to be garbage-collected.

        if (this.head) { // If there is a head node...
            this.head.prev = null; // ...set it's 'previous' pointer to null, disconnecting it from the previous head.
        }

        this.length--; // decrement the length of the linkedList
        return currHead.value; // return the value stored within the removed head node

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.tail) { // If there is no tail node...
            return; // ...stop code execution and terminate the program because there is nothing to remove
        }

        let currTail = this.tail; // If there is a tail node, store that node in the currTail variable
        this.tail = this.tail.prev; // Set the 'tail' pointer of the linkedList to the node before the current tail, leaving the current tail floating in the ether to be garbage-collected.

        if (this.tail) { // explicitly check to see whether there is a tail node in this linkedList
            this.tail.next = null; // set the 'next' pointer of the new tail node to point to 'null', disconnecting it from the previous tail.
        }

        this.length--; // decrement the linkedList by 1
        return currTail.value; // return the value that was stored in the previous tail node.

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node

        if (!this.head) { // If the linkedList is empty...
            return undefined; // ...return undefined per specs
        } else { // If the linkedList is NOT empty...
            return this.head.value // ...return the value stored within the head node
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        if (!this.head) { // If the linkedList is empty...
            return undefined; // ...return undefined per spec
        } else { // If the list is not empty...
            return this.tail.value; // ...return the value stored within the tail node
        }

        // Write your hypothesis on the time complexity of this method here
    }

    print() {

        let curr = this.head; // store the current head node in the variable 'curr'

        while (curr) { // While the linkedList is not empty...
            console.log(curr.value); // log the value of the current node to the console
            curr = curr.next; // iterate through the nodes until we reach the end
        }
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
