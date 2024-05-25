//! Quicksort

// Quick sort is an algorithm that uses a divide and conquer approach to sort values efficiently.

//! The Quicksort Algorithm

// 1. Pick a value in the array to serve as the piot
// 2. Partition the array so that the values smaller than the pivot are on the left and values larger than the pivot are on the right
// 3. Sort the left and the right partitions
// 4. Return an array with left, pivot, and right values

//! Quicksort Example

// Consider that you want to sort the following array:

arr = [5, 4, 10, 1, 8, 3, 6]

// Start by picking a pivot You can pick any value to be the pivot but for simplicity, lets use the first value: 5

// Next create empty arrays called 'left' and 'right'.

// Walk through the array. Copy smaller values into 'left' and larger values into 'right'

pivot = 5;
left = [4, 1, 3]; // values smaller than pivot
right = [10, 8, 6]; // values larger than pivot

// Now sort the left and right sides

pivot = 5;
left = [1, 3, 4];
right = [6, 8, 10];
