//* const sha256 = require("js-sha256")

//* realHash(key) {
    //*     const hash = sha256(key);
    //*     return parseInt(hash.slice(0, 8), 16)
    //* }

//^ For real hashing

class KeyValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class HashTable {
    constructor(numBuckets = 4) { // set the number of empty 'buckets' in the table (empty indices in the array) to 4
        this.count = 0; // Set the number of elements present in the table to 0
        this.capacity = numBuckets; // set the capacity of the table to the default number of buckets
        this.data = new Array(this.capacity).fill(null); // create the actual table, which is fundamentally similar to an array, with the default capacity (number of buckets), then fill them all with 'null'
    }

    hash(key) {
        let hashValue = 0; // initialize the hashValue and set it equal to 0 by default

        for (let i = 0; i < key.length; i++) {
            hashValue += key.charCodeAt(i); // iterate through each element of the key, invoking the string.charCodeAt(i) method on each one to take all of the ASCII UTF-16 value associated with each element of the key and add them together
        }

        return hashValue; // then return the sum, which will be the hashed key
    }

    hashMod(key) {
        let hashedKey = this.hash(key); // initialize a variable to hold the hashedKey.
        let hashedIndex = hashedKey % this.capacity; // run the hashedKey through a modulo function by the capacity of the table to produce the hashedIndex
        return hashedIndex; // return the hashedIndex associated with the key
    }

    insertNoCollisions(key, value) {
        let hashedIndex = this.hashMod(key); // Use the hashMod() method to return the hashed index associated with the given key.

        let dataCheck = this.data[hashedIndex]; // Check to see if there is already data present at the hashed index.

        if (dataCheck !== null) { // IF there is data present at the hashed index...
            throw new Error("hash collision or same key/value pair already exists") // ... throw an error and stop code execution
        }

        this.data[hashedIndex] = new KeyValuePair(key, value); // OTHERWISE, if there is no data present at the hashed index (if dataCheck returns null), then assign this key-value pair to this hashed index.

        this.count++ //increment the length of the table by 1
    }

    insertWithHashCollisions(key, value) {
        let hashedIndex = this.hashMod(key); // invoke the hashMod() method to return the hashed index associated with the given key

        let existingPair = this.data[hashedIndex]; // initialize a variable to hold the data located at the hashed index.

        let newKV = new KeyValuePair(key, value);

        if (!existingPair) {
            this.data[hashedIndex] = newKV;
        } else {
            newKV.next = existingPair;
            this.data[hashedIndex] = newKV;
        }

        this.count++;
    }

    findElement(index) { // returns value at a given index
        return this.data[index];
    }
}
