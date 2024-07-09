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

    let newNode = new TreeNode(val); // create a newNode using the value provided as input

    if (this.root === null) { // If the tree is empty...

      this.root = newNode; // Make our newNode the new root
      return;
    }

    //!==================================iterative

    while (currentNode) { // While the tree is not empty...

      if (newNode.val < currentNode.val) { // if the value of our newNode is LESS Than the value of the currentNode...

        if (!currentNode.left) { // ...and if the currentNode has no left child...

          currentNode.left = newNode; // add our newNode to the left of the currentNode
          return;
        }

        currentNode = currentNode.left // Otherwise, if the currentNode does have a left child, move to that child
      }

      if (newNode.val > currentNode.val) { // If the value of our newNode is GREATER than the value of our currentNode...

        if (!currentNode.right) { // ...and if our currentNode has no right child...

          currentNode.right = newNode; // then add our newNode to the right of the currentNode
          return;
        }

        currentNode = currentNode.right // Otherwise, if the currentNode does have a right child, move to that child
      }

    }

    //!==================================Recursive if() blocks

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

    //!==============================Recursive if()/else() block

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

    let queue = [];

    queue.push(this.root);

    while (queue.length > 0) {

      let currentNode = queue.shift();
      console.log(currentNode.val);

      if (currentNode.left) {

        queue.push(currentNode.left);
      }

      if (currentNode.right) {

        queue.push(currentNode.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {

    let stack = [];

    stack.push(this.root);

    while (stack.length > 0) {

      let currentNode = stack.pop();
      console.log(currentNode.val);

      if (currentNode.left) {

        stack.push(currentNode.left);
      }

      if (currentNode.right) {

        stack.push(currentNode.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
