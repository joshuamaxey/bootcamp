//! Recursive Sort

//^ Recall the three characteristics of a recursive function:

    // 1. Function calls itself recursively
    // 2. Function has a base case which ends the recursion
    // 3. Function moves toward the base case with every recursive call

let array = [3, 2, 0, 4, 1];

function recursiveSort(arr) {

    // base case. If the array is length 1 or less, return the array
    if (arr.length <= 1) return arr;

    // Find and remove the largest value in the array
    let maxIndex = 0;

    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > arr[maxIndex]) maxIndex = i;
    }

    const maxValue = arr[maxIndex];

    arr.splice(maxIndex, 1);

    // Sort the remaining elements
    arr = recursiveSort(arr);

    // Put the largest value back at the end of the array
    arr.push(maxValue);

    return arr;
}

console.log(recursiveSort(array)); // [0, 1, 2, 3, 4];

//* Time Complexity: O(n^2)

//* Space Complexity: O(n)
