/*
? ROTATE RIGHT: Write a function rotateRight(array, num) that takes in an array and a number as arguments.
This function should return a new array where the elements of the array are rotated to the right num times.
The function should note mutate the original array and instead return a new array. //! array.slice() does not mutate.
Define this function using function expression syntax.

1. Array takes in two parameters:
    a. array to be rotated
    b. the number of times the array should be rotated to the right.
2. A copy of the original array is made using the slice() method. This ensures that the original array is note modified.
3. A loop runs num times, performing the following steps in each iteration:
    a. the pop() method removes the last element (el) from the copy array.
    b. the unshift() method then adds the removed elements to the beginning of the copy array.
4. After completing the rotations, the function returns the modified copy array.
*/

let rotateRight = function (array, num) {
  let copy = array.slice(); //using slice with no arguments copies the an array. THe copy can then be changed WITHOUT mutating the original array.
  for (let i = 0; i < num; i++) {
    //write a for loop that iterates through each element of the array
    let el = copy.pop(); //the .pop method removes the last element of the array each iteration
    copy.unshift(el); //the .unshift method moves the popped element to the front of the array each iteration.
  }
  return copy; //after the loop has run num times, return the mutated copy of the array.
};

let arr = ["a", "b", "c", "d", "e"];
console.log(rotateRight(arr, 2)); // [ 'd', 'e', 'a', 'b', 'c' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e' ]

/*
? AVERAGE VALUE: Write a function avgVal(arr) that accepts an array as an argument.
The function should return the average of all values in the array.
If the array is empty, it should return null.

////- if the loop is empty, return null (edge case)
    ////- first, write a conditional to check whether array.length is 0
    ////- if array.length === 0, return null.
- initialie a variable sum to hold the sum of the values of the elements in the array
- write a loop that iterates through each element of the array.
- add the value of each element to the array to sum each iteration.
- initialize a variable avg which contains the sum of all elements divided by the length of the array.
- afer the loop has completed, return avg
*/

let avgVal = function (array) {
  if (array.length === 0) {
    //first, check to see if the array is empty.
    return null; //if array.length === 0, return null.
  } else if (typeof array !== "object") {
    //for edge cases, check if data type is anything other than 'object' (arrays are objects)
    return null; //If the data type is not 'object' return null.
  }

  let sum = 0; //initialie a variable to hold the sum of the values at each index of the array.

  for (i = 0; i < array.length; i++) {
    //write a for loop that iterates through each index of the array.
    let el = array[i]; //initialize a variable to hold the element located at he current index of the array.
    sum += el; //increment sum by the value of the element at the current index of the array.
  }
  let avg = sum / array.length; //initialize a variable avg to hold the sum of the elements in the array divided by the length of the array.
  return avg; //return the average of the numbers in the array.
};

////console.log(avgVal(42));
////console.log(avgVal("test"));
////console.log(avgVal(false));
////console.log(avgVal([]));

console.log(avgVal([5, 10])); // 7.5
console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([])); // null

/*
? MY INDEX OF RECALL: Write a function myIndexOf(arr, target) that takes in an array and a target value as arguments.
The function should return the first indx where the target is found in the array.
If the target is not found, it shoudl return -1.
!Solve this WITHOUT using .indexOf().

- Write a loop that iterates through each element of the array.
- Write a conditional that checks whether the element at the current index of the array is equal to the target value.
- If the element is located at the current index of the array, return that index.
- If the loop completes without finding the target value, return -1.
*/

let myIndexOf = function (arr, target) {
  for (i = 0; i < arr.length; i++) {
    //write a loop that iterates through each elemetn in the array.
    let el = arr[i]; //initialize a variable to contain the element located at the current index of the array.

    if (el === target) {
      //write a conditional to check whether the element at the current index of the array is equal to the target value.
      return i; //if the element at the curren index is equal to the target value, return the index.
    }
  }
  return -1; //if the loop completes without matching any element of the array to the target value, return -1.
};

console.log(myIndexOf(["a", "b", "c", "e"], "c")); // 2
console.log(myIndexOf(["a", "b", "c", "e"], "e")); // 3
console.log(myIndexOf(["a", "b", "c", "e"], "z")); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

/*
? TRIPPLER: Write a function tripler(nums) that takes in an array as an argument.
The function should return a new array containing three times every number of the original array.

- write condiitonals to handle edge cases (empty array, non-array inputs)
- initialize an empty array 'tripled' to hold the tripled values.
- write a loop that iterates through every element of the array.
- initialize a variable to hold the element located at the current index of the array.
- initialize a new variable 'x3' to store the value of the element at the current index of the array multiplied by three.
& Use the array.push() method to push the tripled value to the end of the 'tripled' array.
- after the loop has finished, return the 'tripled' array.
*/

let tripler = function (array) {
  if (array.length === 0) {
    //write conditional to check if the length of the input array = 0
    return null; //if the array is empty, return null
  }
  if (typeof array !== "object") {
    //write conditional to check the input type
    return null; //if the input is anything other than an object, return null
  }

  let tripled = []; //initialize a variable to hold the tripled values of each element of the index
  for (i = 0; i < array.length; i++) {
    //write a for loop that iterates through the array
    let el = array[i]; //initialize a variable to hold the element located at the current index
    let x3 = el * 3; //initialize another variable to hold the value of the element located at the current index multiplied by three
    tripled.push(x3); //use the array.push() method to add the tripled value of the element at the current index to the end of the 'tripled' array.
  }
  return tripled; //after the loop has iterated through every element of the array, return the new array.
};

console.log(tripler([2, 7, 4])); // [ 6, 21, 12 ]
console.log(tripler([-5, 10, 0, 11])); // [ -15, 30, 0, 33 ]

////console.log(tripler(42));
////console.log(tripler("test"));
////console.log(tripler(false));
////console.log(tripler([]));

/*
? LONG WORDS: Write a function longWords(words) that takes in an array of words.
The function should return an array containing only the words that are longer than five characters

////- write a conditional to handle edge cases (empty array, non-array input)
- initialize an empty array 'words' to hold the words that meet the criteria.
- write a for loop that iterates through each element (word) of the array.
- initialize a variable 'el' to hold the word located at the current index.
- write a conditional statement that checks whether el.length is greater than 5.
- if it is greater than five, use the .push method to add that element to the new array 'words'
- after the loop has run to completion, return 'words'
*/

let longWords = function (words) {
  if (words.length === 0) {
    // write a conditional to handle edge cases where array.length is 0
    return null; //if the array is empty, return null
  }
  if (typeof words !== "object") {
    //write a conditional to handle edge cases wehre data type is not object[array]
    return null; //if data type is anything besides object, return null
  }

  let lw = []; //initialize a variable 'lw' to hold the words that meet the criteria

  for (i = 0; i < words.length; i++) {
    //write a for loop that iterates through each element (word) of the array.
    let el = words[i]; //initialize a new variable el to hold the element (word) located at the current index.
    if (el.length > 5) {
      // write a conditional to check whether the element (word) at the curretn index is longer than 5 characters using .length
      lw.push(el); //if the length of the word is greater than 5, use array.push method to add that element (word) to the 'lw' array
    }
  }
  return lw; //once the loop has run to completion, return 'lw'.
};

////console.log(longWords(42));
////console.log(longWords("test"));
////console.log(longWords(false));
////console.log(longWords([]));

console.log(longWords(["bike", "skateboard", "scooter", "moped"])); // [ 'skateboard', 'scooter' ]
console.log(longWords(["couscous", "soup", "ceviche", "solyanka", "taco"])); // [ 'couscous', 'ceviche', 'solyanka' ]
