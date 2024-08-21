//! Selection Sort

//^ 1. Divide the array into sorted and unsorted
//^ 2. Find and remove the smallest value from the unsorted
//^ 3. Add that value to the end of the sorted array
//^ 4. repeat until unsorted is empty and sorted is full

//! In-Place

let array = [3, 2, 0, 4, 1];

function selectionSortI(arr) {

    for (let i = 0; i < arr.length; i++) { // iterate over each element in the array, treating it as the starting point for the unsorted portion

        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) { // FInd the smallest element in the unsorted portion in the array

            if (arr[j] < arr[minIndex]) { // If the element located at the current index (j) of our inner loop is smaller than the element at the current index of our outer loop...

                minIndex = j; // ...then make that index our new 'minIndex'
            }
        }

        if (minIndex !== i) { // If the smallest element in the array is not already in the correct position, we swap it with the first element of the unsorted portion of the array

            let temp = arr[i];

            arr[i] = arr[minIndex];

            arr[minIndex] = temp;
        }
    }

    return arr; // return the sorted potion of the array
}

//* Time Complexity: O(n^2)

//* Space Complexity: O(1)

console.log(selectionSortI(array)); // [0, 1, 2, 3, 4]

//! Out-of-Place

array = [3, 2, 0, 4, 1];

function selectionSortO(arr) {

    let sorted = []; // initialie a new array to hold the sorted values

    let original = arr.slice(); // Make a copy of the original array so that we do not modify it

    while (original.length > 0) { // This loop will run until our 'original' array is empty

        let smallestIndex = 0; // initialize a variable called 'smallest index' to hold the index with the smallest value in the original array

        for (let i = 1; i < original.length; i++) { // iterate through the original array

            if (original[i] < original[smallestIndex]) { // compare the value at our current index of the original array to the value at our 'smallestIndex.' If the element at our current index is smaller than the element at 'smalestIndex'...

                smallestIndex = i; // ...Then make that index our new 'smallestIndex'
            }
        }

        sorted.push(original.splice(smallestIndex, 1)[0]); // Remvoe the smallest element from the original array using splce, then push it to the sorted array
    }
    return sorted; // Finally, return the sorted version of the array
}

//* Time Complexity: O(n^2)

//* Space Complexity: O(n)

console.log(selectionSortO(array)); // [0, 1, 2, 3, 4]
