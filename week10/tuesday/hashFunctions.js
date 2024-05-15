//^ Compare and contrast the properties and operations of an array, linked list, and hash table

//^ Define hash collision and how to handle it

//^ Identify the mechanics and complexity of adding and removing elements from a hash table

//^ Use hash tables to improve time complexity through caching, memoization, and tabulation

//^ Know when a hash table is the appropriate tool for solving a problem.

//! Hash Functions

// Hash tables are used in security and cryptographic applications

// Hash functions are key to efficient data indexing

//! What is a Hash Function?

//^ A hash function maps arbitrary data to a determiistic, fixed-size output.

// OR

//^ A hash function takes an input, runs it through a set of deterministic steps, and then returns a scrambled output. Given the same input, it will always return the same output.

// The key word in both definitions is DETERMINISTIC. This means that no matter what the input is, the hashing process will always go through the same steps and result in the same output.

// Hashing, unlike encryption, only works in one direction. There is no way to 'decrypt' a hash output to find the input. For this reason, hash functions are useful for security.

//! A Simple Hash Function

function simpleHash(str) {
    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i); // charCodeAt() returns an integer that represents the UTF-16 code unit for the element at the given index. So for each element at teach index of the string, charCodeAt returns the corresponding UTF-16 code value.
    }

    return hashValue; // SO basically, this function uses charCodeAt() to retrieve the integer ASCII values for each character in the string, then adds them up and returns the total value.
}

console.log(simpleHash("Hello, world!")); // 1161
console.log(simpleHash("Joshua")); // 618
console.log(simpleHash("Test")); // 416

//^ This function will always return the same output for any given input.

//^ There is also no way to determine the input if all you have is the output because a hash of any number (n) could potentially represent any input whose string character values add up to that number (n).

//^ So a hash of 405 could represent an input of ABCDEF, ABBEEF, AAAFFF, zbeT, and so on.

//! SHA256 Hashing

// Our simpleHash() function is too simple to be used for cryptographic purposes.

// For general-purpose hashing, the SHA algorithm is commonly used.

//^ SHA stands for Secure Hashing Algorithm. It is fast and cryptographically secure.

// Given an input of any number of bits, SHA returns an output of 256 bits.

// There are variations of the algorithm with different sized outputs, but the most common is SHA256. With 256 bits, there are 2^256 possibilities for every encryption. This number is roughly equal to the number of atoms in the universe. It's not possible to brute-force a SHA256 decryption.

// The SHA algorithm is open source and has implementations in most programming languages including JavaScript.

// Running SHA256 on the previous strings gives a more varied output:

const sha256 = require('js-sha256')

console.log(sha256("Hello, world!")); //315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3

console.log(sha256("Hello, world!")); // 315f5bdb76d078c43b8ac0064e4a0164612b1fce77c869345bfc94c75894edd3

//^ Same output for every input, impossible to work backward to find encrypted value or to brute-force decrypt.

// Every output is exacty 64 characters long. Each of these characters is a hexadecimal digit which represents 4 bits in memory for a total of 256 bits.

//^ Unlike with our simpleHash() function, sha256() returns a completely different output for similar inputs. This is a trait of secure hash functions: The outputs should be evvenly distributed across the entire range of possibilites even with similar inputs.

//! Summary

// Properties of hash functions

// How hash functions are used to generate deterministic outputs from a given input
