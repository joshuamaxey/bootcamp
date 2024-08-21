//! Hash Maps

class DynamicArray {
    constructor(maxCapacity) {
        this.capacity = maxCapacity;
        this.length = 0;
        this.data = [];
    }
}

function simpleHash(str) {
    let hashValue = 0;

    for (let i = 0; i < str.length; i++) {
        hashValue += str.charCodeAt(i);
    }

    return hashValue;
}

// function hashMod(key) {
//     return simpleHash(key) % data.length;
// }

function hashToIndex(int) {
    return int % length
}

class HashMap {
    constructor(numBuckets) {
        this.capacity = numBuckets
        this.data = new Array(this.capacity).fill(null)
        this.count = 0
    }

    findElement(index) { // returns value at a given index
        return this.data[index];
    }
}

const hashMap = new HashMap(4);
const length = hashMap.capacity;
// hashMap.data[3] = 'value from key string'
const searchKey = 'odd'

let hashedKey = simpleHash(searchKey)
let index = hashToIndex(hashedKey)
console.log(index);

console.log(hashMap.data[index]); // null

// console.log(hashMap) // HashMap { capacity: 4, data: [ null, null, null, null ], count: 0 }

let key = 'name'

let hashedValue = simpleHash(key)
// console.log(hashedValue) // 417

let hashedMod = hashedValue % hashMap.capacity
// console.log(hashedMod); // 1

const hash1 = simpleHash('odd')

//! Hash COllision

// two strings generate the same index

// by default as a result of hash table nature as arrays, will just overwrite the old data

class KeyValuePair { // this is a node creator
    constructor(key, value) {
        this.key = key; // original key given before hashing, NOT hashed key
        this.value = value;
        this.next = null
    }
}

let index1 = hashToIndex(simpleHash('yep')); // 2
let index2 = hashToIndex(simpleHash('nope')) // 2

hashMap.data[2] = new KeyValuePair('yep', 5)

console.log(index1);
console.log(index2);

let newKVPair = new KeyValuePair('nope', 10)
newKVPair.next = hashMap.data[2];

hashMap.data[2] = newKVPair

console.log(hashMap.data)
