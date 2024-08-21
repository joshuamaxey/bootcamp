//! Objectives

// 1. Describe and implement the following sorting algorithms:
        //* Bubble
        //* Insertion
        //* Selection
        //* Merge
        //* Quick
// 2. Identify time and space complexities of sorting algorithms
// 3. Refactor an out-of-place algorithm to be in-place
// 4. Solve code challenges involving various sorting techniques
// 5. Given a spec describing a sort, produce code that executes that sort

//! Intro to Sorting

// There are many solutions to the sorting problem
        //^ Bubble sort
        //^ Insertion sort
        //^ Selection sort
        //^ Merge sort
        //^ Quick sort

//! JavaScript Has a Built-In sort() function. Why Do We Need to Know This Stuff?

// The built-in array.sort() method sorts the elements of an array in-place and returns the reference to the same array, now sorted. This mutates the array.

// To sort the elements in an array without mutating the original array, use toSorted(). It performs the same function but returns a copy of the sorted array, leaving the original unmutated.

// There are many different ways to move data around.

// These techniques include:
        //^ in-place array swaps
        //^ sliding windows
        //^ divide-and-conquer
        //^ more

//! How Do We Approach Sorting Problems?

// For each problem, we'll be given the algorithm described in pseudocode with an example.

// Our job is to understand the algorithm and translate from the plan to working JavaScript code.

//& Don't look up solutions online

//! Review: Swaps and Shifts

//^ Swapping

// You can swap two values in an array using a temporary variable OR destructuring assignment

const arr = [0, 1, 2, 3, 4, 5, 6];

// Swap two values with a temporary variable

let tmp = arr[1];

arr[1] = arr[2];

arr[2] = tmp;

console.log(arr); // [ 0, 2, 1, 3, 4, 5, 6 ]

//^ Shifting

const arr1 = [0, 1, 2, 3, 4, 5];
const arr2 = [0, 1, 2, 3, 4, 5]

// If you want to shift the array to the right by 1...

// ...Shifting from front to back will overwrite all values

for (let i = 1; i < arr1.length; i++) {
    arr1[i] = arr1[i - 1]
}

console.log(arr1); // [ 0, 0, 0, 0, 0, 0]

// So instead...

// ...start from the back and shift forward

for (let i = arr2.length - 1; i > 0; i--) {
    arr2[i] = arr2[i - 1]
}

console.log(arr2); // [ 0, 0, 1, 2, 3, 4]

//! Summary

// Learned how to approach sorting algorithms

// Reviewed some coding techniques that will help us execute these algorithms in code
