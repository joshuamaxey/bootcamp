//! JavaScript's Built-In Sort

// We know how to implement various sorting algorithms

// Now it's time to larn how t use JavaSCript's built-in Sort function

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

//^ The sort() method sorts elements of an array IN-PLACE and returns the reference to the same array, now sorted.

//^ The default sort order is ascending and sorting is performed by converting elemnts into strings and the ncomparing their UTF-16 code unit values.

//^ TO sort the elements in an array without mutating the original array, use toSorted()

//! What algorithm does JavaScript use to sort?

// It varies based on browser type. Each browser runs their own version of JavaScript with their own sorting implementation.

// Chrome's V8 JS engine uses mergesort() but has used quicksort in the past. Has laso used insertion sort for small inputs.

// Whatever the implementation, it will be in-place with O(1) space complexity and O(n log n) time complexity.

//! How Do I Use JavaScript's Sort?

//^ Start by creating an array and calling nums.sort(). This returns the sorted array, mutated.

nums = [3, 2, 0, 4, 1];

nums.sort();

console.log(nums); // [ 0, 1, 2, 3, 4 ]

//^ Next, try sorting the following array:

nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

nums.sort();

console.log(nums); // [ 1024, 128, 16, 2, 256, 32, 4, 512, 64, 8] ???

// JavaScript sorts numbers in ALPHABETICAL, not numerical order. JavaScript is optimized for text parsing, so it stores everything (even numbers) as strings. So it sees this array as an array of strings, not integers, and sorts accordingly.

//^ Fortunately, JavaScript allows you to define a custom sorting predicate, similar to higher-order functions you learned previously like map(), filter(), and reduce()

function compareNumbers(a, b) {
    return a - b;
}

nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]

nums.sort(compareNumbers);

console.log(nums); // [ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ]

// This works because if a is larger than b, 'a - b' returns a positive value and be is sorted ahead of a. Otherwise, a - b is negative and the values of a and b are not swapped, maintaining their order

//! Funky Sorting with JavaScript's Sort

//^ JavaScript's built-in sort can be very powerful

// Given an array nums, sort the array in ascending order with all of the even numbers on the left and all the odds on the right.

// Input: [9, 8, 7, 6, 5, 4, 3, 2, 1]
// Output: [2, 4, 6, 8, 1, 3, 5, 7, 9]

//^ In th prior reading we came up with a 6-step plan and implemented a 50-line solution. Using the JavaScript predicate, we can create a 3-step plan and a 6-line solution.

// 1. If a is odd and b is even, return 1
// 2. if a is even and b is odd, return -1
// 3. Otherwise, sort normally with a -b

//^ Translated to code, we produe a readable and elegant solution:

nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

function oddEvenCompare(a, b) {

    if (a % 2 === 1 && b % 2 === 0) return 1;

    if (1 % 2 === 0 && b % 2 === 1) return -1;

    return a - b;
}

nums.sort(oddEvenCompare);

console.log(nums); // [ 2, 4, 6, 8, 1, 3, 5, 7, 9]

// If we assume the engine is using an in-place merge or quicksort, thi solution has a runtime of O(n log n) and a space complexity of O(1)

//^ Additionally, we can use the built-in sort to solve the Zeroes to the Right problem too.

// Runtime will not be as efficient as an optimal O(n) solution but if performance isn't the concern, this is a valid and very readable solution:

nums = [1, 1, 0, 4, 15];

function moveZeroesCompare(a, b) {

    if (a === 0) return 1;

    if (b === 0) return -1;

    return a - b;
}

nums.sort(moveZeroesCompare);

//! Summary

// Learned to make use of JavaScript's built-in sort to order array values alphabetically

// Learned how to define a custom sorting predicate to produce numerical sorts and various funky sorts
