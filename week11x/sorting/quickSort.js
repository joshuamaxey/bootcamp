//! Quicksort

//^ quickSort uses a divide and conquer approach to sort the values in an array

    // 1. Pick a value in the array to serve as the pivot
    // 2. Partition the array so that the values smaller than the pivot are on the left and values that are larger than the pivot are on the right
    // 3. Sort the left and right partitions
    // 4. Return an array with left, pivot, and right values

let array = [3, 2, 0, 4, 1];

    function quickSort(arr) {

        // Check if the input is length 1 or less
          // If so, it's already sorted: return
        if (arr.length <= 1) return arr;

        // Pick a pivot (last element)
        let pivot = arr[arr.length - 1];

        // Put all values smaller than the pivot to the `left`
        // Put all values larger than the pivot to the `right`
        let left = [];
        let right = [];

        for (let i = 0; i < arr.length - 1; i++) {

            if (arr[i] < pivot) left.push(arr[i])
            else right.push(arr[i])
        }

        // Sort the left half
        left = quickSort(left);
        // Sort the right half
        right = quickSort(right);

        // Return the array with the left, pivot, and right values
        return left.concat(pivot, right);
    }

console.log(quickSort(array)); // [0, 1, 2, 3, 4]

//* Time Complexity: O(n log n)

//* Space Complexity: O(n log n)
