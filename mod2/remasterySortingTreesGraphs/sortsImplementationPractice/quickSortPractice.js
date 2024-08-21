function quickSort(arr, low, high) {

    // choose an element called 'pivot'

    // take two variables to point left and right of the list excluding the pivot

    // let the left point to the low index

    // let the right point to the high index

    // While left is less than pivot, move right

    // While right is greater than pivot, move left

    // If both previous conditions are false, swap left and right

    // If left >= right, the partition indx is returned and the array is divided based on this index for further recursive sorting

    // Repeat recursively

    if (low < high) {

        let pivot = partition(arr, low, high); // partition the array

        quickSort(arr, low, pivot - 1); // reursively apply the same logic to the left and right arrays

        quickSort(arr, pivot + 1, high);
    }

    return arr; // return the sorted array
}

function partition(arr, low, high) {

    let pivot = arr[high]; // choose the right-most element as the pivot

    let i = low - 1; // create a pointer for the greater element

    for (let j = low; j < high; j++) { // iterate through every element

        if (arr[j] <= pivot) { // compare each element to the pivot

            i++; // increment the index each iteration

            [arr[i], arr[j]] = [arr[j], arr[i]]; // if an element smaller than pivot is found, swap it with the greater element
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // swap the pivot element with the greater element specified by i

    return i + 1; // return the position from the partition location
}

let array = [42, 39, 63, 19, 16, 20, 15]

let quickTest = quickSort(array, 0, array.length - 1);

console.log(quickTest); // [ 15, 16, 19, 20, 39, 42, 63 ]
