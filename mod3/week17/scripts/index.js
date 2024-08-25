//! Here we'll do a quick review of everything going on in this module. Note that none of these statemetns will actually run because re-using various imports and exports for the summary in this file means that running index.js throws multiple errors (such as duplicate export, etc). Scripts 1, 2, and 3 remain functional

//^ We have the script HTML element:

<script src="./path" type="module"></script>

// This is for use in importing our JS files into our HTML files as scripts. It can either be put in the header or the bottom of the body. Both methods work, but placing the script in the head means that we may have to take extra steps to ensure that the script does NOT load before the DOM has loaded.

//^ We have our ES6 export syntax:

export function sayBye() {
    console.log("Bye!")
}

export const subtract = (num1, num2) => num1 = num2;

// Or, alternatively (Though this is not preferred):

export {
    sayBye,
    subtract
}

// Finally, we also have our "export defualt" statement, which imports only a SINGLE item as an 'unnamed' export which can be assigned any name we want upon importing it:

export default function multiply(num1, num2) {
    console.log(num1 * num2);
}

//^ And we also have our ES6 import syntax:

import add from "./script2.js"

add();

// Or, alternatively, we can use * to import everything in a module and then use ALIASING to import all functions and classes in our import under a single name (such as GREETINGS):

import * as GREETINGS from "./script1.js"

GREETINGS.sayHello();
GREETINGS.sayHi();
