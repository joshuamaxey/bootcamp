//! Finding a Shortest Path

//! A Shortest Path Search Algorithm

//^ 1. Create a queue for our breadth-first search. Create a separate array which contains the starting node, then enqueue this array. The enqueued array is our current path.

//^ 2. create a 'visited' set to track which nodes we have visited

//^ 3. While the queue is not empty, repeat steps 4 - 6

//^ 4. Dequeue the first path, then save it in a variable 'currentPath'

//^ 5. Save the last node in the path as a variable (do NOT pop it from the stack!)

//^ 6. Check to see if this node is our target. If so, return a result. If not...

//^ 7. For each unvisited neighbor of the last node:

    // 1. Add it to the 'visited' set
    // 2. Copy the saved path, and add the neighbor to the end. Enqueue this new path

//^ 8. If the queue is empty and we haven't found the thing, return false (or an error, etc per the problem specs)

//* Recall that when we use a queue, we .push to the back and .shift from the front. A queue functions like a line at the store (First In, First Out).

let adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function shortestPathGraph(graph, startNode, target) {

    let path = []; // Initialize an empty array which will track our 'path' through the graph from the startNode to the target
    path.push(startNode); // Push our startNode to the path

    let queue = []; // Initialize a queue for our breadth-first search
    queue.push(path); // Push our path to the queue

    let visited = new Set(); // Initialize a 'visited' set to keep track of the nodes we've visited
    visited.add(startNode); // Add our startNode to the 'visited' set

    while (queue.length > 0) { // While the queue is not empty

        let currentPath = queue.shift(); // Shift our 'path' from the queue and save it in a variable 'currentPath'

        let currentNode = currentPath[currentPath.length - 1]; // Save the node at the front of our queue in a variable 'currentNode' (for our first iteration, this will be the startNode)

        if (currentNode === target) { // Check if our currentNode = the target

            return currentPath; // If our currentNode is the target, it means that we have found a path from our startNode to our target. Return the path.
        }

        for (let neighbor of graph[currentNode]) { // (If our currentNode is NOT the target) for each neighbor of our currentNode...

            if (!visited.has(neighbor)) { // ...If the current neighbor is NOT already present in our visited set...

                visited.add(neighbor); // ...Add that neighbor to the visited set

                let newPath = currentPath.slice(); // Make a copy of our 'currentPath' and save it in the variable 'newPath'

                newPath.push(neighbor); // Then push the current neighbor to our 'newPath'

                queue.push(newPath); // And finally, add our newPath to the queue
            }
        }

    }
    return false; // If we traverse the entire graph without ever finding our target node, then we know that there is no path from our startNode to the target. Return false.
}

//* Time Complexity: O(n)

//* Space Complexity: O(n)

console.log(shortestPathGraph(adjList, 1, 3));
console.log(shortestPathGraph(adjList, 1, 4));
console.log(shortestPathGraph(adjList, 4, 1));
console.log(shortestPathGraph(adjList, 1, 6));
