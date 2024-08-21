//! Caching

//^ Caching is the practice of storing the result of a frequently-used calculation so that the answer can be accessed without recalculating

//! Caching Pure Functions

function multiply(a, b) {

    let product = 0;

    for (i = 0; i < b; i++) {

        product += a;
    }

    return product;
}

//^ This is an O(n) operation where n is equal to the second number, b.

// We can speed up our calculations using a cache:

    // 1. Create a uique key containing the inputs
    // 2. IF the key does not exist in the cache, run the calculation ands tore the result in the cache
    // 3. Return the cached value

const cache = {};

function multiplyCache(a, b) {

    const key = `${a}x${b}`

    if (!cache[key]) {

        cache[key] = multiply(a, b)
    }

    return cache[key];
}

console.log(multiply(2, 1000000000)); // ~2s
console.log(multiplyCache(2, 1000000000)); // ~2s

console.log(multiply(2, 1000000000)); // ~2s
console.log(multiplyCache(2, 1000000000)); // instant

//! Memoization: Creating a 'Memo Cache'
