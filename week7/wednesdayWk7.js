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
