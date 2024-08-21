/***********************************************************************
Write a recursive function `recursivePreserveType` which takes in an array of elements
that could be of any type and returns a function. The return function should
accept one string that could be any of the following types:

- 'object'
- 'number'
- 'string'
- 'boolean'
- 'undefined'

The return function should return a copy of the input array with only elements of the
specified type. Note that the returned function only filters elements of one type,
as opposed to the last problem which accepted any number of strings.

const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFunc('number')); // prints [1, 2, 3]
console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2('number')); // prints [2, 3]
console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
console.log(preserveFunc2('boolean')); // prints [ true, false ]

Note: the mocha tests do not test that your solution is implemented recursively.
However, for bonus points try to solve it both with recursion and iteration.
*/

//! ======================RECURSIVE==============================

function recursivePreserveType(array) {
    return function filterByType(type) {
        if (array.length === 0) { // base case
            return [];
        }

        const currentElement = array[0];
        const restOfArray = recursivePreserveType(array.slice(1)) (type);

        if (typeof currentElement === type) {
            return [currentElement, ...restOfArray];
        } else {
            return restOfArray;
        }
    };
}

//! ======================ITERATIVE==================================

function iterativePreserveType(array) {

    return function(...types) { // return a function that takes in any number of 'types' as strings

        const result = []; // initialize an empty array to hold the filtered elements.

        for (el of array) { //for each element of the array
            if (types.includes(typeof el)) { //if the current element is of the specified type
                result.push(el); // push that element to the 'result' array.
            }
        }
        return result; // retur the 'result' array.
    }
}

// const preserveFunc = recursivePreserveType([1, 'one', 2, 'two', 3, 'three']);
// console.log(preserveFunc('number')); // prints [1, 2, 3]
// console.log(preserveFunc('string')); // prints ['one', 'two', 'three']

// const preserveFunc2 = recursivePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
// console.log(preserveFunc2('number')); // prints [2, 3]
// console.log(preserveFunc2('object')); // prints [ { color: 'red' }, [4, 5] ]
// console.log(preserveFunc2('boolean')); // prints [ true, false ]

const preserveFuncIterative = iterativePreserveType([1, 'one', 2, 'two', 3, 'three']);
console.log(preserveFuncIterative('number')); // prints [1, 2, 3]
console.log(preserveFuncIterative('string')); // prints ['one', 'two', 'three']

const preserveFunc2Iterative = iterativePreserveType([2, undefined, 'world', { color: 'red' }, true, 3, [4, 5], 'hello', false]);
console.log(preserveFunc2Iterative('number')); // prints [2, 3]
console.log(preserveFunc2Iterative('object')); // prints [ { color: 'red' }, [4, 5] ]
console.log(preserveFunc2Iterative('boolean')); // prints [ true, false ]

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = recursivePreserveType;
} catch (e) {
    module.exports = null;
}
