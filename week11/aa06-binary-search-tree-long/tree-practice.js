const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {

  let currentNode = rootNode; // begin at the root node

  while (currentNode) { // While the node has children
    if (currentNode.left) { // if there is a node to the left of the currentNode...
      currentNode = currentNode.left; // ...traverse left
    } else { // If there's NOT a node to the left (if we're at the bottom of the tree)...
      return currentNode.val; // ...return the value stored at the currentNode, because it should be the smallest value (stored at the bottom-left-most node of the tree)
    }
  }
}

function findMaxBST (rootNode) {

  let currentNode = rootNode; // begin at the root node

  while (currentNode) { // While the currentNode has child nodes
    if (currentNode.right) { // If there is a node to the right of the currentNode...
      currentNode = currentNode.right; // ...traverse right
    } else { // Otherwise if there's NOT a node to the right...
      return currentNode.val; // ...return the value stored at the current node because it should be the largest (stored at the bottom-right-most node of the tree)
    }
  }
}

function findMinBT (rootNode) {
  // Your code here
}

function findMaxBT (rootNode) {
  // Your code here
}

function getHeight (rootNode) {
  // Your code here
}

function balancedTree (rootNode) {
  // Your code here
}

function countNodes (rootNode) {
  // Your code here
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
