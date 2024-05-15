//! What Is A Linked List?

// An ordered sequence of nodes.

// A node has a VALUE and a POINTER (to the next node)

class LinkedListNode {
    constructor(value, next) {
        this.value = value; // Every node has a data value
        this.next = next; // Every node has a pointer (next = pointer)
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

// The list itself is just a pointer to the head node.

// The list continues until it reaches a null node pointer.

// IF the head pointer is null, then the linkedList is empty.
