/*
Arrays are containers of elements that can be any type, and that contain mixed types of elements. They are mutable and can be changed using certain methods and functions.

MULTI-DIMENSIONAL ARRAYS are arrays that are stored as elements of other arrays.

When the "depth" of an array is exactly 2 (there is an outer array containing inner arrays), we refer to that array as a "two-dimentional array".
*/

let evenAndOdd = [
  [1, 3, 5],
  [2, 4, 6],
];

//This is a 2D array ( ^ ). Indexing the outer TwoDimentional array will return an element like normal:

console.log(evenAndOdd[1]); //returns the element at index 1, which is the second inner array of even numbers.
console.log(evenAndOdd[0]); //returns the element at index 0, which is the first inner array of odd numbers.

//To gain access to the elements inside the inner array, we only need to apply another set of indexing brackets.

console.log(evenAndOdd[1][2]);
console.log(evenAndOdd[0][1]);

/*
Since a 2D array is an array of arrays, we'll need to use a loop within a loop to iterate through it.
*/

let array = [
  ["a", "b", "c"],
  ["d", "e"],
  ["f", "g", "h"],
];

for (let i = 0; i < array.length; i++) {
  let subArray = array[i];
  console.log(subArray);

  for (let j = 0; j < subArray.length; j++) {
    console.log(subArray[j]);
  }
}

/*
When we print the above code ( ^ ), consider the (i) index to be the current "row" and the (j) index to be the curren "column."

Additionally, notice that since the inner subArrays have different lengths, we want to specifically reference the length of the initial subarray within the nested array.

So here's the takeaway:

1. An array can contain other arrays as elements, we call this a 2D array.
2. to iterate through a 2D array, use nested loops.
*/
