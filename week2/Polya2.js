/*
*Polya (The process developed by mathematician George Polya) is the process that is used to solve ANY problem in these four steps:

&1. Understand the problem
&2. Make a plan
&3. Execute the plan
&4. Look back and improve your solution
*/

//*-------------------------------------------------------------( 1. UNDERSTAND THE PROBLEM)--------------------------------------------------------------------------

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

//*------------------------------------------------------------------(2. MAKE A PLAN)--------------------------------------------------------------------------------

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

//*----------------------------------------------------------------(3. EXECUTE THE PLAN)-----------------------------------------------------------------------------

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

//?ADD TO ARRAY: write a function that takes a location (either "Front" or "back") and adds an element to either the front or the back of the given array.
//If the location is anythign besides "Front" or "Back," print an error.
//Your function should not return anything.
//Your function should mutate the original array.

/*
Look up the following JavaScript functions:

&1. push (array.push() method pushes an element to the end of an array and returns the new length of the array. MUTATES)
&2. pop (the array.pop() method removes the LAST element from an array and returns that element. This method changes the length of an array. MUTATES)
&3. shift (the array.shift() method rmoves the first element from an array and returns that removed element. This method changes the length of an array. MUTATES)
&4. unshift (the array.unshift(x,y) adds the specified elements to the beginning of an array and returns the new length of the array. MUTATES)
*/

/*
1. Write a conditional statement to evaluate "location" and then continue if it is either Front or Back, but evaluate to an error message if not.
2. IF the location is front, use the array.unshift method to add the element to the front of the array.
3. IF the location is back, use the array.push() method to add the element to the end of the array.
*/

/*testArray = [1, 2, 3];

//! function addToArray(location, element, arr) {
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
?REMOVE FROM ARRAY: Write a function that takes a location, either FRONT or BACK, and removes the element at eitehr the front or back of the given array.
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

//& string.split() Splits a string into an array using the string.split() method.

let unSplitString = splitString.join(" ");
console.log(unSplitString);

//& string.join() use the array.join() to turn an array back into a string.

//since strings are immutable, you could use these .join and .split methods together to convert the string to an array, change/remove an element of the array, then convert it back to a string. In this way you bypass the immutability of strings.

let str = "helZlo";

let splitArray = string.split("Z");
let joinAgain = splitArray.join("");

console.log(joinAgain); // = "hello"

//In this way, you have effectively changed the immutable string.

//Note that .split and .join methods do NOT mutate the array (or the string, since strings are immutable. console.logging the string after using the .join and .split will yield the original string.)

/*
?REVERSE STRING: Write a function that takes in a stirng and returns a new string where the order of the characters is reversed.

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
?RANGE: Write a function range(min, max) that takes in two numbers. The function should return an array containing all numbers from min to max INCLUSIVE. Define this function using fnction expression syntax.
*/

/*
!let range = function (min, max) {
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
?LOG BETWEEN STEPPER: write a function that takes in three numbers as parameters.
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
?MY INCLUDES: write a function myIncludes(arr, target) that accepts an array and a target value as args.
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
?SUM ARRAY: Write a function sumArray(array) that takes in an array of unnumbers and returns the total sum of all the numbers.
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
?FACTORS OF: Write a function factorsOf(num) that takes in a number as an argument.
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
?MY INDEX OF: Write a function myIndexOf(arr, target) that takes in an array and a target value as arguments.
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
?VOWEL COUNTER: Write a function countVowels(word) that takes in a string word and returns the number of vowels in the word.
Vowels are the letters "a" "e" "i" "o" and "u"

- Write a function expression
- Create a variable 'counter' to store the number of vowels and set = to 0.
- Write a for loop that iterates through every letter of the string.
- Write a conditional to check whether the element at the current index is a vowels
- If it is, increase the value of 'counter' by 1
*/

/*
!let vowelCounterRecall = function(word) {
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

//?HAS VOWEL: Write a function hasVowel(str) that tkes in a string and returns a boolean TRUE if the string contains at least one vowel, FALSE otherwise.

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

/*
?FIZZ BUZZ ARRAY: Write a function fizzBuzz(max) that accepts a number as an argument.
The function should return an aray containing all positive numbers less than max that are divisible by either 3 or 5, but not both.
*/

let fizzBuzz = function (max) {
  let nums = []; //Initialize an empty array to store the numbers that met the conditional

  for (i = 1; i < max; i++) {
    //start a loop from 1 up to the max value, incrementing by 1 each time
    if ((i % 3 === 0 && i % 5 !== 0) || (i % 5 === 0 && i % 3 !== 0)) {
      //Check if i is divisible by 3 or 5, but not both
      nums.push(i); //if the condition is true, push i to the nums array
    }
  }
  return nums; //once the loop is finished, return nums
};

console.log(fizzBuzz(12)); // [ 3, 5, 6, 9, 10 ]
console.log(fizzBuzz(20)); // [ 3, 5, 6, 9, 10, 12, 18 ]

/*
?FIRST VOWEL: Write a function firstVowel(str) that takes in a string and returns the first vowel that appears sequentially in the string.
If the string does not contain a vowel, return null.

- Write a for loop that iterates through each letter of the string
- Write a conditional statement that checks to see whether the element at the current index is equal to a, e, i, o, or u
- If it is, return that letter.
- If the loop completes without finding a vowel, return null
*/

firstVowel = function (str) {
  let i = 0; //set index (counter) = 0;
  while (i < str.length) {
    //Write a while loop that will iterate through each letter of the string
    if (
      //Write a conditional statement to check whether the element at the current index is a vowel
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      return str[i]; //if the element at the current index is a vowel, return it.
    }
    i++; //if not, increment the index (counter) by 1 and run the loop again to check the next index.
  }
  return null; //If the loop completes without finding a vowel, return null.
};

console.log(firstVowel("battery")); // 'a'
console.log(firstVowel("tunnel")); // 'u'
console.log(firstVowel("dog")); // 'o'
console.log(firstVowel("conventional")); // 'o'
console.log(firstVowel("rhythm")); // null

/*
?EVEN NUMBERS: Write a function evenNumbers(max) that takes in a number as an arg.
The funciton should return an array containing all positive even numbers that are less than max.
Define this function using function expression syntax.
*/

let evenNumbers = function (max) {
  let nums = []; //- Initialize a new array nums to hold the numbers that meet the criteria.

  for (i = 1; i < max; i++) {
    //- Write a for loop that iterates through every index from 1 to the max.
    if (i % 2 === 0) {
      //- Write a conditional to check whether each index is even.
      nums.push(i); //- If the number is even, push to nums.
    }
  }
  return nums; //- Once the loop is complete, return nums.
};

console.log(evenNumbers(7)); // [ 2, 4, 6 ]
console.log(evenNumbers(12)); // [ 2, 4, 6, 8, 10 ]
console.log(evenNumbers(15)); // [ 2, 4, 6, 8, 10, 12, 14 ]

/*
?IS PRIME RECALL: Define a function isPrime(number) that returns true if the number is prime and false otherwise.
A umber is prime if it is ony divisible by 1 and itself.

- Check to see if the number is less than 2. 2 is the smallest prime number, so anything less than 2 is not prime.
- Set the index (counter) = 2.
- Write a while loop that will check every index until it reaches the number.
- write a conditional statement that checks to see whether the number is divisible by i.
- if it is, return false.
- if the loop completes without finding any factors, return true because the number is prime.
*/

let isPrime = function (number) {
  if (number < 2) {
    //Check to see if the number is less than 2. If it is, it cannot be prime because 2 is the smallest prime number, so return false.
    return false;
  }

  i = 2; //set the index (counter) equal to 2 so that the loop begins counting at the number 2.

  while (i < number) {
    //write a while loop that iterates through every number between 2 and the the number input.
    if (number % i === 0) {
      //write a conditional that checks to see whether the number is divisible by the number located at each index.
      return false; //if it is divisible by any number between 2 and itself, return false because it is not prime.
    }
    i++; //if the number is not divisible by the number at the current index, run the loop again and check the next number.
  }
  return true; //if no factors are found between 2 and the number input, return true because it is a prime number.
};

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true

/*
?LAST VOWEL: Write a function lastVowel(str) that takes in a string and returns the last vowel that appears sequentially in the string.
Note that the string may contain capitalization.

- Initialize a variable lowerStr to convert the string to lowercase so that this function is not case-senstive.
- Write a for loop that iterates backward through the string.
- Write a conditional statement to check
*/

/*
!let lastVowel = function (str) {
  let lowerStr = str.toLowerCase();
  let i = lowerStr.length - 1;
  while (i <= 0) {
    if ((lowerStr[i] = "a")) {
      return lowerStr[i];
    }
    i--;
  }
};
*/

/*
- define a string of vowels for comparison
- start a loop from the end of the string that iterates toward the beginning
- access each character of the string using its index
- check if the character is a vowel by vonverting it to lowercase and checking if its included in the 'vowels' string.
- if the character is a vowel, return iterate
- if the loop completes without finding a vowel, return null
*/

//& NOTE that in a for loop, the second condition (i <= string.length, etc) does not define when the loop will STOP. Rather, it defines the conditions under which the loop RUNS.

let lastVowel = function (string) {
  let vowels = "aeiou"; //define a string of vowels for comparison

  for (i = string.length - 1; i >= 0; i--) {
    //write a loop that iterates backward through the string input
    let letter = string[i]; //initialize a variable to hold the letter at the current index
    if (vowels.includes(letter.toLowerCase())) {
      //use the .includes method to check whether the letter at the current index matches any of the letters in the 'vowels' string. Use the .toLowerCase method to change the letter at the current index to lower case so that the function is not case-sensitive.
      return letter; //if the letter at the current index matches any of the vowels, return that letter.
    }
  }
  return null; //if the string runs to completion without finding a vowel, return null.
};

console.log(lastVowel("battery")); // 'e'
console.log(lastVowel("TUNNEL")); // 'E'
console.log(lastVowel("dog")); // 'o'
console.log(lastVowel("conventional")); // 'a'
console.log(lastVowel("rhythm")); // null

/*
? PIT PAT: Write a function pitPat(max) that accepts a number as an argumetn and returns an array containing all postive numbers less than or equal to the max that are divisible by 4 or 6, but not both.

- Create an empty array nums to hold numbers that meet the criteria.
- write a loop that iterates from 1 to the max.
- write a conditional to check whether the number is divisible by 4 but not six
- then check whether the number is divisible by 6 and not 4
- if a number meets these criteria, use .push to add it to nums.
- after the loop runs to completion, return nums
*/

let pitPat = function (number) {
  let nums = []; //Create an empty array nums to hold numbers that meet the criteria.

  for (i = 1; i <= number; i++) {
    //write a loop that iterates from 1 to the max
    if (i % 4 === 0 && i % 6 !== 0) {
      //write a conditional to check if the number is divisible by 4 but not 6
      nums.push(i); //if so, use .push to add to nums array
    } else if (i % 6 === 0 && i % 4 !== 0) {
      //write a conditional to check if the number is divisible by 6 but not 4.
      nums.push(i); //if so, use .push to add to nums array
    }
  }
  return nums; //after the loop is complete, return the array nums.
};

console.log(pitPat(18)); // [ 4, 6, 8, 16, 18 ]
console.log(pitPat(30)); // [ 4, 6, 8, 16, 18, 20, 28, 30 ]

/*
? REMOVE LAST VOWEL: Write a function removeLastVowel(word) that takes in a string and returns the string with its last vowel removed.
& string.slice(start, end) method extracts a section of a string and returns it as a new string. NO MUTATION.
& substring.includes(searchstring, position) method checks whether a substring is a part of a string or not.

- define a string of vowels for comparison
- start a loop from the end of the word toward the beginning
- initialize a variable to contain the letter at the current index-
- write a conditional with the .includes method to check whether the character is a vowel.
- if it is a vowel, use .slice to return a new string without the vowel.
- if the loop completes without finding a vowel, return the original word.
*/

let removeLastVowel = function (word) {
  let vowels = "aeiou"; //define a string of vowels for compariosn

  for (i = word.length - 1; i >= 0; i--) {
    //write a for loop that iterates backward through the word input.
    let letter = word[i]; //initialize a variable to contain the letter at the current index of the word input.

    if (vowels.includes(letter)) {
      //write a conditional that uses the .includes method to check whether the letter is a vowel
      return word.slice(0, i) + word.slice(i + 1); //if it is a vowel, use the .slice() method to return the word without the vowel.
    }
  }
  return word; //if no vowels are found, return the original word.
};

//^-------------------------------------------------------------SLICE PRACTICE------------------------------------------------------------------------------------

let practiceString = "practice string";

console.log(practiceString.slice(0, 5)); // = "pract" returns characters at indices 1-5
console.log(practiceString.slice(6)); // = "ce string" returns characters at indices 6+

console.log(practiceString.slice(0, 3) + practiceString.slice(4)); // = "pra tice string" (character at index 4 [c] cut out)

//^---------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
? PAIRS MAKER: Write a function pairsMaker(arr) that takes in an array as an argument.
The function should return a 2D array where the subarrays represent unique pairs of eleemtns fro the input array.

- Initialize an empty array to store the pairs
- Write an outer loop that goes through each element in the array.
- Write an inner loop that starts from the element following the current element of the outer loop.
- Create a pair with the current element of the outer loop and the current element of the inner loop.
- add the new pair to the 'pairs' array.
- return the 'pairs' array
*/

let pairsMaker = function (array) {
  let pairs = []; //initialize a new array to hold the pairs

  for (let i = 0; i < array.length; i++) {
    //The outer loop is a regular for loop that iterates through every element of the array.
    for (let j = i + 1; j < array.length; j++) {
      //write an inner loop that starts at the index that the first loop is iterating through.
      let pair = [array[i], array[j]]; //create a pair with the current element of the outer and the inner loop
      pairs.push(pair); //add the new pair to the pairs array using the .push method
    }
  }
  return pairs;
};

console.log(pairsMaker(["a", "b", "c", "d"])); // =>
// [ [ 'a', 'b' ],
//   [ 'a', 'c' ],
//   [ 'a', 'd' ],
//   [ 'b', 'c' ],
//   [ 'b', 'd' ],
//   [ 'c', 'd' ] ]

console.log(pairsMaker(["Rosemary", "Alex", "Connor"])); // =>
// [ [ 'Rosemary', 'Alex' ],
//   [ 'Rosemary', 'Connor' ],
//   [ 'Alex', 'Connor' ] ]

/*
? MIN VALUE: Write a function minValue(nums) that takes in an array of nubers as an argument.
The function should return the smallest number of the array.
If the array is empty, the function should return null.
*/

let minValue = function (nums) {
  let min = null; // null = nothing
  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    //if the current num is smaller than the curren min, repalce the min with that number
    //console.log(num); // use console.log to check whether the for loop is correctly iterating through the numbers in the array.
    if (min === null || num < min) {
      min = num;
    }
  }
  return min;
};

console.log(minValue([5, 4, 3, 7]));

/*
? TWO SUM: Write a function twoSum(arr, target) that accepts an array and a target nubre as arguments.
The function should return a boolean indicating if two distinct numbers of the array add up to the target value.
You can assume that input array contains only unique numbers.

- write a for loop to iterate theough each element in the input array.
- assign the element at the current index to num1
- iterate through the rest of the array starting from the next element (i + 1)
- Assign the element at the current intex to num2.
- check if the sum of num1 and num2 equals the target number
- if it does, return true.
- if the loops complete and no pairs add up to the target, return false.
*/

let twoSum = function (arr, target) {
  for (let i = 0; i < arr.length; i++) {
    //standard for loop to iterate through each element in the array from start to finish.
    let num1 = arr[i]; //initialize a variable num1 to store the element located at the current index of the array.
    for (let j = i + 1; j < arr.length; j++) {
      //iterate through the rest of the array starting form the next element.
      let num2 = arr[j]; //initialize a variable num2 to store the element located at the current index of the array.
      if (num1 + num2 === target) {
        //write a conditional to check whether num1 and num2 (pair) is equal to the target.
        return true; // if so, return true
      }
    }
  }
  return false; // if the loops finish without finding a pair that adds up to the target value, return false.
};

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

let birds = ["finch", "eagle", "parrot", "sparrow"];

console.log(birds.slice(0, 2));

/*
? PIG LATIN: Write a function pigLatinWord(word) that takes in a word string and translates the word into pig latin.
& string.slice() method: extracts a section of a string and returns t as a new string. String.slice(0, 2) = Str, string.slice(1) = tring
& string.includes method: sentence.includes(word), word.includes(letter), etc
Pig Latin is a take on the English language wehre you move any consonant cluster from the start of the word to the end of the word; when words begin on a vowel, you add "-yay." Vowels are aeiou.

- For words that start with a vowel, add 'yay' to the end of the word.
- For words that start with a consonant, move all letters that come BEFORE the first vowel to the END of the word, then add 'ay'
& create a string of vowels for comparison
& Determine if the first letter is a vowel.
    ^If it is a vowel, return that word plus "yay"
& Iterate until I find a vowel.
    ^Take all of the consonants before the current letter
    ^append that consonant clump to the end of the word
    ^add "ay" and then return the word
    //-create a loop that iterates through every letter of the word.
    //-Write a conditional that uses .includes and .toLowerCase to determine whether the letter at the current index is a vowel
    //-if it is a vowel, return the original word with "-yay-" added to the end.
*/

/*
!let pigLatinWord = function (word) {
  let vowels = "aeiou";

  for (i = 0; i < word.length; i++) {
    let letter = word[i];

    if (vowels.includes(letter.toLowerCase())) {
      return word + "yay";
    }
  }
};
*/

function pigLatinWord(word) {
  let vowels = "aeiou"; //initialize a string of vowels for comparison
  if (vowels.includes(word.toLowerCase()[0])) {
    //Write a conditional to check whether the first letter of the word is vowel.
    return word + "yay"; // If so, return the word with "yay" added to the end.
  }
  for (i = 0; i < word.length; i++) {
    //If not, write a loop that iterates through every letter of the word.
    let letter = word[i]; //initialize a variable to store the letter at the current index

    if (vowels.includes(letter)) {
      //write a conditional with string.includes(letter) to test whether the letter at the current index is a vowel
      let firstPart = word.slice(i); //use .slice to extract every from the vowel to what remains of the word after the vowel located at the current indix
      let secondPart = word.slice(0, i); //use .slice to extract the letters that occur in the word prior to the vowel located at the current index.
      return firstPart + secondPart + "ay"; //concatenate the firstPart and SecondPart of the word with "ay" at the end, then return the resulting string.
    }
  }
}

console.log(pigLatinWord("apple")); //=> "appleyay"
console.log(pigLatinWord("banana")); //=> "ananabay"

/*
? PIG LATIN RECALL: Write a function pigLatinWord(word) that takes in a word string and translates the word into pig latin ^^^
*/

let pigLatinWordRecall = function (word) {
  let vowels = "aeiou"; // initialize a varuabke to hold a string of vowels for comparion

  if (vowels.includes(word[0])) {
    //write a conditional to determine whether the letter at the FIRST INDEX(0) of the word is a vowel.
    return word + "yay"; //If so, return the word plus the suffix "yay"
  }

  for (i = 0; i < word.length; i += 1) {
    //if NOT, write a loop to iterate through the word from the first index to the last.
    let letter = word[i]; //initialize a variable to hold the letter at the current index of the word.

    if (vowels.includes(letter)) {
      //write a conditional to determine if the letter at the current index is a vowel.
      let firstPart = word.slice(i); //if it is, use .slice to cut off the remainder of the word after the vowel at the current index.
      let secondPart = word.slice(0, i); //use slice to cut off the front of the word from index 0 to the index where the first vowel is located
      return firstPart + secondPart + "ay"; //add the back end of the word first, then the first part of the word up to the first vowel, plus the "ay" suffix
    }
  }
};

console.log(pigLatinWordRecall("apple")); //=> "appleyay"
console.log(pigLatinWordRecall("eat")); //=> "eatyay"
console.log(pigLatinWordRecall("banana")); //=> "ananabay"
console.log(pigLatinWordRecall("trash")); //=> "ashtray"

/*
? LEAST COMMON MULTIPLE: Write a function leastCommonMultiple(num1, num2) that takes in two numbers as arguments.
The function should return the smallest number that is divisible by both num1 and num2

- start a loop from 1 up to the product of num1 and num2
- check if i is a multiple of both num2 and num2
- if it is, return 'i' as the LCM
*/

let leastCommonMultiple = function (num1, num2) {
  for (let i = 1; i <= num1 * num2; i++) {
    //write a loop that iterates from 1 (not 0, becuase 0 is not relevant in factoring problems) to the product of num1 and num2. We use the product of num1 * num2 because the product will be the greatest common multiple. If there are no smaller common multiples, this will be what we return as the least common multiple.
    if (i % num1 === 0 && i % num2 === 0) {
      //check to see if the number at the current index is evenly divisible by num1 AND num2. If it is, then it is a common multiple of both. Since we are iterating from 1 up, the first common multiple that we find will be the least common multiple.
      return i; //if we find a common multiple at the current index, return the number at that index.
    }
  }
  //There is no need to return anything else because with respect to positive integers, there should always be a least common multiple. IF there is not, the function will end withour returning a value (undefined).
};

console.log(leastCommonMultiple(4, 6)); // 12
console.log(leastCommonMultiple(3, 5)); // 15
console.log(leastCommonMultiple(2, 10)); // 10

/*
? SUM ARRAY: Write a function sumArray(arr) that accepts an array as an argument.
The function should return the total sum of all values in the array.

- initialize a variable sum to hold the values that will be added together.
- Write a for loop that iterates through each element of the array.
- For each iteration, add the value of the number at the current index to sum.
- After the loop runs to completion, return the sum.
*/

let sumArray2 = function (arr) {
  let sum = 0;

  for (i = 0; i < arr.length; i++) {
    let num = arr[i];
    sum += num;
  }
  return sum;
};

console.log(sumArray([4, 3, -1, 10])); // 16
console.log(sumArray([6, 7, 2])); // 15
console.log(sumArray([])); // 0
