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
//!=====================================
function findNeighbors(node, matrix) {
    // Don't forget to include diagonal neighbors!!!

    let [row, column] = node;

    let neighbors = [];

    if (row > 0) {

        let top = [row - 1, column];

        neighbors.push(top);
    }

    if (column > 0) {

        let left = [row, column - 1];

        neighbors.push(left);
    }

    if (row > 0 && column > 0) {

        let topLeft = [row - 1, column - 1];

        neighbors.push(topLeft);
    }

    if (column < colLength && row > 0) {

        let topRight = [row - 1, column + 1];

        neighbors.push(topRight);
    }

    let rowLength = matrix.length - 1;

    if (row < rowLength) {

        let bottom = [row + 1, column];

        neighbors.push(bottom);
    }

    let colLength = matrix[0].length;

    if (column < colLength) {

        let right = [row, column + 1];

        neighbors.push(right);
    }

    if (row < rowLength && column > 0) {

        let bottomLeft = [row + 1, column - 1];

        neighbors.push(bottomLeft);
    }

    return neighbors;
}
//! ============================
// function findNeighbors(node, matrix) {

//     const [row, col] = node;
//     const neighbors = [];
//     const directions = [
//       [-1, 0], // Up
//       [1, 0], // Down
//       [0, -1], // Left
//       [0, 1], // Right
//       [-1, -1], // Up-Left
//       [-1, 1], // Up-Right
//       [1, -1], // Down-Left
//       [1, 1], // Down-Right
//     ];

//     directions.forEach(([rowChange, colChange]) => {
//       let newRow = row + rowChange;
//       let newCol = col + colChange;

//       if (
//         newRow >= 0 &&
//         newRow < matrix.length &&
//         newCol >= 0 &&
//         newCol < matrix[0].length &&
//         Math.abs(matrix[newRow][newCol] - matrix[row][col]) <= 1
//       ) {
//         neighbors.push([newRow, newCol]);
//       }
//     });
//     return neighbors;
// }
//! ========================================
function findNeighbors(node, matrix) {
    let [maxRow, maxCol] = [matrix.length, matrix[0].length]
    let [row, col] = node
    let validNeighbors = []
    let neighbors = [
        [row -1, col], //top
        // [row -1, col -1], //top-left
        // [row -1, col +1], // top-right
        [row, col -1], //left
        [row, col +1], // right
        [row +1, col], // bottom
        // [row +1, col -1], //bottom-left
        // [row +1, col +1], //bottom-right
    ]
    let nodeVal = matrix[row][col]
    for (const pair of neighbors) {
       let validRow = pair[0] >= 0 && pair[0] < maxRow
       let validCol = pair[1] >= 0 && pair[1] < maxCol
       // we destructure the 2 numbers in the pair arr
       // so we can access them later
       let [r, c] = pair
        if(validRow && validCol){
            // here we compare the number at the pair coordinates(the location away from the starting)
            // to the  node coordinate(starting point
            if(Math.abs(matrix[r][c] - nodeVal) <= 1){
                validNeighbors.push(pair)
            }
        }
    }
    return validNeighbors
}

function pathTraversal(node, matrix, visited, peak) {

    let stack = [node];

    visited.add(node.join(","))

    while (stack.length) {

        currentNode = stack.pop();

        let [row, column] = currentNode;

        visited.add(currentNode.join(","));

        if (matrix[row][column] === peak) {

            return true;
        }

        let neighbors = findNeighbors(currentNode, matrix);

        for (let neighbor of neighbors) {

            if (!visited.has(neighbor.join(","))) {

                visited.add(neighbor.join(","));

                stack.push(neighbor);
            }
        }
    }
    return false;
}

function identifyPath(mountain) {
    // Find the peak
    // Find the start

    // Traverse from the starts and try to get to the top
    // Your code here

    let peak = findPeak(mountain);

    let starts = findStarts(mountain);

    let visited = new Set();

    for (let start of starts) {

        let path = pathTraversal(start, mountain, visited, peak);

        if (path) {

            return start;
        }
    }
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
