//! Arrow Functions Review

// Arrow functions are a concise way of declaring functions.

// Arrow functions were introduced in ES6

// Arrow functions are most typically used as callbacks

// Arrow functions have no context of their own

// Arrow functions can also sometimes be used to simplify function expressions

//! Arrow Functions Solving Problems

let doubleNum = function(num) {
    return num* 2;
};

let doubleNumArrow = num => num * 2;

//^ Arrow function syntax is different from regular function syntax:

    // We can omit the 'function' keyword and add the fat arrow '=>' following our parameter
    // If we have only ONE parameter, we can omit the parenthesis '()' around that paremeter
        // If we have NO parameters, we still must use the parenthesis '()'
    // In single-expression arrow functions, we can omit the curly braces '{}' AND the 'return' keyword because they are IMPLIED
        // If we have multiple expressions in our function, we do still need the curly braces and return keyword.

// For these reasons ^^ arrow functions are most effectively used as callbacks (because they have no context, preventing context-related issues) and for shortening/simplifying our code when we are writing SIMPLE functions.

//^ As mentioned on line 9, arrow functions are ANONYMOUS, meaning they are not bound to any context or identifier of their own

// However, we CAN assign arrow functions to variables for later use:

const sayHello = name => console.log(`Hello, my name is ${name}`);
