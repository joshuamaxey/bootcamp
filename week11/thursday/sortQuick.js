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

// Finally, return an array by combinig the left, pivot, and right arrays in that order

arr = [1, 3, 4] + 5 + [6, 8, 10]

arr = [1, 3, 4, 5, 6, 8, 10];

// Similarly to mergeSort(), quickSort() calls itself recursively on subarrays that get smaller with each call until it reaches the base case of length 1 or length 0.

//^ Since arrays of length 1 or 0 are always sorted, this condition satisfies the three criteria required for recursion:

// 1. Must call itself recursively
// 2. Must contain a base case
// 3. Must move toward the base case with each recursive call

//! Time Complexity of quickSort()

// In the example above, the array is cut in half at each step

// The result is an O(log n) steps required to reach the base case

// Each step requires walking through all n elements to partition values into the left and right halves

// So the overall time complexity of quickSort() is O(n log n)

//^ However, note that the time complexity changes when the array is very unbalanced

// For example, consider:

arr = [1, 2, 3, 4, 5];

// If we quickSort() this array...

pivot = 1;
left = [2, 3, 4, 5];
right = [];

// Recursively call quickSort() on the right array, which returns immediately, and the left array...

pivot = 2;
left = [3, 4, 5];
right = [];

// Recursively calling qickSort() on the left again results in...

pivot = 3;
left = [4, 5]
right = [];

// ...Until we hit the base case:

pivot = 4;
left = [5];
right = [];

//^ In this worst-case scenario, we ultimately make (n) recursive calls which iteratet hrough teh array each time for a worst-case time complexity of O(n^2).

// It's unusual for an array with randomly distributed values but its worth nothing that quickSort() performance does vary based on the input

// On average, quickSort() has a time complexity of O(n log n);

//! Space Complexity of quicSort()

// Similarly to Merge Sort, this out-of-place recursive implementation creates three new arrays with each recursive call. Two half-arrays and one full-length copy.

// For the average case of log n calls, this results in a space complexity of O(n log n). This is the worst-case space complexity of quickSort()

// Also like merge sort, it is possible to perform this in-place for a space complexity of O(1).

//! Code

function quickSort(arr) {

    if (arr.length <= 1) {
        return arr; // Base case: array with 0 or 1 element is already sorted
    }

    const pivot = arr[0]; // Choose the first element as the pivot
    const leftArr = [];
    const rightArr = [];

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] < pivot) {
            leftArr.push(arr[i]); // Elements smaller than pivot go to the left
        }

        else {
            rightArr.push(arr[i]); // Elements larger than pivot go to the right
        }
    }

    // Recursively sort the left and right subarrays
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

// Example usage:
const unsortedArray = [5, 2, 9, 3, 6, 1];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 5, 6, 9]
