/*
Polya (The process developed by mathematician George Polya) is the process that is used to solve ANY problem in these four steps:

1. Understand the problem
2. Make a plan
3. Execute the plan
4. Look back and improve your solution
*/

//--------------------------------------------------------------( 1. UNDERSTAND THE PROBLEM)--------------------------------------------------------------------------

//Given an array nums, write a FUNCTION to move all 0's to the end of it WHILE maintaining the relative order of the non-zero elements.

//input: [0,2,0,3,12]
//output: [1,3,12,0,0]

//You must do this in-place without making a copy of the array.
//Minimize the total number of operations.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
You may have limited time to complete this problem and may be tempted to start coding ASAP. Instead, take a few minutes to read over the problem to make sure that you understand it.

- What is the problem asking you to do?
- Can you restate the problem in your own words?
- Do you understand all of the words in the problem?
    -function
    -array
- Do you have eough information to solve the problem?
- Are there any constraints or edge cases to consider?
*/

//--------------------------------------------------------------------(2. MAKE A PLAN)--------------------------------------------------------------------------------

/*
Once you have a good understanding of the problem, you may again be tempted to start writing code right away. Before you do that, spend a few minutes planning.

- Break down the problem into smaller steps
- Draw out the problem
- Solve a simpler version of the problem
- Look for patterns
- Work backward
- Guess and check

Here is our plan for the zeroes problem:

1. Set a pointer to the last element in the array.
2. Walk through each element of the array.
3. If the element is zero, swap its position with the element at the pointer, then decrement the pointer.
*/

//------------------------------------------------------------------(3. EXECUTE THE PLAN)-----------------------------------------------------------------------------

function moveZeroes(nums) {
  //1. set a pointer to the last element in the array.
  let pointer = nums.length - 1;

  //2. Walk through each element of the array.
  for (let i = 0; i < pointer; i++) {
    //3. If the element is 0
    if (nums[i] == 0) {
      //swap its position with the element at the pointer
      [nums[i], nums[last]] = [nums[last], nums[i]];
      //then decrement the counter
      last--;
    }
  }
  return nums;
}

console.log(moveZeroes[(0, 2, 0, 3.12)]);

//---------------------------------------------------------------------(ADD TO ARRAY)-------------------------------------------------------------------------------

//ADD TO ARRAY: write a function that takes a location (either "Front" or "back") and adds an element to either the front or the back of the given array.
//If the location is anythign besides "Front" or "Back," print an error.
//Your function should not return anything.
//Your function should mutate the original array.

/*
Look up the following JavaScript functions:

1. push (array.push() method pushes an element to the end of an array and returns the new length of the array. MUTATES)
2. pop (the array.pop() method removes the LAST element from an array and returns that element. This method changes the length of an array. MUTATES)
3. shift (the array.shift() method rmoves the first element from an array and returns that removed element. This method changes the length of an array. MUTATES)
4. unshift (the array.unshift(x,y) adds the specified elements to the beginning of an array and returns the new length of the array. MUTATES)
*/

/*
1. Write a conditional statement to evaluate "location" and then continue if it is either Front or Back, but evaluate to an error message if not.
2. IF the location is front, use the array.unshift method to add the element to the front of the array.
3. IF the location is back, use the array.push() method to add the element to the end of the array.
*/

/*testArray = [1, 2, 3];

function addToArray(location, element, arr) {
  let locationTrue = location.toLowerCase();

  if (locationTrue === "front") {
    arr.unshift(element);
  } else if (locationTrue === "back") {
    arr.push(element);
  } else {
    console.log("ERROR");
  }
}

addToArray("FRONT", 0, testArray);
console.log(testArray); // [0,1,2,3]

addToArray("BACK", 4, testArray);
console.log(testArray); // [0,1,2,3,4]

addToArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [0,1,2,3,4]
*/

/*
REMOVE FROM ARRAY: Write a function that takes a location, either FRONT or BACK, and removes the element at eitehr the front or back of the given array.
If location is anything besides FRONT or BACK, print an error. Your function should not return anything and should mutate the original array.

1. create a variable with the .toLowerCase method for the location input so that this function is note case-sensitive.
2. write a conditional statement to determine course of action based on location input.
    if front, use the array.shift() method to remove the first element in the array.
    if back, use the array.pop() method to remove the last element in the array.
    otherwise, return "ERROR"
*/

function removeFromArray(location, arr) {
  let locationReal = location.toLowerCase();

  if (locationReal === "front") {
    arr.shift();
  } else if (locationReal === "back") {
    arr.pop();
  } else {
    console.log("ERROR");
  }
}

testArray = [0, 1, 2, 3, 4];

removeFromArray("FRONT", testArray);
console.log(testArray); // [1,2,3,4]

removeFromArray("BACK", testArray);
console.log(testArray); // [1,2,3]

removeFromArray("MIDDLE", 4, testArray); // "ERROR"
console.log(testArray); // [1,2,3]

let array3 = ["a", "b", "c", "d", "e", "f"];
array3.splice(2, 3);
console.log(array3);

let myArray = ["apple", "orange", "watermelon", "grap", "banana"];

let cutFruits = myArray.splice(2);

console.log(myArray);
console.log(cutFruits);

//This splice cuts from index 2 onward, storing the removed elements in the variable "cutFruits".

let string = "There is no machine";
let splitString = string.split(" ");
console.log(splitString);

// ^^^ Splits a string into an array using the string.split() method.

let unSplitString = splitString.join(" ");
console.log(unSplitString);

// ^^^ use the array.join() to turn an array back into a string.

//since strings are immutable, you could use these .join and .split methods together to convert the string to an array, change/remove an element of the array, then convert it back to a string. In this way you bypass the immutability of strings.

let str = "helZlo";

let splitArray = string.split("Z");
let joinAgain = splitArray.join("");

console.log(joinAgain); // = "hello"

//In this way, you have effectively changed the immutable string.

//Note that .split and .join methods do NOT mutate the array (or the string, since strings are immutable. console.logging the string after using the .join and .split will yield the original string.)

/*
REVERSE STRING: Write a function that takes in a stirng and returns a new string where the order of the characters is reversed.

1. initialize an empty string to hold the reversed version that we will return.
2. Start a loop that begins at the end of the string and iterates back toward the beginning.
3. Access each character of the string using its index.
4. Add each character to the reversed string
5. Once the loop has finished, return the reversed string
*/

let reverseString = function (str) {
  let reversedStr = ""; //We create a new variable, reversedStr, to hold the characters of the reversed string as we iterate through them.

  for (let i = str.length - 1; i >= 0; i--) {
    //Here, we tell the string to iterate backwards. Instead of starting at index 0, we start at str.length -1, which is the final index of the string. Then instead of telling the computer to stop at the end of the string, we tell it to stop once the index is less than or equal to 0. Then we decrement the index (counter) by 1 each iteration. In this way, we have told the computer to begin at the end of the string, stop once it reaches the beginning of the string, lower the counter by 1 each iteration, effectively moving backward through the string.
    let char = str[i]; //Now we initialize a variable that will contain the character located at this iteration's current index.
    reversedStr += char; //Finally, we tell the computer to add each character to the empty string we initialized, "reversedStr" at the beginning of the function expression.
  }

  return reversedStr; //after the loop has run through ALL of its iterations, we return the reversedStr, which will be the string spelled backward.
};

console.log(reverseString("fish")); // 'hsif'
console.log(reverseString("marathon")); // 'nohtaram'

/*
RANGE: Write a function range(min, max) that takes in two numbers. The function should return an array containing all numbers from min to max INCLUSIVE. Define this function using fnction expression syntax.
*/

/*
let range = function (min, max) {
  let i = min;
  while (i < max) {
    console.log(i);
    i++;
  }
  return i;
};
*/

let range = function (min, max) {
  let array = []; //create an empty array where we will put the values fro min to max.

  for (let i = min; i <= max; i++) {
    //write a standard for loop that begins at the minimum number, ends when the counter is equal to the maximum number, and increases by 1 each increment.
    array.push(i); //use the push method to add each index to the empty array as the loop runs through each iteration.
  }
  return array; //after the loop is complete, return the array with all of the values from min to max
};

console.log(range(3, 10)); // [ 3, 4, 5, 6, 7, 8, 9, 10 ]
console.log(range(217, 220)); // [ 217, 218, 219, 220 ]
console.log(range(-5, 1)); // [ -5, -4, -3, -2, -1, 0, 1 ]
console.log(range(10, 3)); // []

//I am beginning to see a distinct pattern throughout these problems concerning arrays (and even strings). We will usually create a variable to hold the output, use a for loop to iterate through the input, then use an array or string method to add each element to the new string or array as the loop runs through each iteration.

/*
LOG BETWEEN STEPPER: write a function that takes in three numbers as parameters.
The function should print out numbers between min and max at step intervals.
This function only needs to print to the console, it doesn't need to return anything.
*/

let logBetweenStepper = function (min, max, step) {
  for (i = min; i <= max; i += step) {
    //Here, we write a for loop that begins at the min, ends at the max, and increases by the step each iteration.
    console.log(i); //we console.log index each iteration and don't need to return anythign.
  }
};

logBetweenStepper(5, 9, 1); /* prints out:
5
6
7
8
9
*/

logBetweenStepper(-10, 15, 5); /* prints out:
-10
-5
0
5
10
15
*/

/*
MY INCLUDES: write a function myIncludes(arr, target) that accepts an array and a target value as args.
The function should return a boolean indicating whether the target is found in the array.
Solve this without array.includes() OR array.indexOF.

1. Loop through each element in the array.
2. Assign the current element to a variable called 'el'.
3. check if the current element is equal to the target value.
4. if it is, return true.
5. if thel oop completes iwthout finding the target, return false.
*/

let myIncludes = function (arr, target) {
  for (i = 0; i < arr.length; i++) {
    //loop through each element of the array.
    let el = arr[i]; //assign the element at the current index to a variable called el.
    if (el === target) {
      //check if that element is equal to the target
      return true; //if it is, return true
    }
  }
  return false; //if the loop completes and we don't find any elements equal to target, return false.
};

console.log(myIncludes(["a", "b", "c", "e"], "c")); // true
console.log(myIncludes(["a", "b", "c", "e"], "a")); // true
console.log(myIncludes(["a", "b", "c", "e"], "z")); // false
console.log(myIncludes([43, -7, 11, 13], 11)); // true
console.log(myIncludes([43, -7, 11, 13], 1)); // false

/*
SUM ARRAY: Write a function sumArray(array) that takes in an array of unnumbers and returns the total sum of all the numbers.
*/

let sumArray = function (array) {
  let sum = 0; //Create a new variable to store the sum of the numbers in the array
  for (i = 0; i < array.length; i++) {
    //write a for loop that begins at index 0 and iterates through every index of the array.
    let num = array[i]; //store the value at the current index in a variable called num.
    sum += num; //increase the value of sum by the value of num for each iteration.
  }
  return sum; //after the loop is complete, return the sum.
};

console.log(sumArray([5, 6, 4])); // => 15
console.log(sumArray([7, 3, 9, 11])); // => 30

/*
FACTORS OF: Write a function factorsOf(num) that takes in a number as an argument.
The method should return an array containing all positive numbers that are able to divide into num with no remainder.
Define this funciton using function expression syntax.
*/

let factorsOf = function (num) {
  let factors = []; //create an empty array to store the factors of the num.

  for (let i = 1; i <= num; i++) {
    //we start the counter at 1, since not 0, since 0 is not a factor of anything.
    if (num % i === 0) {
      //if the number divides evenly into the element at the given index, leaving a remainder of 0, then that number is a factor of num.
      factors.push(i); //IF the number at the given index is a factor of num, use the push method to add it to the end of the 'factors' array.
    }
  }

  return factors; //after the loop is complete, return the array of factors.
};

/*
MY INDEX OF: Write a function myIndexOf(arr, target) that takes in an array and a target value as arguments.
The function should return the first index where the target is found in the array. If the target is not foud it should return -1.
Solve this without using array.indexOf
*/

let myIndexOf = function (array, target) {
  // Create a for loop that iterates through every element of the array
  for (i = 0; i < array.length; i++) {
    if (array[i] === target) {
      // Create a conditional statement that checks whether the current index is equal to the target each iteration.
      return i; // if it is, return that index.
    }
  }
  return -1; // if the loop completes without ever matching the index to the target value, return -1.
};

console.log(myIndexOf(["a", "b", "c", "e"], "c")); // 2
console.log(myIndexOf(["a", "b", "c", "e"], "e")); // 3
console.log(myIndexOf(["a", "b", "c", "e"], "z")); // -1
console.log(myIndexOf([43, -7, 11, 13, 43], 43)); // 0
console.log(myIndexOf([43, -7, 11, 13], 1)); // -1

/*
VOWEL COUNTER: Write a function countVowels(word) that takes in a string word and returns the number of vowels in the word.
Vowels are the letters "a" "e" "i" "o" and "u"

- Write a function expression
- Create a variable 'counter' to store the number of vowels and set = to 0.
- Write a for loop that iterates through every letter of the string.
- Write a conditional to check whether the element at the current index is a vowels
- If it is, increase the value of 'counter' by 1
*/

/*
let vowelCounterRecall = function(word) {
  let vowels =
  let counter = 0
  for (i = 0; i < word.length; i++) {
    if
  }
}
*/

let countVowels = function (word) {
  //8:51
  //0. Create a vowelCounter variable
  //1. iterate through the word
  //2. Check whether the current letter is a vowel
  //3. increment the vowelCounter variable if the current letter is a vowel
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
};

console.log(countVowels("bootcamp")); // => 3
console.log(countVowels("apple")); // => 2
console.log(countVowels("pizza")); // => 2

//HAS VOWEL: Write a function hasVowel(str) that tkes in a string and returns a boolean TRUE if the string contains at least one vowel, FALSE otherwise.

let hasVowel = function (word) {
  let i = 0;
  while (i < word.length) {
    //0. write a while loop that iterates through each index of the word
    let letter = word[i]; //1. initialize a variable to hold the letter at the current index of the word
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    ) {
      return true;
    } //2. write a conditional statement that returns true if the letter is "a", "e", "i", "o", or "u"
    i++; //3. increment the counter by 1 each iteration
  }
  return false; //4. if the loop completes without finding a wowel, return false.
};

console.log(hasVowel("dog")); // true
console.log(hasVowel("conventional")); // true
console.log(hasVowel("rhythm")); // false
