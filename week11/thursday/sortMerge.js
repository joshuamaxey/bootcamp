//! Merge Sort

// Merge sort is more time-efficient than other methods.

//! The Merge Sort Algorithm

//^ This algorithm uses the 'divide and conquer' approach

// 1. Split the unsorted array in half (divide)
// 2. Sort the halves (conquer)
// 3. Merge the newly sorted halves

//! Merge Sort Example

// Let's say that we want to sort the following array:

arr = [10, 1, 7, 2];

// Begin by dividing the array in half

arr1 = [10, 1];

arr2 = [7, 2];

// Now sort Each half

arr1 = [1, 10];

arr2 = [2, 7];

// Merge them back together

arr = [1, 2, 7, 10]

//! Merge

// How does merge work?

// It takes two sorted arrays ad combines them into a single sorted array containing all elements

// It does this by comparing the first element of each array and moving the smaller value into the return array.

// For the arrays [1, 10] and [2, 7], the first elements are 1 and 2, so you move 1 into the return array

[10, 1] [2, 7]

[10] [2, 7]

"return" [1]

// Now the first elemetns are 2 and 10, so you move the 2 into the return array

[10] [7]

"return" [1, 2];

// Next is the 7

// Since array 2 is empty, you can add the remaining elements in array1, giving you...

[1, 2, 7, 10]

//! Time Complexity of merge

// The time complexity of merge is O(n^2). Adding or removing values from the front of an array is O(n), and we do this for each value in the arrays

// You don't actually need to remove values to perform a merge. Instead, kyou can set a pointer to the first value, comparing the values at that index.

// When you move avalue to the return array, just increment the poitner

arr1 = [1, 10], index1 = 0;

arr2 = [2, 7], index2 = 0;

res = [];

arr1 = [1, 10], index1 = 1;

arr2 = [2, 7], index2 = 0;

res = [1];

arr1 = [1, 10], index1 = 1;

arr2 = [2, 7], index2 = 1;

res = [1, 2];

// ETC. This performs the merge without mutating the original array and results in a time complexity of O(n) for merge instead of O(n^2)

//! Calling a Sort within a Sort

//^ Recall the steps that define a recursive function:

// 1. Must call itself recursively
// 2. Must contain a base case
// 3. Must move toward the base case with each recursive call

// The base case for merge sort is when the array is already sorted, relying on the fact that an array of length 1 or 0 is considered to be TRIVIALLY SORTED

//! Time Complexity of Merge Sort

// Time complexity of merge sort is O(n log n)

// Thus the time complexity is the same for best, worst, and average case scenarios

//! Space Complexity of Merge Sort

// Space complexity of merge sort is O(n log n)

// Three new arrays are created every time you call merge sort.

// This means two half-arrays and one full-length merged array, for 2n space with each recursive call

// The reason our implementation of the out-of-place recursive merge sort has a space complexity of O(n log n) is because we are creating new arrays (n) with each recursive call (log n recursive calls in a stack) without freeing up that space when the recursive call returns

// However as mentioned previously, there are other common implementations of the merge sort algorithm that can result in different space complexities

// For example, you will see some out-of-place recursive implementations that free up that space, resulting in a space complexity of O(n).

//! Pseudocode for App Academy Implementation
