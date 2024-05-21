//! Binary Tree Traversal

// To perform operations on a binary tree, you must typically do one of two things:

//^ Traverse the tree, visiting or evaluating every node

//^ Search the tree, which is a traversal that stops when you find what you are looking for

// There are multiple methods of searching and traversing trees.

// Each method has pros and cons that make it more or less appropriate in application for certain tasks.

// This reading focuses on BINARY TREES, as these have many applications in computer science and are also commonly found in interview questions

//^ As a programmer, you should be able to:

// 1. List the characteristics of several common tree traversal algorithms
// 2. Recursively traverse or search a binary tree pre-order, in-order, and post-order //!( ?? )
// 3. Compare and contrast depth-first traversals and breadth-first traversals //!( ?? )
// 4. Code a depth-first search or traversal both recursively and iteratively
// 5. Code a breadth-first search iteratively

//! Tree Terminology (Review)

//^ Node:              A tree component that contains one value and pointers to other nodes
//^ Edge:              Pointer
//^ Root Node:         The top node in a tree (has no parent node)
//^ Parent/Child Node: A parent node points to child nodes
//^ Neighbor:          A parent or child node
//^ Subtree:           A tree whose root is the child of another node in the tree
//^ Branch Node:       A node with at least one child node
//^ Leaf Node:         A node with no children
//^ Level:             The number of edges (pointers) between a given node and the root node
//^ Width:             The number of nodes in a given level
//^ Height:            The number of edges (pointers) between the root node and the bottom-most node

//! Searching a Binary Tree

//*                        1
//*                      /   \
//*                    2       3
//*                  /   \   /   \
//*                4      5 6      7

// Without the ordering of a BST, how would we search for values in a binary tree?

// The process is similar to searching through an array or linked list by TRAVERSING the data structure (visiting each value one-by-one) until you find the target value

// Then return true if we find the value somewhere in the data structure, or false if not

// Binary trees are structurally similar to linked lists

//
