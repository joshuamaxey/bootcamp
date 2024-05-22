// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null; // create a binary tree without any nodes
  }

  insert(val, currentNode = this.root) {

    if (!this.root) { // If the root is null, the tree is empty...
      this.root = new TreeNode(val); // ...set the 'root' of the tree to the new node
      return; // end code execution and exit the program
    }

    if (val < currentNode.val) { // If the provided value is less than the value stored in the currentNode

      if (!currentNode.left) { // if the currentNode has no left pointer...
        currentNode.left = new TreeNode(val); // ...point the left pointer of the currentNode to the newNode
      } else { // if the currentNode DOES already have a left pointer...
        this.insert(val, currentNode.left) // ...recursively call insert again on the left pointer, passing in the provided value
      }
    } else { // if the provided value is higher than the value stored in the currentNode...
      if (!currentNode.right) { // If currentNode has no right pointer...
        currentNode.right = new TreeNode(val); // ...point the right pointer of the currentNode to the newNode
      } else { // if the currentNode DOES already have aright pointer...
        this.insert(val, currentNode.right) // ...recursively call insert() again on the right pointer, passing in the provided value
      }
    }
  }

  search(val) {

    if (!this.root) return false; // If the root is null, it means the tree is empty and does not contain the target value. Return false

    let currentNode = this.root; // begin the search with the root node

    while (currentNode) { // until we reach the end of the tree

      if (val < currentNode.val) { // if the provided value is lower than the value stored in the currentNode...
        currentNode = currentNode.left; // ...travel left
      } else if (val > currentNode.val) { // if the provided value is higher than the value stored in the currentNode...
        currentNode = currentNode.right; // ...travel to the right
      } else { // if the provided value is equal to the value stored in the currentNode...
        return true; // ...return TRUE (because we found the target value so we know that it is present within the tree)
      }
    }
    return false; // If we traverse the entire tree without finding the target value, return FALSE (because we know that it does not exist within the tree)
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };
