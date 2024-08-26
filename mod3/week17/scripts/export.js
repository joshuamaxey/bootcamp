export function sayHello() {
    console.log("Hello!")
};

export const sayHi = () => console.log("Hi!");

//! Below, we use the 'export' keyword to export these two functions. However, this is not the preferred method for exporting multiple functions or classes. For this reason, I'm gonna comment it out.

//! The preferred method for exporting multiple functions or classes is the method used above. It is an ES6 feature that each item can be exported as it is defined using the export keyword.

// export {
//     sayHello,
//     sayHi
// }

//^ See script2 for import syntax.

//& Additionally, note that in order for ES6 imports and exports to work our .js files must be modules.

//& To turn your directory into a module: Navitage to the root directory wherein your.js files exist and then run npm init. Before you do this, you'll need to create an index.js file to be the entry point for your module.

//& Finish the init process, then you will see a 'package.json' file within your module. Go into the package.json file and add this property:

//* "Type": "module"

//& Once you've done this, your directoyr will be a module and you can use ES6 imports and exports within your .js files.
