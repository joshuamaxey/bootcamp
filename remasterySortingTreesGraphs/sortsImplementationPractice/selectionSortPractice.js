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

let array = [7, 2, 9, 5, 26, 43, 17]

let selectionTest = selectionSort(array);

console.log(selectionTest); // [ 2, 5, 7, 9, 17, 26, 43 ]
