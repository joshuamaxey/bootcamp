/*
console.log("42" == 42);
console.log(2 + 4 * 5);
//console.log(!(A || B) === (!A && !B));
console.log(!false || (false && true));
console.log(34 % 5);

let x = 7;
x++;
x - 2;
x *= 3;
console.log(x);

console.log("threshold"[1]);

let num = 31;
let isPositive = num > 0;
let isEven = num % 2 === 0;
console.log(isPositive && isEven);

let list = ["apples", "bananas", "oranges"];

console.log(typeof list);
*/

//! Calculator--------------------------------------------

function calculator(num1, operator, num2) {
  if (operator === "+") {
    return num1 + num2;
  } else if (operator === "-") {
    return num1 - num2;
  } else if (operator === "*") {
    return num1 * num2;
  } else if (operator === "/") {
    return num1 / num2;
  } else {
    return "Invalid Operator";
  }
}

console.log(calculator(1, "+", 3));
console.log(calculator(10, "-", 5));
console.log(calculator(3, "*", 6));
console.log(calculator(25, "/", 5));
console.log(calculator(1, "i", 3));

//! Highest Average--------------------------------------

/*
function getAverage(nums) {
  let sum = 0;

  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
}
*/

function getAverage(nums) {
  if (nums.length === 0) {
    //first, check to see if the array is empty.
    return null; //if array.length === 0, return null.
  } else if (typeof nums !== "object") {
    //for edge cases, check if data type is anything other than 'object' (arrays are objects)
    return null; //If the data type is not 'object' return null.
  }

  let sum = 0; //initialie a variable to hold the sum of the values at each index of the array.

  for (i = 0; i < nums.length; i++) {
    //write a for loop that iterates through each index of the array.
    let el = nums[i]; //initialize a variable to hold the element located at he current index of the array.
    sum += el; //increment sum by the value of the element at the current index of the array.
  }
  let avg = sum / nums.length; //initialize a variable avg to hold the sum of the elements in the array divided by the length of the array.
  return avg; //return the average of the numbers in the array.
}

function highestAverage(numList) {
  let highestAvg = 0;
  let indexOfHighestAvg = -1;

  for (i = 0; i < numList.length; i++) {
    let currentAvg = getAverage(numList[i]);

    if (currentAvg > highestAvg) {
      highestAvg = currentAvg;
      indexOfHighestAvg = i;
    }
  }
  return indexOfHighestAvg;
}

console.log(getAverage[(1, 2, 3)]);
console.log(
  highestAverage([
    [2, 3],
    [5, 7],
  ])
);

//! Debugging evenNumbersBelow-----------------------------

function evenNumbersBelow(num) {
  let arr = [];

  if (num % 2 !== 0) {
    for (i = num - 1; i >= 0; i -= 2) {
      arr.unshift(i);
    }
    return arr;
  }
  for (i = num - 2; i >= 0; i -= 2) {
    arr.unshift(i);
  }
  return arr;
}
