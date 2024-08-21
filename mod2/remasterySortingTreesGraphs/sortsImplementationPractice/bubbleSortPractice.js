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

let array = [1, 10, 7, 4, 30, 16]

let bubbleTest = bubbleSort(array);

console.log(bubbleTest); // [ 1, 4, 7, 10, 16, 30 ]
