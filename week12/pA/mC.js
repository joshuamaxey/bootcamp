

//         0
//       /   \
//      1     2
//     / \     \
//    3   4     5
//   /   / \   / \
//  6   7   8 9   10

//! 1. What order could a depth-first traversal visit the nodes in this tree? Select all that apply.


//* 1. 0, 1, 3, 6, 4, 7, 8, 2, 5, 9, 10


// 2. 6, 3, 1, 7, 4, 8, 0, 2, 9, 5, 10


//* 3. 0, 2, 5, 10, 9, 1, 4, 8, 7, 3, 6
//^ Both of these options are depth-first traversals. The first explores the left tree first, the second explores the right tree first.

// 4. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


//! 2. What order would an pre-order traversal print the nodes in this tree?


//         0
//       /   \
//      1     2
//     / \     \
//    3   4     5
//   /   / \   / \
//  6   7   8 9   10


// 1. 0, 2, 5, 10, 9, 1, 4, 8, 7, 3, 6


// 2. 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10


// 3. 6, 3, 1, 7, 4, 8, 0, 2, 9, 5, 10


//* 4. 0, 1, 3, 6, 4, 7, 8, 2, 5, 9, 10
//^ pre, in, and post-order traversals are all DEPTH-FIRST. So in this case we would visit 1, 3, then 6. then v and 7. then 8. Then 2, 5 and 9. Then finally 10. WE traverse all the way down each left branch all the way first. Then backtrack and traverse down the left-most values of the remaining branches.

//! 3. True or False: This is a valid binary search tree.

//         0
//       /   \
//      1     2
//     / \     \
//    3   4     5
//   /   / \   / \
//  6   7   8 9   10

//* False. For every node in a valid binary search tree, the values in its left sub-tree must be less than its own value and the values in its right subtree must be greater.

//! 4. Which of these statements are true of binary search?

//* 1. It can be performed in-place
//^ True! Binary search does not require additional storage and can be performed within the array without needing to copy or move the data. We do not mutate the array in order to perform a binary search.

//* 2. It will take a maximum of log (n) comparisons to find a value
//^ This is true! Binary search has a time complexity of O(log n), which means that it will take at MOST log(n) comparisons to find a value in a sorted array where (n) is the number of elements in the array.

// 3. It can be performed on a linked list
//^ This is technically true, but s not efficient because linked lists do not provide random access to their eleents in constant time. It would require a sequential traversal in order to reach the target, which defeats the purpose of binary search.
//& This answer may or may not be correct. If they want a 'techincally, yes' then it could be correct. If they want a 'practically, no' then it might not be. For now, I"m gonna stick with NO because if I"m correct then we did not learn to use binary search on a linked list. Since that's the case, it makes sense to me that (within the context of this course) the answer would be no.

// 4. It can be performed on an array of unsorted data?
//^ false. Binary search requires data to be sorted because it reliles on the ability to eliinate half of the remaining elements by coparing the target value to the middle element's value.

//! 5. If you refactor an algorithm with time complexity of O(n^2) to be twice as fast, what would the new time complexity be?

// 1. O (n^2 / 2)


// 2. O(n)


// 3. O(1)


// 4. O (n log n)


//* 5. O (n^2)
//^ If we refactor an algorithm with a time complexity of O (n^2) to be twice as fast, that means that its new runtime would be O (n^2 / 2). Since we ignore constant coefficients in Big-O notation, that means this new runtime could be simplified back to O(n^2).

//! 6. Which sorting algorithm incrementally places values from an unsorted array in the correct position in a sortd array?

//* 1. Insertion sort
//^ Insertion sort works by building up a orted array one element at a time by repeatedly taking one selement from the unsortd portion and inserting it into the correct position within the sorted portion. That makes this process incremental.

// 2. Merge Sort


// 3. Selection Sort
//^ Selection sort also works incrementally but it doesn't insert elements into the middle of the sorted potion, it always puts them at the end.

// 4. Bubble Sort


// 5. Quick Sort

//! 7. Which sorting algorithm divides an array in half, sorts each half, then recombines the sorted halves?

// 1. Bubble Sort


//* 2. Merge Sort
//^ Merge sort is a divide-and-conquer algorithm that works by dividing an array into two halves, recursively sorting both halves, then mreging the sortd havles back into a single sorted array.

// 3. Insertion Sort


// 4. Selection Sort


// 5. Quick Sort

//! 8. Which of the following lines of code will sort an array in lexicographic (alphabetical) order?

// 1. arr.sort((a, b) => a > b)


// 2. arr.sort((a, b) => b - a)


// 3. arr.sort((a, b) => a - b)


// 4. arr.sort((a, b) => a < b)


//* 5. arr.sort()
//^ The arr.sort() method, when called without a copare function, converts the elements to strings and compares their sequences of UTF-16 code unit values. This is automatically suitabe for sorting strings in lexicographic order!

//! 9. Whihc of these algorithms are guaranteed to visit every reachable node in a connected graph?

//* 1. Depth-first traversal


//* 2. Breadth-first traversal
//^ These traversal methods will both visit each reachable node. Search algorithms, however, will terminate once they find the target, which will probably happen before every node has been explored.

// 3. Breadth-first search


// 4. Depth-first search

//! 10. What is the average space complexity of an in-place, recursive quicksort?

//* 1. O (log n)
//^ Each recursive call requires a constant amount of space, and there are, on average, a logarithmic number of calls on the stack at any given time.

// 2. O (n^2)


// 3. O(1)


// 4. O(n)
