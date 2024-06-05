//! Dry Principle

// DRY means Don't Repeat Yourself

// DRY is operationally defined as: //^ A principle of software development aimed at reducing repetition of software patterns, using abstraction and data normalization to avoid redundancy

// We want our code to be clear, concise, and efficient.

// WET means Write Everything Twice.

// To refactor code to be DRY and not WET, start by identifying any patterns in your code that recur at least twice

// If there such a pattern present in your code, it is WET.

// DRY it up by extracting the pattern to its own function or set of code. Then apply that function wherever the pattern was used.

// One of the challengs in writing DRY code is that this quality is subjective. There is no technical 'test' of whether or not your code is DRY.

// Consider the following:

//^ This function is meant to determine whether an array of numbers includes three consecutive elements that are consecutive numbers

// For example: [5, 1, 2, 3, 6] returns true
//              [5, 1, 2, 4, 6] returns false

const threeIncreasingWet = function(nums) {

    for (let i = 0; i < nums.length - 2; i++) {

        if (nums[i] + 1 === nums[i + 1] && nums[i + 1] + 1 === nums[i + 2]) {

            return true;
        }
    }
    return false;
};

console.log(threeIncreasingWet([5, 1, 2, 3, 6])); // true

console.log(threeIncreasingWet([5, 1, 2, 4, 6])); // false

// Are there any patterns in this code that make it WET?

// There is one thing: Two conditionals in the if(){} statement that look very similar.

// The right side of the conditional statement adds 1 to an element and checks if that sum equals another element.

//^ Is there a way to make this repeated pattern into its own set of code?

const isConsecutive = function(nums) {

    for (let i = 0; i < nums.length - 1; i++) { // iterate through the array of numbers

        const num1 = nums[i]; // store the element located at the current index in num1

        const num2 = nums[i + 1]; // store the element located at the current index + 1 (the next element in the array)

        if (num1 + 1 !== num2) { // If num1 and num2 are NOT separated by 1...

            return false; // return false
        }
    }
    return true; // Otherwise, if they ARE separated by 1, return true
}

const threeIncreasing = function(nums) {

    for (let i = 0; i < nums.length - 2; i++) { // iterate through the array of numbers, stopping at the second-to-last element of the array

        const consecutiveNums = []; // initialize a new array to hold the numbers that we will later pass through our helper function to determine whether or not they are consecutive

        for (let j = i; j < i + 3; j++) { // For each element of the array of numbers...

            consecutiveNums.push(nums[j]); // push the element located at the current index of the array to the 'consecutiveNums' array
        }

        if (isConsecutive(consecutiveNums)) { // invoke the isConsecutive function on the consecutiveNums array...

            return true; // ...and return true if they are consecutive
        }
    }
    return false; // Otherwise return false, they are not consecutive
}

let test1 = threeIncreasing([5, 1, 2, 3, 6]);

let test2 = threeIncreasing([5, 1, 2, 4, 6]);

console.log(test1);

console.log(test2);
