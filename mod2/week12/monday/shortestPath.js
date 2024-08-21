//! Finding a Shortest Path Between Two nodes

// One of the most common and useful functions of a breadth-first search is to find (A) shortest path between two nodes.

// We say (A) shortest path, instead of THE shortest path, because (with nearly every graph problem) there may be more than one valid solution.

// As a programmer, you need to know how to modify a breadth-first search so that it records (A) shortest path from one node to another.

//^ You can use this path to answer many questions, such as:

// 1. (A) shortest path between two nodes
// 2. The degree of separation between two nodes
// 3. How to get from a starting node to all reachable nodes

//! A Shortest Path Search Algorithm

//^ The algorithm for finding (A) shortest path is almost identical to a breadth-first search:

// 1. Create a queue. Create a separate array containing the starting node. Enqueue this array. THe enqueued array is the current path.
// 2. Create a set to store visited nodes
// 3. Qhile the queue is not empty, repeat steps 4-6
// 4. Dequeue the first path, and save it in a variable (currentNode)
// 5. Save the last node in the path in a variable (DO NOT pop it)
// 6. IS THIS NODE THE THING? If so, stop and return a result. Else, continue.
// 7. For each unvisited neighbor of the last node:
        // 1. Add it to the visited nodes set
        // 2. Copy the saved path, and add  the neighbor to the end. Enqueue this new path.
// 8. IF the queue has become empty without finding THE THING, then THE THING is not present. Return false, an error, or a message ass appropriate per the specs

//! A shortest Path - Setting Up the Graph

// Set up an adjacency list exactly like you would for a traversal.

adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

//! A shortest Path - Setting Up the Search

// Here we will conduct a search between two nodes.

// Instead of finding out whether or not it is possible to get from one node to the otehr, you will build and return a path that can be taken.

//^ Note that the steps for shortestPath and breadthFirstSearch are nearly identical.

// Start by creating a Set to store visited nodes and adding the starting node.

// Instead of using the queue to order the nodes we intend to visit, we will use it to build, store, and keep track of all the potential paths from our starting node to our target

// Each path will be built up as the search progresses, then returned if it leads to the target node or discarded if it does not.

// To start, enqueue the path to get from your starting node to your starting node, stored in an array.

// THe path from 1 to 1 is... [1]. WE're already there.

//! A shortest Path - Search First Loop

// Each loop starts the same way.

// While the queeu is not empty, dequeue the first element.

// Instead of a single node, the first element is an array containing a list of nodes in the order in which they were discovered.

// Right now, the array contains only [1].

// Shift the first element in the queue and save it as currentPath.

// The currentNode will be the last element in this path.

// Save the last element with currentNode = currentPath[currentPath.length - 1].

//^ It is important that you DO NOT USE pop(). IF you pop the last elemnt from the array, it will be lost and break your path.

// NExt, you ask: IS currentNode the thing?

// LEts say that it is not.

//^ For each neighbor of currentNode that is NOT visited:

// 1. Add that node to visited
// 2. Copy currentPath and push the neighbor to the end of the array, resulting in a new array containing the path from the starting node to the neighbor.
// 3. Add this new array back to the queue

// Lets say that our currentNode has two unvisited neighbors, so we do this process twice:

// Add the neighbor (2) to the visisted list
// copy the currentPath, add the node to the end, resulting in a path from 1 to 2
// then enqueue this path

// queue = [ [1, 2] ]

// THen add the neighbor (5) to the visited list
// copy currentPath, and add 5 to the end, resulting in a path from 1 to 5.
// Enqueue this path

// queue == [ [1, 2], [1, 5] ]

// At the end of the loop, currentNode and currentPath are discarded because they are local to within the scope of one while-loop iteration.

//! A Shortest Path - Search Second Loop

// The while-loop continues because the queue is still not empty. Dequeue the first path, which is now [1, 2], and save it in currentPath.

// WIthout using .pop(), save the last element in currentNode. You are now at 2

// Is currentNode equal to target?

// Lets say it is not, so we repeat the process above for reach unvisited neighbor of 2

// 1 is already in visited, so skip it.
// 3 is not in visited, so add it.
// copy currentPath, and add the neighbor to the end, giving you a apth from 1 to 3 ([1, 2, 3])

// Enqueue this new path

// 5 is already in visited, so skip it.

// At the end of the loop, currentNode and currentPath are discarded because they are local to within the scope of one while-loop iteration.

//! A Shortest Path - Search Third Loop

// The while loop continues as above because the queue is still not empty.

// The first path is [1, 5], so that is dequeued and saved to currentPath.

// Without using .pop(), save the last element in the path to currentNode.

// 5 is not the target, so repeat the process with its unvisited neighbors.

// 5: [1, 2, 4]

// 1 is already in visisted, so it is skipped
// 2 is already in visited, so it is skipped
// 4 is NOT in visited, so add it
// copy currentPath, add 4 to the end, and enqueue it

// At the end of the loop, currentNode and currentPath are discarded because they are local to within the scope of one while loop iteration.

//! Breadth-First Traversal - Traversal Fourth Loop and Conclusion

// Remove the first item in the queue, save the last node, and check if it is the target.

// Lets say 3 is the target. YOU FOUND THE THING!

// No more exploration or processing is necessary, so return currentPath.

// (A) shortest path from 1 to 3 is [1, 2, 3]

//! Further Practice

// On your own, use a scratch file or pencil and paper to walk through teh steps for the following searches:

// what is a shortest path from 1 to 4?
// What is a shortest path from 6 to 2?
// How many ways can 4 be reached from 1?

//! Summary

// Learned how to use the breadth-first algorithm to search a graph and find a shortest path from one node to another.
