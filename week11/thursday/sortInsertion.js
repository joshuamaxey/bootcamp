//! Insertion Sort

// consider that you are dealt a hand of playing cards and want to organize them from least to greatest

// You might pick cards from the right side of your hand and then ove them to the left, one-by-one, INSERTINg each card in teh correct location on the left.

//^ Here are the steps to sorting an array with insertion sort:

// 1. Divide the array into sorted and unsorted elements
// 2. Pick and remove a value from the unsorted array
// 3. Insert it into the correct place in the sorted array
// 4. Repeat this until unsorted is empty and sorted is full

//! Out-of-Place Insertion Sort (easy)

// Lets say we want to srot the following array:

arr = [3, 2, 0, 4, 1];

// Start by creating an empty array called 'sorted'

sorted = [];

// Remove a value from the input array and insert it into the correct position of the sorted array.

// We can use the first value in the array (3) and put it in the empty 'sorted' aray.

arr = [2, 0, 4, 1];

sorted = [3];

// The next value in the array is (2), so remove it and insert it in the correct position.

// Since 2 is less than 3, we insert it at the front

arr = [0, 4, 1];

sorted = [2, 3];

// The next value of the input array is 0, which is less than 2 so it goes at the front of 'sorted'

arr = [4, 1];

sorted = [0, 2, 3];

// The next value is 4, which is greater than (3), so it goes at the end

arr = [1];

sorted = [0, 2, 3, 4];

// Finally, we're left with (1) in the initial array.

// (1) needs to be inserted between (0) and (2)

// How might we go about implementing this in code?

// In other words, how would you determine the correct position in the array to insert the value, and how would we perform the insertion?

arr = [];

sorted = [0, 1, 2, 3, 4];

// Now that the input array is empty, the sorted array is complete and can be returned.

//! In-Place Insertion Sort (medium)

// Because out-of-place insertion creates a new array, the space complexity is O(n).

// It's possible to perform this lagorithm in-place, meaning that its space complexity will be O(1) for using no extra memory

// To accomplish this, we mutate the input array directly

// Starting with the same input array, create a variable marking the divide between the sorted and unsorted halves of the original array

// At each step, the rule (sometimes called an INVARIANT) is that everything to the left of the divider is sorted. Since the sorted half starts empty, the divider starts at 0.

arr = [3, 2, 0, 4, 1];

divider = 0;

// Take the first value from the unsorted half and save it in a temporary variable

arr = [3, 2, 0, 4, 1];

divider = 0;

temp = 3;

// In the sorted half, shift every sorted number larger than the temp variable value to the right by 1, then insert the temp variable value when it reaches a smaller value, or the end of the array.

// Since this new insertion value is now sorted, move the divider to the right by 1 as well

// On this initial pass, the sorted half is 'empty', so the temp variable value 3 is inserted at index 0. Then the divider is moved to index 1, indicating that the value has been sorted

arr = [3, 2, 0, 4, 1]

divider = 1

temp = 3

// Everything to the left of the divider is now sorted. We can repeat this process until the entire array is sorted

// Grab the 2, shift over the larger sorted values, then insert the 2 and increment the divider

arr = [3, 2, 0, 4, 1];

divider = 1

temp = 2


//! The Algorithm

function insertionSort(arr) { // out-of-place

    let sortedArr = [...arr]; // Create a new array to store the sorted elements

    for (let i = 1; i < arr.length; i++) { // iterate through the array

        let current = sortedArr[i]; // begin at the first element in our unsorted subarray

        let j = i - 1; // refer to the last element of our sorted subarray

        while (j >= 0 && current < sortedArr[j]) {

            sortedArr[j + 1] = sortedArr[j]; // Shift elements to the right

            j--; // decrement j
        }

        sortedArr[j + 1] = current; // Insert the current element in its proper place
    }

    return sortedArr;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 5, 6];
const sortedArray = insertionSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 5, 5, 6, 9]

function insertionSortIP(arr) {

    for (let i = 1; i < arr.length; i++) { // iterate through the array one element at a time

        let currentValue = arr[i]; // begin sorting at the first element in the array

        let j = i - 1; // store the element before the currentValue

        while (j >= 0 && arr[j] > currentValue) {

            arr[j + 1] = arr[j]; // shift elements to the right

            j--; // decrement j
        }

        arr[j + 1] = currentValue; // Insert current element in the right place
    }

    return arr; // return the mutated array
}

// Example usage:
const unsortedArray1 = [5, 2, 9, 1, 5, 6];
const sortedArray1 = insertionSortIP(unsortedArray1);
console.log(sortedArray1); // [1, 2, 5, 5, 6, 9]
