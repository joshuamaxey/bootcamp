//! Objectives

//^ 1. Construct a Binary Search Tree

//^ 2. Search for data in a Binary Search Tree in logarithmic time

//^ 3. Describe the properties and functinality of a Binary Tree

//^ 4. Describe the properties and functionality of a Tree

//^ 5. Traverse a Binary Tree in pre-order, in-order, and post-order

//^ 6. Traverse and Search a Tree in both Depth-First and Breadth-First order

//^ 7. Solve coding challenges involving trees

//! Introduction to Trees

// Trees are a foundational data structure

// They are similar to singly-linked lists except that nodes can have more than one child node (instead of a single 'next' node)

// As a programmer, you will need to be able to:

//^ Define a tree as a data structure
//^ List the characteristics that differentiate a tree from non-tree graphs
//^ Distinguish between binary trees and other types of trees
//^ Code a tree using the object-oriented method

//! What is a Graph?

// A tree is a type of graph

// We are learning trees first because they're simplier and easier to manipulate than other types of graphs.

// A graph is a collection of nodes and the edges between those nodes.

// Most depictions of graphs show circles (nodes) and arrows (edges) between those circles. like this:

//*            o ---> o ---> o
//*                           \
//*                            \
//*                             o ---> (etc)

// A "GRAPH" is a very, very broad category of data structure. Many other data structures can be defined in an overlapping manner.

//* 1.  0

//^ (this is a graph, tree, and a linked list)

//* 2.  0---> o---> o---> o

//^ This is also a graph, a tree, and a linked list

//* 3.
//*                 0
//*               /   \
//*             o       o
//*           /   \       \
//*         o       o       o

//^ This is a graph and a tree
//^ It is NOT a linked list because it has nodes with more than one child node.

//* 4.
//*                o   o
//*                 \ /
//*                  o
//*                  |
//*                  o

//^ This is a graph
//^ It's NOT a linked list OR a Tree because it has a node with more than one parent

//* 5.
//*                  o
//*                /   \
//*               o-----o

//^ This is a graph
//^ It is NOT a Linked List or a Tree because it is cyclical (has a cycle)

//! What is a Tree?

// A TREE is a GRAPH that does not contain any cycles.

// A CYCLE is defined as a path through edges that begins and ends at the same node.

// The "0"s in the graphic above are the 'root' of the tree

// The root is shown at the top, with branches and leaves running downward.

// The root node often IS the tree.

// Functions often operate on a tree via a SINGLE ROOT NODE that is passed in.

// THe term 'root,' which is often used in software engineering (root directory, root user, etc) to refer to concepts which "BRANCH" from the tree data structure (p u n intended).

//! What is a Binary Tree?

// A binary tree is a tree where nodes have AT MOST 2 CHILDREN.

//^ This means that graphs 1, 2, and 3 above are all Binary Trees.
