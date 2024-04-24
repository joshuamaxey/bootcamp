
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

// This calculator function is the same as the other two in terms of the code above. But it uses a different method to export these functions for use in other modules (files).

// THe 'exports' shortcut is a variable that's initialized to the module.exports property value. You can use the exports variable as a shortcut, like this:

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;
exports.operations = operations;
