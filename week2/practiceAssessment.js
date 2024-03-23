//! 1. What will the code print out?

console.log("hello"[2]); // = l. will print 'l' because that is the character found at index 2 of the string 'hello'

//? Correct!

//! 2. What will the code print out?

console.log(24 % 6); // = 0. will return the remainder of 24/6, which is 0 because 24 is evenly divisible by 6.

//? Correct!

//! 3. What will the code print out?

console.log((false || true) && !true); // = false. Parenthesis first: (false || true) resolves to true. ! is before && in order of operations, leaving: true && false, which resolves to false.

/*
true && !true
true && false
false
*/

//? Correct!

//! 4. What will the code print out?

let num = 100;
let isBig = num >= 100;
let isSmall = num < 100;

console.log(isBig || isSmall); // = true.
//          true  || false  (substitute boolean values)
//              true (resolve boolean expression)

//? Correct!

//! 5. which is NOT true? fuck this one.

/*
let A = true;
let B = false;

console.log(!(A && B) === !A || !B); // true
console.log(!A && !B === !(A || B)); // true
console.log((A && B === !A) || !B); // false
console.log(!(!A && !B) === A || B); // true
*/

//! 6. What will the code print out?

console.log(1 + 2 * 3); // = 7, order of operations.

//? Correct!

//! 7. What will the code print out?

console.log(1 == "1.0"); // true, loose equivalency.

//? Correct!

//! 8. What will the above code print out?

let x = 1;
x++;
x + 2;
console.log(x); // = 2, the x++ shorthand is equivalent to x += 1, which means (x = x + 1) and increases the value of the variable x by 1. (x + 2) is a mathematical operation that returns the value of x + 2 but does not change the value of the variable itself.

//? Correct!

//! 9. What type is the variable 'name' in the below code?

let name = "Brian"; // = string. Text data enclosed by parenthesis.

console.log(typeof "Brian");

//? Correct!

//! 10 Which of the following types is mutable?

// boolean //! Not mutable
// number //! Not mutable
// string //! Not mutable
// array //? Mutable

//? Correct!

//! 11 Which is the best description of the string.slice() method.
