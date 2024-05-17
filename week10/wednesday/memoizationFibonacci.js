//! Memoization

// Memoization is a design pattern used to reduce the overall number of calculations in algorithms that use recursive strategies.

//^ Recall that recursion solves a large problem by dividing it into smaller sub-problems.

// Memoization stores the results of the sub-problems in a data structure, allowing us to avoid duplicate calculations and only 'solve' each subproblem one time.

//^ There are two features of memoization:

// 1. The function is recursive
// 2. The additional data structure used is typically an object (called a MEMO)

// Memoization is a trade-off between the time it takes to run an algorithm (without using memoization) and the memory used to run the algorithm (with memoization). Usually this tradeoff improves code efficiency, especially when dealing with large data or calculations.

// This technique is NOT always applicable to recursive problems.

// Memoization is best for problems that have an "OVERLAPPING SUB-PROBLEM STRUCTURE."

// Consider this problem:

//^ Using pennies, nickels, dimes, and quarters, what is the smallest combination of coins that total 27 cents?

// In order to calculate the smallest combination of 27 cents, you should also calculate the smallest combination of 25 cents, and so on. This is the essence of what it means to have an overlapping subproblem structure.

//! Memoizing Factorial

function factorial(n) {
    if (n === 1) return 1;
    return n * factorial(n - 1);
}
