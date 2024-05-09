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
