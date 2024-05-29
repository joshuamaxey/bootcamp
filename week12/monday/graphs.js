//! Objecties

// 1. Describe Graph Terminology
        // Nodes/vertices and edges
        // directed vs undirected
        // cyclic vs acyclic
        // weighted vs unweighted
// 2. Implement a graph using an adjacency list
// 3. Iplement a graph using a matrix
// 4. Traverse and Search a Graph in both Depth and Breadth-First order
// 5. Determine whether a node is reachable from another node via a traversal
// 6. Determine the shortest path between two nodes using a breadth-first search
// 7. Identify when a whiteboard problem can be solved with a graph

//! Intro to Graphs

//^ We've learned about node-and-pointer data structures including linked lists, binary search trees, and binary trees.

// These are all forms of graphs, which is the most general form of connected data structure

//^ Graphs are an abstract data type represented as a collection of nodes and edges.

// Each node represents one or more values and contains any number of edges pointing to other nodes.

// Graphs represent RELATIONSHIPS between objects.

// Since there are many types of relationships, there are many different types of graphs.

//^ Graphs make use of a lot of the computer science concepts we've learned.

// To solve graph problems, we will make use of arrays, hash tables and sets, stacks and queues, recursion, breadth and depth-first search, and more.

// Graph problems are tricky if you're shaky on any of these concepts. THey show up in advanced coding interviews.

// Most FAANG companies are built on graph technology and love to ask graph questions in interviews.

//! What is a Graph?

//^ A graph is a collection of nodes connected by edges.

// Unlike trees, graphs do not necessarily start from a root node and can have any number of neighboring edges. Consider the following examples of real-world graphs:

// 1. Street maps
// 2. Social networks
// 3. The internet
// 4. Decisions in board games

// Graphs are used for...

// Finding the shortst route, friend suggestions, web crawlers and indexing, package routing, game AI, and more.

//! Graph Properties

// There are a few properties you need to ID before solving garph problems

//^ 1. Directed vs Undirected

// Some graph diagrams contain edges with arrows while some do not. Arrows are used to differentiate between directed graphs (with arrows) and undirected graphs (no arrows)

// In an undirected graph, each edge represents a 2-way relationship between nodes. An example would be a facebook friend or LInkedIn connection: Both represent mutual relationships between two users.

// In a directed graph, the relationship goes in only one direction (indicated by arrow direction). An example would be a follower on Twitter or Instagram.

//^ 2. Cyclic vs Acyclic

// The primary difference between trees and graphs is that graphs can have cycles while trees do not.

// This can make traversals tricky because cycles can lead to infinite loops when you don't keep track of your visited nodes.

//^ 3. Weighted vs Unweighted

// Edges can have weight

// On a traffic graph, each edge (road) may be weighted according to the time it takes to traverse it from end-to-end

// A road that is long or busy with traffic will have a high weight while short, clear roads will weigh less.

// Highways with a high speed limit cover large distances with lower weights.

// With edge weights in place, finding an optimal driver's route is a modified breadth-first search

// In an unweighted graph, every edge has a weight of 1.

//! Representing a Graph in Code

// Graphs are a diverse abstract data type (ADT) that can be coded in many different ways.

// The most standard is the ADJACENCY LIST. This is implemented as an object.

// Each KEY is a node in the graph. Each VALUE is a list of nodes that it is connected to.

const graph1 = {
    T: ['V'],
    U: ['V'],
    V: []
};

const graph2 = {
    X: ['Y'],
    Y: ['Z'],
    Z: ['X']
};

const graph3 = {
    A: ['B', 'C', 'E'],
    B: [],
    C: ['B', 'D'],
    D: [],
    E: ['A'],
    F: ['E']
};

// UNLIKE binary trees, the nodes in a graph have no particular order.

// In graph3 above, each of node C's neighbors have the same priority. There's no reason B would come before D or vice-versa.

// Since this is the case, and since there cannot be any duplicate edges between nodes in a graph, you could use a SET to represent adjacencies instead.

const graph4 = {
    T: new Set(['V']),
    U: new Set(['V']),
    V: new Set([])
};

const graph5 = {
    X: new Set(['Y']),
    Y: new Set(['Z']),
    Z: new Set(['X'])
};

const graph6 = {
    A: new Set(['B', 'C', 'E']),
    B: new Set([]),
    C: new Set(['B', 'D']),
    D: new Set([]),
    E: new Set(['A']),
    F: new Set(['E'])
};

// Using a set, we can check if two nodes are neighbors in O(1) time instead of O(n) time.

// If (n) is huge, this would probably be worth making the change.

//^ In an adjacency list, both bi-directional and undirected edges are represented by two directed edges:

const undirected = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
};

//! Summary

//^ Learned how to identify and define graphs

// Vertex: A node
// Directed Edges: One-way connection from node/vertex to node/vertex
// Undirected Edge: Two-way connection between two vertices/nodes
// Bidirectional Edge: A two-way connection between two vertices that can be traversed in either direction
// Edge Weight: The cost of traversing an edge
// Cyclic/Acyclic: A cyclic graph has at least one cycle or the potential for a cycle
// Adjacency List: A representation of a graph using an object (key is a node/vertex, value is a list of connected nodes)
