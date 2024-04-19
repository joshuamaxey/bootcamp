//! Browser Basics

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

//* Node vs Browser lecture.

// JavaScript was developed to be used intside the browser.

//& Developoer tools

// Node.js has a "global" objects named 'global', node-specific objects like 'process', and a 'require' function to import another .js file.

// The web browser has a "global" object named 'window', browser-specific objects like 'location' and 'document', and NO 'require' function.

//*=============================

// In Google Chrome, open the developer tools. //! Navigate to "Console." This is a browser REPL.

// In Node.js //! TO OPEN A NODE.js REPL IN THE TERMINAL, USE THE COMMAND 'NODE' WITH NO OTHER PARAMETERS. THIS OPENS A NEW REPL WITHIN THE TERMINAL ITSELF SIMILAR TO THE DEVELOPER TOOLS TERMINAL IN CHROME. TRY IT. JUST "node" IN THE TERMINAL.

//! While in the node REPL, use command "ctrl + c" twice, or "ctrl + d" once, or enter command ".exit" to exit the REPL and return to the console.

// While in the Node.js REPL, type the command "global". This prints a global object that includes built-in JavaScript functions.

// While in the browser Console (Repl), type the command "window." This prints a similar object. Next, type "window.location". Then try clicking on the object that is returned. NEXT, type the command "document". Then try clicking the object that is returned. This gives you access to the HTML document corresponding to the current webpage.

//^ Explain the difference between the BOM (Browser Object Model) and the DOM (Document Object Model).

//* THe DOCUMENT OBJECT MODEL (DOM) is an HTML file that contains a collection of NODES (HTML elements) that can be accessed and manipulated. This is the WEB PAGE, and the DOM is the object hierarchy of that document.

//* We access the webpage by using a BROWSER. the document object is part of the hierarchy of BROWSER OBJECTS. this hierarchy is known as the BOM, or BROWSER OBJECT MODEL.

//* So the BOM (Browser Object Model) is a hierarchy of broswer objects that INCLUDES the DOM (Document Object Model, or webpage).

// The MAIN BROWSER OBJECT is the WINDOW, which contains properties and methods that allow us to access different objects within the window. These include:

// window.navigator (returns a reference to the NAVIGATOR object)
// window.screen (returns a reference to the SCREEN object associated with the window)
// window.history (returns a reference to the HISTORY object)
// window.location (gets/sets the location [or current URL] of the WINDOW object)
// window.document (can be shortened to "document" and returns a reference to the HTML DOCUMENT contained within the window)

// Note that ALL of the methods above can be shortened to the object name without the 'window' prefix.
// navigator
// screen
// location
// document

//^ Given a diagram of the different parts of the browser, identify each part.

//* The USER INTERFACE is the browser interface that users interact with. It includes the address bar, back and forward buttons, bookmarks menu, etc. It is everything except for the requested page content.

//* The RENDERING ENGINE is what displays (or RENDERS) the requested page content. If the requested content is HTML, it will parse HTML and CSS and the nrender the parsed content.

//* The BROWSER ENGINE is what MANAGES THE INTERACTIONS between the USER INTERFAE and the RENDERING ENGINE.

// The NETWORKING is what handles network calls such as HTTP requests.

// The JAVASCRIPT INTERPRETER parses and executes JavaScript code.

// The UI BACKEND is used for drawing basic widgets like combo boxes and windows. It uses OPERATING SYSTEM USER INTERFACE METHODS.

// The DATA STORAGE (DATA PERSISTENCE) is the PERSISTENCE of data stored in the browser, such as cookies, throughout all of the different parts of the browser.

//^ Use the Window API to change the innerHeight of a user's window.

//* Running Scripts in the Browser.

// With respect to running scripts in the browser, TIMING IS EVERYTHING. Executing scripts at the RIGHT TIME is a critical pat of developing front-end code. A script that runs early or late can cause bugs that affect teh user experience.

// This lesson SAYS that in previous sections we have reviewed how the DOM and BOM worked and used event listeners to trigger script execution. I have NEVER used an 'event listener' to do anything and have no idea how to use one to trigger script execution. We've not covered that.

// In this lesson, we'll learn how to ensure that script runs after the necessary objects are loaded.

//* Using the Window API

'newWindow = window.open("", "", "width=100, heigh=100");' //opens a new window with the name 'newWindow'

'newWindow.resizeTo(500, 500);' //resizes 'newWindow' to a certain size

'newWindow.resizeBy(num1, num2);' //resizes 'newWindow' by certain parameters

'window.scroll(num, num2)' // This command scrolls to certain page location by moving the scroll bar.

//^ Identify the context of anonymous functions running in the browser (window).

//^ Given a JS file and an HTML file, use a SCRIPT TAG to import the JS file and execute the code when all of the elements of the page load.

//^ Explain the browser's main role in teh request/response cycle.

//* The Request-Response Cycle

// Browsing the web is a series of REQUESTS and RESPONSES. When we search for information or navigate to a web page, we are REQUESTING something and expecting a RESPONSE back.

// The REQUEST-RESPONSE CYCLE is the communication between a BROWSER (client) and a SERVER. When we type a URL into the address bar of a browser, we are making a REQUEST to a server for information back. The most common request is an HTTP REQUEST.

// Our end of the REQUEST-RESPONSE CYCLE is the BROWSER. On the other side is a SERVER, which is a database. The INTERNET, in the middle between the browser and the server, is a series of BROWSER (client) REQUESTS and SERVER RESPONSES.

//* The BROWSER'S ROLE in the REQUEST-RESPONSE CYCLE

// The browser enables the user to make REQUESTS to the server, as mentioned above.
// The browser PARSES HTML, CSS, and JS
// The browser RENDERS information to the user by constructing and rendering a DOM (Document Object Model) tree.

// When we make a SUCCESSFUL REQUEST to the server, we are able to view a web page. UNSUCCESSFUL REQUESTS prevent the page from loading and displaying information. We see this when we recieve a 404 ERROR.

// Web developers commonly debut errors and set up error handling for errors wherein a server is down or there is otherwise something wrong with the request (in which case we usually see an error on the browser (client) side).

// You can go to the NETWORK TAB of your browser's DEVELOPER TOOLS to view these requests and responses. Open up a new tab, open the Developer Tools in your browser, and then navigate to "google.com". Watch the request go through in your Network tab!

//^ Identify, examine, and delete cookies for a given website using the Chrome Developer Tools

//* Context, Scope, and Anonymous Functions

// Scope is FUNCTION-BASED while context is OBJECT-BASED.

//& Scope pertains to the varaible access of a function when it is invoked.

// A variable can be defined in either LOCAL or GLOBAL scope, which defines that variable's accessiblity.

// Any global variable will live throughout runtime and can be accessed and altered in ANY scope.

// Any local variable exists ONLY within the body of the function that they are defined within. Within the local scope it can be assigned a value, retrieved, and manipulated but is NOT available outside of that scope.

//& Remember the distinctions between the LET, CONST, and VAR keywords

// Variables declared using the let and const keyword can be block-scoped, which means that he variable will be onfined to the scope of the BLOCK that it is defined within. Basically, it is confined to the curly braces within which is is defined. If it is defined within an IF statement, FOR loop, etc, then it will not be available outside of the curly braces of the block.

// Variables declared using the var keyword are NOT block-scoped, and they can be accessed outside of the blocks that they are defined within. For this reason, it is best practice to avoid using the var keyword because it can lead to a lot of confusion with respect to scope and variable availability.

//& Context is always the value of the "this" keyword, which is a refernce to the object that "owns" the code that is being executed.

// Context is usually determined by HOW a function is invoked. When a function is called as a method of an object, 'this' is set to the object that the method is called on. Like this:

var obj = {
    foo: function() {
        return this;
    }
};

obj.foo() === obj; //true. So here, obj.foo() returns 'this', which in this case is equal to 'obj' since the function foo is called as a method of that object.

// Every function has a CONTEXT and a SCOPE.
// CONTEXT refers tothe object that OWNS the function (the value of "this" inside a given function)
// CONTEXT is usually determined by how a function is invoked.
