//! Linked List Optimization

//^ Since a linked list requires (n) nodes to store (n) values, it has a space complexity of O(n)

//^ addToHead() has a time complexity of O(1) since each of its steps operates in constant time independently of the size of the list.

    // That being said, adding (n) items to the head of a linked list takes O(n) time.

//^ print() and search() have time complexities of O(n), since they require traversal.

class LinkedListNode {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
}
