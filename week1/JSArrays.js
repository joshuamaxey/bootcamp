//Arrays, like variables, hold inforamation.

let variable = "variable";

let array = ["string", true, 10, ["array2", false], variable];

//Arrays are ordered lists of information.

//look at the push method
//look at the pop method
//look at the shift and unshift method.
//look up array slice and splice methods.

/*
loops allow you to choose how many times you want a code to run.
You are doing something until a condition is met, as many times as that takes.
The counter is called the index.

Arrays work with many of the same methods and functions as strings.
*/

let array1 = ["a", "b", "c", "d", "e"];

console.log(array1.length); // = 5, because there are 5 items (strings) within the array.

console.log(array1[2], array1[3]); // = c d, because c is located at index 2 and d at index 3

//like with strings, trying to access an element at an index that is not inside the array resolves to "undefined".

console.log(array1.indexOf("b"), array1.indexOf("e")); // = 1 4

/*
so far we have seen that the following can be used with arrays, just like strings:

1. .length
2. array[i]
3. .indexOf["x"]
*/

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array1 + array2);

/*
You can see here ^ that attempting to add arrays together using the "+" operator doesn't actually combine the arrays. Instead, it converts them both to strings and then concatenates the strings together.

To actually concatenate two arrays together, you need to use the .concat method.
*/

console.log(array1.concat(array2));

//^ Here, you can see that the .concat method actually combines the two arrays into a single, new array.
