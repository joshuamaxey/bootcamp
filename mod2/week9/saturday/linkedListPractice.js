class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    };
};

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToHead(value) {
        const newNode = new LinkedListNode(value, null);
        // create a new node with the provided value. Set the 'next' value to null.

        newNode.next = this.head;
        // Set the node's 'next' pointer to the list's current head pointer. We want to point the 'next' pointer to the current head because that will be the value that precedes this one. We stick this value in front of the current head pointer, then point this one back to that one.

        this.head = newNode;
        // Set the list head to point to the new link. We set the lists 'head' pointer to the newNode that we initialized on line 15.

        if (!this.tail) this.tail = this.head;
        // Accounts for the tail pointer in an empty list. So if there is NO tail pointer, we set the tail pointer equal to the head pointer?
    }

    addToTail(value) {
        const newNode = new LinkedListNode(value, null);
        // create a new node with the provided value. Just like with addToHead, set the 'next' value to null.

        this.tail.next = newNode;
        // Since we want this to be the LAST element in the list, we should set the 'next' pointer to null, wouldn't we?

        //! Only works if there are already nodes present in the linked list, otherwise throws an error.

        // if (!this.head) this.head = this.tail;
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

// Linked lists are series' of nodes

// Each nodes has 2 parts: a VALUE and a POINTER

let lili = new LinkedList()

lili.addToHead("test");
lili.addToHead(0);

lili.print(); // 0 -> test -> NULL

lili.addToHead(false);
lili.addToHead(true);

lili.print(); // true -> false -> 0 -> test -> NULL

lili.addToHead(10);
lili.addToHead(99);

lili.print(); // 99 -> 10 -> true -> false -> 0 -> test -> NULL

// The head pointer is the FIRST node in the linked list

// The tail pointer is the LAST node in the linked list.

// Every 'next' points to the next NODE in the linked list in sequential order

lili.addToTail("TAILTEST");

lili.print();

let ll = new LinkedList()

ll.addToTail("test")

ll.print();
