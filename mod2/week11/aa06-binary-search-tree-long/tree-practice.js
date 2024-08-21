const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) { //^ Since a binary search tree is sorted, we only need to traverse down the left side to find the minimum value in the tree

  let currentNode = rootNode; // begin at the root node

  while (currentNode) { // While the node has children
    if (currentNode.left) { // if there is a node to the left of the currentNode...
      currentNode = currentNode.left; // ...traverse left
    } else { // If there's NOT a node to the left (if we're at the bottom of the tree)...
      return currentNode.val; // ...return the value stored at the currentNode, because it should be the smallest value (stored at the bottom-left-most node of the tree)
    }
  }
}

function findMaxBST (rootNode) { //^ Since a binary search tree is sorted, we only need to traverse down the right side to find the maximum value

  let currentNode = rootNode; // begin at the root node



  while (currentNode) { // While the currentNode has child nodes
    if (currentNode.right) { // If there is a node to the right of the currentNode...
      currentNode = currentNode.right; // ...traverse right
    } else { // Otherwise if there's NOT a node to the right...
      return currentNode.val; // ...return the value stored at the current node because it should be the largest (stored at the bottom-right-most node of the tree)
    }
  }
}

function findMinBT (rootNode) { //^ Because a binary tree is not sorted, we have to traverse every node

  let min = rootNode.val; // set the minimum value to the value stored at the root node of the tree

  const queue = []; // establish a queue using an array

  queue.push(rootNode); // push the rootNode to the queue first

  while (queue.length) { // While the queue is not empty

    let currNode = queue.shift(); // removes the front node and stores the node in currNode (dequeue())

    if (currNode.val < min) min = currNode.val; // If the value stored at the currentNode is less than the minimum, set the minimum value equal to that value

    if (currNode.left) queue.push(currNode.left); // If the currentNode has a left child, push that child to the queue (enqueue)

    if (currNode.right) queue.push(currNode.right) // If the currentNode has a right child, push that child to the queue (enqueue)

  }

  return min; // return the minimum value

}

function findMaxBT (rootNode) { //^ Because a binary tree is not sorted, we need to traverse every node to find the maximum value

  let max = rootNode.val; // Set the initial maximum value to the value stored at the root node of the tree.

  const queue = []; // inititalize an empty array to function as a queue

  queue.push(rootNode); // push the rootNode to the queue to start

  while (queue.length) { // while the queue is not empty

    let currNode = queue.shift(); // remove the front node and store it in the variable 'currNode'

    if (currNode.val > max) max = currNode.val; // If the value located at the current node is greater than the current maximum, set 'max' equal to that value

    if (currNode.left) queue.push(currNode.left); // If the currentNode has a left child, push that child to the queue (enqueue that child)

    if (currNode.right) queue.push(currNode.right); // If the currentNode has a right child, push that child to the queue (enqueue that child)
  }

  return max; // return the maximum value in the tree
}

function getHeight (rootNode) {

  if (!rootNode) return -1; // If there's no rootNode, return -1

  if (!rootNode.left && !rootNode.right) return 0; // If the rootNode has no child nodes (right or left), return 0;

  let leftHeight = getHeight(rootNode.left);

  let rightHeight = getHeight(rootNode.right);

  return 1 + Math.max(leftHeight, rightHeight);

}

function balancedTree (rootNode) {

  if (!rootNode) return true;

  let currentNode = rootNode

  let leftHeight = getHeight(currentNode.left)

  let rightHeight = getHeight(currentNode.right)

  if (leftHeight === rightHeight
    || leftHeight === rightHeight + 1
    || leftHeight + 1 === rightHeight) {

    return balancedTree(currentNode.left)
    && balancedTree(currentNode.right);
  }

  return false;
}

function countNodes (rootNode, count = 0) {

  if (!rootNode) return count;

  count++;

  count = countNodes(rootNode.left, count);

  count = countNodes(rootNode.right, count);

  return count;

}

function getParentNode (rootNode, target) {

  if (rootNode.val === target) return null;

  const stack = [rootNode];

  while (stack.length) {

    let currentNode = stack.pop();

    if (currentNode.right && currentNode.right.val === target
      || currentNode.left && currentNode.left.val === target) return currentNode;

    if (currentNode.left) {
      stack.push(currentNode.left);
    }

    if (currentNode.right) {
      stack.push(currentNode.right);
    }
  }

  return;
}

function inOrderPredecessor (rootNode, target) {

  if (!rootNode) return null;

  if (target <= rootNode.val) {

    return inOrderPredecessor(rootNode.left, target)

  } else {

    const node = inOrderPredecessor(rootNode.right, target)

    if (node) return node

    else return rootNode.val
  }

}

function deleteNodeBST(rootNode, target) {
  let parentNode = getParentNode(rootNode, target);

  if (parentNode === undefined) return undefined;

  if (target < rootNode.val) {
    rootNode.left = deleteNodeBST(rootNode.left, target)
  } else if (target > rootNode.val) {
    rootNode.right = deleteNodeBST(rootNode.right, target)
  } else {
    if (!rootNode.left) return rootNode.right
    else if (!rootNode.right) return rootNode.left

    rootNode.val = findMinBST(rootNode.right)

    rootNode.right = deleteNodeBST(rootNode.right, rootNode.val)
  }
  return rootNode;
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
