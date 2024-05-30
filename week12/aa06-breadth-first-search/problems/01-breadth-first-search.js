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

  const queue = [start]; // initialize a queue and enqueue the starting node by default. Remember to use push() to add to the BACK of the queue and shift() to remove from the front, like a line at the store

  while (queue.length > 0) { // While the queue is not empty...

    const current = queue.shift(); // ...shift the first element from the FRONT of the queue, then store it in the variable 'current'

    if (current === end) { // If the current node is our end node...

      return true; // ...return true. Otherwise...
    }

    for (let neighbor of adjList[current]) { // ...for each neighbor of the current node in the graph...

      queue.push(neighbor); // ...push those neighbors to the queue
    }
  }

  return false; // If we traverse the entire graph without finding the end node, then there is no path to that node. Return false.
}

console.log(breadthFirstSearch(1, 3)); // -> true
console.log(breadthFirstSearch(4, 1)); // -> true
console.log(breadthFirstSearch(6, 1)); // -> false


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstSearch;
