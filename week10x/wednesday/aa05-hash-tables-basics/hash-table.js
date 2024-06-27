const sha256 = require('js-sha256');

class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {

  constructor(numBuckets = 4) {
    this.count = 0;
    this.capacity = numBuckets
    this.data = new Array(numBuckets).fill(null);
  }

  hash(key) {

    let sha = sha256(key).substring(0, 8);

    return parseInt(sha, 16);
  }

  hashMod(key) {

    return this.hash(key) % this.capacity;
  }

  insertNoCollisions(key, value) {

    let kvp = new KeyValuePair(key, value); // create a new key/value pair using the key and value provided as input

    let index = this.hashMod(key); // determine the bucket (index) where we will store the kvp by invoking the .hashMod(key) method

    if (!this.data[index]) { // If the bucket is currently empty...

      this.data[index] = kvp; // ...store our new kvp at that index

      this.count++ // increment the count by 1 to reflect the addition of the new kvp
    }

    else throw new Error("hash collision or same key/value pair already exists!") // Otherwise, if the current bucket is NOT empty (if there is already data stored at this index), throw an error;
  }

  insertWithHashCollisions(key, value) {

    let kvp = new KeyValuePair(key, value);

    let index = this.hashMod(key);

    if (!this.data[index]) {

      this.data[index] = kvp;

    } else {

      kvp.next = this.data[index];

      this.data[index] = kvp;

      // let current = this.data[index];

      // while (current.next) {

      //   current = current.next;
      // }

      // current.next = kvp;
    }

    this.count++
  }

  insert(key, value) {

    const index = this.hashMod(key);

    let currentPair = this.data[index];

    while (currentPair && currentPair.key !== key) {

      currentPair = currentPair.next;
    }

    if (currentPair) {

      currentPair.value = value;
    } else {

      kvp = new KeyValuePair(key, value);

       if (!this.data[index]) {

      this.data[index] = kvp;

    } else {

      kvp.next = this.data[index];

      this.data[index] = kvp;
    }

    // let kvp = new KeyValuePair(key, value);

    // let index = this.hashMod(key);

    // if (!this.data[index]) {

    //   this.data[index] = kvp
    // } else {



      // let current = this.data[index];
      // let updated = false;

      // while (current) {

      //   if (current.key === key) {

      //     current.value = value;
      //     updated = true;
      //     break;
      //   }

      //   if (!current.next) {

      //     break;
      //   }

      //   current = current.next;
      // }

      // if (!updated) {

      //   kvp.next = this.data[index];
      //   this.data[index] = kvp;
      // }
    // }
  }
}
}


module.exports = HashTable;
