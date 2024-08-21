function findPeak(matrix) {
    let highest = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let k = 0; k < matrix[0].length; k++) {
            if (matrix[i][k] > highest) {
                highest = matrix[i][k];
            }
        }
    }

    return highest;
}

function findStarts(matrix) {
    let starts = [];

    // Top Row
    for (let i = 0; i < matrix[0].length; i++) {
        if (matrix[0][i] == 0) {
            starts.push([0, i])
        }
    }

    // Bottom Row
    for (let i = 0; i < matrix[matrix.length-1].length; i++) {
        if (matrix[matrix.length-1][i] == 0) {
            starts.push([matrix.length-1, i])
        }
    }

    // Left except first and last
    for (let i = 1; i < matrix.length-1; i++) {
        if (matrix[i][0] == 0) {
            starts.push([i, 0])
        }
    }

    // Right except first and last
    for (let i = 1; i < matrix.length - 1; i++) {
        if (matrix[i][matrix[0].length - 1] == 0) {
            starts.push([i, matrix[0].length-1])
        }
    }

    return starts;
}

function findNeighbors(node, matrix) {

    let [nodeRow, nodeCol] = node; // define the node based on it's position within the 2-D array

    let nodeValue = matrix[nodeRow][nodeCol]; // define the value of the node as the element located at the node's position in the 2-D array

    let [maxRows, maxCols] = [matrix.length, matrix[0].length]; // define the parameters of the matrix

    let neighbors = getAllNodeNeighbors(nodeRow, nodeCol); // invoke the helper function to get all the neighbors of the current node

    let validNeighbors = []; // initialize an empty array to hold all the valid neighbors of the node

    neighbors.forEach((pair) => { // ...for each of the node's neighbors...
        let [currentRow, currentCol] = pair; // ...define the coordinates of that neighbor

        let isValidRow = currentRow >= 0 && currentRow < maxRows; // check to make sure that the neighbor is located on a valid row

        let isValidCol = currentCol >= 0 && currentCol < maxCols; // check to make sure the neighbor is located on a valid column

        if (isValidRow && isValidCol) { // if the neighbor is located on a valid row and a valid column, then it's coordinates are valid...

            let currentNodeValue = matrix[currentRow][currentCol]; // take the value of the neighbor....

            let valueDifferenceIsWithinOne = Math.abs(currentNodeValue - nodeValue) <= 1; // check to make sure it's position is within one of the previous node...

            if (valueDifferenceIsWithinOne) validNeighbors.push(pair); // ...then add it to the valid neighbors
        }
    })
    return validNeighbors; // return the valid neighbors
}

function getAllNodeNeighbors(nodeRow, nodeCol) {
    return [
        // top
        [nodeRow - 1, nodeCol],
        // bottom
        [nodeRow + 1, nodeCol],
        // left
        [nodeRow, nodeCol - 1],
        // right
        [nodeRow, nodeCol + 1],
        // top left
        [nodeRow - 1, nodeCol - 1],
        // top right
        [nodeRow - 1, nodeCol + 1],
        // bottom left
        [nodeRow + 1, nodeCol - 1],
        // bottom right
        [nodeRow + 1, nodeCol + 1],
    ];
}

function pathTraversal(node, matrix, visited, peak) {

    let queue = [node]; // initialize an empty queue and enqueue the provided node by default. Remember that in a queue, we add to the back with .push() and remove from the front with .shift(), like in a line at the store.

    while (queue.length > 0) { // While the queue is not empty...

        let currentNode = queue.shift(); // ...shift the element from the front of the queue and store it in 'currentNode'

        let pathStr = currentNode.join(",");

        let [nodeRow, nodeCol] = currentNode

        let nodeValue = matrix[nodeRow][nodeCol];

        visited.add(pathStr)

        if (nodeValue === peak) {

            return true;
        }

        let neighbors = findNeighbors(currentNode, matrix);

        neighbors.forEach((pair) => {

            let pairStr = pair.join(",");

            if (!visited.has(pairStr)) {

                visited.add(pairStr);

                queue.push(pair);
            }
        });
    }
    return false;
}

function identifyPath(mountain) {
    // Find the peak
    // Find the start

    // Traverse from the starts and try to get to the top
    // Your code here

    let peak = findPeak(mountain); // invoke the findPeak function to find the peak of the mountain

    let startNodes = findStarts(mountain); // invoke the findStarts function to find the starting node

    for (let node of startNodes) { // for each node of startNodes...

        const visited = new Set(); // initialize a new Set to track which nodes we've visited.

        let validPath = pathTraversal(node, mountain, visited, peak); // use our pathTraversal function to determine whether or not we have a valid path

        if (validPath) { // IF the path is valid...

            return node; // ...return the node
        }
    }
    return false; // Otherwise return false
}

// Uncomment for local testing

// // Example 0
// const mountain_0 = [
//     [1, 2, 4],
//     [4, 5, 9],
//     [5, 7, 6]
// ];

// console.log(findNeighbors([2,0], mountain_0)) // <- Expect '[ [ 1, 0 ], [ 1, 1 ] ]'

// // Example 1
// const mountain_1 = [
//         [1, 0, 1, 1],
//         [2, 3, 2, 1],
//         [0, 2, 4, 1],
//         [3, 2, 3, 1]
// ];

// test_visited = new Set()
// console.log(pathTraversal([0, 1], mountain_1, test_visited, 4)) // <- Expect 'true
// console.log(identifyPath(mountain_1)) // <- Expect '[ 0, 1 ]'

// // Example 2
// const mountain_2 = [
//         [0, 2, 1, 1],
//         [2, 2, 3, 1],
//         [1, 1, 1, 1],
//         [1, 0, 1, 1]
// ];

// console.log(identifyPath(mountain_2)) // <- Expect '[ 3, 1 ]'

// // Example 3
// const mountain_3 = [
//         [0, 1, 2, 0],
//         [5, 1, 3, 2],
//         [4, 1, 2, 1],
//         [3, 4, 3, 1]
// ];

// console.log(identifyPath(mountain_3)) // <- Expect '[ 0, 0 ]'



/*************DO NOT MODIFY UNDER THIS LINE ***************/

module.exports = [identifyPath, findNeighbors, pathTraversal];
