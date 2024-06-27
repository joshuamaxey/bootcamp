//! Hash Tables Objectives

// 1. COmpare and contrast properties and operations of an array, liked list, and hash table
// 2. Define a hash collision and how to handle them
// 3. Identify the mechanics and complexity of adding and removing elements from a hash table
// 4. Use hash tables to improve time complexity through caching, memoization, and tabulation
// 5. Select a hash table when it is the appropriate tool for solving a problem

//! What is a Hash Functions

//^ A hash function maps arbitrary data to a deterministic, fixed-size output.

// OR

//^ A hash function takes in an input, runs it through a set of deterministic steps, then returns a scrambled output. Given the same input, it will ALWAYS return the same output.

// The word DETERMINISTIC here means that no matter what the input is, the hashing process will always perform the same steps that result in the same output.

// Hashing, unlike encryption, only works in one direction. There is no way to 'decrypt' a hash outpt to find the input. This makes hash functions very useful for security.

//! A Simple Hash Function

function simpleHash(str) {

    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {

        hashValue += str.charCodeAt(i);
    }

    return hashValue;
};

console.log(simpleHash("Joshua")); // 618

console.log(simpleHash("Hello World")); // 1052

console.log(simpleHash("Joshua")); // 618

// No matter how many times we run the same input through simpleHash() it always returns the same output

//! SHA256 Hashing

//^ SHA stands for Secure Hashing Algorithm. SHA256 returns an output of 256 bits, given any number of bits as input.

const sha256 = require('js-sha256');

console.log(sha256("Joshua")); // cb14bf5073ebaf6d9d04b63164b7017b2011d3558fb2f80f9450c9f5de6f6de8

console.log(sha256("Hello World")); // a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e

console.log(sha256("Joshua")); // cb14bf5073ebaf6d9d04b63164b7017b2011d3558fb2f80f9450c9f5de6f6de8

// Just like with simpleHash(), sha256() always returns the same 256-bit input
