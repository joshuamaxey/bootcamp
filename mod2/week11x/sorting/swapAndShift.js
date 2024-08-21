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

//* We can perform a swap by using a temporary variable:

let arr = [0, 1, 2, 3, 4, 5, 6];

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

//* We can also perform a swap by using array destructuring:

arr = [0, 1, 2, 3, 4, 5, 6];

[arr[4], arr[6]] = [arr[6], arr[4]]; // Here, we set arr[4] = arr[6] and arr[6] = arr[4] in order to swap the elements located at index 4 and 6 of our array

console.log(arr); // [0, 1, 2, 3, 6, 5, 4]

//^ Shifting

//* If we want to shift all of the elements in an array to the right by 1 index...

arr = [0, 1, 2, 3, 4, 5, 6];

// ...We start from the back of the array, using a loop to iterate backwards and shift each element by 1 index as we iterate:

for (let i = arr.length - 1; i > 0; i--) arr[i] = arr[i - 1];

console.log(arr); // [0, 0, 1, 2, 3, 4, 5];

//* If we want to shift all of the elements in an array to the left by 1 index...

arr = [0, 1, 2, 3, 4, 5, 6];

// ...We start from the front of the array, using a loop to iterate forward and shift each element by 1 index as we iterate:

for (let i = 0; i < arr.length; i++) arr[i] = arr[i + 1]

console.log(arr); // [1, 2, 3, 4, 5, 6];
