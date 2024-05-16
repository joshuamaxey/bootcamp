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
