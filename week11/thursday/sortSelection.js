//! Selection Sort

// Selection sort is an intuitive algorithm.

// Divide the array into sorted and unsorted halves, then one-by-one select the smallest value from the unsorted portion and move it to the end of the sorted portion.

//^ Here are the steps for our algorithm:

// 1. Divide the array into sorted and unsorted
// 2. Find and remove the smallest value from the unsorted
// 3. Add this value to the end of the sorted array
// 4. Repeat this until unsorted is empty and sorted is full

//! Out-of-Place Selection Sort (easy)

// Consider that you want to sort this array using out-of-place selection sort.

arr = [3, 2, 0, 4, 1];

// First, create an empty array called 'sorted'

sorted = [];

// Search through the unsorted array to find the minimum value: 0

// Remove it from the unsorted array and add it to the end of the sorted array

arr = [3, 2, 4, 1];

sorted = [0];

// Repeat this process, grabbing the next smallest value from the array (1), then move it to the end of the sorted array

arr = [3, 2, 4];

sorted = [0, 1];

// THe next smallest element in the unsorted array is (2), so we move it to sorted

arr = [3, 4];

sorted = [0, 1, 2];

// Then 3

arr = [4];

sorted = [0, 1, 2, 3];

// Finally, we move the last element of the unsorted array to the back of the sorted array, then return it

arr = [];

sorted = [0, 1, 2, 3, 4];

//! In-Place Selection Sort (medium)

// The space complexity of out-of-place selection sort is O(n) since we have to create a new array.

// We can perform this algorithm in-place to achieve an O(1) space complexity

// We do this by mutating the original array

function selectionSort(inputArr) {

    const n = inputArr.length;

    for (let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray

        let min = i;

        for (let j = i + 1; j < n; j++) {

            if (inputArr[j] < inputArr[min]) {

                min = j;
            }
        }

        if (min !== i) {
            // Swapping the elements

            const tmp = inputArr[i];

            inputArr[i] = inputArr[min];

            inputArr[min] = tmp;
        }
    }
    return inputArr;
}

// Example usage:
const unsortedArray = [5, 2, 4, 6, 1, 3];
const sortedArray = selectionSort(unsortedArray);
console.log(sortedArray); // [1, 2, 3, 4, 5, 6]
