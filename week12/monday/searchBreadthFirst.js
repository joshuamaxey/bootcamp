//! Breadth-First Search

// The terms SEARCH and TRAVERSAL are often interchanged when we talk about graphs

// Both porcesses are similar and use the same algorithms to traverse the graph.

// The key difference is that for a SEARCH, you are looking for something (usually a specific node).

// Instead of DOING THE THING, you ask, "is this the thing?"

// If it is the thing you're looking for, then you stop the traversal and return a value, an answer, or a calculation.

//! Breadth-First Search Algorithm

//^ The algorithm for a breadth-first search is very similar to the algorithm for a breadth-first traversal

// 1. Create a queue and enqueue the starting node
// 2. Create a set to store the visited nodes
// 3. While the queue is not empty, repeat steps 4-6
// 4. Dequeue the first node
// 5. IS THIS NODE THE THING? If so, stop and return a result. Else continue.
// 6. For each unvisited neighbor, add it to the visited nodes and to the back of the queue
// 7. If the queue has become empty without finding the thing, then the thing is not present. Return false, an error, or a message as appropriate per the specs

//! Breadth-First Search - Setting up the Graph

// Set up an adjacency list like you would for a traversal

adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
};

//! Breadth-First Search - Setting up the Search

// Before you can set up the search, you need to know what you are searching for.

// It is common for a problem to require that we find out whether or not it is possible to reach a certain node from a certain starting point.

// As with a traversal, begin by creating a Set to store the visited nodes and a queue containing the nodes to visit

// Add the starting node to both the queue and the visited set.

// The target node will be passed in as a second argument in your function.

//! Breadth-First Search - Search First Loop

// Each loop starts the same way.

// While the queue is not empty, dequeue the first node. This removes it from the queue and saves it in a variable called currentNode

// Next, we determine whether currentNode is the TARGET.

// Let's say it's not. Add currentNOde's unvisited neighbors to the back of the queue, and to the visited Set, then repeat.

// At the end of the loop, currentNode is discarded because it is local to within the scope of one for-loop iteration.

//! Breadth-First Search - Search Second Loop

// THe while-loop continues becasue the queue is not empty.

// Dequeue the first node, then save it in currentNode.

// Is currentNode the target?

// Lets say it's not. Add each unvisited neighbor of currentNode to the visited Set and the queue.

// At the end of the loop, currentNode is discarded because it is local to within the scope of one for-loop iteration.

//! Breadth-First Search- Search Third Loop

// THe loop continues because the queue is still not empty.

// THe first node is dequeued.

// Is it the target?

// LEts say that it is not. Add its unvisited neighbors to the queue and the visited Set.

// At the end of the loop, currentNode is discarded because it is local to within the scope of one for-loop iteration.

//! Breadth-First Traversal - Traversal Fourth Loop and Conclusion

// As before, remove the first item in the queue and check if it is the target.

// Lets say that, this time, it is!

// Return true.

// That's it.

//! Further PRactice

// On your own, use a srath file or pencil and paper to walk through the steps for the following searches:

// 1. Can 1 be reached from 4?
// Can 6 be reached from 2?
// Can 2 be reached from 6?

//! Summary

// Learned how to use the breadth-first algorithm to search a graph and determine if a node is reachable from a starting node.
