//! Intro to Graphs

//^ A graph is a collection of nodes that are connected by edges. Graphs represent relationships. Because there are many types of relationships, there are many types of graphs.

//! Properties of Graphs

//^ Directed vs. Undirected.

// "Directed" edges are edges within a graph which function like arrows, pointing in only one direction and representing a one-way connection between nodes. "Undirected" graphs represent a two-way connection between notes.

//^ Cyclic vs. Acyclic

// Graphs (unlike trees) may contain cycles, which can in turn result in infinte loops in our code. To prevent infinte loops while working with cyclical graphs, we can keep track of our visited nodes to ensure that none of our nodes are re-visited.

//^ Weighted vs. Unweighted

// The edges between nodes can be weighted or unweighted. "Weighted" edges are those which carry a value. For instance, with respect to the route calculated by a GPS, a road (edge) between two places (nodes) may have a high "weight" if it is heavily congested with traffic or has a very slow speed limit which results in a long travel time. "Unweighted" edges are edges which all have the same weight (or no weight). By default, "unweighted" edges on any graph have a default weight of 1.

//! Adjacency Lists

//^ There are many ways to represent a graph in code. An adjacency list is standard practice. Adjacency lists are typically implemented using an OBJECT. Each KEY of the object is a node with a VALUE that is a list of the nodes that it points to.

// For instance:

// GRAPH: (T) ----> (V) <----- (U)

// ADJACENCY LIST (Using arrays):

const graph = {
    T: ['V'],
    U: ['V'],
    V: []
};

// ADJACENCY LIST (Using sets):

const graph2 = {
    T: new Set(['V']),
    U: new Set(['V']),
    V: new Set([]),
};

//^ Using a set instead of an array for the values corresponding to the keys within our 'adjacency list' object allow us to check if two nodes are neighbors in O(1) time. Using arrays gives us a time complexity of O(n) for this operation. For very large (n)s, this may be worth the additional complexity of our code.


//! Graph Terminology

// Node or Vertex: A node in a graph (node and vertex used interchangeably)

// Directed Edge: A one-way connection between nodes
// Undirected Edge: A two-way connection between nodes
// Bidirectional Edge: A two-way connection between nodes that can be traversed in either direction.
//& What is the difference between an undirected and bidirectional edge? If a bidirectional edge is defined as a two-way connection between nodes that can be traversed in either direction, does this mean that an undirected edge is a two-way connection which CANNOT be traversed in either direction?

// Edge Weight: The 'cost' of traversing an edge
// Weighted Edge: An edge with a distinct 'weight'
// Unweighted Edge: An edge with no weight (By default, all "unweighted" edges have a weight of 1)

// Cyclic Graph: A graph with at least one potential cycle
// Acyclic Graph: A graph with no potential cycles

// Adjacency List: A method of implementing a graph in code which utilizes an object and its key-value pairs to represent the graphs nodes and edges
