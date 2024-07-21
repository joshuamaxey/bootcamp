class TreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

// Given a tree, find the node with the highest value at each
// level of the tree and return it in an array, with the root at the
// 0th index, and the highest value in the deepest level of the tree
// in the last index.

//        5
//       / \
//      4   7
//     / \   \
//    1   3   2
//       /    / \
//      8    4   9
//              / \
//             2   4

// Expected Output -> [ 5, 7, 3, 9, 4 ]

function findMaxEachLevel(root) {
  const stack = [root]; // Initialize a stack and push the root node to the stack by default

  const maxes = []; // initialize an empty array to include the maxes at each level

  root.level = 0; // set the level to 0 by default.

  while (stack.length > 0) { // While the stack is not empty...

    const curr = stack.pop(); // Pop the first element from the stack and store it in a variable 'curr'

      if (maxes[curr.level]) { // If there is already a max value for the current level...

        maxes[curr.level] = Math.max(curr.value, maxes[curr.level]); // ...compare and update it.
      } else {

        maxes.push(curr.value); // Otherwise, push the value of the current node to the maxes array.
      }

      if (curr.left) { // ...If there is a left child of the current node...

        curr.left.level = curr.level + 1; // ...increment the level...

        stack.unshift(curr.left); // ...then add it to the front of the stack
      }
      if (curr.right) { // ...IF there is a right child of the current node...

        curr.right.level = curr.level + 1; // ...increment the level...

        stack.unshift(curr.right); // ...then add it to the front of the stack
      }
  }

  return maxes; // finally, return the maxes array
}







// Uncomment the code below for local testing.

// // Build a tree for testing

//   const simpleTree = new TreeNode(4, null, null);
//   simpleTree.right = new TreeNode(1, null, null);
//   simpleTree.left = new TreeNode(3, null, null);
//   simpleTree.right.right = new TreeNode(2, null, null);

// // Test the function with the debug tree
// console.log(findMaxEachLevel(simpleTree)); // -> [ 4, 3, 2 ]

/*******************************************************************************
 * Do not change the code after this line.
 */

try {
  exports.TreeNode = TreeNode;
  exports.findMaxEachLevel = findMaxEachLevel;
} catch (e) {
  module.exports = null;
}
