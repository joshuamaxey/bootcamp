//! Identifying and Defining Graphs

// Vertex: A node in the graph

// Directed Edge: One-directional connection from one node/vertex to another

// Undirected Edge: Two-directional connection between two vertices/nodes

// Bidirectional Edge: Two-directional connection between two vertices that can be traversed in either direction

// Edge Weight: The cost of traersing an edge

// Cyclic/Acyclic: A cyclic graph is a graph with at least 1 cycle or the potential for a cycle. Noncyclic graph is a graph with no cycles.

// Adjacency List: A representation of a graph using an object with a key for each node in a graph.

const graph1 = {
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

//! Graph Algorithms for Technical Interviews (freeCodeCamp.org)

// A graph is just a collection of nodes and edges.

// Node and vertex are synonyms

// An edge is a connection between nodes

// An edge is a relationship between things

// In a directed graph, the edges have arrows. They only travel in one direction. This means that the 'neighbors' of a node are ONLY those nodes which can be reached by following the direction of the edges.

// In an undirected graph, the edges have no arrows. The connections run both ways. We can go from one node to another and then back to the first node.

// In a cyclic graph, there are cycles or the potential for a cycle.

// In an acyclic graph, there are no cycles.

// An adjacency list is a way to represent a graph in code

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

// Traversals are the MUST-KNOW algorithms for graphs.

// Depth and breadth first traversals explore all of the nodes in a graph, but they explore them in different order.

// Depth uses a stack (FILO) (think of it as a vertical data structure, like a stack of plates)

// Breadth uses a queue (FIFO) (think of it as a horizontal data structure, like a line in the grocery store)

//! Depth-First

function depthFirstPrint(graph, source) {

    const stack = [source]; // initialize a new stack using an array, and put the source node in the stack by default. Remember to use push() and pop() to make sure we are always adding AND removing from the FRONT of the array.

    while (stack.length > 0) { // While the stack is not empty...

        const current = stack.pop(); // .pop() the top node off of the stack and store it in a variable 'current'

        console.log(current); // Print the current node (or do THE THING with the node)

        for (let neighbor of graph[current]) { // iterate through the neighbors of the current node...

            stack.push(neighbor); //... and push all of those neighbors to the stack.
        }
    }
};

let example1 = depthFirstPrint(graph, 'a');

console.log(example1); // a b d f c e

// We can also do this recursively, using the call stack as our stack!

function depthFirstPrintRecursive(graph, source) {

    console.log(source); // print the source node to the console

    for (let neighbor of graph[source]) { // loop through every neighbor of the source node

        depthFirstPrintRecursive(graph, neighbor) // recursively call our function on each of the neighbors of the source node
    }
};

let example2 = depthFirstPrintRecursive(graph, 'a');

console.log(example2); // a c e b d f

// Notice the slight difference in the order of the letters printed for each function- This is because on our recursive call, we moved to 'c' before we moved to 'b'.

//^ Also note that there is NO EXPLICIT BASE CASE for our recursive function!

// This is because we have an implicit base case: When the current node has no neighbors (when a node, like 'e' is a dead-end)

// This is the case becasue when we go to recursively call the function on each neighbor of the current node, we find that the current node has no neighbors. Thus the loop never begins, and we never make a recursive call.

// That is our implicit base case

//! Breadth-First

function breadthFirstPrint(graph, source) {

    const queue = [source]; // initialize a queue to hold the current node, then add the source node by default. Remember to use push() to add to the back of the array and shift() to remove from the front because a queue is First-In First-Out, like a line at the store.

    while (queue.length > 0) { // While the queue is not empty...

        const current = queue.shift(); // remove the last element from the FRONT of the array, then store that node in a variable 'current'

        console.log(current); // Print the current node (or DO THE THING)

        for (let neighbor of graph[current]) { // for each neighbor of the current node...

            queue.push(neighbor); // ...push it to the BACK of the queue
        }
    }
};

let example3 = breadthFirstPrint(graph, 'a')

console.log(example3) // a c b e d f

//! Has Path

// We should take in a SOURCE and DESTINATION node, then determine whether there is a path from the source to the destination

// We want to search for the destination node from the source, then return true if we find it or false if we do not

// False does NOT mean that the destination does not exist, necessarily. It means that there is no path from the source node to the destination node

// (n) = number of nodes
// (e) = number of edges

// Time: O(e)
// Space: O(n)

//^ OR

// (n) = number of nodes
// (n^2) = number of edges

// time = O(n^2)
// space = O(n)

const graph2 = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
};

//* Depth-First

function hasPathDepth(graph, source, destination) {

    if (source === destination) { // if our source is also our destination....
        return true; // ...return true
    }

    for (let neighbor of graph[source]) { // for each neighbor of the source node...

        if (hasPathDepth(graph, neighbor, destination)) { // ...if there is a path from the current neighbor to the destination...

            return true; // ...return true.
        }
    }

    return false; // Otherwise, if we iteratate through all of the neighbors and find no path to the destination, return false.
};

let example4 = hasPathDepth(graph2, 'f', 'k');

console.log(example4); // true;

//^ Note that BECAUSE this graph is acyclic (which was clarified within the specs/readme), we do not have to worry about potentially getting caught in an infinte loop. This IS something that we'll have to consider if we encounter a cyclic graph.

//* Breadth-First

function hasPathBreadth(graph, source, destination) {

    const queue = [source]; // initialize a queue and enqueue the source node by defualt. Remember to use push() to add to the BACK of the queue and shift() to remove from the FRONT of the queue, like a line at the store. Also recall that there is no way to implement a breadth-first traversal recursively.

    while (queue.length > 0) { // While the queue is not empty...

        const current = queue.shift(); // ...remove the first node from the front of the queue and store it in the variable 'current'

        if (current === destination) { // if the current node is the destination...

            return true; // ...return true
        }

        for (let neighbor of graph[current]) { // Otherwise for each neighbor of the current node...

            queue.push(neighbor); // ...push that neighbor to the back of the queue
        }
    }

    return false; // If we iterate through every accessible node without reaching our destination, return false
};

let example5 = hasPathBreadth(graph2, 'f', 'k');

console.log(example5); // true

//! Undirected Path

// Note that for an undirected graph, connections go both ways.

// This means that when we represent the graph as an adjacency list, we make sure to write BOTH directions for reach connection. In other words..

// If we have a path from i to j, we also have to have a path from j to i. And so on.

// This graph is also cyclic, there is a cicle from i to k to j and back to i, etc.

// Also note that on an undirected graph, every connection between two nodes is technically a trivial cycle because we can go from one to the other and back and so on.

const graph3 = {
    i: ['j', 'k'],
    j: ['i', 'k'],
    k: ['i', 'k', 'm', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o']
};

// In order to avoid infinite loops, we need to mark our nodes as 'visited' as we traverse the graph. We will usually use a set to do this, since the set automatically eliminates duplicates.

const edges = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
];

function undirectedPath(edges, nodeA, nodeB) {

    const graph = buildGraph(edges); // First, we build a graph from the 'edges' 2-D array using our buildGraph() helper function...

    return hasPath(graph, nodeA, nodeB, new Set()); // ...then we pass that graph, along with our nodeA and nodeB, into our hasPath() helper function which will determine whether there is a path from nodeA to nodeB in our graph.

    // Notice that we also pass in a new Set() as the fourth parameter in our hasPath() function. This is important because it keeps us from getting caught in an infinite loop in the case that our graph is cyclical.

    //Remember that Sets enable us not only to store elements without duplicates, but also to CHECK for something and to ADD something, both in O(1) runtime
}

function hasPath(graph, source, destination, visited) {
    // The purpose of hasPath() is to determine if there is a path within our graph from the source node to the destination node

    if (source === destination) { // if our source node is also our destination...

        return true; // ...return true. Otherwise...
    }

    if (visited.has(source)) { // if our visited set already includes the source node...

        return false; // ...return false. This keeps us from getting caught in an infinite loop
    }

    visited.add(source); // Otherwise, if our visited set does NOT include our source node, we add it before continuing. Then...


    for (let neighbor of graph[source]) { // ...for each neighbor of our source node within our graph...

        if (hasPath(graph, neighbor, destination, visited)) { // ...if ther is a path within our graph from the neighbor of the source node to the destination...

            return true; // ...return true, since we know that IF there is a path from the neighbor to the destination, there must also be a path from the source node to our destination
        }
    }

    return false; // Otherwise, if we traverse the whole graph and never find the destination, we return false because there is currently no path from the source node to the destination node.
};

function buildGraph(edges) {
    // The purpose of this function is to build an adjacency list (which represents a graph) from the 'edges' 2-D array.

    const graph = {}; // So the firs thing we do is initialie an empty object, since we use an object to represent a graph as an adjacency list.

    for (let edge of edges) { // ...for each edge within the edges array...

        const [a, b] = edge; // ...an edge represents the connection from one node to the other within each set of nodes

        if (!(a in graph)) graph[a] = []; // If the graph does not already include a, then add it to the graph
        if (!(b in graph)) graph[b] = []; // If the graph does not already include b, then add it to the graph

        graph[a].push(b);
        graph[b].push(a);
    }

    return graph; // ...then we return the graph
}

let example6 = undirectedPath(edges, 'i', 'm');

console.log(example6); // true

//! Class Notes Thursday 5/30 Week12
