//! Linked Lists

//^ A linked list is an ordered sequence of nodes. Each node consists of a value and a pointer.

//! What is a Linked List?

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

// The linkedList itself is just a ointer to the HEAD NODE.

// The list ends when it reaches a node that points to NULL.

// If the HEAD pointer points to NULL, then the linkedList is empty.

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToHead(value) {

        const newNode = new LinkedListNode(value, null); // Create a new node using our LinkedListNode() constructor, setting its 'next' pointer to null by default.

        newNode.next = this.head; // Set our newNode.next value to the current (previous) head node, this.head

        this.head = newNode; // Then make our newNode the new head of our linked list.

        //& Why can't we just write: const newNode = new LinkedListNode(value, this.head), and skip the middle step?
    }

    print() {

        let current = this.head; // Begin our traversal at the head node of our linked list

        while (current) {

            process.stdout.write(`${current.value} -> `); // print the value of the current node

            current = current.next; // Move from the current node to the next node
        }

        console.log("NULL");
    }
}

ll = new LinkedList(); // create a new linkedList using our LinkedList() class constructor

node3 = new LinkedListNode(3, null); // Create node3 and point it to null, this will be the end of the linkedList
node2 = new LinkedListNode(2, node3); // Create node2 and point it to node3
node1 = new LinkedListNode(1, node2); // Create a node that points to node2 using our LinkedListNode() class construtor

ll.head = node1; // Set the HEAD node of our linkedList to 'node1'

//! Adding to the Head of a Linked List

// The production of new nodes should be completely abstracted away using our classes and their methods.

// We want to be able to call addToHead() and addToTail() on our linkedList just like we would call unshift() or push() on an array

// For this, lets return to our LinkedList() class constructor on line 20...

//! Time Complexity of addToHead

//^ To determine the time complexity of addToHead, we need to look at the time complexity of each step:

    // 1. Creating a new node is O(1)
    // 2. Setting the NEXT pointer is O(1)
    // 3. Setting the HEAD pointer is O(1)

//^ Since all of our steps are O(1), the overall time complexity of addToHead is O(1) as well.

// Compare this to the time complexity of adding to the front of an array (unshift), which is O(n). The difference is in the fact that addToHead() requires no shifting of elements, unlike unshift()

//! Traversing A Linked List

//^ If we want to print all of the values in our linked list, then we need to perform a TRAVERSAL.

// To traverse a linked list is to visit each node in order.

// Our print loop will visit each node, printing its value and then moving on to the next node, only stopping once it reaches a NULL pointer. Lets return to our linkedList constructor on line 20...

ll.print(); // prints: 1 -> 2 -> 3 -> NULL

//^ Since traversal requires that we visit every node, it has a time complexity of O(n)

//! Linked Lists in Memory

// Linked list nodes are not stored contiguously, but randomly. This is why they must be traversed in order and cannot be indexed.
