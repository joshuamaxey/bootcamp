class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {

    this.length++; // increment the linkedList's length property

    let newNode = new DoublyLinkedListNode(val); // create a newNode

    if (!this.head) { // If the lest length is empty...

      this.head = newNode; // ...set the list's head pointer to the newNode...

      this.tail = newNode; // ...AND set the tail pointer to the newNode
    } else { // Otherwise, if the list is not empty...

      this.head.prev = newNode; // ...Set the current head's PREVIOUS pointer to the newNode...

      newNode.next = this.head; // ...Then set the newNode's NEXT property to the current head...

      this.head = newNode; // ...then, finally, set the list's head pointer to the newNode
    }
  }
    //& Alternatively

    // if (this.length >= 1) {

    //   this.head.prev = newNode;

    //   newNode.next = this.head;

    //   this.head = newNode;
    // } else {

    //   this.head = newNode;

    //   this.tail = newNode;
    // }

    // this.length++
  // }

  addToTail(val) {

    this.length++; // increment the length of the list by 1

    let newNode = new DoublyLinkedListNode(val); // create a newNode

    if (!this.head) { // If the linkedList is empty... (if the head node points to null)

      this.head = newNode; // Set the head node to the newNode;

      this.tail = newNode; // Set the tail node to the newNode;
    } else { // Otherwise, if the list is not empty

      this.tail.next = newNode; // set the 'next' pointer of the tail node to the newNode, making it the new tail...

      newNode.prev = this.tail // ...set the 'previous' pointer of the newNode to the current (previous) tail, making the tail the second-to-last node...

      this.tail = newNode // ...then make the newNode the list's tail node
    }
  }
    //& Alternatively:

    // if (this.length >= 1) {

    //   this.tail.next = newNode

    //   newNode.prev = this.tail;

    //   this.tail = newNode;
    // } else {

    //   this.head = newNode;

    //   this.tail = newNode;
    // }

    // this.length++;
  // }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
