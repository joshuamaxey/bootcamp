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

//----------------------------------------------------------(Notes from Arrays Lecture)-----------------------------------------------------------------------------

//Arrays are lists.
//Values are stored in order
//Values are separated by commas
//Arrays are dynamic, with no set length.
//Arrays are global objects, you can make them however and wherever you want.

let rainbowColors = ["red", "green", "blue"];

rainbowColors[0]; // = "red"

rainbowColors = []; // They can also be empty.

let numberArray1 = [1, 2, 3, 4, 5];

console.log(numberArray1.length); // .length method, like with strings

console.log(numberArray1.length - 1); // Just like with strings, we can take the final element in an array by taking the length of the array and subtracting 1. This is because, also like strings, arrays are numbered by indices starting at 0. So the last index is always 1 less than the total number of items in the array.

/*
Arrays can contain ANY type of data

1. strings
2. booleans
3. integers
4. other arrays
5. etc
*/

//----------------------------------------------------------------------------(Array Methods)-----------------------------------------------------------------------

//.concat method combines two arrays into a single, new array WITHOUT modifying either of the original arrays.

let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let thirdArray = firstArray.concat(secondArray);

console.log(thirdArray);
console.log(firstArray);
console.log(secondArray);

//array.push() method adds a value to the end of an array
//array.unshift() method adds a value to the beginning of an array
//array.pop()
//array.shift()
//array.slice()
//array.splice()
//array.indexOf()
//array[]

//-----------------------------------------------------------------------------(Array Notes/Exercises)---------------------------------------------------------------

//sumArray: Write a function that takes in an array of numbers and returns the total sm of all the numbers.

/*
Polya

1. How do you add the values within an array?
A. Loop through the array ad add values of each array element to a variable called sum.

2. Use a for loop.
*/

/*function sumArray(arr) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
*/

function sumArray(array) {
  let sum = 0; //create the sum variable before creating the loop.

  for (let i = 0; i < array.length; i += 1) {
    //standard loop: begins at 0, ends at the last index of the array, increments by 1 each time it runs
    let num = array[i]; //creat a variable to represent the number at the current index
    sum += num; //tell the computer to increase the value of "sum" by the value of the number at the current index for each iteration.
  }

  return sum; //return the new sum, which is the previous sum + the value of the number of the current index this iteration.
}

console.log(sumArray([1, 2, 3, 4]));
console.log(sumArray([5, 6, 7, 8]));

//combineArrays: Write a function that takes in two arrays of numbers and returns the two arrays combined into a single array.

function combineArrays(array1, array2) {
  return array1.concat(array2);
}

console.log(combineArrays([1, 2, 3, 4], [5, 6, 7, 8]));

//doubler: Write a function that takes an array of numbers and returns a new array where every element of the original array is multiplid by 2.

function doubler(numbers) {
  let doubledNums = []; //create a new array to hold the doubled numbers

  let i = 0; //set our counter = 0
  while (i < numbers.length) {
    //the loop runs while i < the length of the numbers array.
    let oldNum = numbers[i]; //set oldNum equal to the value at the current index of the numbers array.
    let newNum = oldNum * 2; // set newNum equal to the oldNum * 2.
    doubledNums = doubledNums.concat(newNum); //concatenates (adds) each newNum into the new array "doubledNums" using the .concat method.

    i += 1;
  }
  return doubledNums; //return the new array
}

console.log(doubler([1, 2, 3, 4]));
console.log(doubler([3, 5, 7, 9]));

//countVowels: Write a function that takes in a string word and returns the number of vowels in the word. Vowels are letters a, e, i, o, and u.

function countVowels(word) {
  //0. set a vowel counter variable
  //1. iterate through the word
  //2. checking whether or not the current letter is a vowel
  //3. increment the vowel counter variable if the current letter is a vowel

  let vowelCounter = 0;
  let i = 0;

  while (i < word.length) {
    let letter = word[i];

    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      vowelCounter += 1;
    }
    i++;
  }
  return vowelCounter;
}

console.log(countVowels("bootcamp")); // = 3
console.log(countVowels("apple")); // = 2
console.log(countVowels("pizza")); // = 2
