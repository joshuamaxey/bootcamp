//! Dynamic Arrays

//^ An array is a sequence of elements of the same type stored in a contiguous block of memory

//! Array Resizing

let arr = [255, 256, 43690, 1431655765];

// If we want to add another number to this array, but only have 16 bytes of memory allocated to us for the purpose of storing the array, we cannot just start writing into the next 4 bytes of memory. SOmething may already be there.

// Instead, the computer must find a whole new block of memory, 20 bytes this time, and then copy ALL of the numbers into those new 20 bytes, including the new number that we want to store.

// This means that array resizing is an O(n) operation. That would make .push(), adding to an array, an O(n) operation too if we have to resize every time we add a new element to the array.

//! Overallocation to Speed Up Resizing

// When we push a new value to an array and it is forced to resize, the computer will request MORE memory than is needed to stor the new value so that additional elements can be pushed to the array WITHOUT requiring that it resize.

// The larger an array grows, the more extra space is allocated to the array with each resizing. Thus, resizing occurs less and less frequently as an array grows in size.

// Due to overallocation, and since big-O analysis only pertains to large values of (n), push() is considered at O(1) operation.

//! Testing Overallocation

function addToBack(n) {

    let arr = [];

    for (let i = 0; i < n; i++) {

        arr.push(i + 1);
    }

    return arr;
}

function addToFrontPreallocated(n) {

    let arr = new Array(n); // use the Array constructor to create a new array with (n) empty slots preallocated to it for storage

    for (let i = 0; i < n; i++) {

        arr[i] = i + 1;
    }

    return arr;
}

//^ Both of thse functions serve the same purpose: Fill an array with integers 1 - n.

    // 1. addToBack() does this using push(), which requires resizing.
    // 2. addToFrontPreallocated() preallocates memory and then uses indexing to fill in the slots.

//^ Lets look at which is faster:

n = 10000000

let startTimeBack = Date.now();

arr = addToBack(n);

let endTimeBack = Date.now();

let startTimePre = Date.now();

arr = addToFrontPreallocated(n);

let endTimePre = Date.now();

console.log(`addToBack(${n}): ${endTimeBack - startTimeBack}ms`); // 382

console.log(`addToFrontPreallocated(${n}): ${endTimePre - startTimePre}ms`); // 84

//^ As we can see here, pushing values to the back of an array with pre-allocated memory is much faster than resizing.

//! push() vs unshift() vs splice()

// .push() is an O(1) operation (due to overallocation, as we saw above)

// .unshift() requires that we move every element in the array over by 1 index so that an element can be added to the front of an array. Therefore it is an O(n) opeartion.

// .shift() is the same, as it removed an element from the front of an array and then shifts every element to the left by one index.

// .splice() requires moving all elements AFTER the removed elements to the left by one index, just like shift. So it is also considered an O(n) operation, even though the location of the removed element will vary.
