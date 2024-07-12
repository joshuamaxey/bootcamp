//! Merge Sort

//^ Merge Sort uses a divide and conquer approach:

    // 1. Split the unsorted array in half (divide)
    // 2. Sort the halves (conquer)
    // 3. Merge the sorted halves

let array = [3, 2, 0, 4, 1]

function mergeSort(arr) {

    // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return arr;

    // Divide the array in half
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);

    // Recursively sort the left half
    left = mergeSort(left);
    // Recursively sort the right half
    right = mergeSort(right);

    // Merge the halves together and return
    return merge(left, right);
  }

  // Takes in two sorted arrays and returns them merged into one
  function merge(arrA, arrB) {

    // Create an empty return array
    let result = [];

    // Point to the first value of each array
    let indexA = 0;
    let indexB = 0;

    // While there are still values in each array...
    while (indexA < arrA.length && indexB < arrB.length) {

        // Compare the first values of each array
        if (arrA[indexA] < arrB[indexB]) {

            // Add the smaller value to the return array
            result.push(arrA[indexA]);
            // Move the pointer to the next value in that array
            indexA++
        } else {
            result.push(arrB[indexB]);
            indexB++;
        }
    }

    // If there are remaining values in arrA, add them to the result
    while (indexA < arrA.length) {

        result.push(arrA[indexA]);
        indexA++;
    }

    while (indexB < arrB.length) {

        result.push(arrB[indexB]);
        indexB++;
    }

    // Return the merged array
    return result;
  }

  console.log(mergeSort(array))
