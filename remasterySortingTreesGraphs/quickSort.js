//! Quick Sort

// Like mergeSort(), quickSort() also uses a divide and conquer strategy.

//^ The logic underlying quickSort() is:

    // It is easy to sort elements of an array relative to a particular target value
    // An array of length 1 or 0 is already (trivially) sorted

//^ What is the time complexity of quickSort();

    // The best and average case runtime for quickSort() is O(n log n)

    // The worst-case runtime for quickSort() when the partitioning is very unbalanced

function quickSort(arr, low, high) {

    // choose an element called 'pivot'

    // take two variables to point left and right of the list excluding the pivot

    // let the left point to the low index

    // let teh right point to the high index

    // While left is less than pivot, move right

    // While right is greater than pivot, move left

    // If both previous conditions are false, swap left and right

    // If left >= right, that value beomes the new pivot

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
