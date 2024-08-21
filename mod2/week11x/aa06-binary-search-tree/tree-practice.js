const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {

  // let currentNode = rootNode; // initialize a new variable 'currentNode' and set it equal to the rootNode by default

  // while (currentNode) { // While the tree is not empty and while we haven't yet reached the end of the tree...

  //   if (currentNode.left) currentNode = currentNode.left; // If the currentNode has a left child, traverse to that child node

  //   else return currentNode.val; // If the currentNode does not have a left child, then we know that we have reached the left-most leaf node at the bottom of the tree. Since we know that Binary Search Trees are sorted, we know that the left-most leaf in the tree must be the smalest (min) value, so we return this value.
  // }

  //! Alternatively:

  // if (rootNode.left) return findMinBST(rootNode.left);

  // return rootNode.val;

  let currentNode = rootNode;

  if (currentNode.left) {

    return findMinBST(currentNode.left)
  }

  return currentNode.val;

}

function findMaxBST (rootNode) {

  let currentNode = rootNode; // Initialize a new variable called 'currentNode' and set it equal to the rootNode by default

  while (currentNode) { // While our tree is not empty and while we have not yet reached the end of the tree...

    if (currentNode.right) currentNode = currentNode.right; // If the currentNode has a right child, traverse to that child

    else return currentNode.val; // Otherewise if the currentNode does not have a right child, we know that we have reached the right-most leaf at the end of the tree. Because Binary Search Trees are sorted, we know that the right-most leaf at the end of a Binary Search Tree will be the largest (max) value in the tree. So return this value.
  }

  //! Alternatively:

  if (rootNode.right) return findMaxBST(rootNode.right);

  return rootNode.val;
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

  //! Alternatively:

  // let min = rootNode.val;

  // if (rootNode.left) min = Math.min(min, findMinBT(rootNode.left));

  // if (rootNode.right) min = Math.min(min, findMinBT(rootNode.right));

  // return min;
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

  return max; // After we've traversed the entire tree, return the max

  //! Alternatively

  // let max = rootNode.val;

  // if (rootNode.left) max = Math.max(max, findMaxBT(rootNode.left));

  // if (rootNode.right) max = Math.max(max, findMaxBT(rootNode.right));

  // return max;
}

function getHeight (rootNode) {

  if (!rootNode) return -1; // If the root node does not exist, return -1

  if (!rootNode.left && !rootNode.right) return 0; // If the rootNode exists and has no children, return 0;

  let leftHeight = getHeight(rootNode.left); // Here we recursively call the getHeight function on our currentNode's left child. Since we're using the call stack as our data type and performing a depth-first traversal, this will tell us the height of the left side of our tree.

  let rightHeight = getHeight(rootNode.right); // Here we recursively call the getHeight fucntion on our currentNode's right child. Since we're using the call stack as our data type and performing a depth-first traversal, this will tell us the height of the right side of our tree.

  return Math.max(leftHeight, rightHeight) + 1; // Finally, we add 1 to our height to account for the head node and then use Math.max to compare the heights of the left and ride sides of our tree, returning whichever is greater.

  //! Alternatively:

  return 1 + Math.max(getHeight(rootNode.left), getHeight(rootNode.right))
}

function balancedTree (rootNode) {

  let queue = [];

  queue.push(rootNode);

  while (queue.length > 0) {

    let currentNode = queue.shift();

    if (Math.abs(getHeight(currentNode.left) - getHeight(currentNode.right)) <= 1) {

      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    } else {

      return false;
    }
  }
  return true;
}

function countNodes (rootNode) {

  if (!rootNode) return null; // If the root node does not exist, return null;

  let count = 0; // Initialize a count variable to store the number of nodes in our tree

  let queue = []; // Initialize a queue so that we can perform a breadth-first search of the tree

  queue.push(rootNode); // push the rootNode to the back of the queue

  while (queue.length > 0) { // While the queue is not empty...

    let currentNode = queue.shift(); // shift the currentNode off the front of the queue and store it in a variable 'currentNode'

    count++; // increment our count by 1

    if (currentNode.left) queue.push(currentNode.left); // If our currentNode has a left child, push that child to the queue

    if (currentNode.right) queue.push(currentNode.right); // If our currentNode has a right child, push that child to the queue
  }

  return count; // After we've traversed the entire tree and counted every node, return the count

  //! Alternatively:

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

function getParentNode (rootNode, target) {

  if (!rootNode) return undefined; // If the rootNode doesn't exist, return undefined

  // if (rootNode.val === target) return null; // If the value of our rootNode is the target, return null //^ This step is actually unnecessary because if our rootNode is the target, then we will return the 'parent' which is, by default, 'null' as can be seen on line 143.

  let stack = []; // Initialize a stack so that we can perform a depth-first traversal.

  stack.push({node: rootNode, parent: null}) // Create an object with two key-value pairs: node, and parent. This object will allow us to track the currnetNode as well as its parent node

  while (stack.length > 0) { // While the stack is not empty...

    let {node, parent} = stack.pop(); // We pop our object off the call stack, using object destructuring to extract both the node and parent properties of htat object.

    if (node.val === target) return parent; // Then we check to see if the value of the 'node' property of our object is equal to the target. If so, we return the 'parent' node

    if (node.left) { // Otherwise, if the value of 'node' is not the target, we check to see if our ndoe has a left child.

      stack.push({node: node.left, parent: node}); // If so, we save the child to the 'node' property of our object and our previous 'node' to the 'parent' property of our object. This allows us to keep track of both the current node and its parent as we traverse.
    }

    if (node.right) { // Then we check to see if our 'node' has a right child.

      stack.push({node: node.right, parent: node}) // If it does have a right child, then we push our current 'node' to the 'parent' property of our object and our right child to the 'node' property, allowing us to keep track of our current node and its parent.
    }
  }
  return undefined; // If we traverse the entire tree without finding the target, then we return undefined.

  //! Alternatively:

  stack = [rootNode];

  while (stack.length) {

    let currentNode = stack.pop();

    if ((currentNode.left && currentNode.left.val === target) || (currentNode.right && currentNode.right === target)) return currentNode;

    if (currentNode.left) stack.push(currentNode.left);

    if (currentNode.right) stack.push(currentNode.right);
  }

  return undefined
}

function inOrderPredecessor (rootNode, target) {

  // let currentNode = rootNode;

  // let stack = [];

  // let predecessor = null;

  // while (true) {

  //   if (currentNode) {

  //     stack.push(currentNode);

  //     currentNode = currentNode.left;
  //   } else if (!currentNode && stack.length) {

  //     currentNode = stack.pop();

  //     if (currentNode.val === target) {

  //       if (!predecessor) return null;

  //       if (predecessor) return predecessor.val;
  //     }

  //     predecessor = currentNode;

  //     currentNode = currentNode.right;
  //   } else break;
  // }

  //! Alternatively

  let pred = null;

  let found = false;

  const traversalBuddy = (node) => {

    if (node.left) traversalBuddy(node.left);

    if (node.val === target) {

      found = true;
    }

    if (!found) pred = node.val;

    if (!found && node.right) traversalBuddy(node.right);
  }

  traversalBuddy(rootNode);

  return pred;
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  let parent = getParentNode(rootNode, target);

  if (parent === undefined) return;

  let targetNode;

  let isLeftChild = false;

  if (!parent) {

    targetNode = rootNode;
  }

  else if (parent.left && parent.left.val === target) {

    isLeftChild = true;

    targetNode = parent.left;
  }

  else {

    targetNode = parent.right;
  }

  // Case 0: Zero children and no parent:
  //   return null
  if (!parent && !targetNode.right && !targetNode.left) return null;

  // Case 1: Zero children:
  //   Set the parent that points to it to null
  if (!targetNode.left && !targetNode.right) {

    if (isLeftChild) parent.left = null;

    else parent.right = null;
  }

  // Case 2: Two children:
  else if (targetNode.left && targetNode.right) {

    //  Set the value to its in-order predecessor, then delete the predecessor
    let predecessor = inOrderPredecessor(rootNode, target);

    //  Replace target node with the left most child on its right side,
    //  or the right most child on its left side.
    //  Then delete the child that it was replaced with.
    deleteNodeBST(rootNode, predecessor);
    targetNode.val = pred;
  }

  else {

    // Case 3: One child:
    //   Make the parent point to the child
    if (targetNode.left) {

      if (isLeftChild) parent.left = targetNode.left;

      else parent.right = targetNode.left;
    }

    else {

      if (isLeftChild) parent.left = targetNode.right;

      else parent.right = targetNode.right;
    }
  }

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
