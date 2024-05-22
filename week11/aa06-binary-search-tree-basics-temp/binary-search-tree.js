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
    // A pre-order traversal is defined by the fact that the operation (in this case, printing the values) is performed prior to the traversal step of the function

    if (!currentNode) return; // Base case, we check to see if the currentNode has no children left

    console.log(currentNode.val); // print the value stored within the currentNode

    this.preOrderTraversal(currentNode.left); // traverse left from the currentNode by calling the function recursively on the node to the left of the currentNode

    this.preOrderTraversal(currentNode.right); // traverse right from the current node by calling the function recursively on the node to the right of the currentNode
  }


  inOrderTraversal(currentNode = this.root) {
    // An in-order traversal is defined by the fact that the operation (in this case, printing the value) is performed between the traversal steps of the function

    if (!currentNode) return; // Check to see if this is the base case (If currentNode has no children left)

    this.inOrderTraversal(currentNode.left); // traverse left from the currentNode by calling the function recursively on the node to the left of the currentNode

    console.log(currentNode.val); // print the value stored within the currentNode

    this.inOrderTraversal(currentNode.right); // traverse right from the currentNode by calling the function recursively on the node to the right of the currentNode
  }


  postOrderTraversal(currentNode = this.root) {
    // A post-order traversal is defined by the fact that the operation (in this case, printing the value) is performed after the traversal steps of the function

    if (!currentNode) return; // Check for the base case, to see if currentNode has no children left

    this.postOrderTraversal(currentNode.left); // traverse left from the currentNode by recursively calling the function on the node to the left of the currentNode

    this.postOrderTraversal(currentNode.right); // traverse right from the currentNode by recursively calling the function on the node to the right of the currentNode

    console.log(currentNode.val); // print the value stored within the currentNode;
  }

  //^ Note that the only distinction between pre, in, and post-order methods is the point at which we perform the operation (print to the console). The tree is always traversed in the same order using the same recursive calls.

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    const values = [];

    values.push(this.root);

    while (values.length) {
      let curr = values.shift();
      console.log(curr.val);

      if (curr.left) {
        values.push(curr.left);
      }

      if (curr.right) {
        values.push(curr.right);
      }
    }
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    const values = [];

    values.push(this.root);

    while (values.length) {
      let curr = values.pop()
      console.log(curr.val);

      if (curr.left) {
        values.push(curr.left);
      }

      if (curr.right) {
        values.push(curr.right);
      }
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };
