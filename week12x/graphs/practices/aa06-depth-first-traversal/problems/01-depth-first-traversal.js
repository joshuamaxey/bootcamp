/*
Write a function called printDepthFirst that will traverse the given graph
depth-first, printing each node when visited exactly once, on a newline.

Hint: How can you use your code from the breadth-first traversal to get a head
start writing your depth-first traversal?
*/

const adjList = {
  1: [2, 5],
  2: [1, 3, 5],
  3: [2, 4],
  4: [3, 5, 6],
  5: [1, 2, 4],
  6: [4]
}

function printDepthFirst(start) {

  // let stack = []; // intitialize a stack for our depth-first traversal
  // let visited = new Set(); // initialize a new set to track which nodes we have visited

  // stack.push(start); // push the start node to our stack
  // visited.add(start); // add the start node to our 'visited' set

  // while (stack.length > 0) { // While the stack is not empty...

  //   let currentNode = stack.pop(); // pop the current node from the top of the stack and save it in a variable 'currentNode'
  //   console.log(currentNode); // print the currentNode to the console

  //   for (let neighbor of adjList[currentNode]) { // For each neighbor of our currentNode

  //     if (!visited.has(neighbor)) { // If the neighbor is NOT already present in our 'visited' set

  //       stack.push(neighbor); // push the neighbor to our stack
  //       visited.add(neighbor); // and add the neighbor to our visited set
  //     }
  //   }
  // }

  let stack = [start];
  let visited = new Set();

  while (stack.length) {

    const num = stack.pop();
    if (visited.has(num)) continue;

    visited.add(num);
    console.log(num);

    for (let neighbor of adjList[num]) {

      stack.push(neighbor);
    }
  }
}

console.log("First Test:")
printDepthFirst(3); // Prints 1 through 6 in Depth-first order, starting with 3
                    // One possible solution:  3, 4, 6, 5, 2, 1
console.log("Second Test:")
printDepthFirst(6); // Prints 1 through 6 in Depth-first order, starting with 6
                    // One possible solution:  6, 4, 5, 2, 3, 1
console.log("Third Test:")
printDepthFirst(4); // Prints 1 through 6 in Depth-first order, starting with 4
                    // One possible solution:  4, 6, 5, 2, 3, 1


/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = printDepthFirst;
