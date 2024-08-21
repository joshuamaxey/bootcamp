const operations2 = ['+', '-', '*', '/']

//=============================================================

function add2(num1, num2) {

    let sum = num1 + num2;

    return sum;
}

// let addTest = add(5, 6);

// console.log(addTest); // 11

//==============================================================

function subtract2(num1, num2) {

    let difference = num1 - num2;

    return difference;
}

// let substractTest = subtract(15, 11);

// console.log(substractTest); // 4

//==============================================================

function multiply2(num1, num2) {

    let product = num1 * num2;

    return product;
}

// let multiplyTest = multiply(3, 5);

// console.log(multiplyTest); // 15

//==============================================================

function divide2(num1, num2) {

    let quotient = num1 / num2;

    return quotient;
}

// let divideTest = divide(15, 5);

// console.log(divideTest); // 3

//==============================================================

//^ To export these functions, we can set the operations (functions) as properties of the module.exports object:

module.exports.add2 = add2;
module.exports.subtract2 = subtract2;
module.exports.multiply2 = multiply2;
module.exports.divide2 = divide2;
module.exports.operations2 = operations2;

//^ For another export method, let't return to the commonJsModules.js file again...
