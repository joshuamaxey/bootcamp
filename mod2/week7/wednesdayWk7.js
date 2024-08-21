//! Using NPM Part 1

// Currently running npm version 10.5.2.
// Ran update command ( npm install -g npm@latest ) successfully and kept same version number from root directory.
// NPM installed and up to date.

//! Using NPM to Manage a Project's Dependencies

// Initialize a project to use npm. Then use npm to install and use dependencies.

//! Initializing a project to use npm

// Any Node.js project that contains a 'package.json' file is technically an npm package. We refer to these unpublished npm packages as 'projects.'

//^ Create a folder for your project.
//! (npmTestProject)
//^ Navigate to that folder.
//^ From within that folder, run this command: 'npm init'
//^ Follow the instructions below through the process of creating your package.json file

// package name (or simply name) - If you're going to publish your package, setting your package name to something useful is very important. For typical development projects, it's okay to just accept the default value, which will be the name of the current folder.

// version - Node uses the semver (semantic versioning) package to manage your package/project's versioning. The default is 1.0.0, but the recommended standard is 0.1.0, indicating the first minor version. See hereLinks to an external site. for an introduction to SemVer.

// description - A description is really only necessary if you're going to publish your package, as it's displayed to users when they're searching the npm registry.

// entry point (or main) - The file to use as the entry point to your application (typically index.js or app.js).

// test command - If you're going to write tests for your package, you can provide the command to run those tests. For now, just press enter without providing a value to accept the default value.

// git repository - If you want other developers to be able to find the Git repository for your package, you can provide the URL to the repo here. For now, it's okay to skip it by pressing enter.

// keywords - Keywords are used to help people find your package in the npm registry. For now, just leave this field blank.

// author - If you're the author of the package and you want your name (and contact information) associated with the package, you can provide that information here. For now, let's just leave this field blank.

// license - This is the license for your package. It's only important to provide if you're going to publish your package. This defaults to the ISC LicenseLinks to an external site., which for our purposes, will work just fine (since we're not going to publish our package).

// At this point in the process, npm will display a preview of the package.json file and confirm if you want to continue:

// Go ahead and answer with "y" or "yes". You'll now have a package.json file in the root of your project. If you want, you can open the package.json file in a code editor and make additional edits to it.

//~ For future reference, you will probably get tired of running through this process every time that you want to initialize a project to use npm. TO save time: you can pass the '--y' flag to the npm init command to generate a package.json file with all of the default values by using this command:

//* "npm init --y"

//! Finding Packages in the npm Registry

// Go to the npm registry to find code that you can explore and incorporate into your projects and applications: //! https://www.npmjs.com/

//^ When selecting packages from the npm registry, ask yourself:

// 1. Does the package do what I need?
// 2. How popular is the package?
// 3. Is the package being maintained?

// Lets use the npm registry to search for a package that will allow you to add color to the messages that are logged to the console.
// Go to the npm website and use the "search packages" filed to search for the keywords "console colors".

//^ Since you have initialized your project (npmTestProject) usig npm init (generating a 'package.json' file), you can use npm install to install an npm package locally into your project.

// To install the 'chalk' npm package, run the command: //! npm install chalk

// I couldn't figure out how to get that one to work. Then I realize that the lesson uses 'colors' so installed that one using //! npm install colors

// Then we use //! const colors = require('colors') to import the package into the index.js file within the npmTestProject folder.\

// See the index.js file.

//! Dependency Types

// 1. dependencies: Thse are the packages that your project needs in order to successfully run when in production.
// 2. Development dependencies (devDependencies): These are the packages that are needed locally when doing development worko n the project. Thse usualy include tools that are used to build and test your application.

//! Installing a development dependency

// To install a development dependency, use the --save-dev flag: //! "npm istall mocha --save-dev", etc

//Separating the development dependencies from the 'regular' dependencies keeps package installation process clean and simple.
// This allows npm to install just the packages that are actually needed for the package or application to run successfully.

//! Summary:

// Verify what version of npm is installed and use npm to update itself to the latest version
// Use npm to initailze a new package or project
// Use the npm registry to find a package
// Use npm to install a package
// Use an npm package in code
// unerstand the difference between a dependency and development dependency.

//! =================== Using npm Part 2 ===========================

//! Using npm to Perform Common Tasks

//^ Install an existing project's dependencies
//^ Use npm to uninstall a package
//^ use npm to update a package
//^ find and fix npm package security vulnerabilities
//^ write and run npm scripts

//! ============================================================ WEDNESDAY LECTURE ====================================================================
//~ =====================================================================================================================================================
// OOP: 4 Main PIllars

// Encapsulation (organization)
// Abstraction
// Inheritance
// Polymorphism

// A CLASS is a blueprint (factory) for creating objects. Classes are a clean way to enclose our data, provide an API that hides the internal complexity and manages the data in our object, and allows us to model real world entities in an organized way.

// An INSTANCE of a class is an object with the properties and methods defined in the CLASS. Many data types (Array, Object) are classes.

// For instance, the Array.forEach() method is callable this way because it is an instance method defined on the class Array.

// Static/class methods are invoked on the class, ot on the instance.

// Instance methods are invoked on the individual instance of the class, not on the class itself.

//~====================================================================================================================================================

//! Installing an Existing Project's Dependencies

// When you're working with an existing project which already has 'package.json' and 'package-lock.json' files, you need to use npm to install its dependencies. If you don't install a project's dependencies, you'll thorw errors when you try to run the application.

// To install an existint project's dependencies, just run the //^ npm install command without providing any package names or other parameters. This will prompt npm to install the dependencies listed in the package-lock.json file.

//! Uninstalling a dependency.

// To uninstall a package, run the following command: //^ npm uninstall <package name>

//~ For instance, lets do this with 'chalk' since we decided to use 'colors' instead.

// Done. We ran 'npm uninstall chalk' and it worked. The package is no longer located in our node_modules.

//! Updating a dependency

// Run the following command: //^ npm update <package name>

// In this case, lets try it with mocha.

// Results are that it is up to date. Good to go.

//^ You can also update ALL of your dependencies at one time using the 'npm update' command. Try it.

// Result: "added 2 packages, removed 2 packages, and audited 74 packages in 4s" //^ Done.

//^ To make sure that you have the latest version of a package, you can use the 'latest' keyword: 'npm install <packageName>@latest' try it with mocha again.

// up to date. Good to go.

//! Finding and Fixing Package Security Vulnerabilities

// run this command to check for security vulnerabilities among your npm packages: //^ npm audit

// If you find any vulnerabilities, use this command to attempt to fix them: //^ npm audit fix
// Note that this ^^ only works if a fix is available in a minor patch version of the package. When a fix requires updating to a new major version of a package, that's considered to be a 'BREAKING CHANGE'.

// When that's the case, you can pass the '--force' flag to the npm audit fix command like this: //^ npm audit fix --force

//! Writing and Running npm Scripts

// npm gives you a way to define and run scripts which execute terminal commands.

//~ Added command: "start": "node index.js" (see the package.json file, comments are not permitted there. Line 8 as of this moment.)

//^ try "npm start" and watch it run the inde.js file.

//! SUMMARY

// Install an existing project's dependencies
// Use npm to uninstall a package
// Use npm to update a package
// Find adn fix npm package security vulnerabilities.
// Write and run npm scripts.

//! =================================== USING MODULES IN NODE.js ============================================

//^ Add a local module to a Node.js application
//^ Use the 'module.exports' property to export from a module
//^ Use the 'require()' method to import from a module

// Each JavaScript file is a MODULE in Node.js

// Modules defined within your project are known as LOCAL MODULES. Every local module has a single purpose and performs a single function.

// CORE MODULES are native to Node.js and can perform tasks or add functions to your application. These core modules include those that work with file paths 'path', read data from a stream one line at a time 'readline', read and write files to the local file system 'fs', and create HTTP servers 'http'.

// Developers, companies, and organizations create ad publish node modules that you can use in your applications. These third-party modules are distributed adn managed using npm (https://www.npmjs.com/)

// Local modules, core modules, and third-party modules all work together to create your application.

//! The CommonJS module system

// Recent versions of Node.js contain two different module systems.

// 1. The original CommonJS module system
// 2. THe new ECMAScript modules (ES Modules)

// ES modules will eventually replace CommonJS, but there is a lot of legacy Node.js code out there so we see CommonJS modules often.

//^ For now, we will use CommonJS modules. ES Modules will come later.

// ! Adding a Local Module to a Node application

// To add a local module, just add a new JavaScript file.

// ~ Lets create a classes.js module to our npmTestProject directory.

// see classes.js
