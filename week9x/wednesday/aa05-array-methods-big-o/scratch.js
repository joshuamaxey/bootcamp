//! .push()

//^ The .push() method:

    // 1. adds an element to the end of an array
    // 2. returns the new length of the array

//^ Time and space complexities:

    // Time Complexity: O(1)
    // Space Complexity: O(1)

// Most of the time, push() is an O(1) operation because it only requires that we copy one value over into one of our array's empty slots. It CAN sometimes become an O(n) operation (worst-case) when we have to resize, but this is not the norm and .push() is considered to have an O(1) time complexity. It also has an O(1) space complexity because it only ever requires the space that's necessary to store the 1 extra element.

let arr = [];

arr.push(1);

console.log(arr); // [ 1 ]

//! .pop()

//^ The .pop() method:

    // 1. Removes the last element from an array
    // 2. Returns the removed element

//^ Time and Space Complexities:

    // Time Complexity: O(1)
    // Space Complexity: O(1)

// .pop performs only one operation and does not require the allocation of any extra space, so it is an O(1) operation with respect to both time and space complexity.

arr = [1]

arr.pop();

console.log(arr); // []

//! .shift()

//^ The .shift() method:

    // 1. Removes the first element from an array
    // 2. Returns that removed element

//^ Time and Space Complexity:

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// .shift() removes the first element from an array, then shifts all remaining elements to the left by 1. The shifting operation must be performed for every element of the array, so the number of operations increases linear to the size of the array. For this reason, .shift() has a time complexity of O(n). It has a space complexity of O(1) because it changes the array in-place and does not require the allocation of any additional memory.

arr = [1, 2, 3]

arr.shift();

console.log(arr); // [ 2, 3 ]

//! .unshift()

//^ The .unshift() method:

    // 1. Adds an element to the beginning of an array
    // 2. Returns the new length of the array

//^ Time and Space Complexity:

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// .unshift() increases the length of an array by 1, shifts every element to the right by 1 index, then adds a new element to the front of the array. This means that every element in the array must be moved, so the number of operations scales linear with the size of the array. For this reason, .unshift() has a linear O(n) time complexity. Input size does not affect memory required, so it has a space complexity of O(1)

//! .splice()

//^ The .splice() method:

    // 1.
