const adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
  }

  function printBreadthFirst(start) {

    let queue = [start]; // initialize a queue, since this is breadth-first. Remember to use push() to add to the BACK of the queue and shift() to remove from the FRONT of the queue like a line at the store

    let visited = new Set(); // Initialize a new Set called 'visited' to track the nodes we've visited. The purpose of this set is to keep track of our progress so that we do not backtrack and can avoid getting caught in an infinite loop. Recall that we use .has() to check if an element is present in a set, and .add() to add an element to the set

    while (queue.length > 0) { // While the queue is not empty...

      let current = queue.shift(); // ...shift the FIRST element from the front of the queue and store it in a variable called 'current'.

      if (!visited.has(current)) { // If our 'visited' set does NOT contain the current node...

        console.log(current); // ...print that node to the console (or DO THE THING), then...

        visited.add(current); // ...add the current node to the 'visited' set. Otherwise, if the visited set DOES contain the current node...
      }

      for (let neighbor of adjList[current]) { // ...for each neighbor of the current node...

        if (!visited.has(neighbor)) { // ...If that neighbor is NOT already present in the visited set...

          queue.push(neighbor); // ...push that neighbor to the visited set and begin the next iteration.
        }
      }
    }
  }

let test1 = printBreadthFirst(3);

console.log(test1); // 3, 2, 4, 1, 5, 6

let test2 = printBreadthFirst(6);

console.log(test2); // 6, 4, 3, 5, 2, 1

let test3 = printBreadthFirst(4);

console.log(test3) // 4, 3, 5, 6, 2, 1
