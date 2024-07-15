//! Zeroes to the Right

//^ Given an array (nums), write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Sort the array in-place

// Minimize the total number of operations

arr = [0, 1, 0, 4, 15];

arr2 = [1, 0, 6, 7, 0, 10, 12, 0, 0, 3, 2, 1];

//^ Polya

// 1. Create a pointer called firstZero that opints to the left-most zero in the array
// 2. Iterate through the array
// 3. If firstZero has been set, continue until we reach a zero
// 4. When we reach the first zero, set firstZero to the current index
// 5. When you reach a non-zero value, swap its position with firstZero and increment firstZero

function moveZeroes(nums) {

    let firstZero = -1; // inititalize a new pointer variable 'firstZero' which will point to the left-most 0 in the array

    for (let i = 0; i < nums.length; i++) { // iterate through the array

        if (firstZero === -1) { // If 'firstZero' is -1 (an invalid index)...

            if (nums[i] === 0) firstZero = i; // ...and if the element located at the current index is 0, set firstZero = the current index
        }

        else if (nums[i] !== 0) { // Otherwise (if firstZero is NOT -1 [is a valid index]), and if the element located at the current index of the array is NOT a 0...

            [nums[i], nums[firstZero]] = [nums[firstZero], nums[i]]; // ...Then switch the 0 located at 'firstZero' with the element located at the current index of the array
            firstZero++; // Then increment 'firstZero'
        }
    }
    return nums; // Return the mutated array
}

//& With respect to the logica of this code, why is it that we have to increment the value of 'firstZero' each iteration of our loop uner the condition that firstZero is a valid index and we've swapped that 0 with the next non-0 value?

console.log(moveZeroes(arr)); // [ 1, 4, 15, 0, 0 ]
console.log(moveZeroes(arr2)); // [ 1, 6, 7, 10, 12, 3, 2, 1,  0,  0, 0, 0 ]

//! Even/Odd Sort

//^ Given an array (nums), sort the array in ascending order with all the even numbers on the left and all the odds on the right.

let arr3 = [9, 8, 7, 6, 5, 4, 3, 2, 1];

//^ Polya

// 1. Create two empty arrays: evens and odds
// 2. Find the smallest even and odd values in the array
// 3. Add these to the end of the even and odd arrays
// 4. Remove the smallest even and odd values from the array
// 5. Repeat 2 - 4 until the input array is empty
// 6. Join the even and odd arrays and return

function evenOddSort(nums) {

    // Create our two empty arrays
    let evens = [];
    let odds = [];

    // Repeat steps 2 - 4 until nums is empty (find the smallest values, add them to the ends of our arrays, then remove them from nums)
    while (nums.length > 0) {

        // Find the smallest even and odd values in the array
        let smallestEven = Infinity;
        let smallestOdd = Infinity;

        for (let i = 0; i < nums.length; i++) {

            if (nums[i] % 2 === 0) { // if the number at the current index is even

                if (nums[i] < smallestEven) { // and if its smaller than the current smallestEven
                    smallestEven = nums[i]; // make it our new smallestEven
                }
            } else if (nums[i] % 2 === 1) { // otherwise if the number at the current index is odd

                if (nums[i] < smallestOdd) { // and if its smaller than the current smallestOdd
                    smallestOdd = nums[i]; // make it our new smallestOdd
                }
            }
        }

        // Add the smallest even to the end of the evens array
        if (smallestEven !== Infinity) {
            evens.push(smallestEven);

            // Remove the smallest even value from the array
            let smallestEvenIndex = nums.indexOf(smallestEven);
            nums.splice(smallestEvenIndex, 1);
        }

        // Add the smallest odd to the end of the odds array
        if  (smallestOdd !== Infinity) {
            odds.push(smallestOdd);

            // Remove the smallest odd value from the array
            let smallestOddIndex = nums.indexOf(smallestOdd);
            nums.splice(smallestOddIndex, 1);
        }
    }

    // Join the even and odd arrays and return the resulting array
    return [...evens, ...odds];
}

console.log(evenOddSort(arr3)); // [2, 4, 6, 8, 1, 3, 5, 7, 9];
