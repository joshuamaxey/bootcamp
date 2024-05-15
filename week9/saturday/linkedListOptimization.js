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

      // Add a new node to the end of the linked list (at the tail)
  addToTail(val) {
    const newNode = new LinkedListNode(val); // Create a new node with the provided value

    this.length++; // Increment the length of the linked list

    if (!this.head) {
      // If the linked list is empty, set the new node as the head
      this.head = newNode;
    } else {
      // Traverse the linked list to find the last node
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode; // Set the next reference of the last node to the new node
    }

  }

  removeFromHead() {
    let currHead = this.head; // store head value to be removed

    if (this.head) { // If the linked list is not empty
        this.head = this.head.next; // point 'head' to the next node in the list, leaving the first head unassigned to be garbage collected from memory
    } else {
        return undefined; // return undefined if there's no head value (if the list is empty)
    }
    this.length--
    return currHead; // return the removed value
  }

  removeFromTail() { // O(n), works with SINGLE linked list
    if (!this.head) return null;
    // If the linked list is currently empty, return null

    let current = this.head // initialize a new variable to hold the head node
    let previous = null // initialize 'previous' to hold the current node

    while (current.next) { // While the current node has a 'next' (while we have not yet reached the tail node)
    previous = current; // set 'previous' === the current node
    current = current.next // set 'current' === the next node
    // this enables us to keep track of both and iterate through the nodes until we reach the tail
    }

    if (previous) { // if there is a 'previous node'
        prev.next = null // remove the last node
    } else {
        this.head = null; // leave only one node in the list
    }
    this.length--;
    return current.data; // This returns the value of the removed tail node.

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

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};

//! Linked List Optimization

// Learn to analyze the structure and performance of a basic linked list.

// Learn to make optimizations and evaluate tradeoffs.

//! Linked List Performance Review

//^ A linked list is a data structure that stores values in a chain of nodes.

//^ each node consists of a VALUE and a POINTER to the next node.

//^ Each pointer is the node's memory address.

// The time complexity of addTOHead() is O(1) because each of its steps is performed in constant tame. This means that addToHead() retains this O of 1 time complexity regardless of the size of the list.

// Adding (n) items to the head of the LinkedList takes O(n) time.

// The time complexity of any operation requiring a TRAVERSAL (which means to travel through the nodes in order), like print() or search() requires vising (n) number of nodes, resulting in a time complexity of O(n).

// addToTail() //! Don't understand why this method is suddenly stated here.

// Linked lists store data in an ordered sequence.

// We can confirm through big-O analysis that adding a value to the head of a linked list ALWAYS runs in O of 1 time (constant time complexity)

// This confirms that addToHead() [O of 1] always outperforms the array equivalent unshift(), which runs in O of n time.

//^ What about adding to the end of a linked list?

// In order to solve that problem, we have to devise an algorithm to add a value to the end of a linked list. Such a function shoudl look like this:

const ll = new LinkedList();

ll.print(); // NULL
ll.addToTail(0);
ll.print(); // 0 -> NULL
ll.addToTail(1);
ll.print() // 0 -> 1 -> NULL
ll.addToTail(2);
ll.print(); // 0 -> 1 -> 2 -> NULL
ll.addToTail(3);
ll.print(); // 0 -> 1 -> 2 -> 3 -> NULL

//^ In order to develop an algorithm for adding a value to the END of a linked list, we'll need to answer these questions:

// What is the difference between adding to the head of a linked list versis adding to the tail?
//! When we add to the head of a linked list, we set the 'next' value of the new node to the previous head. When we add to the tail, the 'next' value will be null.
// How do you find the ned of the list when you're oly given the head?
//! Traverse the list from the head to the last node, which points to null
// How do you know which node is the last in the list?
//! It points to null
// What should happen if the list is empty?
//! The new node will be the head and tail

//^ A plan for developing this algorithm might look like this:

// Create a new node with the given value
//! New instance of the node class with the 'value' property set to the provided value
// If the head is NULL, set it to the new node and return
//! If the linked list is currently empty
// Iterate through the linked list until you reach the last node
//! Start at the head node and follow the pointers to the last node, which points to null =
// Point the last node's pointer to the new node.
//! Point the PREVIOUS last node's pointer to the new node, which becoems the new tail node. =

// In order to add 4 to the tail of the current linked list, you would start from the head node, which is 0.

// Then you have to travel through the nodes until you reach the next value of NULL.
//! This is where we use a WHILE loop to traverse the linkedList. WHILE the value of current.next is NOT null(as long as we are not at the tail node, which points to null), then we continue to traverse from node to node. (current = current.next)

// Once you find it, you can create the new node and add it to the end.
//! Once we are done traversing (we find the node that points to null, which is the tail node), we set the 'next' value of that last node to the current node, which becomes the new tail.

// Therefore adding to the end of a linked list containing (n) items, this is an O(n) operation.

//! Optimizing addToTail()

// Using our current implementation, addToTail() is an O(n) operation.

// This is because we have to traverse through the entire linkedList, all of its nodes, before we can reach the tail and then add a new node.

// We can add a tail pointer to the linked list, which effectively trades space for time. This hsould enable us to go driectly to the tail node to add a new node, instead of traversing the entire linkedList first.

//^ Answer the following questions to come up with a plan to implement this functionality:

// Where does the tail pointer set? //* (sit?)
//! It's the last node in the linkedList, which means that it will point to null and there won't be any nodes following it.
// How can you tell if the list is empty?
//! If head node === null, then the list is empty.
// What if tail is null, and head isnt, or vice-versa?
//! if tail is null, that should be normal. If head is null, then tail should be null too.

// Create the new node
// If the list is empty (if this.head === null) OR if (!this.head)
    // Then point head and tail to new node and return
// point the current tail's 'next' to new node
// point tail to the new end node

//! removeFromHead() And removeFromTail()

//^ removeFromHead() (see lines 41 - 45)

// Point 'head' to the second node in the list. The old head will now be unassigned and have no pointers. It will be automatically garbage collected from memory.

// removeFromHead() {
//     if (this.head) this.head = this.head.next;
// }

//^ removeFromTail()

// We could point the TAIL pointer to the node before the current tail, then set that node's 'next' value to null. But there's a problem.

// In a single-linked list, pointers only point in one direction. This means there's no reference to find the 'previous node' in a single linked list.

// So how can we remove the tail of a linked list?

// We could potentially run another while loop:

//* let current = this.head

//* while(current.next.next) {
//*     current = current.next
//* }

// But this will probably throw an error if we run the method on a linked list with only ONE node.

//^ We could create a 'previous' variable.

let current = this.head
let previous

while (current.next) { // While the current node has a 'next' (while we have not yet reached the tail node)
    previous = current; // set 'previous' === the current node
    current = current.next // set 'current' === the next node
    // this enables us to keep track of both.
}



//^ But here, we still have O(n) time complexity.

// SO how do we optimize removeFromTail?

//! Doubly Linked List

// To optimize removeFromTail

class DoublyLinkedListNode {
    constructor(val) {
      this.value = val;   // Value stored in the node
      this.prev = null;   // Reference to the previous node (initially null)
      this.next = null;   // Reference to the next node (initially null)
    }
  }

  // Define a class for a doubly linked list
  class DoublyLinkedList {
    constructor() {
      this.head = null;    // Reference to the head node of the doubly linked list
      this.tail = null;    // Reference to the tail node of the doubly linked list
      this.length = 0;     // Length of the doubly linked list
    }

    // Method to add a new node to the head of the list
    addToHead(val) { // O(1)
      const newNode = new DoublyLinkedListNode(val); // Create a new node with the given value

      this.length++;  // Increment the length of the list

      if (!this.head) {
        // If the list is empty, set the new node as both head and tail
        this.head = newNode;
        this.tail = newNode;
      } else {
        // If the list is not empty
        newNode.next = this.head;   // Set the next of the new node to the current head
        this.head.prev = newNode;   // Set the previous of the current head to the new node
        this.head = newNode;        // Update the head of the list to the new node
      }

    }

    // Method to add a new node to the tail of the list
    addToTail(val) { // O(1)
      const newNode = new DoublyLinkedListNode(val); // Create a new node with the given value

      this.length++;  // Increment the length of the list

      if (!this.tail) {
        // If the list is empty, set the new node as both head and tail
        this.tail = newNode;
        this.head = newNode;
      } else {
        // If the list is not empty
        newNode.prev = this.tail;   // Set the previous of the new node to the current tail
        this.tail.next = newNode;   // Set the next of the current tail to the new node
        this.tail = newNode;        // Update the tail of the list to the new node
      }

    }

    removeFromHead() {
        if (this.head) { // If the linked list is not empty
            this.head = this.head.next; // point 'head' to the next node in the list, leaving the first head unassigned to be garbage collected from memory
        }
      }

    // Method to print the values of the nodes in the list
    print() {
      let current = this.head;   // Start with the head node

      while (current) {
        process.stdout.write(`${current.value} <-> `);  // Print the value of the current node
        current = current.next;  // Move to the next node
      }

      console.log("NULL");  // Print NULL after reaching the end of the list
    }
  }
