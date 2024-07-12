//! Bubble Sort

//^ 1. Iterate through the array
//^ 2. If the value located at the current index is greater than its neighbor to the right, swap their values
//^ 3. If we reach the end of our array and no swaps have occurred, return;
//^ 4. Otherwise, repeat from the beginning
//* 5. Additional step for simplicity when debugging, return the mutated array at the end of the function.

let array = [3, 2, 0, 4, 1];

let array2 = [5, 7, 9, 23, 16]

function bubbleSort(arr) {

    let swapped; // initialize a 'swapped' variable to act as a flag which will indicate whether or not a swap has been performed within the current iteration of our loop

    do { // This code will run if "swapped" is true at the end of the current iteration of our loop (see line 22). If we traverse the entire array without making any swaps, then 'swapped' is false at the end of our loop. When that is the case, the code inside this do...while loop will never run and we will return the mutated array.

        swapped = false; // Reset our 'swapped' flag to false at the beginning of each pass through the array

        for (let i = 0; i < arr.length - 1; i++) { // Iterate through the array from front to back. Note the use of arr.length - 1 (instead of arr.length) in our array to prevent out-of-bounds access.

            if (arr[i] > arr[i + 1]) { // If the value located at the current index of our array is GREATER than the its neighbor to the right...

                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // ...swap their values

                swapped = true; // If a swap was performed, set our 'swapped' flag to true
            }
        }
    } while (swapped === true); // Repeat this process again if a swap has been made...

    return arr; // ...If we traverse the entire array without making any swaps, then the data is sorted. Return the mutated array.
}

console.log(bubbleSort(array));
console.log(bubbleSort(array2));

// console.log(array); //// If we choose NOT to return the mutated array on line 26, this step is necessary to view our mutated array after we invoke bubbleSort()

//* Below is my initial, incorrect implementation of bubbleSort(). Because I set 'swapped' to false at the beginning of the loop, it is immediately reset to 'false' when the loop restarts even if a swap WAS made. The result is that line 41 runs after a single pass through the array, which means that we can only make one swap before the function returns.

// function bubbleSort(arr) {

//     let swapped;

//     // Iterate through the array
//     for (let i = 0; i < arr.length - 1; i++) {

//         swapped = false;

//         // If the value at the current index is greater than the value at the next index, swap the falues
//         if (arr[i] > arr[i + 1]) [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];

//         swapped = true;
//     }

//     if (swapped === false) return;
// }
