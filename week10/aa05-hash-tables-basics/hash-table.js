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
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    const hash = sha256(key);
    return parseInt(hash.slice(0, 8), 16);
    // The slice method extracts the first 8 characters (32 bits) from the hash using hash.slice(0, 8); //^ Regularly, the SHA-256 hash function produces a fixed-length (256-bit) hash for any input. By extractin the first 8 characters, we obtain a smaller value that can be used as an index.

    // Then it converts this hexadecimal substring to an integer using parseInt(..., 16). //^ This integer is used to determine the bucket where the value associated with the KEY will be stored.
  }

  hashMod(key) {
    let hashedKey = this.hash(key); // invoke the hash(key) method above to return the hashed version of the key provided as input here, then store it in the hashedKey variable.

    let hashedIndex = hashedKey % this.capacity; // To determine the index where the key-value pair will e stored in the hash table, we divide the hashedKey by this.capacity using the modulo operator. This ensures that the index we calculate is within the bounds of the hash table's array.

    return hashedIndex; // return the index.
  }

  insertNoCollisions(key, value) {
    let hashedIndex = this.hashMod(key); // Calculates the index for the given key by calling the hashMod() method, which uses the hash() method to get the hash code for the key and then applies the modulo operator with the hash table's capacity to that code to return the index where the key-value pair will be stored.

    let dataCheck = this.data[hashedIndex]; // Retrieve the current value located at the calculated inde position, hashedIndex, from the array 'this.data', which stores all of the key-value pairs.

    if (dataCheck !== null) { //Check to see if the value retrieved by dataCheck is not null. If it's not ull, it means that either a hash collision has occurred or the same key-value pair already exists i nthe hash table...
      throw new Error("hash collision or same key/value pair already exists!") // ...When this is the case, an error is thrown.
    }

    this.data[hashedIndex] = new KeyValuePair(key, value) // If no collision is detected (if dataCheck returns null) we creat a new KeyValuePair object with the provided key and value, then insert it into the hash table at the hashedIndex position.

    this.count++; // Increment the count of the hash table, which keeps track of the key-value pairs that we have stored within the hash table.
  }

  insertWithHashCollisions(key, value) {
    let hashedIndex = this.hashMod(key); // Calculate the index for the given key by calling the hashMod() method, which uses the hash() method to get the hash code and then applies the modulo operator with the hash table's capacity to return the index where the key-value pair will be stored.

    let existingPair = this.data[hashedIndex]; // Attempt to retrieve the existing key-value pair at the hashedIndex.

    let newKV = new KeyValuePair(key, value); // Create a new KeyValuePair with the provided key and value.

    if (!existingPair) { // check if there is currently no existing pair at the hashedIndex.
      this.data[hashedIndex] = newKV; // IF there is no existing key-value pair located at the hashedIndex, then the newKV (new key-value pair) is inserted directly at this index.
    } else { // If there IS currently an existing key-value pair locateda at the hashedIndex...
      newKV.next = existingPair; // ...the 'next' pointer of the newKV pair is set to the existing pair, which prepends the newKV to the start of the linked list.
      this.data[hashedIndex] = newKV; // then the existingPair becomes the second element.
    }

    this.count++
  }

  insert(key, value) {
    let newKV = new KeyValuePair(key, value); // create a new key-vaule pair to insert.

    let hashedIndex = this.hashMod(key); // create a hashed key and find the hashed index for this key-value pair by invoking the hashMod() method on the provided key.
    let fullBucket = this.data[hashedIndex]; // initialize a variable to hold the values located at the hashedIndex if it is not empty

    if (!fullBucket) { //check to see if there is an existing key-value pair located at the hashedIndex
      this.data[hashedIndex] = newKV; // IF there is not already a key-value pair located at the hashedIndex, then insert our newKV pair directly at that index.
      this.count++; // increment count value of the hash table to reflect the presence of the new key-value pair.
      return; // Since we've successfully inserted the new key-value pair, we can return to stop code execution and terminate the program.
    } else { // IF there IS a key-value pair loacated at the hashedIndex...
      let current = fullBucket; // make a copy of the data that is already present in th buket, then store it in our 'current' variable.

      while (current) { // iterate through the key-value objects in the bucket until we reach the end
        if (current.key === key) {
          current.value = value; // update value for the same key
          return; // exit the method after updating the value;
        }

        if (!current.next) { // IF there's a next value that points to null...
          break; // terminate the loop
        }

        current = current.next; // until that happens, continue iterating through the pointers.
      }
      newKV.next = fullBucket; // if the key does not exist in the inked list, add it to the bucket's head
      this.data[hashedIndex] = newKV;
      this.count++

    }
  }

}


module.exports = HashTable;
