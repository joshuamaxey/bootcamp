//! Propertise of a Set

//^ 1. A set contains no duplicate elements
//^ 2. A set's elements are unordered
//^ 3. A set can check for an element in O(1) time

// A set is appropriate when we are storing an unordered collection of unique values.

// The primary benefit of using a set is the O(1) time lookup.

//& I have also seen AI entities use sets to conveniently store values where uniqueness is required to avoid having to check whether each value is unique.

// In JavaScript, a set's elements are ordered by insertion order. This means that they are ordered according to the order tha tthey are added to the set.

//^ Note that because of this, we can iterate forward through an array and, by adding them to the set in the same order that we iterate through the array, can add the values in the array to the set in the correct order to effectively filter our any duplicates without changing the order of the elements.

//! Performance of a Set

// Compare array.includes(x) method to the set.has(x) method in JavaScript.

// Both methods check if the collection contains the value (x).

// The array does this through linear iteration, returning true if the value is found or false if it is not.

// The set performs the check in constant time, which can be verified with a timing test.

// let n = 100000;

// // fill an array with integers
// const arr = [];
// for (let i = 0; i < n; i++) {
//     arr.push(i);
// }

// // fill a set with integers
// const set = new Set(arr);

// // Search the array for integers, half of which are included
// startTimeArray = Date.now();
// for (let i = 0; i < 2 * n; i++) {
//     arr.includes(i);
// }
// endTimeArray = Date.now();

// // Search the set for integers, half of which are included
// startTimeSet = Date.now();
// for(let i = 0; i < 2 * n; i++) {
//     set.has(i);
// }
// endTimeSet = Date.now()

// console.log(`Array: ${endTimeArray - startTimeArray}ms`);
// console.log(`Set: ${endTimeSet = startTimeSet}ms`);

//! I was getting a huge number for set time, I fucked up the code somewhere. The code from the reading is pasted below, and provides the correct result.

let n = 100000

// Fill an array with integers
const arr = [];
for (let i = 0 ; i < n ; i++) {
  arr.push(i);
}

// Fill a set with integers
const set = new Set(arr);

// Search the array for integers, half of which are included
startTimeArray = Date.now();
for (let i = 0 ; i < 2 * n ; i++) {
  arr.includes(i);
}
endTimeArray = Date.now();

// Search the set for integers, half of which are included
startTimeSet = Date.now();
for (let i = 0 ; i < 2 * n ; i++) {
  set.has(i);
}
endTimeSet = Date.now();

console.log(`Array: ${endTimeArray - startTimeArray}ms`);
console.log(`Set: ${endTimeSet - startTimeSet}ms`);

// Arr.includes(i) is O(n) time complexity. Since it is contained within a loop, it's overall time complexity as used here is O(n^2).

// set.has(i), on the other hand, has an O(1) time complexity. Because it is used here within a loop, it's real time complexity for this application is O(n).

//! Implementation of a Set

// A set is an abstract data type.

// Generally speaking, sets are implemented using hash tables to achieve blazing-fast O(1) has() functionality.

// A set is like an object that stores only keys, no values.

// Sets have an underlying array structure with a preallocated number of buckets.

// When a value is added to the set, it is hashed an drun through the modulo of the number of buckets to produce the array index where it will be stored.

// Upon collision, the set will execute some collision handling with worse-case O(n) time complexity, where (n) is the number of values stored in taht particular bucket.

// When the set exceeds a load factor of 0.7, a new. larger array is allocated and the values are rehashed and copied to the new array.

// This produces the desired O(1) search time complexity.

// This also keeps elements unordered and ensures that they are unique.

// The order in which the values are stored in the underlying array is arbitrary and depends on the hash value.

// Uniqueness is also enforced. Trying to add duplicate keys to an object would only overwrite the old key.

// Like the hash table implementation of an object, sets have some wasted space from empty bucekts but still maintain a space complexity of O(n)

// Sets are situationalbut can result in massive performance gains if you can recognize where they are appropriate.

//! Summary

//^ Learned the three properties of a set
//^ Learned how to test and verify the performance of sets compared to an array
//^ Learned how has hvalues can be useddt oimplement a set's O(1) search functionality.
