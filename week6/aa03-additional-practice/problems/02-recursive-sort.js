/*
    Recursive Sort

    Given an array of numbers, write a function that returns a new array of numbers sorted from lowest to highest.

    console.log(sort([])) // prints []
    console.log(sort([9])) // prints [9]
    console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
    console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]
*/

// function sort(nums) {
//     let newArr = [];

//     if (nums.length === 0) {
//         return nums;
//     }

// }

//! =========================================================================

// function merge(left, right) {
//     const result = [];

//     let leftIndex = 0;
//     let rightIndex = 0;

//     while (leftIndex < left.length && rightIndex < right.length) {
//         if (left[leftIndex] < right[rightIndex]) {
//             result.push(left[leftIndex]);
//             leftIndex++;
//         } else {
//             result.push(right[rightIndex]);
//             rightIndex++;
//         }
//     }
//     return result.concat(left.slice(leftIndex), right.slice(rightIndex));
// };

// function mergeSort(arr) {
//     if (arr.length <= 1) { //base case
//         return arr;
//     }

//     const middle = Math.floor(arr.length / 2);
//     const left = arr.slice(0, middle);
//     const right = arr.slice(middle);

//     return merge(mergeSort(left), mergeSort(right));
// };

// function sort(arr) {
//     return mergeSort(arr);
// }

//! ===========================================================================

// function sort(arr) {
//     return arr.slice().sort((a, b) => a - b);
//     // Here, we use the .slice() method with no parameters to create a shallow copy of the array. This provides a copied array for us to sort so that the original remains unmutated (since the problem asks for a NEW array)
//     // Then we use the .sort() method with a compare function to sort the elements in ascending order.
// }

//! ===========================================================================

function sort(arr) {
    // debugger
    if (arr.length <= 1) { //BASE CASE
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            rightpush(arr[i]);
        }
    }

    return sort(left).concat(pivot, sort(right));
}

console.log(sort([])) // prints []
console.log(sort([9])) // prints [9]
console.log(sort([5, 4, 3, 2, 1])) // prints [1, 2, 3, 4, 5]
console.log(sort([14, 5, 10, 6, 3, 4, 21, 16, 9])); // prints [ 3, 4, 5, 6, 9, 10, 14, 16, 21 ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = sort;
} catch (e) {
    module.exports = null;
}
