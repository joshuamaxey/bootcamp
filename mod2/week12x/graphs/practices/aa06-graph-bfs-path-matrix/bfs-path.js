function findNeighbors(node, matrix) {
    // Up

    // Down

    // Left

    // Right

    const [row, column] = node;

    const neighbors = [];

    if (row > 0) {
        let upNeighbor = [row - 1, column];
        neighbors.push(upNeighbor);
    }

    if (row < matrix.length - 1) {
        let downNeighbor = [row + 1, column];
        neighbors.push(downNeighbor);
    }

    if (column > 0) {
        let leftNeighbor = [row, column - 1];
        neighbors.push(leftNeighbor);
    }

    if (column < [matrix[0].length - 1]) {
        let rightNeighbor = [row, column + 1];
        neighbors.push(rightNeighbor);
    }

    return neighbors;
}


function bfsPath(matrix, startNode, endValue) {

    let queue = [startNode]; // initialize a queue to perform a breadth-first search
    const visited = new Set(); // initialize a new set to track which nodes we have visited
    const path = []; // initialize a new array 'path' to keep track of the path we take from the startNode to the node with the endValue (or to the end of the graph, if we do not find the endValue)

    visited.add(startNode.toString()); // Add our startNode to our visited set, converted to a string

    while (queue.length) { // While the queue is not empty...

        const currentNode = queue.shift() // shift the currentNode from our queue, and save it in a variable 'currentNode' (on our first iteration, this will be our startNode)
        const [currentRow, currentColumn] = currentNode; // Destructure our currentNode to extract our currentRow and currentColumn

        path.push(currentNode); // push our currentNode to the path

        if (matrix[currentRow][currentColumn] === endValue) return path; // if the value of our 'currentNode' (the node with the current coordinates) is our endValue, return the path.

        let neighbors = findNeighbors(currentNode, matrix); // invoke our 'findNeighbors' helper function to find the valid neighbors of the currentNode

        for (let neighbor of neighbors) { // iterate through our neighbors

            const stringified = neighbor.toString(); // convert the current neighbor to a string to allow for valid comparison

            if (!visited.has(stringified)) { // if the currentNode is NOT present within our visited set...

                visited.add(stringified); // add it to the visited set
                queue.push(neighbor); // and add it to our queue
            }
        }
    }
    return false; // if we traverse the entire graph without finding a node with the endValue, return false

    // let queue = [[startNode]];

    // let visited = new Set();
    // visited.add(startNode.toString());

    // while (queue.length > 0) {

    //     let currentPath = queue.shift();
    //     let currentNode = currentPath[currentPath.length - 1];
    //     const [row, column] = currentNode;

    //     if (matrix[row][column] === endValue) return currentPath;

    //     let neighbors = findNeighbors(currentNode, matrix);

    //     for (let neighbor of neighbors) {

    //         if (!visited.has(neighbor.toString())) {

    //             visited.add(neighbor.toString());

    //             let newPath = currentPath.slice();
    //             newPath.push(neighbor);
    //             queue.push(newPath);
    //         }
    //     }
    // }
    // return false;
}


// ***** UNCOMMENT FOR LOCAL TESTING *****

const matrix1 = [
    [  1,  2,  3,  4 ],
    [  5,  6,  7,  8 ],
    [  9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

// EXAMPLE TESTS #1. Tests for findNeighbors function
console.log(findNeighbors([1,1], matrix1)) // Finds all 4 neighbors from an
// internal node (left, right, down, up)
// [ [ 0, 1 ], [ 2, 1 ], [ 1, 2 ], [ 1, 0 ] ]

console.log(findNeighbors([0,0], matrix1)); // Finds two neighbors from a
// corner node // [ [ 1, 0 ], [ 0, 1 ] ]

console.log(findNeighbors([3,1], matrix1)); // Finds three neighbors from
// an edge node // [ [ 2, 1 ], [ 3, 2 ], [ 3, 0 ] ]


// EXAMPLE TESTS #2. Tests for bfsPath function

console.log(bfsPath(matrix1, [0,0], 16)); // can traverse the entire matrix
// returns an array of coordinates with no duplicates:

[
    [ 0, 0 ], [ 1, 0 ],
    [ 0, 1 ], [ 2, 0 ],
    [ 1, 1 ], [ 0, 2 ],
    [ 3, 0 ], [ 2, 1 ],
    [ 1, 2 ], [ 0, 3 ],
    [ 3, 1 ], [ 2, 2 ],
    [ 1, 3 ], [ 3, 2 ],
    [ 2, 3 ], [ 3, 3 ]
 ]

// Note for debugging purposes: The coordinates should represent the following matrix values, in order:
// 1 5 2 9 6 3 13 10 7 4 14 11 8 15 12 16

console.log(bfsPath(matrix1, [2,2], 11)); // returns a single node if end
// value is located at start node
// [ [ 2, 2 ] ]

console.log(bfsPath(matrix1, [1,2], 8)); // can handle various start nodes
// and end values
// [ [ 1, 2 ], [ 0, 2 ], [ 2, 2 ], [ 1, 1 ], [ 1, 3 ] ]

console.log(bfsPath(matrix1, [0,0], 17)); // can return false if end value
// is not found
// false

/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [findNeighbors, bfsPath];
