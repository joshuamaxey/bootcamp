const operations4 = ['+', '-', '*', '/']

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

//^ If we only want to export ONE thing, we can assign that thing to module.exports object directly. When we export this way, we cannot export anything else from the file:

module.exports = operations4;

//^ Let's return to the commonJsModules.js file again to see how we can import from these files to use their code in other modules...
