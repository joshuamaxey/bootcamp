//! Binary Search Trees

// Binary search is an algorithm that allows you to search through large data sets with a small number of comparisons.

// The data must be sorted before running a binary search.

// In an array, that data can be sorted in O(n log n) time, which is only slightly less efficient than O(n)

// This means that adding, removing, or changing any value in a sorted array would require an O(n) insertion or deletion to maintain the sorted order.

//^ Binary search trees are a node-and-pointer-based data structure.

// They are similar to a doubly-linked list and allow for O(log n) search as a sorted array with O(log n) insertion and deletion as well.

//^ As a programmer, you should be able to:

// 1. Compare and contrast a binary tree with a binary search tree
// 2. Explain why it is more efficient to serach a binary search tree compared to a regular binary tree.
// 3. Search a binary search tree in O(log n) time.

//! Tree Terminology Review

// Node:              A tree component that contains one value and pointers to other nodes
// Edge:              Pointer
// Root Node:         First node in a tree (no parent node)
// Parent/Child Node: A parent node points to child node(s)
// Neighbor:          Either a parent or child node
// Subtree:           A tree whose root is the child of another node in the tree
// Branch Node:       A node with at least one child node
// Leaf Node:         A node with no children
// Level:             The number of edges (pointers) between a node and the root node
// Width:             The number of nodes on a given level
// Height:            The number of edges (pointers) between the root node and the bottom-most node

//! Properties of a Binary Search Tree

// (Like all binary trees) The binary search tree (BST) consists of nodes which in turn contain a value and two pointers.

// In a BST, those pointers are LEFT and RIGHT, and they always point downward.

// The key difference between binary trees and binary search trees is that every node contained in the left branch of any node will be LESS THAN the value of the node itself while every node in the right branch will be GREATER than the node value

// There are three posible implementations for handling values that are EQUAL to a value in the existing node:

// 1. Discard the duplicate, similar to a set
// 2. Place equal values to the left
// 3. Place equal values to the right

// Option 3 is most common. That being said, always double-check the implementation to make su
//^ All binary search trees are binary trees, but not all binary trees are binary search trees. The tree below is a binary tree, but NOT a binary search tree:

//*                          1
//*                        /   \
//*                      2       3
//*                    /   \   /   \
//*                  4      5 6      7

//^ This is because (in order to be a binary search tree) every node in the left subtree must be LESS than the value of its parent. Since 2, 4, and 5 are greater than 1, this is NOT a binary search tree.

//*                         8
//*                      /    \
//*                   3         10
//*                 /    \         \
//*               1        6         14
//*                     /    \      /
//*                   4        7  13

//^ In this diagram, the root node has a value of 8

// All nodes to the left (1, 3, 6, 4, 7) have values less than 8
// All nodes to the right (10, 14, 13) are greater

// Each nodoe can be considered the root of its own subtree and each follows the same rules.

// Every node to the left of its parent is less than the value of its parent, while every node to the right of its parent is greater than the value of its parent.

//! Searching a Binary Search Tree

// We can search a binary search tree by calling the following recursive function on the root node:

//& 1. If the root node is null, return false
//& 2. If the root node's value equals the target, return true
//& 3. If the target is less than the root value, recursively search the left child
//& 4. If the target is more than the root value, recursively search the rigth child

//*                         8
//*                      /    \
//*                   3         10
//*                 /    \         \
//*               1        6         14
//*                     /    \      /
//*                   4        7  13

// Lets say that we want to search this BST for the value (4).

// Start by calling search on the root of the tree.

// Since  (4) is less than (8) (root), we strike condition number 3 (line 83 above) so we will recursively call this search function on the left child: (3)

// Since (4) is greater than (3), will will then recursively search the right child: (6).

// Since (4) is less than (6), we call the search on the left child again: which is (4).

// We found the target value so the function returns true, then propogates all the way back up the call stack and returns from the original function

function searchBST(root, target) {
    if (root === null) return false;

    if (target === root.value) return true;

    if (target < root.value) return searchBST(root.left, target);

    if (target > root.value) return searchBST(root.right, target);
}

//^ We could also perform this function iteratively:

function searchBST(root, target) {
    let currentNode = root;

    while (currentNode !== null) {

        if (target === currentNode.value) return true

        else if (target < currentNode.value) currentNode = currentNode.left

        else currentNode = currentNode.right;
    }

    return false;
}

//! Time Complexity of Searching a Binary Search Tree

// Each comparison in a binary search tree moves down by one level, so the worst-case number of calls is equal to the height of the tree.

// In a perfeclty balanced binary search tree, the height is equal to log n.

//^ How can we verify and remember this?

// Since each node creates two children, think of each level as having twice the number of nodes as the level above it.

// Level 0: 1 node
// level 1: 2 nodes
// level 2: 4 nodes
// level 3: 8 nodes
// level 4: 16 nodes
// level 5: 32 nodes
// level 6: 64 nodes
// level 7: 128 nodes
// level 8: 256 nodes

// Notice that the maximum capacity of each level is === to 2 ^ (that level)

// Also notice that each level's capcaity is equal to the sum of all previous levels plus 1.

2 = 1 + 1
4 = 2 + 1 + 1
8 = 4 + 2 + 1 + 1
16 = 8 + 4 + 2 + 1 + 1
32 = 16 + 8 + 4 + 2 + 1 + 1
64 = 32 + 16 + 8 + 4 + 2 + 1 + 1
128 = 64 + 32 + 16 + 8 + 4 + 2 + 1 + 1
256 = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 + 1

// Since adding a level doubles the capacity, moving down a level reduces the number of values to search by half. Just like binary search, this divide=and-conquer approach results in a time complexity of O(log n).

//! Adding and Removing values in BST

// Adding nodes to a BST requires searching for an empty spot to put it. What happens if you want to add 3 to the following BST?

//*                      4
//*                    /   \
//*                  2       6
//*                /       /  \
//*              1        5     7

// You would start from the root, then determine that it should go on the left.

// Since there is already a left child, you can call insert on the left subtree with the root of (2).

// Since (3) is greater than (2) and there is a right branch open, you can create a new node and insert the (3)

//*                      4
//*                    /   \
//*                  2       6
//*                /  \     /  \
//*              1     3   5     7

// Removal is a bit trickier. There are three cases to consider.

// The easiest is to remove a node with no children. Just delete the node. For example, we can remove the (5) by setting the .left property of the parent (6) to null.

'6'.left = null

//*                      4
//*                    /   \
//*                  2       6
//*                /  \        \
//*              1     3        7

// To remove a node with one child, just replace that node with its child. So to remove 6, replace it with 7.

'4'.right = 7;

//*                      4
//*                    /   \
//*                  2       7
//*                /  \
//*              1     3

// To remove a node with two children, begin by searching for either the right-most node in the left branch or the left-most node in the right branch.

// Then delete that node and replace the current node with its value.

// So, to delete 4 from the original tree...

//*                      4
//*                    /   \
//*                  2       6
//*                /  \     /  \
//*              1     3   5     7

// ...first replace the 4 with the right-most value on the left (3)

//*                      3
//*                    /   \
//*                  2       6
//*                /        /  \
//*              1         5     7

// ...or the left-most value on the right (5)

//*                      5
//*                    /   \
//*                  2       6
//*                /  \       \
//*              1     3       7

// You can find the left-most value on the right subtree by moing right once, then picking left until you reach a node with no more left.

// Removing (5) from the tree above would move the 6, which has just one child and is replaced by the 7
//*                      6
//*                    /   \
//*                  2       7
//*                /  \
//*              1     3

//^ All of these operations require one comparison per level for an optimal runtime of O(log n)

//! Unbalanced Binary Search Trees

// How might we store the values 1, 2, and 3 in a BST?

// Start with the root of 1, then add 2.

//*                  1
//*                   \
//*                    2

// Next, add the 3.

//*                  1
//*                   \
//*                    2
//*                      \
//*                       3

// Adding a 4, 5, 6, and 7 in order would give you a tree that looks like this.

//*                  1
//*                   \
//*                    2
//*                     \
//*                      3
//*                       \
//*                        4
//*                         \
//*                          5
//*                           \
//*                            6
//*                             \
//*                              7

// While this is a valid BST (each smaller value is to the left and each larger value to the right), it is not ideal for searching.

// Because the tree is unbalanced, it has a height equal to the number of nodes.

// So this binary search tree is just a linked list with a search time of O(n)

// It's much more efficient for the tree to have a balanced structure like this:

//*                      4
//*                    /   \
//*                  2       6
//*                /  \     /  \
//*              1     3   5     7

//^ A balanced binary search tree has a height which is equal to (log n) has a search time of O(log n) but an unbalanced BST can have a worst-case search time of O(n).

//! Summary

// Learned about binary search trees including tree terminology and how to search, add, and remove values from a binary search tree in O(log n) time.

// Learned worst-case performance of an unbalanced tree, which results in O(n) runtimes for these same operations.
