// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor() {
        this.root = null;
    }

    insert(val, currentNode = this.root) {
        // If root is null, tree is empty, so set root to new node
        if (!this.root) {
            this.root = new TreeNode(val);
            return;
        }

        // If value is less than currentNode value
        if (val < currentNode.val) {

            if (!currentNode.left) { // check if currentNode has no left pointer
                currentNode.left = new TreeNode(val); // if not, point the left pointer of currentNode to the newNode
            } else { // if it DOES have a left pointer...
                this.insert(val, currentNode.left) // ...recursively call insert again passing in the value and the left pointer of the currentNode
            }
        } else { // if value is higher than currentNode value
            if (!currentNode.right) { // if currentNode has no right pointer
                currentNode.right = new TreeNode(val);
            } else { // if it DOES have a right pointer
                this.insert(val, currentNode.right);
            }
        }
    }

    search(val) {
        // IF root is null, return false because tree is empty
        if (!this.root) return false;

        let currentNode = this.root;

        while (currentNode) { // until we reach the end of the tree

            if (val < currentNode.val) { // if value is lower than currentNode value...
                currentNode = currentNode.left; // ...travel left
            } else if (val > currentNode.val) { // if value is higher than currentNode value...
                currentNode = currentNode.right; // ...travel right
            } else { // if value is equal to currentNode value, return true because we found the target value
                return true;
            }
        }
        return false;
    }

    // DFS (Depth-First Search)

    preOrderTraversal(currentNode = this.root) { // perform operation BEFORE traversing
        if (!currentNode) return; // base case, check if currentNode has children

        console.log(currentNode.val); // perform operation

        this.preOrderTraversal(currentNode.left); // traverse left

        this.preOrderTraversal(currentNode.right); // traverse right
    }

    inOrderTraversal(currentNode = this.root) { // perform operation BETWEEN traversals
        if (!currentNode) return; // base case, check if currentNode has children

        this.preOrderTraversal(currentNode.left); // traverse left

        console.log(currentNode.val); // perform operation

        this.preOrderTraversal(currentNode.right); // traverse right
    }

    postOrderTraversal(currentNode = this.root) { // perform operation AFTER traversing

        if (!currentNode) return; // base case, check if currentNode has children

        this.preOrderTraversal(currentNode.left); // traverse left

        this.preOrderTraversal(currentNode.right); // traverse right

        console.log(currentNode.val); // perform operation

    }

    breadthFirstTraversal() {

        const queue = [];

        while (queue.length) { // make sure the length of the queue is not 0 (falsey)

            const currNode = queue.shift(); // remove the first node in the queue

            console.log(currNode.val); // print the value of the first node that we removed

            if (currNode.left) { // if we have the left node
                queue.push(currNode.left);  // push the left node to the back of the queue
            }

            if (currNode.right) { // if we have a right node
                queue.push(currNode.right); // push the right node to the back of the queue
            }

        }

        // const values = []; // initialize empty array to hold values

        // values.push(this.root); // push the root node to the values array

        // while (values.length) {
        //     let curr = values.shift();
        //     console.log(vurr.val);

        //     if (curr.left) {
        //         values.push(curr.left);
        //     }

        //     if (curr.right) {
        //         values.push(curr.right);
        //     }
        // }
    };

    depthFirstTraversal() {

        const stack = [this.root]; // initialize a stack with the root node

        while(stack.length) { // while stack is not empty

            let currNode = stack.pop(); // remove the first node in the stack
            console.log(currNode.val); // print the value of the first node that we removed

            if (currNode.left) { // if there is a node to the left of the currentNode
                stack.push(currNode.left); // push that left node to the back of the stack
            }

            if (currNode.right) { // if there is a node to the right of the currentNode
                stack.push(currNode.right); // push that right node to the back of the stack
            }
        }

        // const values = [];

        // values.push(this.root);

        // while (values.length) {
        //     let curr = values.pop();
        //     console.log(curr.value);

        //     if (curr.left) {
        //         values.push(curr.left);
        //     }

        //     if (curr.right) {
        //         values.push(curr.right);
        //     }
        // }
    }
};

module.exports = {
    TreeNode,
    BinarySearchTree
}
