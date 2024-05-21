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
/*              /^ All binary search trees are binary trees, but not all binary trees are binary search trees. The tree below is a binary tree, but NOT a binary search tree:

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

//
