//! Trees

// A graph is a collection of NODES and EDGES between those nodes

// A tree is a graph with NO CYCLES

// A BINARY TREE is a tree with NODES which have a MAXIMUM of 2 CHILDREN and a MAXIMUM of ONE PARENT per node

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

// Here's a visual representation of our tree:

//*              (a)
//*            /    \
//*          (b)     (c)
//*        /    \       \
//*      (d)     (e)     (f)

// Trees only move in one direction. In other words, (a) can access (b) but (b) cannot access (a).

// Note that the root node is the whole tree; That is, we can pass the entire tree into a function by passing in the root node (since it has access to all other nodes and therefore effectively represents the whole tree.)

//^ Tree: Graph with no cycles

//^ Binary Tree: Nodes have MAXIMUM 2 child nodes and MAXIMUM one parent node each

//^ Root: The ultimate parent node, which can access every other node in a tree. The root has no parent node.

//^ Internal Node: A node with a child

//^ Leaf: A node with no children

//^ Path: A series of nodes connected by edges. For example, [(a), (b), (e)] is a path through our ree above (lines 34 - 38)

//! Tree Traversal

// To TRAVERSE a tree is to visit all of its nodes

// A SEARCH is a TRAVERSAL that stops when/if you find a target

// Most computer science applications of trees utilize a BINARY TREE

//^ Node: Contains one value and pointers to other nodes

//^ Edge: Pointer which connects nodes

//^ Neighbor: A parent OR child node

//^ Subtree: A tree whose root is the child of another node

//^ Branch: A node with at least one child

//^ Level: The number of edges between a certain node and the tree's root node

//^ Width: The number of nodes on a certain level

//^ Height: The number of edges between the root and bottom-most node

// Since binary trees are similar to linked lists, lets review linked lists:

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
};

class LinkedList {
    constructor() {
        this.head = null;
    }
}

let node3 = new LinkedListNode(3, null);
let node2 = new LinkedListNode(2, node3);
let node1 = new LinkedListNode(1, node2);

let ll = new LinkedList()

ll.head = node1;

console.log(ll);

// Now lets implement a recursive linkedListSearch function

function linkedListSearch(linkedListNode, target) {

    if (linkedListNode === null) return false; // If the linkedList is empty, return false because it cannot contain the target

    if (linkedListNode.value === target) return true; // If the value of the head node is our target value, return true;

    return linkedListSearch(linkedListNode.next, target); // Otherwise, recursively call our function on the next node;
}

let llSearch1 = linkedListSearch(ll.head, 3);

console.log(llSearch1);

//& I'm trying to implement a simple recursive linkedListSearch(linkedList, target) function.

//& Right now, the function only works if I pass in the head node of a linked list [ linkedListSearch(linkedList.head, target) ]. If I try to pass in a linkedList itself directly, I throw a TypeError: Cannot Read properties of undefined (reading 'value' )

//& I want to be able to pass in a linked list itself instead of having to pass in the head node of that linkedList directly. How might I change my code so that I'm able to do that?

// Sometimes we want to visit each node in a tree without searching for a target. The following algorithm sums up the values in a binary tree:

function binaryTreeSum(root) {

    if (root === null) return 0; // If the tree is empty, there are no values to sum. Return 0;

    const leftSum = binaryTreeSum(root.left);
    const rightSum = binaryTreeSum(root.right);

    return root.value + leftSum + rightSum; // Here we will recursively sum both sides of the tree together by traversing to the left and the right recursively, adding each value as we go. Then we sum up the right and left sums with the value of the root to give us our final sum.
}

//^ Recall the TreeNode() constructor on line 9:

// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

let tNode1 = new TreeNode(1);

let tNode2 = new TreeNode(2);
let tNode3 = new TreeNode(3);

let tNode4 = new TreeNode(4);
let tNode5 = new TreeNode(5);
let tNode6 = new TreeNode(6);
let tNode7 = new TreeNode(7);

tNode1.left = tNode2;
tNode1.right = tNode3;

tNode2.left = tNode4;
tNode2.right = tNode5;

tNode3.left = tNode6;
tNode3.right = tNode7;

console.log(binaryTreeSum(tNode1)); // returns 28

//! Pre-Order Traversal

//^ Recall the TreeNode() constructor on line 9:

// class TreeNode {
//     constructor(value) {
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// Consider the following binary tree:

let tN4 = new TreeNode(4);
let tN2 = new TreeNode(2);
let tN6 = new TreeNode(6);
let tN1 = new TreeNode(1);
let tN3 = new TreeNode(3);
let tN5 = new TreeNode(5);
let tN7 = new TreeNode(7);

tN4.left = tN2;
tN4.right = tN6;

tN2.left = tN1;
tN2.right = tN3;

tN6.left = tN5;
tN6.right = tN7;

// Here's what our tree looks like:

//*           4
//*         /   \
//*        2     6
//*       / \   / \
//*      1   3 5   7

function preOrderTraversal(root) {
    // Print the current node value

    if (root === null) return; // Check to see if the root null. If it is, then either the tree is empty OR we've traversed the entire tree. In either situation, we've encountered our base case. Return.

    console.log(root.value); // Otherwise, log the node's value to the console...

    preOrderTraversal(root.left); // ...then recursively call our traversal function on the node's left child, and...
    preOrderTraversal(root.right); // ...recursively call our traversal function on the node's right child
};

console.log("-------------------pre-Order--------------------")
preOrderTraversal(tN4);

// -------------------pre-Order--------------------
// 4
// 2
// 1
// 3
// 6
// 5
// 7

//^ Notice that in our Pre-Order Traversal, our PRINT step occurs BEFORE both traversal steps! This ensures that the nodes are printed in pre-order.

//! In-Order Traversal

// Here we'll traverse the same tree, but in-order instead of in pre-order:

function inOrderTraversal(root) {

    if (root === null) return; // Check to see if the root is null. If it is, then either the tree is empty OR we've traversed the entire tree and there are no more nodes to traverse. In either case, we've hit our base case. Return.

    inOrderTraversal(root.left); // Otherwise, recursively call our inOrderTraversal on the left child of the root node...

    console.log(root.value); // ...and print the value of our root node. Then...

    inOrderTraversal(root.right); // ...recursively call our inOrderTraversal on our root node's right child
}

console.log("-------------------in-Order--------------------")
inOrderTraversal(tN4);

// -------------------in-Order--------------------
// 1
// 2
// 3
// 4
// 5
// 6
// 7

//^ Notice that in our In-Order Traversal, our PRINT step occurs BETWEEN the recursive calls. This ensures that the values of the nodes in our binary tree are printed "in-order." Recall that binary search trees must be ordered in a certain way, which is why using our in-order traversal does actually print our values "in-order"

//! Post-Order Traversal

function postOrderTraversal(root) {

    if (root === null) return; // First, check to see if the root is null. If so, either our tree is empty OR we've traversed the entire tree and reached the leaf nodes at the bottom. In either situation, we've reached our base case. Return.

    postOrderTraversal(root.left); // Otherwise, recursively call our function on the root's left child;
    postOrderTraversal(root.right); // Then recursively call our function on the root's right child;

    console.log(root.value); // After our recursive calls, print the value of our root node
}

console.log("---------------------post-Order------------------------")
postOrderTraversal(tN4);

// ---------------------post-Order------------------------
// 1
// 3
// 2
// 5
// 7
// 6
// 4

//^ Finally, notice that in a post-order traversal our print step comes AFTER both recursive calls. The result is that we print the values of the nodes in post-order.

//& What are the different use-cases for pre-, in-, and post-order traversals? Why might we favor one kind of traversal over another?

//! Depth-First Search

//^ Notice that in pre-, in-, and post-order traversals, the values of our nodes are printing in different orders but THE NODES ARE ALWAYS VISITED IN THE SAME ORDER.

//Regardless of when we print, we start at the root and walk down the left subtrees first.

//Then we traverse back up once the base case is reached (popping off of the callstack as we go).

//Then we traverse down the right subtrees and back up again.

//^ This method of traveling as deep as possible down the tree branches until we reach a dead end, then backtracking to the next branch, is understood to have a DEPTH-FIRST ORDER.

//^ Pre-, in-, and post-order traversals are ALL DEPTH-FIRST TRAVERSALS and are SPECIFIC TO BINARY TREES.

//! Breadth-First Traversal

// A breadth-first traversal visits each node in a tree's current level before moving down to the next level

// Because breadth-first traversal jumps between sub-trees, it cannot be implemented recursively.

// Instead, we implement a queue.

//^ Since we'll use a queue for breadth-first traversal, lets review the queue data structure:

// A queue works like a line at the store: First-In, First-Out (FIFO)

//* (push) 5 --> 432 --> (shift) 1

// Instead of implementing a new class with its own methods, we'll just state the characteristics of a queue in simplest terms:

    // 1. Queues are implemented using an array
    // 2. Queues use .push() to 'enqueue' an item to the back of the queue
    // 3. Queues use .shift() to 'dequeue' an item from the front of the queue.

//^ And before we write our breadthFirstTraversal(root) function, here's a copy of the tree we created on lines 173 - 206:

// * class TreeNode {
// *     constructor(value) {
// *         this.value = value;
// *         this.left = null;
// *         this.right = null;
// *     }
// * }

// Consider the following binary tree:

// * let tN4 = new TreeNode(4);
// * let tN2 = new TreeNode(2);
// * let tN6 = new TreeNode(6);
// * let tN1 = new TreeNode(1);
// * let tN3 = new TreeNode(3);
// * let tN5 = new TreeNode(5);
// * let tN7 = new TreeNode(7);

// * tN4.left = tN2;
// * tN4.right = tN6;

// * tN2.left = tN1;
// * tN2.right = tN3;

// * tN6.left = tN5;
// * tN6.right = tN7;

// Here's what our tree looks like:

// *           4
// *         /   \
// *        2     6
// *       / \   / \
// *      1   3 5   7

function breadthFirstTraversal(root) {

    let queue = [];

    // put the starting node in a queue
    queue.push(root);

    // While the queue is not empty...
    while (queue.length > 0) {

        // Dequeue the current node and print its value
        let currentNode = queue.shift();
        console.log(currentNode.value);

        // Then check to see if the currentNode has children. If it does, push the current node's children to the back of the queue
        if (currentNode.left !== null) { // If the currentNode has a left child...
            queue.push(currentNode.left); // ...push it to the back of the queue
        }

        if (currentNode.right !== null) { // If the currentNode has a right child...
            queue.push(currentNode.right); // ...push it to the back of the queue =
        }
    }
};

console.log("---------------------breadth-First Traversal-----------------------")
breadthFirstTraversal(tN4);

// ---------------------breadth-First Traversal-----------------------
// 4
// 2
// 6
// 1
// 3
// 5
// 7

//^ Compare the order of our printed nodes on lines 390 - 396 to the visualization of our tree on lines 355 - 359: We print 4 first, then 2 and 6 (on level 2), then 1, 3, 5, and 7 (on level 3), just as expected.

//! Depth-First Traversal With A Stack

//^ Lets summarily review what we've learned so far about our traversal methods, then add one more point to the list:

    // 1. pre-, in-, and post-order traversals are all forms of depth-first traversal, we used a recursive implementation
    // 2. breadth-first traversal cannot be implemented using recursion, so we use a queue instead
    // 3. ADDITIONALLY, we can use a 'stack' (FILO, like a stack of plates) to implement a depth-first Traversal iteratively instead of using recursion. The algorithm is VERY similar to our breadth-first traversal, the only difference being that we use a stack instead of a queue.

//^ Here is a copy of our tree again for reference:

// * class TreeNode {
// *     constructor(value) {
// *         this.value = value;
// *         this.left = null;
// *         this.right = null;
// *     }
// * }

// Consider the following binary tree:

// * let tN4 = new TreeNode(4);
// * let tN2 = new TreeNode(2);
// * let tN6 = new TreeNode(6);
// * let tN1 = new TreeNode(1);
// * let tN3 = new TreeNode(3);
// * let tN5 = new TreeNode(5);
// * let tN7 = new TreeNode(7);

// * tN4.left = tN2;
// * tN4.right = tN6;

// * tN2.left = tN1;
// * tN2.right = tN3;

// * tN6.left = tN5;
// * tN6.right = tN7;

// Here's what our tree looks like:

// *           4
// *         /   \
// *        2     6
// *       / \   / \
// *      1   3 5   7

//^ And since we are using a stack, intead of a queue, to implement our depthFirstTraversal, lets briefly review stacks:

// Stacks function like a stack of plates (First In, Last Out, or FILO):

    // We also implement a stack using an array
    // We "push" values to the top of the stack
    // "pop" values off the top of the stack

// (push) 1

// 1, (push) 2

// 1, 2, (push) 3

// ... etc.

// 1, 2, 3, 4, 5

// 1, 2, 3, 4 (pop 5)

// 1, 2, 3, (pop 4)

// 1, 2, (pop 3)

// 1 (pop 2)

// ... etc.

//^ For Reference (Again):

// *           4
// *         /   \
// *        2     6
// *       / \   / \
// *      1   3 5   7

function depthFirstTraversal(root) {

    let stack = []; // implement a stack using an array. Note that the only reason we call it a 'stack' is because we elect to use .push to add items, and then .pop to remove items.

    stack.push(root); // push the root node to the stack

    while (stack.length > 0) { // While the stack isn't empty...

        let currentNode = stack.pop(); // pop the currentNode from the stack
        console.log(currentNode.value); // print the value of the currentNode

        if (currentNode.left !== null) { // If the currentNode has a left child...
            stack.push(currentNode.left); // ...push that child to the stack
        }

        if (currentNode.right !== null) { // If the currentNode has a right child...
            stack.push(currentNode.right); // ...push that child to the top of the stack;
        }
    }
};

console.log("--------------------depth-First Traversal---------------------")
depthFirstTraversal(tN4);

// --------------------depth-First Traversal---------------------
// 4
// 6
// 7
// 5
// 2
// 3
// 1

//^ If we compare the order of our printed values on lines 506 - 512 with the visualization of our tree on lines 475 - 479 above, we can see that our depth-first traversal printed 4, then 6, then 7 first (the entire right side of the tree), then printed 5 as we pop our way back up the stack. Then it prints 2, then 3, the entire right-most path of our tree's left branch. Then, we finally print 1 as we pop our way back up the left branch of the tree. This is exactly what we expect from a depth-first traversal, that we would travel all the way down each branch of the tree, printing values as we go, and then pop back up the tree.

//& What are some of the use cases for depth-first and breadth-first traversal? When would we favor one over the other? Are there any cases where using one over the other would significantly affect the effectiveness of our code?

//! Binary Search Trees
