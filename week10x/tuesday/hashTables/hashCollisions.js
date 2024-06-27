//! Hash Table Collisions

const sha256 = require("js-sha256")

class KeyValuePair {
    constructor(key, value) {
        this.key = key
        this.value = value
    }
}

class HashTable {
    constructor(numBuckets) {
        this.data = new Array(numBuckets).fill(null)
        this.count = 0;
    }

    hash(key) {

        let value = 0;

        for (let i = 0; i < key.length; i++) {

            value += key.charCodeAt(i);
        }

        return value;
    }

    hashMod(key) {

        return this.hash(key) % this.data.length;
    }

    insert(key) {

        this.count++;

        let value = this.hash(key);

        let index = this.hashMod(key);

        let kvp = new KeyValuePair(key, value);

        this.data[index] = kvp;
    }
}

let ht = new HashTable(8);

// console.log(ht.hash("Test")) // 416

console.log(ht);

ht.insert("Joshua");

console.log(ht);

ht.insert("Hello World");
ht.insert("key");

console.log(ht);

ht.insert("test1"); //! Hash Collision! Overwrites "Joshua" (bucket 1)
ht.insert("test2"); //! Hash Collision! Overwrites "Hello World" (bucket 2)

console.log(ht);

//^ We can reduce the likelihood of collisions by increasing the number of buckets:

let ht2 = new HashTable(100);

console.log(ht2);

ht2.insert("Joshua");

console.log(ht2);

ht2.insert("Hello World");
ht2.insert("key");

console.log(ht2);

ht2.insert("test1"); //& NO Hash Collision!
ht2.insert("test2"); //& NO Hash Collision!

console.log(ht2);
