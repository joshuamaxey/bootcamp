class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0; // set the number of elements to 0;
    this.capacity = numBuckets; // Set the capacity to the number of empty buckets
    this.data = new Array(this.capacity).fill(null); // create a new array with (numBuckets) capacit, then fill those spaces with null.
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    let loadFactor = this.count / this.capacity; // set the 'load factor' equal to the count over the capacity. This determines how 'full' the hash table is by comparing the current number of elements to the total capacity.

    if (loadFactor > 0.7) { // Check if the hash table is overloaded
      this.resize(); // If it is, we resize it to reduce the likelihood of hash collisions.
    }

    let index = this.hashMod(key); // call the hashMod(key) method to determine the index where the key-value pair will be stored.

    let keyPair = new new KeyValuePair(key, value); // create the new key-value pair that will be stored in the hash table at the hashed index.

    if (!this.data[index]) { // check if there is NOT currently a key-value pair stored at the hashed index
      this.data[index] = keyPair; // if thre is NOT already a key-value pair stored there, insert the new key-value pair directly.
    } else { // otherwise, if there IS a key-value pair stored at the hashed index...
      let current = this.data[index]; // store the key-value pair currently located at the hashed index in 'current'
      while (current) { // while there is a key-value pair stored at the current index...
        if (current.key === key) { // check to see if the key stord at the hashed inde is the same as the new key
          current.value = value; //If the keys are the same, overwrite the old value with the value from the new key-value pair
          return; // stop code execution and terminate the program
        }

        current = current.next; // OTHERWISE (if the keys are not the same), continue to traverse the linked list within this node of the hash table
      }

      keyPair.next = this.data[index]; // set the 'next' pointer of the new key-value pair to the key-value pair currently located at the hashed index, making the new key-value pair the new head of the linked list located at this node
      this.data[index] = keyPair; // set the key-value pair located at the hashd index to the NEW key-value pair.
    }

    this.count++; // increment the count of the hash table to reflect that we've added a new key-value pair.
  }


  read(key) {
    let index = this.hashMod(key); // generate the hashed index for the provided key by invoking the hashMod(key) method.

    let current = this.data[index]; // Store the key-value pair located at the current index in the 'current' variable.

    while (current) { // While there is a key-value pair located at the current index
      if (current.key === key) { // If the key located at the current index is the same as the key in the new key-value pair
        return current.value; // return the value stored within the key-value pair located at the current hashed index.
      }
      current = current.next; // Otherwise, if the provided key is not the same as the key located at the current index, move to the next node in the linked list located at the current bucket.
    }
    return undefined; // If we execute all of the code above and never find the provided key anywhere within the hash table, we return undefined.
  }


  resize() {
    let copyData = this.data.slice(); // Use the slice() method to make a shallow copy of the key-value pairs located within the 'data' array of the hash table.

    this.capacity *= 2; // double the capacity of the hash table

    this.data = new Array(this.capacity).fill(null); // Set 'this.data' for the hash table to a NEW array with the new, doubled capacity and then fill all of the buckets in that new array with 'null'.

    this.count = 0; // set the count of the new array to 0;

    for (let keyPair of copyData) { // prepare to iterate through the key-value pairs within the copy of the old data (the old array)
      let current = keyPair; // store the current key-value pair in the 'current' variable
      while (current) { // while there is a key-value pair located at the current index of the old array
        this.insert(current.key, current.value); // copy the key-value pair into the new array
        current = current.next; // continue to traverse the old array until we reach the end.
      }
    }
  }


  delete(key) {
    let index = this.hashMod(key); // Invoke the hashMod(key) method to find the hashed index for the provided key.

    let current = this.data[index]; // store the key-value pair located at the hashed index within the 'current' variable.

    let previous = null; // initialize a 'previous' variable and set its value to null by default.

    while (current) { // while there is a key-value pair located at the hashed index
      if (current.key === key) { // if the key currently located at the hashed index is the same as the provided key
        if (previous === null) { // if we're at the head node
          this.data[index] = current.next; // point the 'head' pointer to the next node in the linked list located at the current node, leaving the old 'head' floating in the ether to be garbage-collected
        } else {
          previous.next = current.next; // (??)
        }

        this.count--; // decrement the 'count' of the hash table to reflect that a key-value pair has been deleted
      }

      previous = current;
      current = current.next; // continue to traverse the linked list located at the current node, looking for a match to the provided key
    }

    return "key not found"; // if we do not find a match for the provided key anywhere within the linked list, return this string, end code execution, and terminate the program.
  }
}


module.exports = HashTable;
