function isFive(num) {
  // Your code here
  // Should return true if the number is 5 otherwise false

  if (num === 5) return true;

  else return false;

  //^ alternatively:

  return num === 5;

}

function isOdd(number) {
  // Your code here

  // should throw an error if num is not type of number
  if (typeof number !== "number") throw new Error //^ Note that THIS condition neds to come first. If the input type is NOT a number and we try the modulo statements first, it could cause unexpected behavior that may result in failing the spec.

  // should return true if number is odd
  if (number % 2 !== 0) return true;

  // should return false if num is even
  if (number % 2 === 0) return false;

  //^ alternatively:

  return number % 2 !== 0; // handles first two conditions
}

function myRange(min, max, step = 1) {
  // if step is not provided, should return an array of all numbers from min to max (inclusive) with a default step of 1
  // if step is provided, shoudl return an array of all numbers from min to max (inclusive) with the provided step as the increment

  let arr = []; // initialize an empty array to hold the values

  for (let i = min; i <= max; i+= step) { // iterate from the min to the max, incrementing by the step. Since the step is set to 1 by default, we don't need to account for whether the step is provided. If it is not provided, it will default to the value of 1.

    arr.push(i); // Push the element located at the current index of the array to 'arr'
  }

  return arr; // After the loop is complete, return 'arr'

}


module.exports = { isFive, isOdd, myRange };
