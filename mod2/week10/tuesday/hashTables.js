//! Hash Tables

// Hash tables are also called hash maps.

// Hash tables are arguably the most important data structure.

// Hash tables are used to implement everything from JavaScript objects and Sets to performance-boosting caches.

// Hash tables provide key/value storage with constant big-O time coplexity for insertion, deletions, access, and search.

// Hash tables utilize an underlying array structure to achieve flexibl data storage with efficiency that nearly rivals a regular array.

//! What is a Hash Table?

// A hash table is an array with its elements indexed by a hashed key.

// The key hash is run through a modulo operation, which converts it to an array index.

const hashTable = {};
hashTable["key"] = "value";

console.log(hashTable["key"]); // value

//! Hash table data storage

//^ The first step to implementing a hash table is initializing an array of FIXED SIZE for data storage.

// Each empty index of the array is called a "bucket" and is initialized to null.

data = [null, null, null, null, null, null, null, null]

//^ Nexit, we need to hash a function which converts keys to integers. Here, we can use a simple hash() function like the one from our hashFunctions.js file:

function hash(str) {
    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i);
    }

    return hashValue; // remember that this function uses the str.charCodeAt(i) method to return the integers (ASCII UTF-16 values) associated with each element of the string, then adds them all together and returns the sum.
}

//^ Finally, we need a function to convert the key hash into a valid array index (??). Since the hash function returns an integer, you can use the modulo operator for this purpose.

function hashMod(key) {
    return hash(key) % data.length;
}

// So here, we FIRST invoke the hash function on a given key (string). This function invokes the str.charCodeAt(i) method on the elements at each index of the key (input string), adding the ASCII UTF-16 values associated with each of those elements together and then returning the sum.

// NEXT, we divide that sum (the return value of the hash() function) by the length of our data array and return the remainder by using the modulo function. This remainder is our integer index for the data array.

console.log(hash("key")); // 329, encrypted value
console.log(hashMod("key")); // 1, valid array index.

console.log(hash("Joshua")); // 618, encrypted value
console.log(hashMod("Joshua")); // 2, valid array index

console.log(hash("Joshua")); // 618, encrypted value //* Returns same output for same input!
console.log(hashMod("Joshua")); // 2, valid array index //* returns same output for same input!

console.log(hash("Test")); // 416, encrypted value
console.log(hashMod("Test")); // 0, valid array index

console.log(hash("App Academy")); // 1013, encrypted value
console.log(hashMod("App Academy")); // 5, valid array index

//^ As long as the key is a vali string, hashMod() is guaranteed to return a valid index for the strage array. Once you have this index, you can store, read, and delete key/value pairs just like you would in a regular array.

//! Inserting into a Hash Table

// We can insert key/value pairs of "key" and "value" into a hash table.

// First, you hash and modulo the key to find the correct bucket index

// Next, create a key/value pair

// Then store that key/value pair in the correct data bucket.

class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

//! Retrieving Values from a Hash Table

// when key/value pairs are stored, you can retrieve a value losing the same method.

// TO retrieve the value stored with a certain key, run hashMod("key")

// Running hashMod("key") will return the index of that key. Then you can look in your data buckets and find your key/value pair at index 1.

//! Hash Collisions

// If two keys hash to the same bucket, there is a hash collision.

//! Performance Analysis

// Hash tables maintain much of the performance efficiency of their underlying arrays.

// Hashing is technically O(n) where n is the length of the key but as long as that length is reasonably sized (less than a thousand), it's fast enough to be considered O(1).

// Modulo operations also run in constant time.

// Aside from the minor hashMod() overhead, inserting and reading from a hash table has the time time complexity as an array; O(1).

// Like arrays, hash tables have space complexity of O(n). THis means that the amount of memory required to store n values increases linearly as n grows.

// There is a lot of wasted space in a hash table compared to an array. There are empty buckets and values are always stored WITH keys instead of independently.

// The wasted space is directly proportional to the number of values stored.

// While a hash table may require anywhere from 2, to 10x more memoory to store n values, big-O ignores the constant coefficient.

// Thus, the space complexity of a hash table is the same as that of an array: O(n).

//! Summary

// How a hash table works

// combining fast hash function with an underlying array structure to provide flexible and efficient key/value data storage

// How to implement a hash table in JavaScript

// performed big-O analysis to verify the stime an space complexity of key functions
