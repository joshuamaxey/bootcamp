//! Insertion Sort

//^ 1. Divide the array into sorted and unsorted
//^ 2. Pick and remove a value from the unsorted
//^ 3. Insert it into the correct place in the sorted
//^ 4. Repeat until unsorted is empty and sorted is full

//* Note that insertionSort can be done in-place or out-of-place

let array = [3, 2, 0, 4, 1];

//! In-place

function insertionSortI(arr) {

    for (let i = 1; i < arr.length; i++) { // Iterate through the array, beginning at the second element

        let current = arr[i]; // Save the element located at the current index of the array in a variable 'current'

        let j = i - 1; // Save the index to the left of the current inex to the variable 'j'

        while(j >= 0 && arr[j] > current) { // While j is greater than Zero and the element located at the previous index of the array is greater than the element located at the current index of the array...

            arr[j + 1] = arr[j]; // shift the elements in the array to the right

            j--;
        }

        arr[j + 1] = current; // Insert the current element into the right position
    }

    return arr; // return the mutated array
}

console.log(insertionSortI(array)); //

//! Out-of-Place

array = [3, 2, 0, 4, 1]; // [0, 1, 2, 3, 4]

function insertionSortO(arr) {

    let sorted = []; // initialie a new array to hold our sorted values

    for (let i = 0; i < arr.length; i++) { // Iterate through the input array

        let inserted = false; // initialize a value 'inserted' to act as a flag which will indicated whether or not a value has been inserted into the sorted array this iteration of our loop

        for (let j = 0; j < sorted.length; j++) { // Iterate through the 'sorted' array

            if (arr[i] < sorted[j]) { // If the value located at the current index of our input array is LESS than the value located at the current index of our sorted array...

                sorted.splice(j, 0, arr[i]); // ...splice that value into the current index of our sorted array

                inserted = true; // If an insertion has been performed, set our 'inserted' flag to true
                break; // Then end code execution and run our loop again
            }
        }

        if (!inserted) { // If the current element is greater than all of the elemetns in the sorted array...

            sorted.push(arr[i]); // ...push it to the end of our sorted array
        }
    }

    return sorted; // After we've built our sorted array, return it
}

console.log(insertionSortO(array)); // [0, 1, 2, 3, 4]
