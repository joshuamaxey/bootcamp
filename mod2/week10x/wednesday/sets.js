//! Sets

//^ A set is an abstract data type used to store a collection of unique, unordered values

//! Properties of a Set

    // 1. A set contains no duplicate elements
    // 2. A set's elements are unordered
    // 3. A set can check if an element is present in O(1) time

// Note that in JavaScript, a set's elements are ordered by insertion. They do not have indices but they remain in the same order as they were added to the set.

//! Performance of a Set

// The array.includes(element) method uses iteration to check whether an element is present in an array in O(n) linear time.

//^ The set.has(element) method checks whether an element is present in a set in O(1) constant time.

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

console.log(`Array: ${endTimeArray - startTimeArray}ms`); // 327ms
console.log(`Set: ${endTimeSet - startTimeSet}ms`); // 11ms

//! Implementation of a Set

let set1 = new Set()

set1.add(1) // adds element to set
set1.delete(1) // deletes element from set
set1.size // returns length
set1.has(1); // returns true/false
set1.clear(); // removes everything from set
