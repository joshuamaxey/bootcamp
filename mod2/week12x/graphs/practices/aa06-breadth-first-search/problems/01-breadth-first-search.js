/*
Write a function called breadthFirstSearch that takes two nodes as arguments and
will traverse the given graph breadth-first, returning true if there is a path
from the first node to the second, and false if there is not.

For this exercise, try to write your code from scratch. It's good practice!
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function breadthFirstSearch(start, end) {

  let queue = []; // initialize a queue for our breadth-first search

  let visited = new Set(); // initialize a 'visited' set to keep track of which nodes we have visited

  queue.push(start); // push the start node to our queue
  visited.add(start); // add the start node to our visited set

  while (queue.length > 0) { // While the queue is not empty...

    let currentNode = queue.shift(); // shift the current node from the front of the queue (for our first iteration, this will be the start node) and save it in a variable 'currentNode'

    if (currentNode === end) return true; // If the currentNode is our 'end' node, then we have found a path from the start node to the end node. Return true.

    for (let neighbor of adjList[currentNode]) { // (If the currentNode is NOT our end node) For every neighbor of the currentNode...

      if (!visited.has(neighbor)) { // ...If the neighbor is NOT already present in our 'visited' set...

        queue.push(neighbor) // ...push the neighbor to our queue...
        visited.add(neighbor) // ...and add the neighbor to our 'visited' set
      }
    }
  }
  return false; // If we traverse the entire graph without finding a our end node, then there is no path from our start node to our end node. Return false.
}

// function createBreadthFirstSearch(graph) {
//   return function(start, end) {
//       let queue = [];
//       let visited = new Set();

//       queue.push(start);
//       visited.add(start);

//       while (queue.length > 0) {
//           let currentNode = queue.shift();

//           if (currentNode === end) return true;

//           for (let neighbor of graph[currentNode]) {
//               if (!visited.has(neighbor)) {
//                   queue.push(neighbor);
//                   visited.add(neighbor);
//               }
//           }
//       }
//       return false;
//   };
// }

// const breadthFirstSearch = createBreadthFirstSearch(adjList);

console.log(breadthFirstSearch(1, 3)); // -> true
console.log(breadthFirstSearch(4, 1)); // -> true
console.log(breadthFirstSearch(6, 1)); // -> false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstSearch;
