const operations = ['+', '-', '*', '/']

//=============================================================

function add(num1, num2) {

    let sum = num1 + num2;

    return sum;
}

// let addTest = add(5, 6);

// console.log(addTest); // 11

//==============================================================

function subtract(num1, num2) {

    let difference = num1 - num2;

    return difference;
}

// let substractTest = subtract(15, 11);

// console.log(substractTest); // 4

//==============================================================

function multiply(num1, num2) {

    let product = num1 * num2;

    return product;
}

// let multiplyTest = multiply(3, 5);

// console.log(multiplyTest); // 15

//==============================================================

function divide(num1, num2) {

    let quotient = num1 / num2;

    return quotient;
}

// let divideTest = divide(15, 5);

// console.log(divideTest); // 3

//==============================================================

//^ To export, we'll set our functions as properties of the module.exports object using the exports shortcut:

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.operations = operations;

//^ For the final method of exporting, let's return to the commonJsModules.js file again...
