//! Breadth-First Graph Traversal

// Nearly every graph problem involves a traversal.

// Our algorithms are similar to the breadth an depth-first search algorithms for tree traversal

// The difference is that you must keep track of visited node to prevent infinite loops when you encounter cyclical graphs

//! Review: Breadth-First Order

// Breadth-first traversal visits nodes from nearest to furthest.

//! Breadth-First Traversal Algorithm

//& This is worth memorizing

// 1. Create a queue and enqueue the starting node
// 2. Create a set to store the visited nodes
// 3. While the queue is not empty, repeat steps 4-6
// 4. Dequeue the first node
// 5. Perform the operation on the dequeued node
// 6. For each univisted neighbor, add it to the visited nodes and to the back of teh queue

//* In Summary:

// dequeue nodes
// mark their unvisited neighbors as visited
// add those neighbors to the back of the queue

//! Breadth-First Traversal - Setting Up the Graph

// To traverse this graph, start by creating an adjacency list.

// For some problems, this will be provided already.

// Others, you'll have to create your own.

adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

//! Breadth-First Traversal - Setting Up the Traversal

// Initialize the traversal by creating a set to store visited nodes and a queue containing the nodes to visit.

// Add the fist node to both the queue and visited set.

// You'll have to decide which side of teh queue is the front and which is the back.

// For this example, we'll use the
