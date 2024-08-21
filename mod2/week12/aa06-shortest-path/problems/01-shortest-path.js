/*
One of the most common uses of a breadth-first search is to find a SINGLE
shortest path from one node to another. Refactor your implementation of
breadth-first search and use the technique from the reading. If it is possible
to reach the end node from the start node, return a SINGLE shortest path as an
array of nodes from the start to the end node. Otherwise, return null.

**IMPORTANT TIP:**  Be very careful creating your new path.  If you modify
currentPath, you're not just modifying the local copy.  You are also making a
change to the path in the queue.  You should not push to currentPath because
currentPath is a reference that gives another name to easily access that
array.  Instead, use `Array.concat()` or another method to copy the values into
a new array.

DO NOT USE:
currentPath.push(neighbor)
*/

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5],
    5: [1, 2, 4],
    6: []
}

function shortestPath(start, end) {

  const paths = [start]; // initialize a paths variable to track our path from start to end

  const queue = [paths]; // initialie a new queue and enqueue the path. Recall that in a queue, we use .push() to add new elements to the BACK of the queue and .shift() to remove the first element from the FRONT of the queue, like a line at the store.

  const visited = new Set(); // initialize a new 'visited' set to track the nodes that we've visited. The purpose of this set is to prevent us from re-visiting nodes and ensure that we do not get stuck in an infinite loop in the case that our graph is cyclical.

  while (queue.length > 0) { // While the queue is not empty...

    let currentPath = queue.shift(); // ...Shift the first element from the FRONT of the queue and store it in a variable 'currentPath'

    let currentNode = currentPath[currentPath.length - 1]; // Initialize a new variable currentNode to hold the last element of the currentPath

    if (currentNode === end) return currentPath; // If the currentNode is our targt (end) node, return the currentPath because we've already found the shortest path from start to end. Otherwise...

    if (!visited.has(currentNode)) { // ...if the currentNode is NOT already present in our visited Set...

      visited.add(currentNode) // ...add the currentNode to the visited set. Then...

      adjList[currentNode].forEach(neighbor => { // ...for each neighbor of the currentNode...

        if (!visited.has(neighbor)) { // ...if that neighbor is not already present in our visited Set...

          let newPath = currentPath.concat(neighbor) // ...add the current neighbor the end of our currentPath, then store the updated path in a variable called newPath. Then...

          queue.push(newPath) // ...push the newPath to the BACK of the queue
        }
      })
    }
  }
  return null; // If we traverse the graph without ever finding a path from start to end, we return null because if there is no path it means that there is also no shortest path.
}

// console.log(shortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
// console.log(shortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
// console.log(shortestPath(6, 1)); // -> null


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestPath;
