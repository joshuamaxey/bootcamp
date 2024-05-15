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

    let newNode = new LinkedListNode(val) // create the new node

    this.length++ // increase length of linkedList by 1

    if (!this.head === null) { // IF LIST IS EMPTY
      this.head = newNode;
      return this;
    }

    newNode.next = this.head; // IF LIST IS NOT EMPTY remember that the RIGHT SIDE evaluates first. set the next value of the newNode to the OLD head pointer.

    this.head = newNode; // We are re-setting the first element to the newNode

  }

  addToTail(val) { //! without a tail pointer

    let newNode = new LinkedListNode(val) // create the new node

    this.length++ // increase length of linkedList by 1

    if (!this.head === null) { // IF LIST IS EMPTY
      this.head = newNode;
      return this;
    }

    let curr = this.head // "current" directly references head node.

    while(curr.next) {
      curr = curr.next
    }
    curr.next = newNode
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = LinkedList;
