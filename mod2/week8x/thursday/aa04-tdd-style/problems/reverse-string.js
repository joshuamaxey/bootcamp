function reverseString(string) {

  if (typeof string !== "string") { // If the input is not a string...

    throw new TypeError("Input must be a string") // ...throw a TypeError
  }

  let reversedString = ""; // initialize a new string to hold the reversed letters of the input string

  for (let i = string.length - 1; i >= 0; i--) { // iterate backward through the input string using a for(){} loop, beginning with the last index of the string and ending at index 0

    let char = string[i]; // initialize a new variable 'char' to hold the letter located at the current index of the string
    reversedString += char; // add the letter located at the current index of the string (char) to 'reversedString'
  }

  return reversedString; // After we've finished iterating backward through the input string and adding each letter to our reversed string, return reversedString
};

// console.log(reverseString("Joshua"));
// console.log(reverseString(50));

module.exports = reverseString
