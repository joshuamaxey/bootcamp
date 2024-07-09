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

    let currentNode = this.root;

    while (currentNode) {

      // if (currentNode.val === val) return true;

      // else if (val < currentNode.val) {

      //   currentNode = currentNode.left;
      // } else {

      //   currentNode = currentNode.right;
      // }

      if (currentNode.val === val) return true;

      else if (val < currentNode.val) {
        currentNode = currentNode.left;
      }

      else if (val > currentNode.val) {
        currentNode = currentNode.right;
      }
    }

    return false;
  }


  preOrderTraversal(currentNode = this.root) {

    if (currentNode) {

      console.log(currentNode.val);

      this.preOrderTraversal(currentNode.left);
      this.preOrderTraversal(currentNode.right);
    }
  }


  inOrderTraversal(currentNode = this.root) {

    if (currentNode) {

      this.inOrderTraversal(currentNode.left);

      console.log(currentNode.val);

      this.inOrderTraversal(currentNode.right);
    }
  }


  postOrderTraversal(currentNode = this.root) {

    if (currentNode) {

      this.postOrderTraversal(currentNode.left);
      this.postOrderTraversal(currentNode.right);

      console.log(currentNode.val);
    }
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
