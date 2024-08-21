//! Three Steps

// Recall that (almost) any graph problem can be solved by following these three steps:

//^ 1. Identify and define the type of graph
//^ 2. Implement the getNeighbors() function
//^ 3. Traverse the graph

//! What is a Matrix?

// A matrix represents a graph as a 2-D array

//^ Each node can be identified using [row, column] syntax.

//A 'row' is a horizontal coordinate.
//A 'column' is a vertical coordinate

let matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

//! 1. Identify and Define the Type of Matrix Graph

// What is the problem asking us to do?
// What does the matrix represent?
// What does each node represent?
// What relationship do the edges represent?
// What is a 'valid neighbor' in the context of this problem?
// Is this a search or traversal problem?
// Will we implement a depth-first or breadth-first approach?

//! 2. Implement the getNeighbors() function

function getNeighbors(node, matrix) {

    // Use destructuring to extract the 'row' and 'column' properties from the node provided as input
    const [row, col] = node;

    // Create an array to hold the valid neighbors
    let neighbors = []

    // UP: Identify the node above the current node, push to the array
    if (row > 0) {

        let upNeighbor = [row - 1, col];

        neighbors.push(upNeighbor);
    }

    // DOWN: Identify the node below the current node, push to the array

    if (row < matrix.length - 1) {

        let downNeighbor = [row + 1, col];

        neighbors.push(downNeighbor);
    }

    // LEFT: Identify the node to the left of the current node, push to the array

    if (col > 0) {

        let leftNeighbor = [row, col - 1];

        neighbors.push(leftNeighbor);
    }

    // RIGHT: Identify the node to the right of the current node, push to the array

    if (col < matrix[0].length - 1) {

        let rightNeighbor = [row, col + 1];

        neighbors.push(rightNeighbor);
    }
    // Return the neighbors array

    return neighbors;
}

// returns the correct neighbors from an internal node
console.log(getNeighbors([2,2], matrix)) // returns [ [1,2], [3,2], [2,1], [2,3] ]

// returns the correct neighbors from a corner node
console.log(getNeighbors([0,0], matrix)) // returns [ [1,0], [0,1] ]

// returns the correct neighbors from an edge node
console.log(getNeighbors([2,0], matrix)) // returns [ [1,0], [3,0], [2,1] ]

//! Traverse the Graph

// The algorithm for matrix graph traversal is similar to graph traversal with an adjacency list.

//^ 1. Create a queue and enqueue the starting node
//^ 2. Create a 'visited' set to track which nodes we have visited
//^ 3. While the queue is not empty, repeat steps 4 - 6
//^ 4. Dequeue the first node and check if it's in our 'visited' set
//^ 5. If not, add it to the visited set and DO THE THING WITH IT
//^ 6. Add all of its neighbors to the queue and to the visited set

matrix = [
    [ 0, 1, 0, 0, 1 ],
    [ 1, 0, 0, 0, 1 ],
    [ 1, 1, 0, 1, 1 ],
    [ 0, 1, 1, 0, 0 ],
    [ 0, 0, 0, 0, 0 ]
];

function traverseMatrix(matrix, startNode) {

    let queue = []; // initialize a queue for our breadth-first traversal
    let visited = new Set() // initialize a 'visited' set to keep track of the nodes we have visited

    queue.push(startNode); // push the startNode to our queue
    visited.add(startNode); // add the startNode to our 'visited' set

    while (queue.length > 0) { // While the queue is not empty

        let currentNode = queue.shift(); // shift the current ndoe from the queue and save it in a variable 'currentNode' (on our first iteration, this will be the startNode)
        console.log(currentNode); // DO THE THING (in this case, print the node to the console)

        let neighbors = getNeighbors(currentNode, matrix); // Invoke the 'getNeighbors' helper function to find the nighbors of our currentNode, passing in the currentNode and our matrix as arguments. Save the resulting array to a variable 'neighbors'

        for (let neighbor of neighbors) { // For each neighbor of our currentNode...

            if (!visited.has(neighbor.toString())) { // If the neighbor is not included in our 'visited' set...
            //! Notice that we have to use neighbor.toString() to convert the neighbor from an array [0, 0] to a string "0,0" because we check whether it is present in the visited set. This is necessary because arrays [0,0] are reference types, which means that JavaScript will consider two arrays with the same elements [0,0] and [0,0] to be DIFFERENT arrays because they are stored in different places in our computer's memory, despite that they have the same values. Thus it is necessary to convert our array [0,0] to a string 0,0 in order to create a unique identifier and prevent the computer from failing to identify if a neighbor is already present in the 'visited' set (which would cause an infinite loop)

                queue.push(neighbor); // Enqueue the neighbor
                visited.add(neighbor.toString()); // And add the neighbor to our visited set
            }
        }
    }
}

traverseMatrix(matrix, [0, 0]);

function searchMatrix(matrix, startNode, target) {

    let queue = []; // initialize a queue for our breadth-first traversal
    let visited = new Set() // initialize a 'visited' set to keep track of the nodes we have visited

    queue.push(startNode); // push the startNode to our queue
    visited.add(startNode); // add the startNode to our 'visited' set

    while (queue.length > 0) { // While the queue is not empty

        let currentNode = queue.shift(); // shift the current ndoe from the queue and save it in a variable 'currentNode' (on our first iteration, this will be the startNode)
        if (currentNode[0] === target[0] && currentNode[1] === target[1]) return true;
        //! Notice that in this comparison, we compare the 'row' and 'column' properties of the currentNode to the 'row' and 'column' properties of the target node directly to check whether the currentNode === target. The reason we do it his way (instead of just comparing currentNode === target) is because arrays are REFERENCE TYPES in JavaScript. This means that even if two arrays have exactly the same elements, JavaScript will NOT recognize them as equivalnt ([0, 0] === [0, 0] returns false) because they are stored in different places in the computer's memory.Therefore to correctly compare two arrays (which is what we are doing, since each 'node' is actually an array of coordinates [row, column]) we need to directly compare their elements.

        let neighbors = getNeighbors(currentNode, matrix); // Invoke the 'getNeighbors' helper function to find the nighbors of our currentNode, passing in the currentNode and our matrix as arguments. Save the resulting array to a variable 'neighbors'

        for (let neighbor of neighbors) { // For each neighbor of our currentNode...

            if (!visited.has(neighbor.toString())) { // If the neighbor is not included in our 'visited' set...
            //! Notice that we have to use neighbor.toString() to convert the neighbor from an array [0, 0] to a string "0,0" because we check whether it is present in the visited set. This is necessary because arrays [0,0] are reference types, which means that JavaScript will consider two arrays with the same elements [0,0] and [0,0] to be DIFFERENT arrays because they are stored in different places in our computer's memory, despite that they have the same values. Thus it is necessary to convert our array [0,0] to a string 0,0 in order to create a unique identifier and prevent the computer from failing to identify if a neighbor is already present in the 'visited' set (which would cause an infinite loop)

                queue.push(neighbor); // Enqueue the neighbor
                visited.add(neighbor.toString()); // And add the neighbor to our visited set
            }
        }
    }
    return false;
}

console.log(searchMatrix(matrix, [0,0], [3, 2])) // true
console.log(searchMatrix(matrix, [0,0], [4, 3])) // true
console.log(searchMatrix(matrix, [0,0], [12, 4])) // false
console.log(searchMatrix(matrix, [0,0], [2, 6])) // false
