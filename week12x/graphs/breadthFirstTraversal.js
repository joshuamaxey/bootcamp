//! Breadth-First Graph Traversal

// Breadth-first GRAPH traversal is very similar to TREE traversal. The difference is that when we perform a breadth-first traversal of a GRAPH, we must also keep track of our visited nodes. Keeping track of visited nodes prevents us from becoming caught infinite loops while working with cyclical graphs.

//! Breadth-First Graph Traversal Algorithm

//^ 1. Create a queue and enqueue the starting node
//^ 2. Create a SET to store visited nodes
//^ 3. While the queue is not empty, repeat steps 4 - 6
//^ 4. Dequeue the first node
//^ 5. DO THE THING with the 'currentNode' (dequeued node)
//^ 6. For each unvisited neighbor, add it to the 'visited nodes' AND to the back of the queue

// As we can see from the steps outlined here, this algorithm for depth-first traversal of a GRAPH is the same as traversal of a TREE except that we add an extra step at the end. When we add the unvisited neighbors to the queue, we ALSO add those nodes to the 'visited' set.

//* Recall that a queue works like a line at the grocery store- First In, First Out. We push to the back of the queue, then we shift from the front of the queue

//! Setting Up the Graph

// We use an adjacency list (object, normally) to represent our graph. This distinguishes our graphs (and corresponding traversal algorithms) from trees, which are usually implemented using a linked list.
// Additionally, note that our GRAPH traversal functions take two parameters: A graph, and the starting node of that graph. This distinguishes our graph traversal functions from our tree traversal functions, which only take one parameter: the head node.

//^ The following adjacency list represents a graph:

let adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function breadthFirstTraversalGraph(graph, startNode) {

    let queue = []; // initialize a queue for the breadth-first traversal
    // let visited = new Set(); // initialize a new set to track the nodes we have visited

    queue.push(startNode); // push the startNode to our queue
    visited.add(startNode); // add the startNode to our visited set
    //^ Queue: []
    //^ Visited: []

    while (queue.length > 0) { // while the queue is not empty...

        let currentNode = queue.shift(); // shift the startNode from our queue and save it in a variable 'currentNode'
        //^ Queue: []
        //^ currentNode =;
        //^ Visited: []
        console.log(currentNode); // DO THE THING with the node (in this case, print to the console)

        for (let neighbor of graph[currentNode]) { // For each "neighbor" of the "currentNode" (each of the nodes located in the 'value' array corresponding to the current 'key' node)

            if (!visited.has(neighbor)) { // If the current neighbor is NOT already present in our 'visited' set...

                queue.push(neighbor); // push that neighbor to the queue, and...
                visited.add(neighbor); // add it to the 'visited' array
                //^ Queue: []
                //^ Visited: []
            }
        }
    }
}

breadthFirstTraversalGraph(adjList, 1); // Prints:


// 1
// 2
// 5
// 3
// 4
// 6
