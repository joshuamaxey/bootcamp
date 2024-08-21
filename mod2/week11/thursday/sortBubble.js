//! Bubble Sort

// When we bubble sort, we walk through the entire array. comparing each adjacent pair.

// If they are out of order, swap their positions.

// Continue until the array is sorted.

// Each pass will sort the array a little bit further

// As we sort, the larger values 'bubble up' to the top.

//^ Pseudocode

        //* 1. Iterate through the array
        //* 2. If the current value is greater than its neighbor to the right, swap the values
        //* 3. If you get to the end of the array and no swaps have occurred, return
        //* 4. Otherwise, repeat from the beginning


//! Pseudocode

// Optimized Bubble Sort implementation
function bubbleSort(array) {
    const arrayLength = array.length; // store the length of the array in a variable arrayLength

    let isSwapped; // initialize a variable to state whether or not we have swapped any of the elements in the array

    for (let i = 0; i < arrayLength; i++) { // iterate through the array

        isSwapped = false; // set the isSwapped variable to false by default

        for (let j = 0; j < arrayLength - i - 1; j++) { // iterate through the array, comparing each element to the element ahead.

            if (array[j] > array[j + 1]) { // check if the element located at the current index of the array is greater than the element located at the next index

                [array[j], array[j + 1]] = [array[j + 1], array[j]]; // if so, swap the elements

                isSwapped = true; // After performing the swap, set the 'isSwapped' variable to true to mark that a swap has occurred
            }
        }

        if (!isSwapped) break; // If we iterate through the entire array and no swaps occurred, then the array is sorted and we can terminate the loop
    }

    return array; // finally, return the array.
}

// Example usage:
const unsortedArray2 = [45, 23, 3, 5346, 5, 356, 243, 35];
const sortedArray2 = bubbleSort(unsortedArray2);
console.log("Optimized sorted array:", sortedArray2);


arrTest = [1, 2, 3]

let val = arrTest[1];

arrTest[1] = arrTest[2]

arrTest[2] = val;

console.log(arrTest)

let arrTest2 = [5, 3, 6, 7, 4];

console.log(bubbleSort(arrTest2));
