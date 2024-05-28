//! Funky Sorts

// We have learned a variety of methods for sorting integers from smallest to largest. What about other kinds of sorting?

//! Zeroes to the Right

// Given an array 'nums' write a function to move all 0's to the end of the array while maintaining the relative order of the non-zero elements

// Input: [0, 1, 0, 4, 15]
// Output: [1, 4, 15, 0, 0]

// Do this in-place without making a copy of the array
// Minimize the total number of operations

//^ Read this problem over and think back to our first enounter with it.

// Compare your current understanding with your previous understanding.

// Now you know what it means to write an in-place algorithm (space complexity of O(1)) and how to minimize the number of operations (optimize time complexity).

// You're familiar with in-place sorting techniques like swapping and shifting, and you know the costs of each one along with shift(), unshift(), push(), pop(), and splice().

//^ Using this knowledge, how would you solve this problem. Can you solve it in O(n) time?

//! Zeroes to the Right Revisited

// 1. Create a pointer called firstZero that points to the left-most zero in the array
// 2. Iterate through the array
// 3. If firstZero has not been set, continue on until you reach a zero
// 4. When you reach the first zero, set firstZero to the current index
// 5. When you reach a non-zero value, swap its position with the firstero and increment firstZero

// Here it is expressed in code:

function moveZeroes(nums) {

    // creat a pointer called 'firstZero' that points to the left-ost zero in the array
    let firstZero = -1; // starts as -1 because there are no zeroes encountered yet

    // Iterate through the arrayu
    for (let i = 0; i < nums.length; i++) {

        if (firstZero === -1) { // if firstZero has not been set, continue until you reach a zero

            if (nums[i] === 0) { // When we reach the first zero, set firstZero = current index
                firstZero = i;
            }
        }

        else if (nums[i] !== 0) { // if the element locateda t the current index of the array is a non-zero value
            [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]]; // swap its position with firstZero

            firstZero++; // then increment firstZero by 1
        }
    }

    return nums;
}

//^ Using the two pointer, array iteration, and in-place-swaps, we can solve this problem optimally.

//! Even/Odd Sort

// Given an array 'nums', sort the array in ascending order with all the even numbers on the left and all the odds on the right

// input: [9, 8, 7, 6, 5, 4, 3, 2, 1]
// output: [2, 4, 6, 8, 1, 3, 5, 7, 9]

//^ There are no time or space requirements so you can solve this however you want. COnsier a 2-array variation of out-of-place selection sort

// 1. Create two empty arrays: evens and odds
// 2. Find the smallest even and odd values in the array
// 3. Add these to the end of the even and odd arrays
// 4. Remoe the smallest even and odd values from the array
// 5. Repeat 2 through 4 until the input array is empty
// 6. Join the even and odd arrays and return

function evenOddSort(nums) {

    // create two empty arrays: evens and odds
    const evens = [];
    const odds = [];

    // Repeat 2 through 4 until the input array is empty
    while (nums.length > 0) {

        // Find the smallest even and odd values in the array
        let smallestEven = Infinity;
        let smallestOdd = Infinity;

        for (let i = 0; i < nums.length; i++) {

            if (nums[i] % 2 === 0) { // if the element at the current index of the array is even

                if (nums[i] < smallestEven) {
                    smallestEven = nums[i];
                }
            }
        }

        // Add these to the end of the even and odd arrays
        if (smallestEven !== Infinity) {
            evens.push(smallestEven);

            // Remove the smallest even value from the array
            let smallestEvenIndex = nums.indexOf(smallestEven);
            nums.splice(smallestEvenIndex, 1);
        }

        if (smallestOdd !== Infinity) {
            odds.push(smallestOdd);

            // Remove the smallest odd value from the array
            let smallestOddIndex = nums.indexOf(smallestOdd);
            nums.splice(smallestOddIndex, 1)
        }
    }

    // Join the even and odd arrays and return
    return [...evens, ...odds];
}

//! Summary

// Learned to integrate the coding techniques you've learned from sorting into various 'funky' sorts that commonly show up in coding

// Now we just need to practice.
