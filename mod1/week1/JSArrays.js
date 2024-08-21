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

function aCounterFor(word) {
  let count = 0;
  for (let i = 0; i < word.length; i += 1) {
    let char = word[i];
    if (char === "a" || char === "A") {
      count += 1;
    }
  }
  return count;
}

console.log(aCounterFor("apple")); // = 1

let i = 0;

function eCounterWhile(word) {
  let count = 0;
  let i = 0;

  while (i < word.length) {
    let char = word[i];
    if (char === "e" || char === "E") {
      count += 1;
    }
    i++;
  }
  return count;
}

console.log(eCounterWhile("apple")); // => 1
console.log(eCounterWhile("appleapple")); // => 2
console.log(eCounterWhile("Appleee"));

function isPrime(n) {
  if (n < 2) {
    return false; //The smallest prime number is 2, so the first thing we do is check to see if the number is less than 2. If so, it can't be prime. return false.
  }
  for (i = 2; i < n; i++) {
    //set the index = 2 because dividing by less than 2 won't help determine if a number is prime or not. prime numbers are numbers that cannot be divided by any WHOLE besides 1 and itself, so dividng by 1 tells us nothing and any decimal between 1 and 2 is irrelevant.
    if (n % i === 0) {
      //if n is divisible by i (any whole number that is >= 2), then it is not prime
      return false;
    }
  }
  return true; // if a number is 2 or greater and is not divisible by any whole number greater than or equal to 2, it is prime.
}

console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // = true

function fizzBuzz(n) {
  for (let i = 0; i < n; i++) {
    //default for loop. counter(i) starts at 0, stops when it reaches n (the argument), and increments by 1+ each iteration
    if (i % 3 === 0 && i % 5 !== 0) {
      //here we check to see if the number is divisible by 3 and NOT divisible by five.
      console.log(i); //We tell the computer to print the numbers that are divisible by 3 and NOT divisible by 5.
    } else if (i % 5 === 0 && i % 3 !== 0) {
      //we check to see if the number (i) is divisible by five and NOT divisible by 3.
      console.log(i); //we tell the computer to also print the numbers that are divisible by 5 and NOT divisible by 3.
    }
  }
}

fizzBuzz(20); /* prints out:
3
5
6
9
10
12
18
*/

function isSubstring(string, substring) {
  let lowerString = string.toLowerCase();
  let lowerSubstring = substring.toLowerCase(); //convert both strings to lowercase so that this function is not case-sensitive.

  return lowerString.indexOf(lowerSubstring) !== -1; //When the .indexOf method returns a -1, it means that the substring is not present within the string. If the substring isn't present within the string, the index returned by the .indexOf will be -1 because indices start at 0 so there is no index at -1, just like there is no substring within the string. We use the strict inequlity operator to check and see if the index returned by the .indexOf method is NOT equal to -1. If any number is returned except for -1, it means that the substring IS located within the string at a certain index. This operator will return TRUE, therefore, if the substring is located within the string and FALSE if it is not.

  //**remember to use the return keyword, or the function will evaluate to "undefined".
}

console.log(isSubstring("The cat went to the store", "he cat went")); // => true
console.log(isSubstring("Time to program", "time")); // => true
console.log(isSubstring("Jump for joy", "joys")); // => false
