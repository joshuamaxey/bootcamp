//! Browser Basics

//^ Explain the difference between the BOM (Browser Object Model) and the DOM (Document Object Model).

//* Node.js vs. Browser

// The Node.js and browser are DISTINCT coding environments

//* Same Specification, different Implemetation

// JavaScript is a SPECIFICATION. This means that it is a SET OF RULES AND GUIDELINES which describe how the language should work. It is like a blueprint outlining the features and behavior of JavaScript.

// The SPECIFICATION is created by a standards organization called ECMA International. Browser developers use the SPECIFICATION to make sure that their JavaScript engines (The parts of the broswer that run javaScript) work correctly and consistently across different devices and platforms. The SPECIFICATION basically ensures that JavaScript behaves the same way no mater where it is used.

// NOTE that Node.js is built on top of the same JavaScript engine as Google Chrome (V8). This is part of why we use Chrome as our default browser.

//* Differences between Node.js and browsers

// There are many differences between the Node.js and browser environments. Many aren't important, but one such difference is the way that the browser and the Node.js have a different return value from the setTimeout function:

// In browsers, the setTimeout returns a NUMERICAL ID that can be used to cancel the scheduled task using the clearTimeout method.
// In Node.js, setTimeout returns a Timeout OBJECT instead of a numerical ID. The Timeout object has a ref method that you can call to cancel the scheduled task.

// Both approaches achieve the same goal but implementation details differ slightly between Node.js and browsers.

//& Global vs. Window

// In Node.js, the GLOBAL OBJECT is the object where global variables are stored.

// In browers, the WINDOW OBJECT is where global variables are stored. Additionally, the WINDOW includes properties and methods pertaining to DRAWING things on the screen (images, links, buttons, etc).

// You cannot reference the WINDOW in NODE. Most browsers allow you to reference GLOBAL but it is really the same object as WINDOW.

//& Document

// Browsers have access to a DOCUMENT object that contains HTML code.

// Node.js has NO DOCUMENT object.

//& Location

// Browsers have access to a LOCATION that contains information about the web address.

// Node.js has NO LOCATION, since it is not on the web.

//& Require and module.exports

// Browsers have no file system and cannot use the REQUIRE function or NODE MODULES such as readline.

// Node.js has a REQUIRE function that we can use to importa installed NODE MODULES such as readline. We can also importa and export across our own files. We are able to reference and use other files in our file system.

//^ Given a diagram of the different parts of the browser, identify each part.

//^ Use the Window API to change the innerHeight of a user's window.

//^ Identify the context of anonymous functions running in the browser (window).

//^ Given a JS file and an HTML file, use a SCRIPT TAG to import the JS file and execute the code when all of the elements of the page load.

//^ Explain the browser's main role in teh request/response cycle.

//^ Identify, examine, and delete cookies for a given website using the Chrome Developer Tools
