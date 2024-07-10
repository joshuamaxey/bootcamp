const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {

  let currentNode = rootNode; // initialize a new variable 'currentNode' and set it equal to the rootNode by default

  while (currentNode) { // While the tree is not empty and while we haven't yet reached the end of the tree...

    if (currentNode.left) currentNode = currentNode.left; // If the currentNode has a left child, traverse to that child node

    else return currentNode.val; // If the currentNode does not have a left child, then we know that we have reached the left-most leaf node at the bottom of the tree. Since we know that Binary Search Trees are sorted, we know that the left-most leaf in the tree must be the smalest (min) value, so we return this value.
  }
}

function findMaxBST (rootNode) {

  let currentNode = rootNode; // Initialize a new variable called 'currentNode' and set it equal to the rootNode by default

  while (currentNode) { // While our tree is not empty and while we have not yet reached the end of the tree...

    if (currentNode.right) currentNode = currentNode.right; // If the currentNode has a right child, traverse to that child

    else return currentNode.val; // Otherewise if the currentNode does not have a right child, we know that we have reached the right-most leaf at the end of the tree. Because Binary Search Trees are sorted, we know that the right-most leaf at the end of a Binary Search Tree will be the largest (max) value in the tree. So return this value.
  }
}

function findMinBT (rootNode) {

  if (!rootNode) return null;

  let queue = []; // initialie a queue so that we can perform a breadth-first search of the binary tree. Since binary trees are not sorted, we need to search every node in the tree in order to find the minimum value.

  let min = Infinity; // initialise a 'min' variable to hold the current minimum value, then set it equal to Infinity to guarantee that it captures our rootNode's value

  queue.push(rootNode); // push our rootNode to the queue

  while (queue.length > 0) { // While the queue is not empty...

    let currentNode = queue.shift(); // shift our rootNode off of the queue and save it in a variable 'currentNode'

    // console.log(currentNode) //// console.log the value for debugging purposes.

    if (currentNode.val < min) min = currentNode.val; // if the value of the currentNode is less than our current mind, replace our current min with the value of our currentNode

    if (currentNode.left) queue.push(currentNode.left); // if our currentNode has a left child, push that child to the queue

    if (currentNode.right) queue.push(currentNode.right); // if our currentNode has a right child, push that child to the queue
  }

  return min; // after we've traversed the entire binary tree, return the minimum value
}

function findMaxBT (rootNode) {

  if (!rootNode) return null;

  let max = -Infinity; // Initialize a variable to hold the max value and set it to negative infinity by default to ensure that it will capture our rootNode's value

  let stack = []; // Initialize a stack so that we can perform a depth-first traversal

  stack.push(rootNode); // Push the rootNode to the stack

  while (stack.length > 0) { // While the stack is not empty...

    let currentNode = stack.pop(); // pop the rootNode from the stack and save it in a variable called 'currentNode'

    if (currentNode.val > max) max = currentNode.val; // Check to see if the value of our currentNode is greater than the current max. If so, make our currentNode's value the new max

    if (currentNode.left) stack.push(currentNode.left); // If our currentNode has a left child, push that child to the stack

    if (currentNode.right) stack.push(currentNode.right); // If our currentNode has a right child, push that child to the stack
  }

  return max; // After we've traversed the entire tree, return the max;
}

function getHeight (rootNode) {

  if (!rootNode) return -1; // If the root node does not exist, return -1

  if (!rootNode.left && !rootNode.right) return 0; // If the rootNode exists and has no children, return 0;

  let leftHeight = getHeight(rootNode.left); // Here we recursively call the getHeight function on our currentNode's left child. Since we're using the call stack as our data type and performing a depth-first traversal, this will tell us the height of the left side of our tree.

  let rightHeight = getHeight(rootNode.right); // Here we recursively call the getHeight fucntion on our currentNode's right child. Since we're using the call stack as our data type and performing a depth-first traversal, this will tell us the height of the right side of our tree.

  return Math.max(leftHeight, rightHeight) + 1; // Finally, we add 1 to our height to account for the head node and then use Math.max to compare the heights of the left and ride sides of our tree, returning whichever is greater.
}

function balancedTree (rootNode) {

  if (!rootNode) return null;

  let leftHeight = 0;

  let rightHeight = 0;

  if (rootNode.left) leftHeight = getHeight(rootNode.left);

  if (rootNode.right) rightHeight = getHeight(rootNode.right);

  if (leftHeight === rightHeight) return true;

  else return false;
}

function countNodes (rootNode) {

  if (!rootNode) return null; // If the root node does not exist, return null;

  let count = 0; // Initialize a count variable to store the number of nodes in our tree

  let queue = []; // Initialize a queue so that we can perform a breadth-first search of the tree

  queue.push(rootNode); // push the rootNode to the back of the queue

  while (queue.length > 0) { // While the queue is not empty...

    currentNode = queue.shift(); // shift the currentNode off the front of the queue and store it in a variable 'currentNode'

    count++; // increment our count by 1

    if (currentNode.left) queue.push(currentNode.left); // If our currentNode has a left child, push that child to the queue

    if (currentNode.right) queue.push(currentNode.right); // If our currentNode has a right child, push that child to the queue
  }

  return count; // After we've traversed the entire tree and counted every node, return the count
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
