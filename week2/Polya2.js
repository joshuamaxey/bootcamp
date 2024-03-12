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
