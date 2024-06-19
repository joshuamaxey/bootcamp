//! Space Complexity

//^ Space complexity describes how much memory is required by a function. It measures the memory requirement relative to the input size and is also expressed using big-O notation.

//! Constant Space Complexity

// Consider the following addNums() function

function addNums(n) {

    let total = 0;

    for (let i = 1; i <= n; i++) {

        total += i;
    }

    return total;
}

//^ To determine the space complexity of this function, we can identify all of the variables that it uses and add them up:

    // 1. "total" is a variable which stores a single integer
    // 2. "i" represents the index of the for() loop

//^ Because 'total' and 'i' will always represent only one number, regardless of the input size, this function has constant time complexity. The input size has no effect on the amount of space that is required by this code.

//! Linear Space Complexity

function getNumList(n) {

    let nums = [];

    for (let i = 0; i < n; i++) {

        nums.push(i);
    }

    return nums;
}

//^ Notice that in the function above, getNumList(n), there is an array "nums" which stores all of the values from 0 to (n). This means that the length of the array will grow according to the size of the input. If (n) is 100, nums will have 100 elements at the end. If (n) is 1000000, then nums will have one million elements at the end. Thus, this function has LINEAR space complexity.

// That is, the memory required by this code increases linear to the input size.

//! Quadratic Space Complexity

function getNumPairsList(n) {

    let pairs = [];

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            pairs.push([i, j]);
        }
    }

    return pairs;
}

//^ This function takes a number, (n), and returns an array containing all possible number pairs from = to n-1.

// Because of the nested for loops, this function has a space complexity of O(n^2). That is, the variable size (space requirement) of the function increases quadratic to the input size.

//! Modifying Arrays In-Place

// Modifying arrays in-place typically results in a space complexity of O(1)
