//! Caching.

// Caching is the practice of calculating a result and then storing it for later retrieval.

// Caching is an alternative to running a commonly-used calculation many times.

// Caching effectively allows us to trade space for time.

// Caching also speeds up self-contained algorithms with redundant calculations.

//! Caching Return Values

// Let's say you want to know how many peaches are in a box of fruit.

// To find out, you could look at each item in the box and tally up the number of peaches.

// Instead of performing this same operation over and over again (given that there are always the same number of peaches in a box), you could count the peaches once and then write down the number on a piece of paper.

// Now every time you want to know how many peaches are in a box, you just look at what you wrote down.

// You have to update the list any time you add or remove a peace but as long as the contents stay the same, your list will remain accurate.

// This is a form of caching.

// This is how array.length is able to count n values in O(1) time.

//! Caching Pure Functions

// A pure function is a function whose output depends only on its input, and causes no side effect.

// These are also called stateless functions.

// Pure, or stateless, functions are useful for their predictability.

// Their outputs can be easily cached with the input as the key.

// Consider this multiply function:

function multiply(a, b) {

    let product = 0;

    for (let i = 0; i < b; i++) {
        product += a;
    }

    return product;
}

//^ This is an O(n) operation, where (n) is equal to the second number, (b). While not particularly efficient, you could speed up subsequent calculations with the same input using a cache. The plan might look something like this:

// 1. Create a unique key containing the inputs
// 2. If the key does not exist in the cache, run the calculation and store it in the cache
// 3. Return the cached value

let cache = {};

function multiplyCache(a, b) {
    // create a unique key containing the inputs
    const key = `${a} x ${b}`;

    // If the key does not exist in the cache
    if (cache[key] === undefined) {
        //run the calculation and store it in the cache
        cache[key] = multiply(a, b);
    }

    // return the cached value
    return cache[key];
}

// If you run multiply and multiply cache, you'll see a delay from both.

// However if you run the same arguments through multiplyCache a second time, the function returns almost instantly.

// You can look at the cache to see that it contains the return value with the key of a x b.

//! Memoization: Creating a "Memo" Cache

// The Fibonacci sequence is a series of nubers starting from 0 and 1 where each number is the sum of the previous two.

// The first ten nubers are 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.

// The (n)th value in the Fibonacci sequence starting from 0 can be coded recursively:

function fib(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;

    return fib(n-1) + fib(n - 2);
}

//^ fib(11) returns 55, fib(12) returns 89, and so on.

// By the time you reach the mid-30s, the function's runtime slows significantly. Use a console.log to see why:

function fibPrint(n) {
    console.log(`Running fib(${n})`);

    if (n === 1) return 0;
    if (n === 2) return 1;

    return fibPrint(n-1) + fibPrint(n - 2);
}

// Running fibPrint shows how many redundant calculations are taking place.

// There are over 100 recursive calls just for the 10th number. fib(30) requires over 500,000.

// If you were asked to find the 30th number in the fibonacci sequence, you would not run a simple calculation like this.

// Instead, you would start from the beginning and create a running log (or MEMO) of the previously calculated values.

//^ This method of caching is called MEMOIZATION.

cache = {};

function fibMemo(n) {
    if (n === 1) return 0;
    if (n === 2) return 1;

    if (cache[n] === undefined) {
        cache[n] = fibMemo(n - 1) + fibMemo(n - 2);
    }

    return cache[n];
}

// starting from the top, fibMemo() recurses from the top down to the base case of 1, upon which it starts building the cache.

// This cache allos you to fetch the duplicate calls from the cache instead of calculating it from scratch.

//^ Again, we can see the difference here by adding a console.log:

cache = {};

function fibMemoPrint(n) {
    console.log(`Running fibMemoPrint(${n})`);
    console.log(cache);

    if (n === 1) return 0;
    if (n === 2) return 1;

    if (cache[n] === undefined) {
        cache[n] = fibMemoPrint(n - 1) + fibMemoPrint(n - 2);
    }

    return cache[n];
}

fibMemoPrint(30); // INFINITELY faster than running this function using regular calculation.

//! Tabulation: Building the Cache from the Bottom-Upon

// Every recursive function can be solved iteratively.

// Instead of creating the cache recursively from the top-down, you can build it iteratively from the bottom up.

//^ This variation on caching is called TABULATION.

cache = {};

function fibTab(n) {
    cache[1] = 0;
    cache[2] = 1;

    for (let i = 3; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }

    return cache[n];
}

//^ This method is probably best practice for calculating the (n)th number in the Fibonacci sequence by hand.

// Fill up the cache, or "taable", one entry at a time until you reach the desired value.

//! Memoization vs Tabulation vs Dynamic Programming

//^ Both MEMOIZATION and TABULATION are forms of DYNAMIC PROGRAMMING.

// Dynamic Programming is the practice of solving sub-problems only once and then using the result to speed up future calculations that make use of those sub-problems.

// These are all forms of CACHING.

//! Summary

// Methods of storing return values to speed up code at the cost of memory: Trading space for speed.

// These methods, called caching, take the form of memoization, tabulation, and are collectively referred to as dyamic programming.

// Whether the problem is recursive, iterative, or asynchronous, caching is a powerful technique that can produce massive performance gains.
