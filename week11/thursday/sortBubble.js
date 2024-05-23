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

function bubbleSort(arr) {
    // Iterate through the array

    for (let i = 0; i < arr.length; i++) {

        // If the current value is greater than its neighbor to the right, swap those values
        if (arr[i] > arr[i + 1]) {

            let val = arr[i];

            arr[i] = arr[i + 1]

            arr[i + 1] = val;
        }
        // If you get to the end of the array and no swaps have occurred, return

        // Otherwise, repeat from the beginning
    }
    return;
}


arrTest = [1, 2, 3]

let val = arrTest[1];

arrTest[1] = arrTest[2]

arrTest[2] = val;

console.log(arrTest)

let arrTest2 = [5, 3, 6, 7, 4];

console.log(bubbleSort(arrTest2));
