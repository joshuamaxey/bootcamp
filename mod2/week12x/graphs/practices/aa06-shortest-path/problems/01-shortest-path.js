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

  let path = []; // initialize a 'path' array that will keep track of our path through the graph as we traverse from our start node to the end node
  path.push(start); // push our start node to our path array

  let queue = []; // initialize a queue for our breadth-first search
  queue.push(path); // enqueue our path

  let visited = new Set(); // initialize a 'visited' set to keep track of the nodes that we have visited
  visited.add(start); // add our start node to our 'visited' set

  while (queue.length > 0) { // While the queue is not empty...

    let currentPath = queue.shift(); // shift our current path out of our queue and save it in a variable 'currentPath'
    let currentNode = currentPath[currentPath.length - 1]; // save the LAST element in our current path to a variable 'currentNode' (Do NOT shift or pop it off of the path)

    if (currentNode === end) return currentPath; // If our currentNode is our 'end' node, that means we have found a path from our start node to our end node. Return the currentPath.

    for (let neighbor of adjList[currentNode]) { // (If our currentNode is NOT our end node) For every neighbor of our currentNode...

      if (!visited.has(neighbor)) { // ...IF our currentNode is not already present in our 'visited' set...

        visited.add(neighbor) // ...Add the neighbor to our visited set

        let newPath = currentPath.slice(); // Then make a copy of our currentPath and save it to a varaible 'newPath'
        newPath.push(neighbor); // Push the neighbor to our newPath
        queue.push(newPath); // Then add our newPath to the queue
      }
    }
  }

  return null; // If we traverse the entire graph without ever finding our 'end' node, that means that there is no path from our start node to our end node. Return null
}

console.log(shortestPath(1, 3)); // -> [ 1, 2, 3 ] (One possible solution)
console.log(shortestPath(4, 1)); // -> [ 4, 5, 1 ] (One possible solution)
console.log(shortestPath(6, 1)); // -> null


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = shortestPath;
