function insertionSort(arr) {

    // If it is the first element, it is already sorted; return 1

    // Pick the next element

    // Compare with all elements in the sorted sub-list

    // Shift all the elements in the sorted sub-list that are greater than the value to be sorted

    // Insert the value

    // Repeat until the list is sorted

    for (let i = 1; i < arr.length; i++) { // iterate through the array, beginnin at the second element since the first element is considered 'sorted' by default

        let currentValue = arr[i]; // store the element located at the current index as currentValue

        let j = i - 1; // initialize 'j' to represent the index to the left of the current index

        while (j >= 0 && arr[j] > currentValue) { // compare currentValue to the elements in the sorted sub-list

            arr[j + 1] = arr[j]; // shift all elements greater than currentValue to the right

            j--;
        }

        arr[j + 1] = currentValue; // insert currentValue at the correct position
    }

    return arr; // return the sorted array
}

let array = [12, 19, 43, 36, 90, 12, 15]

let insertionTest = insertionSort(array);

console.log(insertionTest); // [12, 12, 15, 19, 36, 43, 90]
