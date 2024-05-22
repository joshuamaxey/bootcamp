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

    }

    depthFirstTraversal() {

    }
}
