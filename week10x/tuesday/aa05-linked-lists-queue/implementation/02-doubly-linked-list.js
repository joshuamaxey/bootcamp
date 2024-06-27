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
        // There are bugs in this method! Fix them!!!

        // Add node of val to head of linked list
        let newNode = new DoublyLinkedNode(val); // create a new node with the provided vaule

        if (!this.head) { // if the list is empty (if there is no head node)

            this.head = newNode; // set the list's 'head' pointer to the new node

            this.tail = newNode; // set the list's 'tail' pointer to the new node
        } else { // Otherwise, if the list is not empty (if there is at least one node)...

            newNode.next = this.head; // Set the newNode's 'next' pointer to the current head, making the current head the second node

            this.head.prev = newNode; // Set the 'prev' pointer of the previous head to the newNode

            this.head = newNode; // Then point the list's 'head' pointer to the newNode, making it the new head
        }

        this.length++; // increment the length of the list by 1 to reflect the addition of the new node

        // if (this.length >= 0) {
        //     this.head.previous = newNode;
        //     newNode.next = this.head;
        //     this.head = newNode;
        // } else {
        //     this.head = newNode;
        //     this.tail = newNode;
        // }

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // Add node of val to tail of linked list

        this.length++

        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {

            this.head = newNode;

            this.tail = newNode;
        } else {

            newNode.prev = this.tail;

            this.tail.next = newNode;

            this.tail = newNode;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        if (!this.head) return undefined;

        this.length--

        let val = this.head.value

        this.head = this.head.next

        if (this.head) { //! (???)

            this.head.prev = null;
        }
        // this.head.prev = null;

        return val;

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.head) return undefined;

        this.length--;

        let previous = this.tail.value;

        if (this.length === 0) {

            this.head = null;

            this.tail = null;
        } else {

            this.tail = this.tail.prev

            this.tail.next = null;
        }

        return previous;
    }

    peekAtHead() {
        // Return value of head node

        if (!this.head) return undefined;

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtTail() {
        // Return value of tail node

        if (!this.tail) return undefined;

        return this.tail.value;

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
