/* Even Number Range

    Write a function that accepts two numbers.
    The function should return an array of all even numbers between the two arguments inclusively.

    console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
    console.log(evenNumberRange(22, 25)); // prints [22, 24]
    console.log(evenNumberRange(2, 0)); // prints []
*/

//! ====================================ITERATIVE======================================

// function evenNumberRange(num1, num2) {
//     let arr = [];

//     for (let i = num1; i <= num2; i++) {
//         if (i % 2 === 0) {
//             arr.push(i);
//         }
//     }

//     return arr;
// }

//! ===================================RECURSIVE=======================================

function evenNumberRange(num1, num2) {
    let evenArr = [];

    if (num1 <= num2) {
        if (num1 % 2 === 0) {
            evenArr.push(num1);
        }

        const nextNum = num1 + 1;

        const result = evenNumberRange(nextNum, num2);

        evenArr = evenArr.concat(result);
    }

    return evenArr;
}

console.log(evenNumberRange(-3, 2)); // prints [-2, 0, 2]
console.log(evenNumberRange(22, 25)); // prints [22, 24]
console.log(evenNumberRange(2, 0)); // prints []

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = evenNumberRange;
} catch (e) {
    module.exports = null;
}
