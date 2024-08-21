//! Linked Lists and Queues

//^ 1. Compare and contrast properties and operations of arrays, linked lists, and hash tables
//^ 2. Identify the mechanics and complexity of adding and removing elements from a linked list
//^ 3. Implement a linked list
//^ 4. Traverse and search through linked lists
//^ 5. Explain what it means that a linked list does NOT have an index
//^ 6. Understand mechanics of doubly-linked lists and tradeoffs between linked and doubly-linked lists
//^ 7. Implement a queue using linked lists
//^ 8. Select a linked list, doubly-linked list, or queue as the appropriate tool for solving a problem

//! Linked Lists

// Linked lists store an ordered sequence of values.

// Linked lists take up more space and time than arrays.

// Linked lists often don't show up in day-to-day coding.

//^ 'Pointers' are the reason that linked lists are significant.

// Pointers enable you to store complex, multi-dimensional data in a linear memory bank.

// Pointers therefore unlock features such as multi-type arrays, pass-by-reference methods, graph traversal, and more. //! I have no idea what any of these things are.

// Pointers are everywhere, but hidden fro sight in high-level languages like JavaScript

// Linked lists are closely related to and key to understanding many tricky concepts in computer science

//! What is a Linked List?

// The operational definition of a linked list is: //^ "An ordered sequence of notes wherein each not consists of a data value and pointer to the next node"

//* |12| -|--> |99| -|--> |37| -|--> |X|

//^ Each NODE in a linked list chain consists of two values:

// 1. a data value
// 2. a pointer

//^ In code, a node looks like this:

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};

// The LINKED LIST ITSELF is just a pointer to the first node which is called the HEAD node.

// The list continues until it reaches a NULL node pointer.

// If the HEAD pointer itself is NULL, then the linkedList is empty.

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        const newNode = new LinkedListNode(value, null);
        // create a new node with the provided value

        newNode.next = this.head;
        // Set the node's 'next' pointer to the list's current head pointer

        this.head = newNode;
        // Set the list head to point to the new link

        if (!this.tail) this.tail = this.head;
        // Accounts for the tail pointer in an empty list
    }

    print() {
        let current = this.head // set the current node to the head (first) node

        while (current) { // We use a while loop instead of a for loop because while loops are best use when we don't know how many iterations there will be. This allows us to run this loop without knowing or specifying exactly how many nodes there are within the linked list.
            process.stdout.write(`${current.value} -> `); // remember that 'current' refers to the head node. Here, we print the 'value' of 'current' (the head node) to the console. We use process.stdout.write() INSTEAD of console.log() because this will ensure that our values all print on a single line in the console.
            current = current.next; // Here, we update the value of 'current' (our current node) to be the 'next' value of the current node, which will be the pointer to the NEXT node. In this way, we update 'current' to mean the next node specified by the current node's 'next' value.
        }

        console.log("NULL"); //we console.log() 'null' once we've reached the null pointer.
    }
}

//^ A linked list storing the values, 12, 99, and 37 would look something like this:

// head
//  |
//  v
//  12 -> 19 -> 37 -> NULL

//^ In code, this is how we might implement such a linked list:

node3 = new LinkedListNode(37, null); // value, next
node2 = new LinkedListNode(99, node3); // value, next
node1 = new LinkedListNode(12, node2); // value, next

ll = new LinkedList();
ll.head = node1;

//! Adding to the Head of a Linked List

// Node creation should be completely abstracted by the linked list data structure.

// You should be able to build the linked list by calling addToHead and addToTail in the same way that you would call push() or unshift() to add to the front or back of an array.

ll.addToHead(37);
ll.addToHead(99);
ll.addToHead(12);
ll.print(); // PRINTS: 12 -> 99 -> 37 -> 12 -> 99 -> 37 -> NULL

//^ Here are the steps that we can use to add a node to the head of a linked list:

// 1. Create a new node with the given value
// 2. Set the node's NEXT pointer to the list's current head pointer
// 3. Set the list head to point to the new link

// So lets go back up to our linkedList class to add this new method (lines 61 - 69);

//! Time Complexity of addToHead

// 1. Create a new node is O(1)
// 2. Setting the NEXT pointer is O(1)
// 3. Setting the HEAD pointer is also O(1)

// Since every step involved in performing the addToHead(value) function is O(1), its overall time complexity is also O(1).

// Compare this to array.unshift() [add to the front of an array], which has a time complexity of O(n).

// UNLIKE when we add to the front of an array, using addToHead to add to the front of a linked list requires NO SHIFTING of elements and NO ITERATION.

// For this reason, addToHead always has a constant [O(1) time complexity] runtime regardless of how many elements are involved.

//! Traversing a Linked List

//^ How would we write a function to print the values stored in our linked list?

// To do this, we would need to TRAVERSE the linked list.
// In this context, to TRAVERSE means to visit each node in order.

// The print loop will visit a node, print the value at that node, then move to the next node.

// It will continue until it reaches the NULL pointer.

// Because NULL evaluates to FALSE, the NULL pointer causes the program to exit the loop and terminate.

//^ Refer back to our LinkedList class on line 56, lets add this new 'print()' method.

//& NOTE the difference between console.log and process.stdout.write (which keeps all printed values on the same line)

//* From Stack Overflow:

// Looking at the Node docs apparently console.log is just process.stdout.write with a line-break at the end:

//^ console.log = function (d) {
//^   process.stdout.write(d + '\n');
//^ };

ll.print(); // PRINTS: 12 -> 99 -> 37 -> 12 -> 99 -> 37 -> NULL

// TRAVERSAL is also used to search a linked list.

// We have to search for a value within a linked list by visiting each node in order and checking the value.

// If you find the value, return true. If you reach the end without finding the value, return false.

//^ Searching has a time complexity of O(n), since every node must be visited.

//! Linked Lists in Memory

// IF we were to examine the nodes of a linked list as it is actually stored in our computer's memory, they might appear something like this:

//*    192: ...
//*    196: 220   // Linked List `head` pointer
//*    200: 1     // First node added, last in the list
//*    204: null
//*    208: 2     // Second node added, second in the list
//*    216: 200
//*    220: 3     // Third node added, first in the list
//*    224: 208
//*    230: ...

// The first node has a value of 1 and points to null

// The second node has a value of 2 and points to the address of the first node: 200

// The third node has a value of 3 and points to the memory address of the second link: 208

// The head node is at memory addres 196, and will update each time a new node is added, then link to the third node at 220.

//^ As you can see, the nodes are completely out of numerical order but can be traversed in the correct order by following the pointers.

// UNLIKE the elements of an array, the nodes of a linked list do not have to be in contiguous blocks of memory. They can be spread out.

//** 200: 2     // Second node
//** 204: 612

// ...

//** 400: 848   // Linked List head

 // ...

//** 612: 3     // Third node
//** 616: null

// ...

//** 848: 1     // First node
//** 852: 200

//^ Here, the linked list itself is located at address 400.

// The head points to the first node address at 848.

// The second is at 200.

// The third is at 612.

// By following the chain of pointers, we can traverse the list in order.

//^ Compared to an array, the linked list occupies a lot of memory.

// Storing these three values in an array takes only THREE slots of memory.

//* 196: 1
//* 200: 2
//* 204: 3

// The contiguous structure of arrays lets us visit the third value in O(1) time.

// Because linked list nodes can exist anywhere in memory, we cannot visit the third node unless we visit the first and second nodes.

// To visit the (n)th node in a linked list, you have to traverse through all prior nodes.

// For this reason, traversing nodes in a linked list is an operation that has O(n) time complexity.

//! Questions

//^ What is the space complexity of a linked list?
//^ How would you add a value to the END of a liked list? What is the time complexity of that operation?
//^ Can you refactor LinkedList.print() to a recursive solution? How would this affect the time and space complexity?

//! Summary

// Learned about the definition, implementation, memory structure, and time complexity of linked lists

//! See lines 97 - 102 for list/node creation
