/*
The output of your printBreadthFirst function in the Simple Breadth-First
Traversal project is useful for visualizing and debugging the traversal, but now
you need it to output the nodes in the graph in an array instead of printing
them. Refactor your implementation of printBreadthFirst that instead
of printing each node on a newline, the breadthFirstTraversal function adds each
node to a new array and returns the new array.
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function breadthFirstTraversal(start) {

  let queue = []; // initialize a queue to perform our breadth-first search
  let visited = new Set(); // initialize a new set to track which nodes we have visited
  let arr = []; // initialize a new array to hold the nodes that we visit throughout our traversal

  queue.push(start); // enqueue the start node
  visited.add(start); // add the start node to our 'visited' set

  while (queue.length > 0) { // While the queue is not empty...

    let currentNode = queue.shift(); // shift the current node off the front of the queue and save it in a variable 'currentNode
    arr.push(currentNode); // push the currentNode to our new array

    for (let neighbor of adjList[currentNode]) { // For each neighbor of our currentNode...

      if (!visited.has(neighbor)) { // ...IF the neighbor is not already present in our 'visited' set...

        queue.push(neighbor); // ...push the neighbor to the queue, and...
        visited.add(neighbor); // ...add the neighbor to our visited set
      }
    }
  }
  return arr; // After we have traversed the entire graph, return the array
}

// console.log(breadthFirstTraversal(3)); // [3, 2, 4, 1, 5, 6]
// console.log(breadthFirstTraversal(6)); // [6, 4, 3, 5, 2, 1]
// console.log(breadthFirstTraversal(4)); // [4, 3, 5, 6, 2, 1]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstTraversal;
