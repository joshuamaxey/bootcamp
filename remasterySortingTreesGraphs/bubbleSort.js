//! We're gonna review the following sorting algorithms:

// Bubble Sort
// Selection Sort
// Insertion Sort
// Merge Sort
// Quick Sort
// JavaScript's built-in array.prototype.sort()

//! Bubble Sort

// Bubble sort is NOT efficient.

// Every movement of a single element requires a pass through the array.

//^ What is the time complexity of bubble sort?

    // The time complexity of bubble sort is O(n^2) because bubble sort compares each pair of adjacent items and swaps them if they are in the right order. It is efficient for small datasets but becomes increasingly inefficient as the dataset grows in size.

//^ Use the pseudocode below to implement bubble sort on an array. Try to create a helper function to assist with the swapping.

// function bubbleSort(arr) {

//     // If the current value is greater than its neighbor to the right

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] > arr[i + 1]) { // if the current value is greater than its neighbor to the right

//             swap(arr, i, i + 1) // swap the values

//             return bubbleSort(arr) // then repeat from the beginning
//         }

//         return; // If we get to the end of the array and no swaps have happened, return
//     }
// }

function bubbleSort(arr) {

    let swapped; // initialize a variable to keep track of whether a swap has occurred

    do { // Begin a loop that will continue until we are able to iterate through the array without making any swaps

        swapped = false; // set swapped to false by default

        for (let i = 0; i < arr.length - 1; i++) { // iterate through the array, stopping before the last element

            if (arr[i] > arr[i + 1]) { // If the element at the current index is greater than the element at the index to the right...

                swap(arr, i, i + 1) // ...swap those elements

                swapped = true; // Then set 'swapped' to true, since we have swapped the elements
            }
        }
    }
    while (swapped); // If a swap was made, repeat this process again

    return arr; // once we are able to iterate through the entire array without swapped becoming true, we return the sorted array.
}

function swap(array, i1, i2) {

    let temp = array[i1]; // save the first element in a temporary variable

    array[i1] = array[i2]; // assign the second element's value to the first element's position

    array[i2] = temp; // assign the value from the temporary variable to the second element's position
}
