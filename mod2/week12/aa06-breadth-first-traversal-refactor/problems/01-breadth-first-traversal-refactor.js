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

  let queue = [start]; // Initialize a queue and enqueue the start node by default. Remember to use push() to add to the BACK of the queue and shift() to remove from the FRONT of the queue, like a line at the store, since we're doing a breadth-first traversal here.

  let visited = new Set(); // Initialize a new Set called 'visited' to track the nodes we've already visited. The purpose of this set is to prevent us from re-visitng nodes, it protects us from getting stuck in an infinite loop. Recall that we check if an element is present in the set using .has() and we add an element to the set using .add()

  while (queue.length > 0) { // While the queue is not empty...

    let current = queue.shift(); // ...shift the first element from the FRONT of the queue and store it in a variable 'current', then...

    if (!visited.has(current)) { // ...if the current node is NOT present within the visited set...

      visited.add(current); // ...add the current node to the visited set. Otherwise...
    }

    adjList[current].forEach(neighbor => { // ...for each neighbor of the current node...

      if (!visited.has(neighbor)) { // ...if that node is NOT present within the visited set...

        queue.push(neighbor); // ...push that node to the queue
      }
    })
  }

  return Array.from(visited); // at the end of our loop, the queue should be full of the nodes that we've traversed. So we return an array that is created from the elements in that queue.
}

console.log(breadthFirstTraversal(3)); // [3, 2, 4, 1, 5, 6]
console.log(breadthFirstTraversal(6)); // [6, 4, 3, 5, 2, 1]
console.log(breadthFirstTraversal(4)); // [4, 3, 5, 6, 2, 1]


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = breadthFirstTraversal;
