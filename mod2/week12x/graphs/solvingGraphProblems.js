//! Solving Graph Problems

// Graph problems are diverse because graphs are diverse. However, there are three steps to solving (virtually) any graph problem:

//! Three Steps

//^ 1. Identify and define the type of graph
    // What does the graph represent? What are the nodes meant to be? And the edges?
    // Is the graph cyclic or acyclic?
    // Directed or undirected?
    // Weighted or unweighted?
    // Are we performing a traversal or a search?
    // Do we use a breadth- or depth-first implementation?

//^ 2. Implement the getNeighbors function
    // If our graph is NOT represented as an adjacency list, this step may require additional work.
    // If our graph IS represented as an adjacency list, then we implement our regular 'getNeighbors' function:

function getNeighbors(node, graph) {
    return graph[node];
}

//^ Traverse the graph
    // Create a queue (or stack) and enqueue (or push) the starNode
    // Create a 'visited' set to track which nodes we have visited
    // While the queue (or stack) is not empty, repeat steps 4 - 6
    // Dequeue (or pop) the first node and check if its been visited
    // If not, add it to the 'visited' set and DO THE THING with it
    // Put our currentNode's neighbors in the back of the queue (or front of the stack) and add to 'visited' set
