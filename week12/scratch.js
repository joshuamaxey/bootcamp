//! Identifying and Defining Graphs

// Vertex: A node in the graph

// Directed Edge: One-directional connection from one node/vertex to another

// Undirected Edge: Two-directional connection between two vertices/nodes

// Bidirectional Edge: Two-directional connection between two vertices that can be traversed in either direction

// Edge Weight: The cost of traersing an edge

// Cyclic/Acyclic: A cyclic graph is a graph with at least 1 cycle or the potential for a cycle. Noncyclic graph is a graph with no cycles.

// Adjacency List: A representation of a graph using an object with a key for each node in a graph.

const graph = {
    "A": ["B", "C"],
    "C": "D"
}

// Graphs odn't have a certain order to their children.

// Each ndoe's edges are unique, you could use a set to represent adjacencies.

// If a node has a list of neighbors, searching for those neighbors by iterating through them one by one would be an O(n) operation.

// Using a set results in an O(1) lookup time, which makes sets beneficial.

// Bot hbi-directional and undrected edges are represented by two directed edges in an adjacency list.

const undirected = { // keys are nodes, values are neighbors
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
};

// Graphs are an abstract data type that represents a collection of nodes and edges. Each node represents one or more values and contains any number of edges pointing to other nodes. Graphs represent relationships between objects.

//! Importance in Algorithms

//^ Algorithm design

// Many fundamental algorithms in computer sience are based on graph theory, including search algorithms, shortest path algorithms, and network flow algorithms

// Directed graphs and related data structures are crucial in computer seience beause they provie a versatile and powerful way to model relationships and solve complex problems across various domains.
