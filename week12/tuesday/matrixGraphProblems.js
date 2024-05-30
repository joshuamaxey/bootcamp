//! Solving Matrix Graph Problems

// We have explored how to solve graph problems using an adjacency list. But graph problems can come in many different forms.

// As a programmer, you will need to know how to apply the same strategies to solve matrix graph problems.

//! Recall: Three Steps to Solve (almost) any Graph Problem

// 1. Identify and define the type of graph
// 2. Implement the getNeighbors function
// 3. Traverse the graph

// WHen working with a matrix, these same steps apply.

// The implementation will be different due to structural differences of a matrix.

//! What is a Matrix?

// A graph is a data structure used to represent relationships among objects. Or pieces of data.

// An adjacency list is a way of representing a graph in code with an object. The keys represent nodes and the values represent neighbors (or connections to that node).

// A matrix is a way of representing a graph as a two-dimensional (2-D) array.

// The data represented by a matrix is the same as the data represented by an adjacency list.

// They are represented using a different data structure.

// The matrix includes nodes, which are representd as elements within the 2-D array

// The matrix also uses edges, which are represented as adjacent nodes within the 2-D array.

// The nodes in a matrix represent real-world data and relationships between pieces of data, just like in an adjacency list.

// In an adjacency list, edges connect a particular node to its neighbors.

// In a matrix, neighbors are nodes that are adjacent to the original node.

// Each node can be identified as a coordinate using [row, column] syntax.

// This is useful when node values are not unique because coordinates will always be unique.

// To access a value, use the indices like you would to access a value in any 2-D array.

// Key into the outer array, then the inner array.

// Like this: matrix[row][column]

//^ Adjacency List - represents relationships using an object

const adjacencyList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
};

// Node 1 has 2 neighbors [2, 5], etc

//^ Matrix - represents relationships using a 2-D array

const matrix = [
    [0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 0 ,0]
];

// The [0, 0] node has three neighbor nodes [ [0, 1], [1, 0], [1, 1] ]
// (IF we count diagonals as neighbors)

//! Breaking Down the Three Steps

// Now that you understand the structure of a matrix graph relative to an adjacency list, we can use our three steps to solve matrix graph problems.

//! 1.
