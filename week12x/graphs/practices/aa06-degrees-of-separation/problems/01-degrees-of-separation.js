/*
Another common question is the degrees of separation between two nodes. In other
words, what is the shortest number of steps you can take to get from one to
another.

You most commonly see this in Facebook, as friends-of-friends, or in LinkedIn,
where a connection is shown as a 2nd, 3rd, etc. degree connection.

Refactor your shortestPath function implementation to instead return the degrees
of separation between two nodes. This should be relatively easy!  The degrees of
separation are just the length of the path between the nodes.

Return 0 if the start node is equal to the end node.
Return null if the end node cannot be reached from the start node.
*/

//! Strategy: I've copied ovr my 'shortestPath' function. I will change this code such that it will return (currentPath.length - 1) instead of the path itself. This should give us the degrees of separationn between our start node and our end node.

//^ Note that we return (currentPath.length - 1) instead of (currentPath) because the length of our currentPath also includes the start node. If there are three nodes in our path, for instance, then returning currentPath.length = 3. But what we really want to know is the number of edges between the start and end node, NOT the number of nodes in our path. So we subtract 1. Here's an example:

// Current Path: (1) ----> (2) ----> (3)

// current path LENGTH = 3
// current path EDGES = 2

// For 'degrees of separation' we want the number of EDGES (currentPath.length - 1), not the number of NODES (currentPath.length).

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function degreesOfSeparation(start, end) {

  let path = []; // initialize a 'path' array that will keep track of our path through the graph as we traverse from our start node to the end node
  path.push(start); // push our start node to our path array

  let queue = []; // initialize a queue for our breadth-first search
  queue.push(path); // enqueue our path

  let visited = new Set(); // initialize a 'visited' set to keep track of the nodes that we have visited
  visited.add(start); // add our start node to our 'visited' set

  while (queue.length > 0) { // While the queue is not empty...

    let currentPath = queue.shift(); // shift our current path out of our queue and save it in a variable 'currentPath'
    let currentNode = currentPath[currentPath.length - 1]; // save the LAST element in our current path to a variable 'currentNode' (Do NOT shift or pop it off of the path)

    if (currentNode === end) return currentPath.length - 1; // If our currentNode is our 'end' node, that means we have found a path from our start node to our end node. Return the currentPath.

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

// console.log(degreesOfSeparation(1, 3)); // -> 2
// console.log(degreesOfSeparation(5, 2)); // -> 1
// console.log(degreesOfSeparation(6, 1)); // -> null


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = degreesOfSeparation;
