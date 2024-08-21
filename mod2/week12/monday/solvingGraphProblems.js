//! Solving Graph Problems

// Graph problems are as diverse as graphs themselves.

// They may take the form of social networks, binary matrices, word ladders, and more.

// Most of these problems can be simplified to three steps.

//! Three Steps to SOlve (almost) Any Graph Problem

// 1. Identify and define the type of Graph
// 2. Implement the getNeighbors function
// 3. Traverse the graph

//^ Note that this is a subset of the Polya problem-solving gramework.

// The first step is similar to Polya's first step: Understand the problem.

// Is it a graph problem?

// If so, what kind of graph is it?

// What are the nodes and what are the edges?

// Is it cyclic or acyclic?

// Directed or undirected?

// Weighted or unweighted?

// Do you need to do a traversal or search?

// Breadth or depth-first?

//^ Based on the type of graph, implementing getNeighbors can be simple or difficult.

// If the graph is represented in an adjacency list, getNeighbors only requires fetching adjacencies by key.

// If the graph is represented in some other way, which is not uncommon, this step may become more complicated.

//^ The third step is the easiest. Traverse or search the graph using either the breadth-first or depth-first algorithm using these general steps:

// 1. Create a queue and enqueue the starting node
// 2. Create a set to store visited nodes
// 3. While the queue is not empty, repeat steps 4-6
// 4. Dequeue the first node and check if it's been visited
// 5. If not, mark it as visited and DO THE THING
// 6. Put all its neighbors in the back of the queue

// This is the algorithm for a breadth-first traversal.

// Replace the queue with a stack for a depth-first traversal and replace nodes with paths to nodes for a search.

//! Social Connections

// Given an object representing friendships in a social network, write a function socialConnections that takes in a name and an integer 'degrees' and returns a list of all users within the degrees of friendship from the given name.

// Alice's first-degree friends are Bob and Frank, and Charlie and Geraldine are second-degree friends.

friends = {
    'Alic': ['Bob', 'Frank'],
    'Bob': ['Alice', 'Charlie', 'Geraldine'],
    'Charlie': ['David', 'Bob'],
    'David': ['Charlie', 'Frank'],
    'Eve': [],
    'Frank': ['Alice', 'Charlie'],
    'Geraldine': ['Bob']
}

socialConnections('Alice', 1, friendships); // ['Bob', 'Frank']

socialConnections('Alice', 2, friendships); // ['Bob', 'Frank', 'Charlie', 'Geraldine']

//! Step 1: Identify and Define the Type of Graph

// The first step is to understand the problem by identifying and defining the type of graph this is.

// The nodes are names and edges are friendships.

// It's an undirected graph since all friendships go both ways.

// The graph is defined with an adjacency list.

// There are no edge weights. It's an unweighted graph.

//^ Note that degrees of connection is another way of describing the length of the social path between two users.

// To find the degree of separation between two users, like Alice and Charlie, find the social path between those users ['Alice', 'Bob', 'Charlie'] and count the number of edges between them.

// In this case, it is 2.

//! Implement the getNeighbors() function.

// The second step is to get the neighbors, which is easy for an adjacency list.

function getNeighbors(node, graph) {
    return graph[node];
}

//! Traverse the Graph

// Finally, traverse the graph using your getNeighbors function.

// Since you are looking for the shortest social paths, this immediately tells you to start with a breadth-first search.

// When you get to the step where you DO THE THING, compare the length of the path to the degrees and add the current friend if it's within the boundaries.

function socialConnections(name, degrees, graph) {
    // Create a queue and enqueue a path to the starting node
    const queue = [[name]];

    // Create a set to store visited nodes
    const visited = new Set();

    // Initialize an empty array to hold the friends
    const friends = [];

    // While the queue is not empty...
    while (queue.length > 0) {

        // Dequeue the first path
        let path = queue.shift();

        // Grab the last node from the path
        let currentNode = path[path.length - 1];

        // If currentNode has not been visited...
        if (!visited.has(currentNode)) {

            // ...add it to the visited Set
            visited.add(currentNode);

            // If the path is within the number of degrees...
            if (path.length > 1 && path.lengh <= degrees + 1) {

                // ...add it to the 'friends' array
                friends.push(currentNode);
            }

            // Put paths to currentNode's neighbors in the back of the queue
            let neighbors = getNeighbors(currentNode, graph);

            for (let i = 0; i < neighbors.length; i++) {

                let pathCopy = [...path];

                pathCopy.push(neighbors[i]);

                queue.push(pathCopy);
            }
        }
    }

    return friends;
}

// Note that the socialConnections function is very similar to the standard Breadth-First Search algorithm

//! Summary

// Learned to solve graph problems by breaking them into theree steps:

// 1. Identify the type of graph
// 2. Implement getNeighbors
// 3. Traverse the graph
