//! JavaScript Error Types

//^ With respect to JavaScript, is it especially important to be able to:

    // 1. Identify the difference between SyntaxError, ReferenceError, and TypeError?
    // 2. Read and effectively research unfamiliar errors

//! Types of JavaScript Errors

//^ There are Seven Core Error Types in JavaScript:

    // 1. SyntaxError
    // 2. Reference Error   (Invalid reference is made)
    // 3. TypeError         (variable or parameter is the wrong type)
    // 4. RangeError        (numeric variable or parameter is outside its valid range)
    // 5. InternalError     (error within internal JavaScript engine)
    // 6. EvalError         (error pertaining to the global 'eval' function)
    // 7. URIError          (encodeURI() or decodeURI() were passed invalid parameters)

//^ The most common errors that we will encounter in JavaScript are:

    // 1. SyntaxError
    // 2. ReferenceError
    // 3. TypeError

//! SyntaxError

// SyntaxError is thrown when the JavaScript engine attempts to parse code that does not conform to the syntax of the JavaScript language.

//^ Common SyntaxErrors include:

    // 1. Misspelled keywords
    // 2. Missing braces, brackets, or parenthesis

//! ReferenceError

// ReferenceErrors most commonly occur when we reference a variable that does not exist (either within our current scope, or whatsoever)

//^ Common ReferenceErrors include:

    // 1. Misspelled variable names
    // 2. Attempting to access a variable that is not available within the current scope

//! TypeError

//^ TypeErrors most commonly occur when:

    // 1. An operation cannot be performed because the operand is the wrong value or the wrong type
    // 2. We attempt to modify a value that cannot be changed

//^ Common TypeErrors include:

    // 1. Attempting to perform an operation on a value of the wrong type (TypeError: (x) is not a function)
    // 2. We try to re-assign the value of a constant variabl

//! Looking Up Errors

//^ When we run into an error, we should:

    // 1. Research the function/method/etc that we are attempting to use when the error is thrown
    // 2. Research the error by name

// Most errors can be researched and identified without any knowledge of the syntax of the language.

//! Summary

// Learned about the most common JavaScript error types: SyntaxError, ReferenceError, and TypeError.

// Learned how to research unfamiliar errors
