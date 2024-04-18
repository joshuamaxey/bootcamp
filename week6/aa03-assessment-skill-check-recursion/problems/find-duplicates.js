/***********************************************************************
**PROBLEM 1: findDuplicatesIterative (1 point)**
Write a function `findDuplicatesIterative`. The function should take an
inputArray (array) and return an array including all items from the inputArray
that appear more than once. However, the returned array must NOT have any
duplicates within it.

For example:

findDuplicatesIterative([ 5, 8, 8, 2, 3 ]);
// [ 8 ]
findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]);
// [ 8, 3 ] (only one 8; order of elements does not matter)
findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]);
// [ 'word', 'a' ] (order of elements does not matter)

A successful solution will pass the first mocha test.

**PROBLEM 2: findDuplicatesRecursive (1 point)**
Write a function `findDuplicatesRecursive`. The function should have the same
output as the first function, but MUST use recursion WITH a default parameter
to find the duplicates.

A successful solution will pass the second mocha test.

**PROBLEM 3: findDuplicatesNoDefault (1 point)**
Write a function `findDuplicatesNoDefault`. The function should have the same
output as the first two functions, but MUST use recursion to find the duplicates.
In addition, you MAY NOT use any default parameters in your solution. You should
only use a single parameter, the inputArray.

A successful solution will pass the third mocha test.

**PROBLEM 4: findDuplicatesChallenge (1 point)**
Write a function `findDuplicatesChallenge`. This function must use recursion,
similar to the second and third function. To pass the fourth mocha test, the
solution code must meet the following constraints:

- There must be NO loop within the function
  - You may NOT use FOR or WHILE loops
- There must be NO array looping methods
  - You may NOT use .map, .forEach, .filter, .find, .sort, or .includes

***********************************************************************/

/* PROBLEM 1. findDuplicatesIterative: Must solve with iteration, not recursion */

// 1. iterate through the array
// 2. initialize a variable "count"


const findDuplicatesIterative = arr => {
  let newArr = [];
  let obj = {};

  for (const el of arr) {
    obj[el] = (obj[el] || 0) + 1;
  }

  let duplicates = arr.filter(el => obj[el] > 1);

  newArr.push(duplicates);

  return newArr;
}

console.log(findDuplicatesIterative([ 5, 8, 8, 2, 3 ]));
// [ 8 ]
console.log(findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]));
// [ 8, 3 ] (only one 8; order of elements does not matter)
console.log(findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]));
// [ 'word', 'a' ] (order of elements does not matter)

/* PROBLEM 2. findDuplicatesRecursive: Must solve with recursion */

// Your code here



/* PROBLEM 3. findDuplicatesNoDefault: Must use recursion with no default parameters */

// Your code here



/* PROBLEM 4. findDuplicatesChallenge: No for/while loops OR array looping methods */

// Your code here


/*
LOCAL TESTS: Run `node problems/find-duplicates.js` to run this node file,
and debug your code using console.logs.

MOCHA TESTS: Run `mocha` to run the mocha tests.
*/

// console.log(findDuplicatesIterative([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

// console.log(findDuplicatesRecursive([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesRecursive([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesRecursive([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)

// console.log(findDuplicatesNoDefault([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesNoDefault([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesNoDefault([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)


// console.log(findDuplicatesChallenge([ 5, 8, 8, 2, 3 ]));
// // [ 8 ]
// console.log(findDuplicatesChallenge([ 5, 8, 8, 8, 2, 3, 3 ]));
// // [ 8, 3 ] (only one 8; order of elements does not matter)
// console.log(findDuplicatesChallenge([ 'a', 'word', 'a', 'another', 'word' ]));
// // [ 'word', 'a' ] (order of elements does not matter)
