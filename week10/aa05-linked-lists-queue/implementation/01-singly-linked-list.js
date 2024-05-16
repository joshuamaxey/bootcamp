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
        // Add node of val to head of linked list

        const newNode = new SinglyLinkedNode(val); // create the new node

        this.length++ // increment the length of the linkedList + 1

        newNode.next = this.head; // set the pointer of the new node to the previous head.

        this.head = newNode; // set the current head of the linkedList to the newNode

        return this; // return the list

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!

        this.length++; // increment the length of the list by 1

        let newNode = new SinglyLinkedNode(val); // create the new node with the provded value, then store it in a variable newNode

        if (!this.head) { // Check if the linkedList is empty
            this.head = newNode // If it is empty, make the newNode the new head of the likedlist
        } else { // If the linked list is NOT empty
            let curr = this.head; // store the value of the current head node
            while (curr.next) { // iterate through the nodes until we reach the tail node (continue to iterate as long as the current node has a .next value that is NOT null)
                curr = curr.next; // For each node of the linkedList, move to the next node, as long as we haven't reached the tail node yet.
            }
            curr.next = newNode; // After we've iterated through each node and finally hit the tail node, set the .next value of the current tail to point at the new node.
        }
        return this; // return the updated list

        // Add node of val to tail of linked list
        // let newNode = new SinglyLinkedNode(data);
        // if (!head) {
        //     head = newNode;
        //     return head;
        // }
        // let curr = head;
        // while (curr) {
        //     curr = current.next;
        // }
        // curr.next = newNode;
        // return head;
        // Write your hypothesis on the time complexity of this method here
    }

    removeFromHead() {
        // Remove node at head

        let currHead = this.head; // store the current head node

        if (!this.head) { // check to see if the linkedList is empty
            this.head = this.head.next; // IF there is currently a head node, point the 'head' pointer to the next value in the linkedList. This leaves the original head node floating in the ether to be collected by garbage cleanup.
        }

        this.length--; // decrement the length of the linkedList to reflect that a node has been removed.

        return currHead; // return the node that was removed.

        // Write your hypothesis on the time complexity of this method here
    }

    removeFromTail() {
        // Remove node at tail

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return the value of head node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
