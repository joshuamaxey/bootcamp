//! Hash Tables

const hashTable = {};

hashTable["key"] = "value";

console.log(hashTable["key"]); // value;


//! Hash Table Data Storage

//^ The first step to implementing a hash table is initializing an array of FIXED SIZE for data store. Each slot in the array is called a "bucket," and is initialized to null.

let data = [null, null, null, null, null, null, null, null];

//^ Next, we need a hash function which converts keys to integers.

function hash(str) {

    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {

        hashValue += str.charCodeAt(i);
    }

    return hashValue;
}

//^ Finally, we need a function to convert the ey hash into a valid array index. Since the hash function returns an integer, you can use the modulo operator for this purpose.

function hashMod(key) {

    return hash(key) % data.length;
}

// hashMod() is used to generate a vlid integer index for the data array.

console.log(hash("key")); // 329 (hashed value)
console.log(hashMod("Key")); // 1 (bucket)

console.log(hash("Joshua")); // 618 (hashed value)
console.log(hashMod("Joshua")); // 2 (bucket)

console.log(hash("Hello World")); // 1052 (hashed value)
console.log(hashMod("Hello World")); // 4 (bucket)

//^ As long as our key is a valid string, hashMod() will return a valid index for the storage array. Once we have the index, we can store, read, and delete key/value pairs just like in a regular array.

//! Inserting into a Hash Table

class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}

class HashTable {
    constructor(numBuckets) {
        this.data = new Array(numBuckets)
    }

    insert(key) {

        let value = hash(key);

        let index = hashMod(key);

        let kvp = new KeyValuePair(key, value);

        this.data[index] = kvp;
    }
}

let ht = new HashTable(10);

console.log(ht);

ht.insert("Joshua");

console.log(ht);

ht.insert("Hello World");
ht.insert("key");

console.log(ht);

//! Retrieving Values from a Hash Table

console.log(hashMod("Joshua")); // 2, so we know we can find the key/value pair for "Joshua" at index 2 of the hash table.

//! Hash Collisions

// A hash collision occurs when two keys hash to the same bucket.

//! Performance Analysis

// Hashing is O(1)
// Inserting is O(1)
// Reading is O(1)

// Space Complexity O(n)
