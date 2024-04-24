//! Problem-Solving, OOP, and TDD

//! Remember POLYA!

//^ 1. understand the problem
//^ 2. Come up with a plan
//^ 3. Execute the plan
//^ 4. Revisit and refactor your solution

// If you're stuck on execution, revisit the plan.
// If you can't come up with a plan, make sure you understand the problem.
// If you can't understand the problem, or do but can't come up with a plan, work with your partner and come up with a great coding question

//! Great coding questions are:

//^ 1. Specific
//^ 2. Clear and concise
//^ 3. Show you put work into it

// Teamwork and communication are essential to success.

//! Object-Oriented Programming (OOP) and Test-Driven Development (TDD)

// OOP is a programming paradigm that promotes MODULARITY by enabling developers to divide their code into smaller, self-contained units called OBJECTS which represent soething in the real world and allow us to organize our code into modular, interchangeable components. To practice OOP, you will:

//^ build simple JavaScript terminal games.
//^ learn how to read and write tests using a comprehensive test suite
//^ Import a rendering library to display your games and interact with it vi an APPLICATION PROGRAM INTERFACE (API).
//^ Learn how to manage CONTEXT in JavaScript objects. This is one of the trickiest parts of the language, and familiarity with context is requird to unlock JavaScript's full potential.

//! Asking Great Coding Questions

//^ Due Diligence

//Before th 15-minute rule, make sure you do the following when you're stuck on a coding problem:

// 1. Read error messags and logs to isolate bugs.
// 2. Look up error messages
// 3. Review relevant sections of Readings
// 4. Check official documentation
// 5. Discuss with your peer(s)

// If you're still stuck after this, it's time for the 15-minute rule.

//^ The 15-Minute Rule

// The 15-minute Rule is meant to help you come up with a GREAT question in 15 minutes and involves 4 steps:

// 1. Write down evrything you DO understand about the problem.
// 2. Write down everything you DON'T understand about the problem.
// 3. Based on 1 and 2, write down a SPECIFIC question.
// 4. Clean up the question by ELIMINATING unnecessary words.

//! Summary

// Whenever you're stuck on a problem:

//^ 0. POLYA

// 1. understand the problem
// 2. Come up with a plan
// 3. Execute the plan
// 4. Revisit and refactor your solution

//^ 1. Due Diligence to develop a partial understanding of the problem.

// 1. Read error messags and logs to isolate bugs.
// 2. Look up error messages
// 3. Review relevant sections of Readings
// 4. Check official documentation
// 5. Discuss with your peer(s)

//^ 2. 15-minute rule to develoop a great coding question.

// 1. Write down evrything you DO understand about the problem.
// 2. Write down everything you DON'T understand about the problem.
// 3. Based on 1 and 2, write down a SPECIFIC question.
// 4. Clean up the question by ELIMINATING unnecessary words.

//^ 3. Teamwork and communication.

//~ Intro to Programming

//~ OBject-Oriented Programming is CRITICAL.

//~ To be successful, FOCUS on the curriculum, ENGAGE in teamwork, AVOID USING AI TO LEARN.

//~ DRY - DONT REPEAT YOURSELF

//~ SINGLE RESPONSIBILITY - Let each function/block have only ONE responsbility - use helper functions, etc.

//! Clean Maintainable Code Learning Objectives

//^ Export and Import elements of code from one file to another, including code written by others
//^ Write DRY code
//^ Utilize DRY to improve code written by another
//^ Construct Classes and FUnctions that adhere to the SIngle Responsbility Principle
//^ Identify violations of the Single Responsibility PRinciple (SRP) in code and refactor it
//^ Utilize an API to interact with functionality found in a li brary
//^ Write functiosn to abstract complex API commands into simpler-to-use tools

//! Reading Tests

// The most important things about a test are that it is READABLE and UNDERSTANDABLE.
// Good tests use DESCRIPTIVE STRINGS to enumerate what they are testing as well as how they are testing it.

// You should be able to tell a few things about a test WITHOUT knowing the specfiic syntax of what is being tested. You should be able to tell what is being tested (name, description). And as a software engineer, you should be able to parse the descriptions of tests to understand what is being tested.

//! Refactoring Code

// REFACTORING is when you restructure or improve working code to make it more maintainable and easier to read.
// You are not finished with a problem unless you have attempted to refactor it at LEASE ONCE. Most working code can still be improved.

// The first step in refactoring is to have working code. Code is WORKING when it fits all of the specifications for the implementation of the problem that the code is solving. Efficincy is irrelevant.

// After the code is working and solves the problem, go through and see if there is anything that you can improve to make it easier for other developers to read or use your code.

// There are guidelines and principles to help you refactor code.

//! The DRY Principle

//^ The Operational Definition of DRY is: A PRINCIPLE OF SOFTWARE DEVELOPMENT AIMED AT REDUCING REPETITION OF SOFTWARE PATTERNS BY USING ABSTRACTION OR DATA NORMALIZATION TO AVOID REDUNDANCY.

//DRY code is:

// Clear
// concise
// Efficient

// To refactor your code to be DRY:

//^ 1. Identify patterns in code that occur at least twice.
//^ 2. Extract the pattern to its own function or set of code and then use that function or set of code wherever the pattern was used.

//! Single-Responsibility Principle

//^ The Operational Definition of the Single-Responsibility Principle is: EVERY ODULE, CLASS, OR FUNCTION IN A COMPUTER PROGRAM SHOULD HAVE RESPONSIBILTY OVER A SINGLE PART OF THAT PROGRAM'S FUNCTIONALITY.

// Your JavaScript function should do ONE thing and do it well. If your function is doing too many things, you should refactor your code to create one or more helper functions that follow SRP.

//! JavaScript Modules

// Thus far, we have used Node to run a single JavaScript file that contains all of the code we want to run. For very small applications, this approach is effective. But for most applications, a different approach is required.

// Your code will usually be organized into multiple files that work together, each of which contains a logical unit of code.

// To write programs, you will need to know how to:

//^ Add a local module to a Node.js application
//^ Use the module.exports property to export from a module
//^ export multiple items or a single item from a module
//^ use the require() function to import from a module

// In Node.js, each JavaScript file defines a MODULE.

// Modules defined within your project are known as LOCAL MODULES. Each local module has a single purpose and implements a single function.

//* In order to make variables and funcitons defined in a module (file) accessible to other modules (files), you need to EXPORT them.

// Each module in NOde has access to a 'module' object that represents the current module.
// This module object contains a number of properties that provide information about the current module.
// "module.exports" is one of these properties, and is used to export items from the module.

// console.log(module);
// console.log(module.exports);
// console.log(module.paths);

//! Assigning an object to the 'module.exports' property.
