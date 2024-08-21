//! .push(n)

//^ The .push(n) method:

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

//! .unshift(n)

//^ The .unshift(n) method:

    // 1. Adds an element to the beginning of an array
    // 2. Returns the new length of the array

//^ Time and Space Complexity:

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// .unshift() increases the length of an array by 1, shifts every element to the right by 1 index, then adds a new element to the front of the array. This means that every element in the array must be moved, so the number of operations scales linear with the size of the array. For this reason, .unshift() has a linear O(n) time complexity. Input size does not affect memory required, so it has a space complexity of O(1)

arr = [2, 3, 4];

arr.unshift(1);

console.log(arr); // [ 1, 2, 3, 4 ]

//! .splice(startIndex, deleteCount, ...items)

//^ The .splice(startIndex, deleteCount, ...items) method:

    // 1. Removes or replacces existing elements in-place
    // 2. AND/OR adds new elements in-place

//^ Time and Space Complexity:

    // 1. Time Complexity: O(n)
    // 2. Space Complexity: O(1)

// .splice() removes an element from an array, then shifts every element over, which gives it a time complexity of O(n). Note that it may be faster than .shift() and .unshift() because the element may not be the first element in the array, which means that fewer than all of the elements will need to be shifted. Also consider that if an element is removed and replaced with a different element, no shifting will occur, which means that the time complexity would be O(1). Space complexity is O(1) because .splice() changes an array in-place.

//^ Syntax:

    // array.splice(startIndex, deleteCount, ...items)

arr = [1, 2, 3, 4];

arr.splice(2, 1); // Here, we remove ONE element starting at INDEX 2.

console.log(arr); // [1, 3, 4]

arr = [1, 3, 4];

arr.splice(1, 1, 5); // Here, we remove ONE element, starting at INDEX 1, then replace that element with '5'

console.log(arr); // [1, 5, 4]

//^ .toSpliced(startIndex, deleteCount, ...items)

// the .toSpliced() method uses the same syntax as .splice(startIndex, deleteCount, ...items), but does not mutate the original array. Rather, it creates a new copy of the array with the specified elements removed or replaced. For this reason.

// Note that .toSpliced() will have time complexity of O(n) because it must copy over every element of the array. It will also have a space complexity of O(n) since it creates a copy of the array.

//! .slice(start, end)

//^ The .slice(start, end) method:

    // 1. Creates copy of a portion of an array from a starting index to an ending (non-inclusive) index
    // 1. Returns the new array

//^ Time and Space Complexity:

    // Time Complexity: O(n)
    // Space Complexity: O(n)

// .slice(start, end) copies each selected element of an array over into a new array one at a time, so the number of operations performed scales linear with the input size and results in a time complexity of O(n). Because we're creating a copy of the array, the space complexity of .slice() is also O(n).

arr = [1, 2, 3, 4, 5]

copiedArr = arr.slice(1, 4); // Here, we copy the elements at indices 1 - 3 (since the end index is non-inclusive) into a new array and then return the copy.

console.log(copiedArr); // [ 2, 3, 4 ]

//! .indexOf(element)

//^ The .indexOf(element) method:

    // 1. Searches an array for the first index where a certain element is found
    // 2. Returns that index
    // 3. If the element is not found in the array, returns -1

//^ Time and Space Complexities:

    // 1. Time Complexity: O(n)
    // 2. Space Complexity: O(1)

// The .indexOf(element) method must iterate through an array as it searches for the provided element, so the number of operations performed scales linear with the size of the array. For this reason, .indexOf(element) has a time complexity of O(n). It does not require allocation of any additional memory, so its space complexity is O(1).

arr = [1, 2, 3, 4, 5];

console.log(arr.indexOf(3)); // 2

//! .map(callback)

//^ The .map(callback) method:

    // 1. Calls a callback function on every element of an array
    // 2. Stores the results of callbacks in a new array
    // 3. Returns the new array

//^ Time and Space Complexities:

    // 1. Time Complexity: O(n) (variable)
    // 2. Space Complexity: O(n)

// The .map(callback) method performs an operation on each element of an array, which means that the number of operations performed scales linear with the size of the array. For this reason, it has a regular time complexity of O(n). Consider also that if the callback function does contain a loop, etc, that its time complexity may become polynomial O(n^x). Because we are creating a new array and populating it with the same number of elements as the original array, .map(callback) requires the allocation of additional memory that scales linear wit hthe size of the original array. This produces a space complexity of O(n).

arr = [1, 2, 3, 4, 5]

let map1 = arr.map((x) => x * 2); // Here we use .map(callback) to multiply every element in the array by 2

console.log(map1); // [ 2, 4, 6, 8, 10 ]

//! .filter(callback)

//^ The .filter(callback) method:

    // 1. filters the elements of an array using a callback
    // 2. adds the filtered elements (those which pass the test) to a new array
    // 3. returns the new array

//^ Time and Space Complexity:

    // Time Complexity: O(n)
    // Space Complexity: O(n)

// The .filter(callback) method performs an operation (filtering by checking each element of the array against the callback function) on every element of the array, which means the number of operations performed scales linear with the size of the array. So .filter(callback) has a time complexity of O(n). Since we're creating a new copy of the array with the filtered elements, the amount of space required may scale with the size of the array depending on how many elements are filtered. So .filter(callback) also has a time complexity of O(n)

arr = [1, 2, 3, 4, 5]

let filtered1 = arr.filter((n) => n < 4); // Here, we use .filter(callback) to return ONLY the elements that are smaller than 4.

console.log(filtered1); // [ 1, 2, 3 ]

arr = ["spray", "elite", "exuberant", "destruction", "present"];

let filtered2 = arr.filter((word) => word.length > 6);

console.log(filtered2); // [ 'exuberant', 'destruction', 'present' ]

//! .reduce(callback, initialValue)

//^ The .reduce(callback, initialValue) method:

    // 1. Executes a 'reducer' callback on every element of an array, in order, passing in the return value from the previous calculation each time
    // 2. Returns the final result of running the reducer across every element of an array as a single value
    // 3. If supplied, .reduce(callback, initialValue) also takes an initial value to start. If no initial value is provided, the first element of the array is used as the initial value

//^ Time and Space Complexity:

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// arr.reduce(callback, initialValue) performs an operation on each element of an array. This means that the number of operations performed scales linear with the size of the array, giing .reduce(callback, initialValue) a time complexity of O(n). We always return a single value, which means that we do not need to allocate any additional memory. Space complexity of O(1).

arr = [1, 2, 3, 4, 5]

let arrSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // Here we create an accumulator to hold the return value of each operation, then use .reduce to add the 'currentValue' of each element of the array to the accumulator as it moves through the array. In the end, we return the sum of all elements of the array added together, starting from 0.

console.log(arrSum); // 15

//! .reverse()

//^ The .reverse() method:

    // 1. Reverses an array in-place
    // 2. Returns the reversed array

//^ Time and Space Complexity:

    // Time Complexity: O(n)
    // Space Complexity: O(1)

// The .reverse() method must iterate through an array in order to reverse its elements, resulting in a time complexity of O(n). It performs this operation in-place, so it has a space complexity of O(1).

arr = [1, 2, 3, 4, 5]

let reversed = arr.reverse()

console.log(reversed); // [ 5, 4, 3, 2, 1 ]

//! Spread [...arr]

//^ Spread Syntax (...):

    // 1. Iterates over each element in an array, expanding them into individual eleemnts

//^ Time and Space Complexity:

    // Time Complexity: O(n)
    // Space Complexity: O(n)

// Because spread syntax iterates through each element of an array, it has a time complexity of O(n). Because it copies the elements of an array into a new array or into another place as individual arguments, it also has a space complexity of O(n).
