//! Intro to Sorting

//^ Algorithms:

// Bubble sort
// Insertion sort
// Selection sort
// Merge sort
// Quick sort
// Built-in .sort()

//! Swaps and Shifts

//^ Swapping

// We can swap two values in an array

// We perform a swap by using a temporary variable or by using destructuring

const arr = [0, 1, 2, 3, 4, 5, 6];

let temp = arr[1]; // arr[1] = 1. Save this element to a variable 'temp.'

// Here are the three variables that we're using to perform the swap:

    // temp = 1;
    // arr[1] = 1;
    // arr[2] = 2;

arr[1] = arr[2]; // Then we set arr[1] = arr[2], which means that now arr[1] = 2

    // temp = 1
    // arr[1] = 2
    // arr[2] = 2

arr[2] = temp; // now we set arr[2] = temp, which means that now arr[2] = 1

    // temp = 1
    // arr[1] = 2
    // arr[2] = 1

console.log(arr); // [0, 2, 1, 3, 4, 5, 6];
