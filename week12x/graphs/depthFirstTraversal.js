//! Depth-First Graph Traversal

// The difference between our Depth-First Traversal and our Breadth-First Traversal is that we use a STACK for depth-first instead of the QUEUE that we use for breadth-first. The consequence of this change is that we traverse as far as we can to the end of the graph instead of moving level by level. This change is the same between depth- and breadth-first traversals with GRAPHS and with trees.

// The distinction between depth-first traversal of a graph vs traversal of a tree is that when we traverse a graph, we must keep track of the nodes we have visited in order to prevent infinite loops when working with cyclical graphs.

//! Depth-First Graph Traversal Algorithm

//^ 1. Create a stack, then push the starting node to the stack
//^ 2. Create a 'visited' set to track which nodes we've visitd
//^ 3. While the stack is not empty, repeat steps 4 - 6
//^ 4. Pop the top node from the stack (first iteration, this will be the startNode)
//^ 5. DO THE THING with the 'currentNode'
//^ 6. For each unvisited neighbor, push to the stack and add to the 'visited' set

//* Recall that we implement a stack by using an array. We use push to add items to the top of the stack, then pop to pop them off. These operations give our elements a "First In, Last Out" order.

//! Setting Up Our Graph.

// Note that we use an adjacency list (object, normally) to represent our graph. This distinguishes our graphs (and their algorithms) from our trees, which are usually implemented using a linked list.

// Additionally, note that our graph traversal functions take in two parameters: a graph and a starting node. This distinguishes them from our tree traversal algorithms, which only take a single parameter: the head node of our tree.

let adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
}

function depthFirstTraversalGraph(graph, startNode) {

    let stack = []; // initialize a stack for the depth-first traversal
    let visited = new Set(); // initialize a set to track our 'visited' nodes

    stack.push(startNode); // push the startNode to our stack
    visited.add(startNode); // add the startNode to our set

    while (stack.length > 0) { // While our stack is not empty...

        let currentNode = stack.pop() // pop the top node off the stack (on our first iteration, this is the startNode) and save it in a variable 'currentNode'
        console.log(currentNode); // DO THE THING with the currentNode (in this case, print it to the console)

        for (let neighbor of graph[currentNode]) { // For each 'neighbor' of our 'currentNode' (each element in the 'value' array corresponding to our 'currentNode' key)

            if (!visited.has(neighbor)) { // If the neighbor is NOT already present in our 'visited' set...

                stack.push(neighbor); // ...push that neighbor to the stack, and...
                visited.add(neighbor); // ...add that neighbor to our 'visited' set
            }
        }
    }
};

depthFirstTraversalGraph(adjList, 1); // Prints:

// 1
// 5
// 4
// 6
// 3
// 2
