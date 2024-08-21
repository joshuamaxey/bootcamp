//! Breadth-First Graph Search

// A "Search" is a "traversal" that stops when we find what we are looking for. That being said, there is one difference between a breadth-first graph traversal and search. In a traversal, we traverse through every node. We may do something with the nodes as we do (printing, adding to a running total, etc). In a search, we stop once we've found what we're looking for.

//! Breadth-First Search Algorithm

//^ 1. Create a queue and enqueue the starting node
//^ 2. Create a 'visited' set to track which nodes we have visited
//^ 3. While the queue is empty, repeat steps 4 - 6
//^ 4. Dequeue the first node (and store it in a variable)
//^ 5. Check to see if this node is the target. If it is, return our result.
//^ 6. For each unvisited neighbor, add it to the queue and to our 'visited' set
//^ 7. If we traverse the entire graph without finding the thing, return appropriately (false, or an error, etc)

//! Setting Up Our Graph

// We'll use an adjacency list, the same as if we were doing a breadth-first traversal.

let adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

// NOTE that in this adjacency list, 6 is not connected to any other node (but is still considered a part of our graph)

function breadthFirstSearchGraph(graph, startNode, target) {

    let queue = []; // initialize a queue for our breadth-first search
    let visited = new Set(); // initialize our 'visited' set to track the nodes we've visited

    queue.push(startNode); // push the startNode to the queue
    visited.add(startNode); // add the startNode to the 'visited' array

    while (queue.length > 0) { // While the queue is not empty

        let currentNode = queue.shift(); // shift the first element from the front of the queue and store it in our variable 'currentNode' (on our first iteration, this will be 'startNode')
        if (currentNode === target) { // Check to see if the currentNode is our target, and...

            console.log(visited) //! EXTRA STEP to check how many nodes were visited and the order that they were visited
            return true; // ...if it is our target, return true
        }

        for (let neighbor of graph[currentNode]) { // Otherwise, if the currentNode is NOT our target, we check the 'neighbors' of the 'currentNode' in the graph (the elements in the 'values' array corresponding to the currentNode 'key' of our adjList object)

            if (!visited.has(neighbor)) { // If this neighbor of our currentNode is NOT present in our visited set...

                queue.push(neighbor); // ...push that neighbor to the queue, and...
                visited.add(neighbor); // ...add it to our visited set
            }
        }
    }

    return false; // Finally, if we have traversed the entire graph and NOT found the thing that we are looking for, return false (or throw an error, or whatever we need to do per the specs)
};

//* Time Complexity: O(n)

//* Space Complexity: O(n)

console.log(breadthFirstSearchGraph(adjList, 1, 4)); // true
console.log(breadthFirstSearchGraph(adjList, 1, 3)); // true
console.log(breadthFirstSearchGraph(adjList, 1, 2)); // true
console.log(breadthFirstSearchGraph(adjList, 1, 6)); // false
console.log(breadthFirstSearchGraph(adjList, 1, 10)); // false
