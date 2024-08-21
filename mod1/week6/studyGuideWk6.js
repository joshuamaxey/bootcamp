//! Array Methods

//^ array.reduce

// Reduce is useful when you have an array of multiple numbers or elements and you want to REDUCE the array to a single value. You can use reduce to:

// 1. Find a mathematical SUM
// 2. Compare word lengths to find the longest word in an array.

//& Array.reduce(cb, initialValue) takes TWO PARAMETERS

// 1. A callback function (cb)
// 2. An initialValue

let numArr = [1, 2, 3, 4];

const adder = (accumulator, currentValue) => {
    return accumulator + currentValue;
}

const sum = numArr.reduce(adder, 0);

console.log(sum); // prints 10.

// In the above version of the array.reduce method, we first define the callback function that we will use and then refer to it as a parameter within the array.reduce method.

//& There are multiple ways to use the array.reduce method

const adder2 = numArr.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(adder2);

// 0 is the "initial value" parameter.
// In this version of the array.reduce method, the function is defined directly as a parameter of array.reduce.
// In both cases, we are able to sum the values of the array.

//& It may be useful to enclose the method within another function so that it can be invoked easily any time.

const arraySum = arr => {

    return arr.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
    }, 0);

};

let nums = [1, 2, 3, 4, 5];
let nums2 = [2, 3, 4, 5, 6];
let nums3 = [3, 4, 5, 6, 7];

const numsSum = arraySum(nums);
const nums2Sum = arraySum(nums2);
const nums3Sum = arraySum(nums3);

console.log(numsSum); // 15
console.log(nums2Sum); // 20
console.log(nums3Sum); // 25

// When we write a function containing the .reduce method like this, we can invoke it any time to sum the elements of any array.

//& array.reduce() demo

let nums4 = [3, 7, 5, 9];

let sumFinal = nums4.reduce(function(accum, el) {
    return accum + el; //^ Notice that if you want, you could use the * operator instead of +, etc.
});

// accum = 3 (first element in the array)
// el = 7 (second element in the array)

// after this first operation is completed, accum = 10 (3 + 7)

// accum = 10
// el = 5 (next element in the array)

// after this operation is complete, accum = 15 (10 + 5)

// accum = 15
// el = 9

// after this operation is complete, accum = 24

console.log(sumFinal);

//& You can also use array.reduce for other things- Like finding the largest number in the array.

//Remember that without a default value, "accum" begins as the first element in the array.

let nums5 = [3, 5, 7, 9, 2];

let max = nums5.reduce(function(accum, el) {
    if (el > accum) {
        return el;
    } else {
        return accum;
    }
});

// The functionality of reduce depends on the way that you manipulate the "accum" and "el" values.

// accum = 3
// el = 7

// since 3 < 7, 7 is returned.

// accum = 7
// el = 5

// since 7 > 5, 7 is returned again.

// accum = 7
// el = 9

// since 7 < 9, 9 is returned.

// accum = 9
// el = 2;

//since 9 > 2, 9 is returned

console.log(max); // returns 9

//^ array.forEach

// The array.forEach() method touches EVERY element in an array to access or modify it in some way.

//^ array.map

// The array.map() method converts each element to something else and stores it in a new array.

//^ array.filter

// the array.filter() method creates a new array which is a subset of the original array that includes ONLY the items that meet a certain condition.

//^ array.every

//! Loops

//^ For loop

//^ For in loop

//^ For of loop

//! Callbacks

//! Recursion

//! Objects

//^ Iterating through objects

//! Functions

//^ Function definition

//^ Function expression

//^ Arrow function

//^ Anonymous function

//^ IIFE

//! Asynchronous JavaScript

//^ setTimeout

//^ setInterval
