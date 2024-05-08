//! ======================= Space Complexity ============================

// Space and time complexity both describe the performance of code in relation to the input size and both are expressed using big-O notation.

// Space complexity describes how much memory a function requires.

//! Constant Space Complexity

function addNums(n) {

    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

//^ There is an integer argument (n)
//^ There is an integer "total" which stores the return value
//^ There is a variable (i) which stores the index accessed each iteration of the for-loop

// Each of these integers (regardless of the size of the number it represents) occupies a constant amount of memory. This function itself occupies a constant amount of memory.

// Note that this COULD theoretically change in a situation where the value of (n) is an integer with one million zeroes. But for easonable numbers like n = 1,000,000 (which has a total of seven numbers), the space occupied by this function remains constant.

// big-O notation ignores constant coefficients (as we learned in the reading about time complexity), so the memory required to store these three varaibles reduces to a space complexity of O(1) or "O of 1".

// This means that the size of the numbers represented by the variables in this function does not change the amount of memory that is required to store this function. Its time complexity remains constant.

//! Linear Space Complexity

function getNumList(n) {

    let nums = [];

    for (let i = 0; i < n; i++) {
        nums.push(i);
    }

    return nums;
}

//^ This function returns an array containing every number from 0 to n-1.

//^ There is a variable "nums" which is an array that contains a total of (n) integers
//^ There is the variable (n) which stores a single integer
//^ There is a variable (i) which also stores a single integer (the index accessed within the current iteration of the for loop)

// Because the array "nums" requires (n) slots to store (n) integers, this function has a space complexity of O(n) [O of n]. The input size does affect the space required to store this function and its output.

//! Quadratic Space Complexity

function getNumPairsList(n) {

    let pairs = [];

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            pairs.push([i, j])
        }
    }

    return pairs;
}

//^ This function takes a number (n) and returns an array containing all possible number pairs from 0 to n-1. Because there is a loop and then another nested loop, we know that this function has a time complexity of O of n^2. Similarly, this array returns a total of 2 * n^2 + 2 stored integers, which reduces to a space complexity of O(n^2).

// You can verify this by running getNumPairsList(8).length, which should return 8^2 (64).

//! Modifying Arrays In-Place

// In JavaScript, arrays and objects are passed to functions by reference.

// So you can modify the array you are passed instead of creating a new one. This optimizes space complexity.

function increaseByOne(nums) {

    const increased = [];

    for (let i = 0; i < nums.length; i++) {
        increased.push(nums[i] + 1);
    }

    return increased;
}

//^ Since this function creates a new array, "increased," which contains (n) elements, this function has a space complexity of O(n).

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(increaseByOne(nums));

console.log(nums);

//^ Note that the "nums" array still exists in its original form. Compare that to the following function which runs the same algorithm in-place.

function increaseByOneInPlace(nums) {
    for (let i = 0; i < nums.length; i++) {
        nums[i]++;
    }

    return nums;
}

nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(increaseByOneInPlace(nums));

console.log(nums);

// This function returns the exact same array with each value incremented by one but accomplishes this without creating a new array. This gives 'increaseByOneInPlace' a space complexity of O(1) or O of 1. Note that the original nums array has been mutatd as well.

// While in-place algorithms are generally more space efficient, they may not be desired if you want to keep a clean copy of the original array. Before implementing the code, make sure you understand the problem, including the requirements and time/space complaints.

//! Summary

// Identify space complexity
// Describe space complexity using big-O notation
// Saw functions with constant, linear, and quadratic space complexity
// Learned to solve an array algorithm in-place
