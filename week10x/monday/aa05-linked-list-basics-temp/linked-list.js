class LinkedListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {

    this.length++; // increase length of linkedList by 1

    let newNode = new LinkedListNode(val); // create a newNode, set its .next pointer to null by default

    newNode.next = this.head; // Set the .next pointer of the newNode to the current(previous) head node

    this.head = newNode; // set the list's head node to the newNode
  }

  addToTail(val) {

    this.length++; // Increment the length of the linkedList by 1

    let newNode = new LinkedListNode(val); // create a newNode, set its .next pointer to null by default

    if (this.head === null) { // If the linkedList is empty...

      this.head = newNode; // ...add the newNOde to the linked list
    } else {

      let current = this.head; // Otherwise, if the list is not empty, store the current head node in a new variable 'current'

      while (current.next !== null) { // Traverse the array, beginning at the head node

        current = current.next; // (traversal step)
      }

      current.next = newNode; // Once we reach the tail node (the node whose .next pointer is null, we set the value of its 'next' pointer the newNode, making it the new tail)
    };
  };

  // You can use this function to help debug

  print() {

    let current = this.head; // store the head node in a new variable 'current'

    while (current) {

      process.stdout.write(`${current.value} -> `);

      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
