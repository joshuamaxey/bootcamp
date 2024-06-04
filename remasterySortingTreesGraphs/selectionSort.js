//! Selection Sort

// Selection sort is similar to bubble sort.

// It moves the smallest elements down to the beginning of the array instead of sending the largest elements up.

// Thus it is also very inefficient, like bubble sort.

//^ What is the time complexity of selection sort?

    // Like bubble sort, the time complexity of selection sort is O(n^2). It is not efficient for large datasets, but can be useful for nearly-sorted data because of its low space complexity and simplicity.

// function selectionSort(arr) {

//     // set min to location 0

//     // search the minimum element in the list

//     // swap with value at location min

//     // increment min to point to the next element

//     // repeat until list is sorted

//     let min = 0;

//     let swapped;

//     do {

//         swapped = false

//         for (let i = 0; i < arr.length - 1; i++) {

//             if (arr[i] < arr[min]) {

//                 swap(arr, arr[i], arr[min])

//                 swapped = true;
//             }
//         }
//     }
//     while (swapped);

//     return arr;
// }

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) { // iterate through the array until the last element

        let min = i; // initialize 'min' to the current index (starting at index 0);

        for (let j = i + 1; j < arr.length; j++) { // iterate through the array again, beginning at i + 1, comparing each remaining element of the array to the min at i

            if (arr[j] < arr[min]) { // compare the element at the current index of the inner loop to the min...

                min = j; // ...if a smaller element is found, update the min.
            }
        }

        if (min !== i) {

            swap(arr, i, min); // swap the minimum element with the current element
        }
    }

    return arr; // then return the sorted array
}

function swap(arr, i1, i2) {

    let temp = arr[i1]; // save the first element in a temporary variable

    arr[i1] = arr[i2]; // assign the second elements value to the first element's position

    arr[i2] = temp; // assogm the value from the temporary variable to the second element's position
}
