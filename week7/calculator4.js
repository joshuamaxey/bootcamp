
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

// Finally, lets say that you only want to export ONE item from a module. To do that, you assign module.exports to the single item you want to export:

module.exports = modulo;

//If you export a single item this way, you will NOT be able to export anything else from the module.
