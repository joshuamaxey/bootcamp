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

console.log(factorial(6)); // 720
console.log(factorial(6)); // 720
console.log(factorial(5)); // 120
console.log(factorial(7)); // 5040

// Every time you call factorial(n) with a given input, you receive the same output.

// This code is very inefficient because you have to execute the full recursive stack for each top level call to factorial(n).

// It would be more ideal to store the result of factorial(n) the first time you calculate it, then on subsequent calls to factorial(n) you could just fethc th stored result in constant time.

//^ We can accomplish this through Memoization

let memo = {};

function factorialMemo(n) {
    // if this function has calculated factorial(n) previously, we want to fetch the stored result in memo...

    if (n in memo) return memo[n];
    if (n === 1) return 1;

    // otherwise, if it has not calculated factorial(n) previously, we want to calculate it now and store the result in case it is needed again

    memo[n] = n * factorialMemo(n - 1);
    return memo[n];
}

console.log(factorialMemo(6)); // 720, requires 6 calls
console.log(factorialMemo(6)); // 720, requires 1 call (b/c we've already calculated the output corresponding to this input)
console.log(factorialMemo(5)); // 120, requires 1 call (b/c we've already calculated up to 6)
console.log(factorialMemo(7)); // 5040, requires 2 calls (b/c we've already calculated up to 6)

console.log(memo); //* { '2': 2, '3': 6, '4': 24, '5': 120, '6': 720, '7': 5040 }

//^ The memo object will map an argument of factorial() to its return value.

// The keys will be arguments and their values will be the result that is returned when we use that key as input for the factorialMemo function.

// By the time the factorial(6) function returns, we will have stored the arguments for values 2 - 6 in the memo. This allows us to avoid executing duplicate recursive calls and significantly improves the efficiency of the function.

//! Memoizing the Fibonacci Generator

function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(6)); // 8
// console.log(fib(50)); // Takes MINUTES to complete

//^ Before optimization, this function has an exponential time complexity of 2^n. That is very slow.

// As (n) grows larger, the number of duplicate recursive calls grows exponentially. We can fix this using JavaScript default arguments.

function fastFib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1 || n === 2) return 1;

    memo[n] = fastFib(n - 1, memo) + fastFib(n - 2, memo);
    return memo[n];
}

console.log(fastFib(6)); // runs instantly
console.log(fastFib(50)); // runs instantly

//^ This version of the fibonacci generator will do far less computation as (n) grows larger than the regular fibonacci function.

// We can clearly observe this massive difference in time complexity and reduced runtime by the fact that the initial fibonnaci function (before optimization) takes MINUTES to complete its calculations when (n) = 50 vs the fastFib function which returns the result almost instantly when (n) = 50.

//! The Memoization Formula

// Memoization is useful with recursive problems which have overlapping sub-problems.

//* Note that it is useful to draw out the visual tree first.

//^ Here are the general rules for MEMOIZING a slow function:

// 1. Write the unoptimized, brute-force recursion and make sure it works.
// 2. Add the memo object as an additional argument to the function.
        // The keys represent unique arguments to the function
        // The values represent the results for those keys (arguments)
// 3. Add a base case condition to the function that returns the stored value if the function's argument is in the memo.
// 4. Before you return the result of the recursive case, store it in the memo as a value and make the function's argument its key.

//! Summary

// Leanred how to reduce the time complexity of an algorithm by whole classes using caching.
