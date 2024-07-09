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
    this.root = null;
  }

  insert(val, currentNode=this.root) {

    let newNode = new TreeNode(val);

    if (this.root === null) {

      this.root = newNode;
      return;
    }

    while (currentNode) {

      if (newNode.val < currentNode.val) {

        if (!currentNode.left) {

          currentNode.left = newNode;
          return
        }

        currentNode = currentNode.left
      }

      if (newNode.val > currentNode.val) {

        if (!currentNode.right) {

          currentNode.right = newNode;
          return;
        }

        currentNode = currentNode.right
      }

    }

    //!==================================

    // if (newNode.val < currentNode.val) {

    //   if (currentNode.left === null) {
    //     currentNode.left = newNode;
    //     return;
    //   } else {
    //     this.insert(val, currentNode.left);
    //   }
    // }

    // if (newNode.val > currentNode.val) {

    //   if (currentNode.right === null) {
    //     currentNode.right = newNode;
    //     return;
    //   } else {
    //     this.insert(val, currentNode.right);
    //   }
    // }

    //!==============================

    // if (val < currentNode.val) {

    //   if (currentNode.left === null) {
    //     currentNode.left = newNode;
    //     return;
    //   }
    //   else {
    //     this.insert(val, currentNode.left);
    //   }
    // } else {
    //   if (val > currentNode.val) {

    //     if (currentNode.right === null) {
    //       currentNode.right = newNode;
    //       return;
    //     } else {
    //       this.insert(val, currentNode.right);
    //     }
    //   }
    // }
  }

  search(val) {
    // Your code here
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
