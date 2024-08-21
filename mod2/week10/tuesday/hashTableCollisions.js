//! Hash Tables

// Hash tables combine hash functions, modulo, and an underlying array structure ot achieve fast, flexiblek ey/value data storage.

// This model only works as long as each hash/modulo returns a unique value.

// Otherwise, it results in a hash collision.

//! What is a Hash Collision?

// Recall our hash functions:

class HashTable {
    constructor(numBuckets) {
        this.capacity = numBuckets
        this.data = new Array(this.capacity).fill(null)
        this.count = 0
    }

    findElement(index) { // returns value at a given index
        return this.data[index];
    }

    hash(key) {
        let hashValue = 0;

        for (let i = 0; i < key.length; i++) {
        hashValue += key.charCodeAt(i);
        }

        return hashValue;
    }

    hashMod(key) {
        return this.hash(key) % this.capacity
    }

    resize() {
        // copy data to preserve old elements
        // reassign capacity to double its previous value
        // re-instantiate data to an array with its new sie filled with null
        // reset count (calling insrt will re-increment count)

        // itrate over old data
            // iterate over each element in the old data, looking forn ested nodes
                // insert every node back int our new data buckets
    }

    insert() {

    }
}


const ht = new HashTable(9);

ht.hashMod("key9"); // 2
ht.insert()

//! Resize

// The hashMod() process scales according to the hash table's capacity.

// THe index it outputs has a wider range if there are more buckets.

// The more capacity, the more buckets, and the lower chance of future has table collisions.

// Fewer collisions lead to less potential time iterating over linked lists

// Thus, fewer collisions keeps us closer to the O(1) constant time complexity that we want.
