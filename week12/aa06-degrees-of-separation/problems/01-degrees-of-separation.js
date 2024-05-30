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

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5],
  5: [1, 2, 4],
  6: []
}

function degreesOfSeparation(start, end) {

  const paths = [start]; // initialize a variable 'paths' to hold the current path from the start to the end node

  const queue = [paths]; // initialize a queue and enqueue our paths variable. Remember that for a queue, we PUSH new nodes to the BACK of the queue and we SHIFT nodes from the FRONT of the queue, like a line at the store.

  const visited = new Set(); // initialize a new Set called 'visited' to record which nodes we've visited. The purpose of the 'visited' set is to prevent us from getting caught in an infinite loop in the case that we are working with a cyclical graph. Remember that we use .has() to check if an element is present in a set and .add() to add an element to a set.

  while (queue.length > 0) { // While our queue is not empty...

    let currentPath = queue.shift(); // ...shift the current path from the FRONT of the queue and store it in a variable currentPath. Then...

    let endNode = degrees = currentPath.length - 1; // ...use this Python trick that also carries over to JavaScript which allows us to specify that both endNOde and degrees hold the SAME VALUE. Then...

    let currentNode = currentPath[endNode]; // ...Then we set the currentNode equal to the endNode of the current path and...

    if (currentNode === end) return degrees; // ...check if the currentNode is our target (end) node. If it is, then we return degrees and we're done. Otherwise, if currentNode isn't equal to our target (end) node...

    if (!visited.has(currentNode)) { // ...if the currentNode is NOT already present in our visited set...

      visited.add(currentNode); // ...then we add the currentNode to our visited set.

      adjList[currentNode].forEach(neighbor => { // For each neighbor of the currentNode...

        if (!visited.has(neighbor)) { // ...if that neighbor is NOT already present in our visited set...

          let newPath = currentPath.concat(neighbor); // ...Then we add that neighbor to the end of our path, and store the updated path in a variable called 'newPath'. THen, finally...

          queue.push(newPath); // ...we push the new, updated path to the queue
        }
      })
    }
  }
  return null; // ...If we traverse the ENTIRE graph without every finding a path from start to end, we return null because there is no degree of separation if there is no path.
}

console.log(degreesOfSeparation(1, 3)); // -> 2
console.log(degreesOfSeparation(5, 2)); // -> 1
console.log(degreesOfSeparation(6, 1)); // -> null


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = degreesOfSeparation;
