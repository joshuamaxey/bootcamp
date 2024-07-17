/*
1. Un-comment the code under "Example 1" below, and then run the code. What do
   you notice about the values contained in the Set?
2. Comment out "Example 1" and un-comment the code under "Example 2". Run the
   code. What is the difference in the output between Example 1 and 2?
3. Explain: When working with matrix graphs, why do you need to convert the
   coordinates into a string before adding them to the Set? What would happen if
   you did NOT convert the coordinate array into a string?
*/

// --- Example 1: Adding array coordinates to a Set ---
let visited1 = new Set();

visited1.add([0, 1]);
console.log(visited1);

visited1.add([0, 1]);
console.log(visited1);

console.log([0, 1] === [0, 1]); // false
console.log([0, 1] == [0, 1]); // false

//! When we compare two arrays with the same elements (using strict OR loose equality) to see if they're the same, we return false because arrays are reference types. This mean that JavaScript consideres them different arrays, even if their elements are exactly the same, due to the fact that the two arrays (with the same elements) are stored at different locations in the computer's memory. JavaScript does NOT actually compare any of the elements in the arrays. It only checks to see if the two arrays are stored i the same place in memory. It returns true if they are because that means they are literally the same array. It returns false if not (regardless of whether the elements are the same) because that means that they are not the same array

console.log([0, 1].toString() === [0, 1].toString()) // true

//^ There is a simple fix to this problem. Whenever we need to compare two 'nodes' of a matrix graph (where 'node' is a set of coordinates implemented using an array like this: [0, 0]), we can use node.toString() ([0,0].toString() === "0,0") to convert from an array of coordinates into a string of coordinates which can then be used as a unique identifier for that node.

// --- Example 2: Adding string coordinates to a Set ---
let visited2 = new Set();

visited2.add(`0,1`);
console.log(visited2);

visited2.add(`0,1`);
console.log(visited2);

console.log(`0,1` === `0,1`); // true
