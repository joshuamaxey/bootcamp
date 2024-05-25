//! Recursive Sort

//^ There are three traits that define a valid recursive function:

// 1. The function calls itself recursively
// 2. There is a base case where the recursion ends
// 3. THe state moves toward the base case with each recursive call

// Consider the classic recursive factorial function:

function factorial(n) {

    if (n <= 1) return 1; // base case

    return n * factorial(n - 1); // recursive call (n - 1 is the recursive step)
}

//! A Recursive Sorting Example

// Let's say you have an idea for a new sorting algorithm.

// Find and remove the largest value fro the array, sort the remaining elements, then put the largest value in the back of the array and return.

// Given this array...

arr = [3, 2, 0, 4, 1];

// ...first you will remove the largest element, 4, then sort the rest...

arr = [0, 1, 2, 3];

// ...and add the 4 back to the end

arr = [0, 1, 2, 3, 4];

// We ARE able to call a sorting algorithm within a sorting algorithm. Since we're creating a function that sorts array values, the function CAN call itself recursively as long as the other two conditions (base case and movement toward the base case) are satisfied

function recursiveSort(arr) {

    if (arr.length <= 1) return arr; // if the array has length 1 or less, return it

    // find and reove the largest value in the array
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > arr[maxIndex]) maxIndex = i;
    }

    const maxValue = arr[maxIndex];

    arr.splice(maxIndex, 1);

    // Sort the remaining elements
    arr = recursiveSort[arr];

    // Put the largest value back at the end of the array
    arr.push(maxValue);

    return arr;
}
