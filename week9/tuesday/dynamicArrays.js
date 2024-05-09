//! Array Resizing

arr = [255, 256, 43690, 1431655765]

// Lets say that we want to push another value to the end of this array.

arr.push(1);

console.log(arr); // [ 255, 256, 43690, 1431655765, 1 ]

// To declare this array, we request 16 bytes of memory from the operating system and fill in the four array values like this:

//  104      105      106      107
//* 00000000 00000000 00000000 11111111 (255)

//  108      109      110      111
//* 00000000 00000000 00000001 00000000 (256)

//  112      113      114      115
//* 00000000 00000000 10101010 10101010 (43690)

//  116      117      118      119
//* 01010101 01010101 01010101 01010101 (1431655765)

// So the OS has granted the program permission to read and write 16 bytes:

// Starting with byte 104
// Ending with byte 119

// If you try to write the 'new' value (the one you're pushing) into the next four bytes of memory (120 - 123), you will violate memory permissions and throw a SEGMENTATION FAULT ERROR.

// It's possible to requrest access to those bytes, but there's no way to guarantee they'll be free. The OS may have assigned that memory to another function already.

//^ So in order to accomodate the new element, the array needs to resize.

// This means that the program requests 20 new bytes of memory.
// Then it copies the old values into the new slots.
// Then it writes the NEW value into the last slot.
// Then frees the old memory back to the OS, ready to be reassigned to something else.

//^ The new memory would look something like this:

//  200      201      202      203
//* 00000000 00000000 00000000 11111111 (255)

//  204      205      206      207
//* 00000000 00000000 00000001 00000000 (256)

//  208      209      212      211
//* 00000000 00000000 10101010 10101010 (43690)

//  212      213      214      215
//* 01010101 01010101 01010101 01010101 (1431655765)

//  216      217      218      219
//* 00000000 00000000 00000000 00000001 (1)

//^ Because each value must be copied from the old spot in memory to the new spots one at a time, which means that resizing is an O of n operation (runtime increases linearly to the input size). So if the array is very large, this is a fairly slow process.

//! Overallocation to Speed Up Resizing

// Overallocating memory in array creation enables us to trade space (memory) for time (speed). In other words, we save time by allocating extra space to arrays when we create them. That way we can assign new values without resizing.

// Most of the time, a program will request more memory than is neede to store an array.

// For instance, with respect to our array:

//^ We perceive that the array looks like this:

[ 255, 256, 43690, 1431655765, 1 ]

//^ but the space it occupies in memory looks like this:

[ 255, 256, 43690, 1431655765, 1, "empty", "empty", "empty" ]

// So now, we can push three more values without resizing the array. All we have to do is write over the mpty slots, which is an operation that carries O of 1 time complexity. Thus, we save time by using additional space.

// Due to overallocation, resizing becomes less frequent as an array grows in size.

// Because of this, and since big-O only matters for large values of n:

//^ array.push() is considered to be an operation with O of 1 time complexity.

//! Testing Overallocation

function addToBack(n) {

    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i + 1)
    }

    return arr;
}

function addToFrontPreallocated(n) {
    //preallocate n slots of memory in an array //^ (??)

    const arr = new Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }

    return arr;
}

//^ Both of these functions do the same thing:

// Given a number, n, fill an array with integers 1 through n.

// addToBack(n) does this with arr.push()

// addToFrontPreallocated(n) preallocates the memory and fills it in using indexing.

//^ Lets compare the performance

n = 10000000

startTimeBack = Date.now();
arr = addToBack(n);
endTimeBack = Date.now();

startTimePre = Date.now();
arr = addToFrontPreallocated(n);
endTimePre = Date.now();

console.log("addToBack(" + n + ") = " + (endTimeBack - startTimeBack) + "ms"); // 355ms

console.log("addToFrontPreallocated(" + n + ") = " + (endTimePre - startTimePre) + "ms"); // 88ms

// So this means that addToFrontPreallocated(n) is four times faster (or 400% the speed) of addToBack. Pre-allocating space saves a considerable amount of time.

// Also note that this difference occurs for (n) = 10,000,000. For smaller values, the difference is hardly noticeable.

//! push() VS unshift() VS splice()

// array.push() adds an element to the back of an array with O of 1 time complexity.

// Now lets take our array arr and add a 0 to the front.

// Assume we have 8 blocks of allocated memory starting from byte 200 - 231

arr = [255, 256, 43690, 1431655765, 1]

arr.unshift(0);

console.log(arr) // [ 0, 255, 256, 43690, 1431655765, 1 ]

//^ Right now, we have extra space at the end of the array because of overallocation. That space at the end of the array doesn't help us add an element to the beginning of the array. To do this, we need to shift all of the values in the array to the right by 1 and THEN add the new value to the front.

// So arr.unshift(0), the operation we performed on line 147 above, looks something like this under the hood:

//* [255, 256, 43690, 1431655765, 1, <empty>, <empty>, <empty>]    // Start
//* [255, 256, 43690, 1431655765, 1, 1, <empty>, <empty>]          // Shift 1
//* [255, 256, 43690, 1431655765, 1431655765, 1, <empty>, <empty>] // Shift 1431655765
//* [255, 256, 43690, 43690, 1431655765, 1, <empty>, <empty>]      // Shift 43690
//* [255, 256, 256, 43690, 1431655765, 1, <empty>, <empty>]        // Shift 256
//* [255, 255, 256, 43690, 1431655765, 1, <empty>, <empty>]        // Shift 255
//* [0, 255, 256, 43690, 1431655765, 1, <empty>, <empty>]          // Overwrite first element to 0

// This particular operation requires 5 shifting steps for the array of length 5.

// So it takes (n) steps for any array of length (n).

//^ This means that unshift() is an operation that has O of n time complexity.

//^ The same is true for shift(), which removes the first value and then shifts each other element to the left by one (O of n).

// What about splice()?

// Splicing an element at the end of an array is the same as push(), and splicing at the beginning is the same as unshift()

// Splicing exactly in the middle requires shifting every element after the midpoint for n/2 steps.

//^ Because big-O ignores constant coefficients like 1/2, splice() is considered to be an operation that has O of n time complexity as well.

//! Testing push() VS unshift()

// push() has O of 1 time complexity.

// unshift() has O of n time complexity.

function addToBack2(n) {

    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.push(i + 1);
    }

    return arr;
}

function addToFront(n) {

    const arr = [];

    for (let i = 0; i < n; i++) {
        arr.unshift(n - i);
    }

    return arr;
}

//^ Both of these functions serve the same purpose: Fill an array with integers 1 through n.

// addToBack2() calls array.push(), which has O of 1 time complexity, inside of a for-loop which means that the function has a time complexity of O(n).

// addToFront() calls array.unshift(), which has O of n time complexity, inside of a for loop which means that the function has a time complexity of O(n^2).

//* The time complexity of both functions is increased (relative to the time complexity of the methods [push() and unshfit()] used within) because the methods we're using are nested within for loops. This means that these methods are called on every single element in an array as the loop iterates over that array.

// Now we run a test:

// n = 50000
n = 100000

startTimeBack = Date.now();
arr = addToBack2(n);
endTimeBack = Date.now();

startTimeFront = Date.now();
arr = addToFront(n);
endTimeFront = Date.now();

console.log("addToBack2(" + n + ") = " + (endTimeBack - startTimeBack) + "ms"); // 3ms
console.log("addToFront(" + n + ") = " + (endTimeFront - startTimeFront) + "ms"); // 273ms

// addToBack2 (3ms) is approximately 91 times faster than addToFront (273ms) when n = 50k, which is actually a fairly small number. Lets try it again when n is 100k (comment out the 50k on line 217 above, use 100k instead)

// addToBack2 (8ms) is approximately 171 times faster than addToFront (1369ms).

//^ Here we can see the difference in runtime between a function with O of n time complexity (addToBack2) and a function with O of n^2 time complexity (addToFront).

//! Summary

// Learned how dynamic arrays work to overcome the contiguous memory limitation of standard arrays with dynamic resizing and overallocation.
// Learned how the array functions array.shift() and array.unshift() compare to array.push() and array.pop()
