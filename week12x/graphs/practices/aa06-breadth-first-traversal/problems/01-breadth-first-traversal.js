/*
Write a function called printBreadthFirst that will traverse the given graph
breadth-first, printing each node when visited exactly once, on a newline.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printBreadthFirst(start) {

  let queue = []; // initialize a queue to perform our breadth-first search
  let visited = new Set(); // initialize a new set to track which nodes we have visited

  queue.push(start); // enqueue the start node
  visited.add(start); // add the start node to our 'visited' set

  while (queue.length > 0) { // While the queue is not empty...

    let currentNode = queue.shift(); // shift the current node off the front of the queue and save it in a variable 'currentNode
    console.log(currentNode); // print the currentNode to the console

    for (let neighbor of adjList[currentNode]) { // For each neighbor of our currentNode...

      if (!visited.has(neighbor)) { // ...IF the neighbor is not already present in our 'visited' set...

        queue.push(neighbor); // ...push the neighbor to the queue, and...
        visited.add(neighbor); // ...add the neighbor to our visited set
      }
    }
  }
}

// console.log("First Test:")
// printBreadthFirst(3); // Prints 1 through 6 in Breadth-first order, starting with 3
//                       // One possible solution:  3, 2, 4, 1, 5, 6
// console.log("Second Test:")
// printBreadthFirst(6); // Prints 1 through 6 in Breadth-first order, starting with 6
//                       // One possible solution:  6, 4, 3, 5, 2, 1
// console.log("Third Test:")
// printBreadthFirst(4); // Prints 1 through 6 in Breadth-first order, starting with 4
//                       // One possible solution:  4, 3, 5, 6, 2, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printBreadthFirst;
