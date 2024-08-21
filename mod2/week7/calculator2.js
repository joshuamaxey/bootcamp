
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

// This calculator file is identical to its sibling calculator file except that it uses a different method to export these functions for use in other files. Lets say, this time, we want to export everything. Instead of assigning an object to the module.exports property, we can...

// Set properties on the 'module.exports' object. This means of exporting has the same functionality as using the module.exports property, its a stylistic choice as to which method you will use. But you need to be able to use and recognize both.

//^ Instead of setting module.exports to a new object, we will add these functions as properties onto the existing module.exports object:

module.exports.add = add;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.operations = operations;
