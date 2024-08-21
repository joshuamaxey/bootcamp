//! Depth-First Traversal

// Instead of moving one layer or ring at a time, we move down all the layers in one path first.

// We keep moving forward until we reach a point where there are no new nodes left on the current path.

// Once we reach this point, we backtrack and switch to the last branch not taken.

// Then we follow that branch until we reach another dead-end.

// Though this approach is different than breadth-first traversal, we will still traverse the entire graph and visit each reachable node along the way.

//! Review: Depth-First Order

// Think of depth-first traversal as walking through the graph.

// From the starting node, continue visiting unvisited neighbors until we reach a node with no univisited neighbors.

// Then backtrack to the nearest node with an unvisited neighbor and repeat this process.

// Note that backtracking occurs abstractly by poppig nodes off the stack until you reach a node that was buried by other nodes. The traversal should never include any duplicates.

//! Depth-First Traversal Algorithm.

//^ The algorithm for depth-first traversal is similar to breadth-first traversal, except that we swap the queue for a stack.

// Note that this will not work on other variations of BFT (breadth-first traversal) that don't remove the current node until the last step.

//^ Algorithm:

// 1. Create a stack and push the starting node
// 2. Create a set to store visited nodes, and add the starting node
// 3. While the stack is not empty, repeat steps 4-6
// 4. Pop the node on the top of the stack
// 5. Do whatever you need to do with the popped node (i.e. add it to a running total, print it, save it in an array, etc)
// 6. Add each unvisited neighbor to the visited nodes and to the top of the stack

//^ In summary:

// Pop the nodes
// Mark their unvisited neighbors as visited
// Add those nodes to the top of the stack

// While the process here is similar to breadth-first traversal, the order in which we visit the nodes is different.

//! Depth-First Traversal: Setting Up the Traversal

// To traverse this graph, start by creating an adjacency list.

// For some problems, it will be provided.

adjList = {
    1: [2, 5],
    2: [1, 3, 5],
    3: [2, 4],
    4: [3, 5, 6],
    5: [1, 2, 4],
    6: [4]
};

//! Depth-First Traversal: Setting up the Traversal

// Now you can initialize the traversal by creating a SET to store visited nodes and a stack containing the nodes to be visited.

// Add the first node to both the stack and the 'visited' set.

// FOr a stack, you're always adding and removing to and from the top, so you don't need to worry about which end is which.

// It's more efficient to add and remove the last element of an array, so start at the back end.

//! Depth-First Traversal: Traversal First loop

// While the stack is not empty, pop the first node. This will remove it from the stack and save it in a convenient variable 'currentNode'.

// Next, you do the thing that you need to do with the popped node.

// If you're traversing an array with a for-loop, traversal usually involves performing some action on each node.

// This action can be counting them up, printing them out, searching for a target value, etc. Once you do the thing, add the node's unvisited neighbors to the top of the stack, add them to the visited set, and repeat.

// At the end of the loop, currentNode is discarded because it is local to within the scop of one while-tloop iteration.

//! Depth-First Traversal: Traversal Second Loop

// The while-loop continues because the stack is still not empty.

// Pop the node off the stop of the stack and save it as currentNode.

// Do the thing, then add each neighbor of currentNode that is not already visitd to both the top of the stack AND the 'visited' set.

// At the end of the loop, currentNode is discarded because it is local to within the scope of one while-loop iteration.

//! Depth-First Traversal: Traversal Third Loop

// The stack is still not empty, so the while-loop continues.

// Pop off the top node and save it in currentNode.

// Do the thing to currentNode.

// Add its unvisited neighbors to the stack and to the visited Set.

// At the end of the loop, currentNode is discarded becasue it is local to within the scope of one while-loop iteration.

//! Depth-First Traversal: Traversal Fourth Loop

// The stack is not empty, so pop the last node.

// Pop the top node, save it in currentNode, then do the thing with it.

// Add its univisted neighbors to the stack adn to the visited Set.

// At the end of the loop, currentNode is discarded because it is local to within the scope of one while-loop iteration

//! Depth-First Traersal: Traversal Fifth Loop

// Lets say that there are no further nodes along this path that have not been visited. This means that we will alk back to your last node with a branch that we haven't followed yet and then continue in that direction.

// Because the while loop is not empty, it continues. Pop the top node, save it in currentNode, and do the thing.

// For each neighbor not in visited, add that neighbor to the stack and to visited.

// Here there are no nodes that have not bee nfound yet, so no changes are made to the stack or to visited.

// At the end of the loop, currentNode is discarded because it is local to within the scope of one while-loop iteration.

//! Depth-First Traversal: Traversal Sixth Loop

// Backtrack to the last branch with an unvisited path.

// Take the other pagh.

// Pop the top of the stack, add to currentNode, do the thing, and add the unvisited nodes.

// There are no remaining unvisited nodes, so we make no further changes.

//! Depth-First Traversal: Conclusion

// The stack is now empty, so the outer while-loop will end.

// The traversal has been completed, so each node has been visited exactly once.

// Note that if you need to track the order you go in solving a problem, you'll need to add another data structure and update it as you do the thing each iteration of the loop.

//! Summary

// Learned the algorithm behind depth-first travversal.

// The main difference between breadth-first and depth-first traversal is that, in breadth-first traversal, you keep track of the nodes you need to visit in a queue whereas in depth-first traversal you keep track of the nodes in a stack.
