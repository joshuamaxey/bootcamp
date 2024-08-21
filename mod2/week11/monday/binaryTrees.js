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

// Ternary trees have at most three trees, and (n)-ary trees have at most (n) children.

// We will likely encounter binary trees in the job hunt. They are the focus of this course.

// Consider the following:

//^ 1. An empty graph of 0 nodes and 0 edges is a binary tree

//^ 2. A graph of 1 node and 0 edges is a binary tree

//^ 3. A linked list is a binary tree

//! Representing a Binary Tree with Node Instances

// Binary trees are commonly represented using object-orienteddesigns.

// A tree is a collection of nodes, so we will implement a TreeNode class

// Traditionally, the properties of LEFT and RIGHT are used to reference the child nodes of a TreeNode.

// Left and Right will reference other TreeNodes

class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
};

// Constructing a tree is a matter of creating the nodes and setting LEFT and RIGHT.

let a = new TreeNode('a');
let b = new TreeNode('b');
let c = new TreeNode('c');
let d = new TreeNode('d');
let e = new TreeNode('e');
let f = new TreeNode('f');

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

// Ok, I'm gonna attempt to build the visual representation of this tree according to the code in lines 137 - 148 ( WITHOUT looking at the visualization in the reading ):

//*                        a
//*                      /   \
//*                    b       c
//*                  /   \       \
//*                d       e       f

//^ Correct!

// For simplification, arrowheads are not shown when we depict graphs.

// The one-directional nature of the connectiosn in a tree is implied when we label a diagram a "tree"

//^ In other words, we don't need arrowheads to explicitly state that the flow of the connections begins at the top and then moves downward. This is implied in all trees.

// Moving forward, it's safe to assume that the topmost node is the root and that the direction of the edges is downward.

//^ Summarily, node 'a' above is the root.

//^ Node (a) can access node (b) through (a).left

//^ Node (b) cannot access node (a).

// This is the data structure that we will use to explore Binary Tree Algorithms!

// Creating a tree in this way can be tedious and repetitive, but it allows you to decide EXACTLY which nodes are connected and in what direction.

// This design is therefore very useful when accounting for edge cases in our designs.

//! Basic Tree Terminology Review

//^ 1. tree (a graph with no cycles)

//^ 2. binary tree (a tree where TreeNodes have at MOST 2 child nodes each)

//^ 3. root (the ultimate parent- the single node of a tree that can access every other node through descending edges. By definition, the root has no parent nodes)

//^ 4. internal node (a node with child nodes)

//^ 5. leaf (a node with no child nodes)

//^ 6. path (a series of nodes that can be traversed through descending edges [for example, "A, B, E" is a path through the tree graph above {on lines 152 - 156}])

//! Summary

// The definition of trees

// The fact that trees are a sub-class of graphs which follow specific rules

// The fact that nodes are organized with one-way connectiosn from parent to child

// The fact that trees contain NO cycles

// That a binary tree is a tree which has a maximum of TWO child notes per TreeNode

// The fact that the root of the tree is often used to prepresent or pass the tree itself into functions.
