//! Depth-First Search/Traersal

// We use a stack to implement a depth-first traversal.

const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

  function printDepthFirst(start) {

    const stack = [start]; // Initialize a new stack. Remember that in a stack, the order of adding and removing is FILO. We use .push() to add elements to the TOP of the stack and .pop() to remove the element at the TOP of the stack, just like a stack of plates

    const visited = new Set(); // Initialize a new Set 'visited' to track which nodes we've visited. This set ensures that we don't re-visit any nodes and prevents us from getting caught in an infinte loop in the case that we're working with a cyclical graph. Recall that we can use .has() to check if an element is present in a set, and .add() to add an element to the set.

    while (stack.length > 0) { // While the stack is not empty...

      let currentNode = stack.pop() // ...pop the first element off the TOP of the stack, then store it in the variable currentNode

      if (!visited.has(currentNode)) { // If the currentNode is NOT already present in our visited set...

        console.log(currentNode); // ...print the currentNode to the console. Then...

        visited.add(currentNode); // ...add the currentNode to the visited set.
      }

      adjList[currentNode].forEach((neighbor) => { // For each neighbor of the current node within our graph...

        if (!visited.has(neighbor)) { // ...if the current neighbor is NOT already present in the visited set...

          stack.push(neighbor); // ...push that neighbor to the top of the stack
        }
      })
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
