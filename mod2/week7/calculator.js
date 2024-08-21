
const operations = ['+', '-', '*', '/', '%']

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y
}

function divide (x, y) {
    return x / y;
}

function modulo (x, y) {
    return x % y;
}

// Lets say that we want to export the functions here to be used in another file.

// We do this by using the 'module.exports' property.

// If we want to export every function EXCEPT for modulo, we set the module.exports property to a new object with the add, subtract, multiply, and divide properties referencing those functions:

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    operations
}

// Note that 'modulo' is not included in the exports an won't be accessible.
