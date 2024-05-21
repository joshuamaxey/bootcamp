//! Binary Tree Traversal

// To perform operations on a binary tree, you must typically do one of two things:

//^ Traverse the tree, visiting or evaluating every node

//^ Search the tree, which is a traversal that stops when you find what you are looking for

// There are multiple methods of searching and traversing trees.

// Each method has pros and cons that make it more or less appropriate in application for certain tasks.

// This reading focuses on BINARY TREES, as these have many applications in computer science and are also commonly found in interview questions

//^ As a programmer, you should be able to:

// 1. List the characteristics of several common tree traversal algorithms
// 2. Recursively traverse or search a binary tree pre-order, in-order, and post-order //!( ?? )
// 3. Compare and contrast depth-first traversals and breadth-first traversals //!( ?? )
// 4. Code a depth-first search or traversal both recursively and iteratively
// 5. Code a breadth-first search iteratively

//! Tree Terminology (Review)

//^ Node:              A tree component that contains one value and pointers to other nodes
//^ Edge:              Pointer
//^ Root Node:         The top node in a tree (has no parent node)
//^ Parent/Child Node: A parent node points to child nodes
//^ Neighbor:          A parent or child node
//^ Subtree:           A tree whose root is the child of another node in the tree
//^ Branch Node:       A node with at least one child node
//^ Leaf Node:         A node with no children
//^ Level:             The number of edges (pointers) between a given node and the root node
//^ Width:             The number of nodes in a given level
//^ Height:            The number of edges (pointers) between the root node and the bottom-most node

//! Searching a Binary Tree

//*                        1
//*                      /   \
//*                    2       3
//*                  /   \   /   \
//*                4      5 6      7

// Without the ordering of a BST, how would we search for values in a binary tree?

// The process is similar to searching through an array or linked list by TRAVERSING the data structure (visiting each value one-by-one) until you find the target value

// Then return true if we find the value somewhere in the data structure, or false if not

// Binary trees are structurally similar to linked lists

//^ Consider a recursive linked list search:

// Since the 'next' node of a linked list is, itself, also a linked list, we can search the NEXT node if the value located at the current node doesn't match our target value. When we find it, we return the result.

function linkedListSearch(linkedList, target) {
    // Base case: empty list
    if (linkedList.head === null) return false;

    // Check if the current node's value matches the target
    if (linkedList.head.value === target) return true;

    // If not, recursively search the rest of the list
    return linkedListSearch(linkedList.head.next, target);
}

// If we search for the value 3, the first thing that this function will do is check the head value of 1.

// When it doesn't match, it will recursively search the rest of the nodes, repeating the same process of checking for each one.

// Once the head value matches the target and returns true, the function will propogate back up the recursive call stack and return from the original function.

//^ Trees are similar in that each child is also a tree, so if the current value doesn't match the target, you can search each child and return true if the target is in either of them. The algorithm will look like this:

// 1. Base case: If the tree is null, return false
// 2. Check head node: If the current node's value equals the target, return true
// 3. Search left: Otherwise, search the left subtree for the target
// 4. Search right: If the value isn't in the left subtree, try the right subtree.

function binaryTreeSearch(root, target) {
    // Base case: If the tree is null, return false
    if (root === null) return false;

    // If the current node's value equals the target, return true
    if (root.value === target) return true;

    // If not, search the left subtree for the target
    if (binaryTreeSearch(root.left, target)) return true;

    // If the value isn't in the left subtree, try the rigth subtree;
    return binaryTreeSearch(root.right, target);
}

//! Traversing a Binary Tree

// Sometimes you want to visit each node in the tree without searching for a particular target. This is called traversal.

function binaryTreeSum(root) {
    // Check the base case, if there is no root
    if (root === null) return 0;

    // Recursively sum up the left and right trees
    const leftSum = binaryTreeSum(root.left);
    const rightSum = binaryTreeSum(root.right);

    // Return the value plus the left and right totals
    return root.value + leftSum + rightSum;
}

// Recursion is very effective for searching binaryr trees because their structure is recursively defined.

//! Pre-Order Traversal

//^ How would we print all of the values in a binary tree?

// Just like an array or linked list, we can traverse the tree and print each value as we go along. Our algorithm will look like this:

//? 1. Print the value at the current node
//& 2. Recursively call the left subtree
//& 3. Recursively call the right subtree

//^ Consider the following binary tree. What order would the nodes print in?

//*                  4
//*                /   \
//*              2       6
//*            /   \    /  \
//*          1      3 5      7

//^ They would print in this order: 4, 2, 1, 3, 6, 5, 7

// First, we print the root (4)

// Then we print the left child (2), followed by the left grandchild (1)

// The left grandchild node will call steps 2 and 3 on its left and right children, both of which are null (because they do not exist), so it returns.

// Now that 2's left subtree has returned, it calls the function on its right subtree which prints (3), then returns.

// Now that 2's right subtree has completed, it returns as well.

// The root's left child is now complete.

// The root then moves on to the right subtree, printing (6), then recursively calls its left child (5), followed by the right child (7).

// Now all trees have completed so the function is finished.

//^ Values printed in the order: 4, 2, 1, 3, 6, 5, 7

//^ This is called a PRE-ORDER TRAVERSAL since the printing happens before the recursive calls.

//! In-Order Traversal

// These recursive calls will work no matter where we put the print. We can modify the function to print between the left and right recursive calls:

//& 1. Recursively call the left subtree
//? 2. Print the value located at the current node
//& 3. Recursively call the right subtree

//^ This will print the values from the prior tree in this order: 1, 2, 3, 4, 5, 6, 7.

//^ This is known as in-order traversal because it DOES print the nodes in order.

//! Post-Order Traversal

//^ We can print after the recursive calls too:

//& 1. Recursively call the left subtree
//& 2. Recursively call the right subtree
//? 3. Print the value located at the current node

//^ This will print the nodes in this order: 1, 3, 2, 5, 7, 6, 4 and is called a post-order traversal.

//! Depth-First Search

// Pre-order, in-order, and post-order traversals print the numbers in different order

//^ However, the nodes are visited in the same order regardless of whether we use a pre-order, in-order, or post-order traversal. The traversal type only changes the order in which the nodes' values are printed, NOT the order in which they are visited.

//*                              5
//*                            /    \
//*                         /          \
//*                      2               8
//*                    /   \           /   \
//*                  1       4       6       9
//*                  |       |       |       |
//*                  0       3       7       X

//^ Pre-order:  5-2-1-0-4-3-8-6-7-9-X

//^ In-order:   0-1-2-3-4-5-6-7-8-9-X

//^ Post-order: 0-1-3-4-2-7-6-X-9-8-5

// Although the nodes are printed in different order, the path taken by each algorithm is the same

// It starts from the root, walks down the left subtrees (pushing onto the call stack), then goes back up once the base case is reached (popping off the call stack)

// Then it walks down the right subtrees and back up again.

// This method of traveling as deep as possible down the tree branches until reaching the end, then backtracking to the next branch, is //* depth-first order

//^ Although this is a traversal algorithm, not a search algorithm, it is often still called depth-first search. You can use it to search (traverse in depth-first order until you find your target), but remember the distinction between depth-first traversal and search.

// Pre-, in-, and post-order traversals are all depth-first traversals specific to binary trees

//! Breadth-First Traversals

// Depth-first traversals travel as deep as possible down each branch before moving onto the next

//^ Breadth-first traversal visits each node on the current level before moving down to the next level.

//*                          4
//*                        /   \
//*                      2       6
//*                    /   \   /   \
//*                  1      3 5      7

// Traversing this tree in BREADTH-FIRST order would start from the root, 4, then move to the second leel to visit 2 and 6, then finish with the third level by visiting 1, 3, 5, and 7

//^ Because breadth-first traversals jump between subtrees, they cannot be implemented recursively. Instead, they are solved using a queue.

//& 1. Put the starting node in a queue
//& 2. While the queue is not empty, repeat steps 3-4
//? 3. Dequeue a node and print it
//& 4. Put all of the node's children in the back of the queue

// Starting with the root node in a queue
//^ queue = [4], it's dequeued and printed.

// Then the children are put into the queeue
//^ queue = [2, 6]

// The first node in line (2) is dequeued and printed, with its neighbors put in the back of the queue
//^ queue = [6, 1, 3]

// The next node (6) is dequeued and printed and queues its children
//^ queue = [1, 3, 5, 7]

// The remaining nodes (1, 3, 5, 7) are all dequeuedand printed one-by-one
//^ queue = []
// Since they have no children, the queue is emptied and the function returns

//^ The code looks like this:

class Queue{

}

function breadthFirstTraversal(root) { //! Queue
    // Put the starting node in the queue
    const queue = new Queue();
    queue.enqueue(root);

    // While the queue is not empty
    while (queue.length > 0) {

        // Dequeue a node and print it
        let node = queue.dequeue();
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.enqueue(node.left);
        queue.enqueue(node.right);
    }
}

//^ You can also use an array to mimic a queue.

// The two methods used to add and remove the nodes would be shift() for dequeuing and push() for enqueuing. The code will look like this:

function breadthFirstTraversal(root) { //! Array
    // Put the starting node in a queue
    const queue = [];
    queue.push(root);

    // While the queue is not empty
    while (queue.length > 0) {

        // Dequeue a node and print it
        let node = queue.shift();
        console.log(node.value);

        // Put all of the node's children in the back of the queue
        queue.push(node.left);
        queue.push(node.right);
    }
}

//! Depth-First Traversal with a Stack

// You can also perform a depth-first traversal with virtually the same algorithm as a breadth-first traversal by using a STACK instead of a queue

//& 1. Put the starting node on a STACK
//& 2. While the STACK is not empty, repeat steps 3-4
//? 3. POP a node and print it
//& 4. Put all of the node's children on the TOP of the STACK

//*                          4
//*                        /   \
//*                      2       6
//*                    /   \   /   \
//*                  1      3 5      7

// Start with the first node
//^ stack = [4]

// Pop and print the first value, (4), then put its children on top of the stack
//^ stack = [6, 2]

// Pop and print the top node (2) and push its children to the top of the stack
//^ stack = [6, 3, 1]

// Pop and print the next node(1), which ahs no children to push, followed by (3), which also has no children to push, leaving...
//^ stack = [6]

// Pop this node and print (6) with the children pushed to the top
//^ stack = [7, 5]

// Once these remaining childless nodes are popped and printed (5, 7), the stack is empty and the function returns
//^ stack = [];

function depthFirstTraversal(root) {
    // Put the starting node on a stack
    const stack = [];
    stack.push(root);

    // While the stack is not empty
    while (stack.length > 0) {

        //  Pop a node and print it
        let node = stack.pop();
        console.log(node.value);

        // Put all of the node's children on the top of the Stack
        stack.push(node.right);
        stack.push(node.left);
    }
}

// For depth-first and breadth-first traversals, it doesn't matter what order we print the values in.

// What matters is that for a depth-first traversal, it ust traverse as deep as possible before backtracking.

// For a breadth-first traversal, it must visit all of the current level nodes before visiting the next level.

//! Summary

// How to search and traverse binary trees in a variety of orders: pre-order, in-order, post-order, depth-first, and breadth-first

// Learned how to implement depth-first traversal using both recursion and a stack as well as implementing breadth-first traversal using both a Queue class and an array as a queue.
