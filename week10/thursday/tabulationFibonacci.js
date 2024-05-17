//! Tabulation

// Tabulation is another method of optimizing your algorithms through caching.

//^ There are two features that comprise the Tabulation strategy:

// 1. The function is iterative, NOT recursive
// 2. The additional data structure used is typically an array, which is called the Table.

// Many problems that can be solved using memoization can also be solved using tabulation. This only requires that convert the recursive solution to an iterative solution.

//! Tabulating the Fibonacci Number

// Tabulation is about create a table (array) and filling it with elements.

// In general, you will complete the table by filling entries from "LEFT TO RIGHT"

// This means taht the first entry of the table (first element of the array) will correspond to the smallest subproblem.

// The final entry of the table (last element of the array) will correspond to the largest problem and the final answer.

function tabulatedFib(n) {
    // initialize an empty array with n buckets
    let table = new Array(n);

    // seed the first two values (seed..?)
    table[0] = 0;
    table[1] = 1;

    // complete the table by moving from left to right, following the fibonacci pattern
    for (let i = 2; i <= n; i += 1) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}

console.log(tabulatedFib(7)); // 13

//^ By the time our tabulatedFib(n) function completes, our table will contain the final solution as well as all sub-solutions that were calculated along the way.

// This function has an O(n) time complexity AND O(n) space complexity.

//! Aside: Refactoring for O(1) Space

// There is a way to cut down the space used by the function.

// At any point in the loop, the calculation only requires the previous two subproblms' result.

// Storing the full array of solutions is actually a waste of space.

// Let's refactor our code for improved space complexity:

function fib(n) {
    let mostRecentCalcs = [0, 1];

    if (n === 0) return mostRecentCalcs[0];

    for (let i = 2; i <= n; i++) {
        const [secondLast, last] = mostRecentCalcs;
        mostRecentCalcs = [last,secondLast + last];
    }

    return mostRecentCalcs;
}

// Now we have an O(n) runtime with O(1) space complexity. This is the most optimal algorithm for calculating a Fibonacci number.

// This strategy is a 'paired-down' form of tabulation, since it uses only the last two values.

//! The Tabulation Formula

//^ 1. Create a table array based on the size of the input

//^ 2. Initialize values in the table that answer the smallest subproblem by initializing the first entry (or entries) of the table

//^ 3. Iterate through the array and fill in remaining entries, using previous entries to perform the current calculation

//^ 4. Your final answer is (usually) the last entry in the table

//! Summary

// Learned another method of changing an algorithm to improve its complexity class via caching (using memory to store intermediate results)
