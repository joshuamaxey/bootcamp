/*

//Today, we'll start with some new operators. Today is about doing things WITHOUT for loops, less syntax/easier.

//& SPREAD and REST OPERATORS---------------------------------------------------------------

//^ "..." can mean spread or rest depending on where/how you use it.

//?REST OPERATOR: ...

//^ Accept an indefinite number of arguments, condensed into a single array.

const adder = (...nums) => { //Three dots BEFORE variable name for the argument
    console.log(nums);
}

adder(1,2,3,4); //We want this function to work no matter how many arguments we pass into it.

adder(1,2,3,4,5,6,7); //using the REST operator enables us to accept an infinite/indefinite number of arguments as parameters within a function.

//? SPREAD OPERATOR: is the OPPOSITE/INVERSE of the rest operator.

//^ You can use the spread operator in THREE PLACES: arrays, objects, strings

//? Spreading with ARRAYS

const nums = [1,2,3,4]
const nums2 = [...nums]
const nums3 = [...nums, ...nums2]

console.log(nums2) //Here, the spread "..." operator takes every element of the first array and adds it to the second array
console.log(nums3); //This is another way to concatenate an array. By spreadign the first and seond array into the third array.

//? Spreading with OBJECTS


const obj = {a: 1, b: 2, c: 3};
//const keyValues = [...obj]; // = error, "obj is not iterable," WE cannot iterate through an object such that we can spread it into an array
//const keyValues = [...Object.keys(obj)]; //Successfully spreads the keys of the object into an array.
//const keyValeus = object.keys(obj); //does the same thing, don't need the spread operator/square brackets?
const keyValues = [...Object.keys(obj), ...Object.values(obj)]; //Spreads keys AND values into a new, single array.

console.log(keyValues);

//^ Offers a way to iterate through an objects key/value pairs WITHOUT USING LOOPS. Improves readability, reduces coding time, reduces complexity, etc.

//? Spreading with STRINGS

const str = "Hello World"
console.log([...str]) //returns an array of every element (letter) of the string. 'H', 'e', 'l', 'l', 'o', etc.

//& DESTRUCTURING----------------------------------------------------------------------------

//! Primary purpose is to extract a specific piece of data from an object in a way that is quick and readable.
//! Remember you can use the delete keyword to remove things from an object.

const obj5 = {a: 1, b: 2, c: 3, isClassOver: false};

const {a} = obj5;

console.log(a)

//^ destructuring an object returns whatever is inside the object as a string.
//^ When you destructure, you're gonna be grabbing the VALUE only, NOT the key/value pair!

const {a: value} = obj5
console.log(a)
console.log(value)

//^ We destructure the object, pulling the value from the key "a" and returning it.

const {isClassOver} = obj5;

console.log(isClassOver);

//^---------------------------------------------------------------------------

const key = 'isClassOver';

const {[key]: isclassOver} = obj5

console.log(isClassOver);

//& ADVANCED FOR LOOPS

//& MAP, FOREACH, FILTER, FIND, REDUCE
//^ THESE METHODS ARE MEANT TO 'REPLACE' TRADITIONAL FOR LOOPS, TO IMPROVE READABIITY AND DEVEOPMENT SPEED

const arr = ['hello', 'world'];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//MAP

const nums6 = [1,2,3]
// problem: use nums array, return a new array containing every value increased by 5

//& MAP RETURNS A NEW ARRAY AND PERFORMS SOME OPERATION ON EACH ELEMENT OF THE ARRAY

const newArr = []

for(let i = 0; i < nums.length; i++) {
    newArr.push(nums[i] + 5)
}

console.log(newArr)

const resultArr = nums.map(() => { //We call this anonyous arrow function one time for each element of the array.
    console.log()
})

const addFive = (nums) => {
    return nums + 5
}

const resultArray = nums.map(addFive)
console.log(resultArr)

//^ Callback functions can be used with ANYTHING, it's a helper function that is passed to another function.

*/

//!------------------------------------------------------------------------------------------------------------------------------------------------

/*

//& FOREACH DOES NOT RETURN ANYTHING, CALLBACK FUNCTION GETS CALLED FOR EACH ELEMET OF THE ARRAY.

const strArr= ['hello', 'world', 'my', 'name', 'is', 'josh']

strArr.forEach((string) => {
    console.log(string)
})

//Returns each element of the array as a string

*/

//!------------------------------------------------------------------------------------------------------------------------------------------------

/*
//& FILTER RETURNS A NEW ARRAY CONTAINING ONLY THE ELEMENTS THAT PASSED THE CONDITION SET IN THE CALLBACK FUNCTION
//PROBLEM: Iterate through the array and return every element that has a length under 3

const strArr = ['hello', 'world', 'my', 'name', 'is', 'josh']
const resultArr = strArr.filter((string) => {
    if(string.length < 3) return string;
})

console.log(resultArr) //returns only the elements of the string that match the condition (are less than 3 in length)
*/

//!----------------------------------------------------------------------------------------------------------------------------------------------


/*
//& FIND RETURNS THE ELEMENT THAT MATCHES THE SEARCH CRITERIA

const nums = [1,2,4,6,7,3]


const result = nums.find((num) => {
    if(num === 6) return num
})

console.log(result)
*/

/*
const myFilterFunc = (nums, value) => {
    const result = nums.find((num) => {
        if(num === 6) return num
    })
}
*/

//!----------------------------------------------------------------------------------------------------------------------------------------------


/*
//& REDUCE LITERALLY REDUCES AN ARRAY INTO A SINGLE VALUE, THEN RETURNS THAT VALUE

//problem: iterate through nums and add get the sum of all nums

const nums = [1,2,3,4];
const initialValue = 0

const value = nums.reduce((initialValue, num) => {
    return initialValue + num
})

console.log(value)
*/

//!----------------------------------------------------------------------------------------------------------------------------------------------

const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}


// Write your solution here.

// Should print "red"
