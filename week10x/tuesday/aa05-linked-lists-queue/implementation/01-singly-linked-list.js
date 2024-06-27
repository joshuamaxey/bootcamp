// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {

        this.length++ // increment the length of the list by 1

        let newNode = new SinglyLinkedNode(val); // create a new node using the value provided as an argument and store it in a new variable 'newNode'

        if (!this.head) { // If the list is empty... (if there is no head node)

            this.head = newNode; // ...make newNode the new head node
        } else { // Otherwise, if the list is not empty...

            newNode.next = this.head; // ...point the newNode's 'next' pointer at the current (previous) head node...

            this.head = newNode; // ...and point the list's 'head' pointer at the newNode, making it the lists's new head node
        }

        return this; // After adding the newNode to the head of the list, return the list

        //^ Time complexity O(1) because we're only reassigning the value of the head node. No traversal necessary. Space complexity O(1) because we used a fixed number of variables to accomplish this task, the space we use doesn't scale with the input size.
    }

    addToTail(val) {

        this.length++; // Increment the length of the linkedList by 1

        let newNode = new SinglyLinkedNode(val); // create a newNode, set its .next pointer to null by default

        if (this.head === null) { // If the linkedList is empty...

          this.head = newNode; // ...add the newNOde to the linked list
        } else {

          let current = this.head; // Otherwise, if the list is not empty, store the current head node in a new variable 'current'

          while (current.next !== null) { // Traverse the array, beginning at the head node

            current = current.next; // (traversal step)
          }

          current.next = newNode; // Once we reach the tail node (the node whose .next pointer is null, we set the value of its 'next' pointer the newNode, making it the new tail)
        };

        return this;
      };

    removeFromHead() {
        // Remove node at head

        if (!this.head) return undefined; // If the list is empty, return undefined

        let previous = this.head; // Store the list's current head node in a variable 'previous' for later use

        this.head = this.head.next; // Point the list's 'head' pointer to its 'next' value (either the next node if its present, or to null if there's only one node in the list)

        this.length--; // Decrement the length of the linkedList

        return previous; // return the node that we removed

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        if (!this.head) return undefined; // If the list is empty (there is no head node), return undefined

        if (!this.head.next) { // If there is only one node in the list

            let previous = this.head; // save the current head in a 'previous' variable

            this.head = null; // set the 'next' pointer of the head node to null

            this.length--; // decrement the length of the list

            return previous; // return the previous tail node
        }

        let current = this.head; // Otherwise, save the current head node in a 'current' variable

        let previous; // initialize a new variable to hold the previous tail node

        while (current.next && current.next.next) { // Iterate through the nodes until we reach the second-to-last one

            current = current.next;
        }

        previous = current; // Once we reach the last node, save it to the variable 'previous'

        let removedNode = previous.next // save the previous tail node to a variable 'removedNode'

        previous.next = null // then set the 'next' pointer of the second-to-last node to null (making it the last node)

        this.length-- // decrement the length of the lsit by 1

        return removedNode; // return the removedNode

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        if (!this.head) return undefined

        return this.head.value;

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        let current = this.head

        while(current) {

            console.log(current.value);

            current = current.next;
        }

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
