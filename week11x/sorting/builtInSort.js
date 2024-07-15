//! JavaScript's Built-In Sort

//^ Whichever algorithm is used by JavaScript (which changes based on the browser, version of JavaScript, etc) will sort the elements of an array in-place with an O(1) space complexity and O(n log n) time complexity.

// By default, JavaScript's built-in sorting mechanism sorts elements alphabetically (including numbers, which JavaScript view as strings) instead of numerically because JavaScript is optimized for text parsing.

let nums = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

console.log(nums.sort()); // [1024, 128, 16, 2, 256, 32, 4, 512, 64, 8];

// The consequence of the alphabetical (vs numerical) default sorting is that JavaScript will not sort numbers numerically when we use it as-is.

// JavaScript's built-in sort DOES, however, allows us to define a custom sorting method. So if we want to sort numbers numerically, this is how we do it:

nums = [1024, 128, 16, 2, 256, 32, 4, 512, 64, 8]

function compareNumbers(a, b) {
    return a - b;
}

console.log(nums.sort(compareNumbers)); // [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

//^ Note tht we could use an arrow function to achieve the same result without writing a separate helper function. If we want to use JavaScript's default sort to sort the elements of an array numerically instead of alphabetically, we can use this implementation:

nums = [1024, 128, 16, 2, 256, 32, 4, 512, 64, 8];

console.log(nums.sort((a, b) => a - b)); // [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];

//! Funky Sorting with JavaScript's sort

//^ Given an array of nums, sort the array in ascending order with all the even numbers on the left and all the odds on the right.

nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

//^ Polya

// 1. If a is odd and b is even, return 1
// 2. If a is even and b is odd, return 1
// 3. Otherwise, sort normally with a - b;

function oddEvenCompare(a, b) {

    if (a % 2 === 1 && b % 2 === 0) return 1;
    if (a % 2 === 0 && b % 2 === 1) return -1;
    return a - b;
}

console.log(nums.sort(oddEvenCompare)); // [2, 4, 5, 8, 1, 3, 5, 7, 9]

//* Note the time complexity of O(n log n) and the space complexity of O(1)

//^ Solving 'Zeroes to the right'

nums = [0, 1, 0, 4, 15];

function moveZeroesCompare(a, b) {

    if (a === 0) return 1;
    if (b === 0) return -1;
    return a - b;
}

console.log(nums.sort(moveZeroesCompare)); // [1, 4, 15, 0, 0];

//& With respect to using JavaScript's built-in sort to solve 'oddEvenSort' and 'zeroesToTheRight' using the 'oddEvenCompare' and 'moveZeroesCompare' helper functions as sorting methods, how does JavaScript use those helper functions to sort the elements of the array?
