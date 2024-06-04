function mergeSort(arr) {

    // check if the input is length 1 or less

    // if the input is length 1 or less, it is already sorted. Return

    // Otherwise divide the array in half

    // Recursively sort the left half

    // Recursively sort the right half

    // merge the halves together and return

    if (arr.length <= 1) { // If the input array is length 1 or less...

        return arr; // ...return the array beause it is already sorted
    }

    let mid = Math.floor(arr.length / 2); // create a divider to split the array in half

    let left = arr.slice(0, mid); // use .slice() to store the left half of the array

    let right = arr.slice(mid); // use .slice() to store the right half of the array

    let sortedLeft = mergeSort(left); // let recursion magically sort the left half

    let sortedRight = mergeSort(right); // allow recursion to magically sort the right half

    return merge(sortedLeft, sortedRight); // merge the sorted left and right halves together
}

function merge(left, right) {

    // Create an empty return array

    // point to the first value of each array

    // while there are still values in each array...

    // ...compare the first values of each array

    // Add the smaller value to the return array

    // Move the pointer to the next value in that array

    // Return the return array

    let result = []; // initialize an empty array to hold the result

    let leftIndex = 0; // create a pointer to the current index of the left half

    let rightIndex = 0; // create a pointer to the current index of the right half

    while (leftIndex < left.length && rightIndex < right.length) { // while the leftIndex is less than the length of the left half and the rightIndex is less than the length of the right half...

        if (left[leftIndex] < right[rightIndex]) { // ...if the element located at the current index of the left half is less than the element located at the current index of the right half...

            result.push(left[leftIndex]); // ...push the element located at the current index of the left half to the result array...

            leftIndex++; // ...then increment the leftIndex pointer by 1
        }

        else { // Otherwise, if the element located at the current index of the left half is NOT less than the element loated at the current index of the right half...

            result.push(right[rightIndex]); // ...push the element located at the current index of the right half to the result array...

            rightIndex++; // ...then increment the rightIndex pointer by 1
        }
    }

    while (leftIndex < left.length) { // While the leftIndex is less than the length of the left half...

        result.push(left[leftIndex]); // ...push the element located at the current index of the left half to the result array...

        leftIndex++; // ...then increment the leftIndex pointer by 1
    }

    while (rightIndex < right.length) { // While the rightIndex is less than the length of the right half...

        result.push(right[rightIndex]); // ...push the element located at the current index of the right half to the result array...

        rightIndex++ // ...then increment the rightIndex counter by 1
    }

    return result // Then return the merged result array
}

let array = [53, 19, 26, 39, 33, 31, 16]

let mergeTest = mergeSort(array);

console.log(mergeTest); // [ 16, 19, 26, 31, 33, 39, 53 ]
