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
