//! Scope

//^ Scope is the SET OF VARIABLES that are AVAILABLE FOR USE.
//^ If a variable or an expression is OUTSIDE of the current scope, it is NOT available for use.
//^ When we DECLARE a variable, it is only valid within the scope that it was declared.
//^ Scopes can be nested.

// When we declare a variable within a certain scope, it evaluates to a value within that scope. Note that we have been using scope all along. Now we are assigning a name to this concept.

//^ Learning objective is to be able to predict the evaluation of code that utilizes:

// 1. local scope
// 2. block scope
// 3. lexical scope
// 4. scope chaining

//! Advantages of Utilizing Scope

//^ SECURITY
// Scope ensures that variables can only be accessed within pre-defined areas of programs.
//^ REDUCED VARIABLE NAME COLLISION
// Reduces name collision (namespace collision) by enabling you to use the same variable names within different scopes without accidentally overwriting any of those variables.

//! There are THREE types of Scope in JavaScript: Global Scope, Local Scope, and Block Scope.

//! Global Scope is the outtermost scope that exists.

//^It is represented by the WINDOW in a browser and the GLOBAL OBJECT in Node.js. Adding attributes to these objects makes them available throughout the entire program. Like this:

let myName = "Joshua";

console.log(myName); // Joshua

//^ This variable is not inside a function, it is defined out in the open within our code, so it is part of global sope. It is best practice to AVOID global variables because each one increases the chance that name collision will occur. If we are unaware of all of the global variables in our code, we may accidentally overwrite them.

//! Local Scope is the set of variables that are available for use within a function.

//^ The scope located WITHIN A FUNCTION is called local scope. Local Scope includes:

// 1. The function's ARGUMENTS
// 2. Any LOCAL VARIABLES declared within the function.
// 3. Any VARIABLES that were decared within the FUNCTION DEFINITION.

//^ In JavaScript, we enter a NEW SCOPE whenever we entere a FUNCTION.

myName = "global";

function function1() {
    let myName = "func1";
    console.log("function1 myName: " + myName);
}

function function2() {
    let myName = "func2";
    console.log("function2 myName: " + myName);
}

function1(); // function1 myName: func1
function2(); // function2 myName: func2
console.log("global yName: " + myName); // global myName: global

//! A BLOCK in JavaScript is denoted by a pair of curly braces.

//^ Examples of block statements in JavaScript are IF conditionals and FOR or WHILE loops.
//^ When we use the keywords LET or CONST within curly braces, those variables are BLOCK SCOPED.

//global scope
let dog = "woof";

//block scope
if (true) {
    let dog = "bowow";
    console.log(dog); // prints "bowow"
}

console.log(dog); //prints "woof"

//! SCOPE CHAINING takes advantage of the fact that IN JAVASCRIPT, an INNER SCOPE has access to variables in the OUTER SCOPE.

let name = "Fiona";

function hungryHippo() {
    console.log(name + " is hungry!");
}

hungryHippo(); // "Fiona is Hungry!"

//^ If the variable referenced within the function is NOT found within the local scope, JavaScript will EXPAND ITS SEARCH into the scopes OUTSIDE of the current scope. It will find the FIRST matching variable name in the outer scope, stop searching, and use that variable.

//global scope
let person = "Rae";

//sayHello function's local scope
function sayHello() {
    let person = "Jeff";

    //greet function's local scope
    function greet() {
        console.log("Hi, " + person + "!");
    }
    greet();
}

sayHello(); // Hi, Jeff!

//^ In the nested function above, JavaScript does not find a variable "person" within the innermost function. So it expands its search to the NEXT outer scope, which is the sayHello() function. Since it finds a variable 'person' in the outer function, it stops searching and uses that variable. This is why it prints "Hi, Jeff!" instead of "Hi, Rae!"
// Because it searches the next outermost function first, then if it doesn't find the variable, it expands its search again. But it stops searching and uses the FIRST variable that it finds. Sine it found the matching variable in the outer function, there was no need to further expand the serch into the gloal scope.
//^ NOTE that an inner scope can identify and reference OUTER variables, but an outer scope CANNOT reference inner variables.
// Functions such as the "greet" function above that USE (or CAPTURE) VARIABLES like the person variable are called CLOSURES.

//! Lexical Scope is determined at LEXING TIME (the time that the computer takes to PARSE your code before it is actually run).

//^ JavaScript is a language WITHOUT DYNAMIC SCOPING, which means that we can determine the values of variables within a piece of code just by LOOKING at their scopes.

function outer() {
    let x = 5

    function inner() {
        // Here we know that the value of x will resolve to 5 because of scope chaining search the scope outside of this one until it finds the variable named x. We can therefore tell what the value of x will be WITHOUT actually running this code, just by looking at the scopes involved.
        console.log(x);
    }
    inner();
}

//! SUMMARY

//^ The SCOPE of a program in JavaScript is the set of variables that are available for use within the program.
// Due to LEXICAL SCOPING, we can determine the value of a variable by looking at variou scopes without having to run our code.
//^ Scope chaining allows code within an inner scope to access variables declared in an outer scope. BUT NOT VICE VERSA.
// There are THREE difference kinds of scope in JavaScript:

//~ 1. Global scope - The global space in JavaScript
//~ 2. Local scope - The scope within a function
//~ 3. Block scope - The scope within a pair of curly braces


//? -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//! Different Kinds of Variables in JavaScript

//^ Variables are used to store information to be referenced and manipulated in a computer program.
// The SOLE PURPOSE of a variable is to store data in computer memory.
//^ Thus far, the LET keyword has been our ONLY way to declare a JavaScript variable.

//& Learning Objectives:

//& 1. Indentify THRE keywords used to declare variables in JavaScript
//& 2. Explain the differences between CONST, LET, and VAR
//& 3. Identify the difference between function and block-scoped variables.
//& 4. Paraphrase the concept of HOISTING in regard to function and block-scoped variables.

//All of the code written in JavaScript is EVALUATED.
//^ A variable ALWAYS evaluates to the value it contains no matter how you declare it.

//! Different Ways to Declare a Variable

//^ The original keyword used to declare variables in JavaScript was VAR.
//^ In 2015, LET and CONST were introduced.

//& let: Variables declared with the LET keyword CAN BE REASSIGNED. Variables declared using let are block-scoped.

//& const: Variables declared with the CONST keyword CANNOT BE REASSIGNED. Variables declared using const are block-scoped.

//& var: Variables declared with the VAR keyword may or may not be reassigned, and the variable is function-scoped (local-scoped).

//^ ALWYAYS USE LET and CONST. Avoid using VAR.

//! HOISTING is a JavaScript mechanims wherein variables and function declarations are moved to the TOP of their schope before code execution.

//^ When you run JavaScript code, the variables and function declarations will be HOISTED to the top of their particular scope. This is important because CONST and LET are block-scoped while VAR is function-scoped.

//! Function-Scoped Variables:

//^ When you use VAR to declare a variable, that variable will be confined to the cope of the current function.

// function test() {
//     var a = 10;

//     console.log(a); // 10
// };

function test() {
    //! var hoistedVar = 10
    console.log(hoistedVar); // undefined

    var hoistedVar = 10; //Then we define it, later in the function because it is HOISTED to the top of its scope (this function).
};

test(); // But when we run the function, it prints "10" despite that the variable was NOT declared before it was used within this function. This is because of HOISTING.

//^ Hoisting will isolate and declare a variable at the top of its scope BEFORE the code is run. Since variables declared with "Var" are function-coped, JavaScript will "hoist" the variable "hoistedVar" to the top of the function (top of its scope) before the code is run.

//! Block-Scoped Variables:

// ^ The LET or CONST keywords declare variables within BLOCK SCOPE. The following code types create a block scope:

// 1. if statements
// 2. while loops
// 3. switch statements //! What is a switch statement?
// 4. for loops

//^ We can use LET to declare re-assignable block-scoped variables.

function blockScope() {
    let test = "upper scope";
    if (true) {
        let test = "lower scope";
        console.log(test); // "lower scope"
    }
    console.log(test); // "upper scope"
}

blockScope()

//^ In the above example, the TEST variable was declared TWICE using the LET keyword but since they were declared wtihin different socpes they have different values.

// JavaScript will raise a SyntaxError if you try to declare the same let variable twice in one block:

if (true) {
    let test = "this works!";
    // let test = "nope!" // SyntaxError: Identifier 'test' has already been declared?
}

//! Using the CONST keyword

//^ We use const to declare block-scoped variables that CANNOT BE REASSIGNED. In JavaScript, these variables that cannot be reassigned are called CONSTANTS.

// Constants are block-scoped like variables declared with LET
// JavaScript ENFORCES constants by raising an error if you try to reassign them.
// Trying to redeclare a constant with VAR or LET by the same name will also raise an error.

//! Hoisting With Block-Scoped Variables

if (true) {
    // console.log(str); //ReferenceError: Cannot access 'str' before initialization
    const str = "string";
}

if (true) {
    // console.log(str); //ReferenceError: Cannot access 'str' before initialization
    let str = "string";
}

//^ Trying to use variables initialied with CONST or LET before they are initialzed will always produce a ReferenceError.

//! DO NOT declare variables WITHOUT A KEYWORD. For example:

x = 5

//^ These are automatically assigned to the global scope, regardless of which scope they are actually initialized within. In other words, if you declare a variable this way INSIDE of a function, it will still be assigned to the global scope.

//? --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//! CLOSURES

//& This is a VERY COMMON INTERVIEW QUESTION

//& "Closure" is OPERATIONALLY DEFINED as "THE COMBINATION OF A FUNCTION AND THE LEXICAL ENVIRONMENT WITHIN WHICH THAT FUNCTION WAS DECLARED."

// Practically, a CLOSURE is when an inner function uses, or changes, variables in an outer function. Closures in JavaScript affect the CREATIVITY, FLEXIBILITY, and SECURITY of your code.

//^ Learning Objectives: Implement a closure AND explain how that closure affects scope.

// Below is an example of a simple closure:

function climbTree(treeType) {
    let treeString = "You climbed a ";

    function sayClimbTree() {
        //This inner functio has acces to "treeString", which was delcared in the OUTER SCOPE, including any defined parameters
        return treeString + treeType;
    }

    return sayClimbTree();
}

const sayFunction = climbTree("Pine"); // we assign the result to a new variable.

//So we cancall it, showing that the variables have ben savec in the closure when the sayFunction prints out their values.
console.log(sayFunction); // You climbed a Pine

//^ Closures have access to ANY VARIABLES WITHIN ITS OWN SCOPE as well as ANY OUTER FUNCTION'S SOPE when they are declared. This is where the LEXICAL ENVIRONMENT comes in.
// The LEXICAL ENVIRONMENT consists of ANY VARIABLES within the cope in which the closure aws declared //! (THE LOCAL INNER SCOPE and THE OUTER FUNCTION'S SCOPE and THE GLOBAL SCOPE.)
//^ A closure will keep reference to all the variables when it was defined EVEN IF THE OUTER FUNCTION HAS RETURNED.

//& A closure is PRACTICALLY DEFINED as the mechanism by which an INNER FUNCTION uses, or changes, variables in an OUTER FUNCTION.

//! EXAMPLE 1

// function appleTree() {
//     let aVariable = "apple";
//     function tree() {
//         return aVariable; //Here, we see that the INNER FUNCTION "tree()" USES (returns) the variable "aVariable" which was declared in the outer function. This is an example of a VERY SIMPLE CLOSURE.
//     }
//     return tree();
// }

// console.log(appleTree());

//^ When we run the appleTree function, the INNER FUNCTION "tree()" is essentially CLOSING OVER or CAPTURING the "aVariable" variable within the OUTER FUNCTION. Thus, this mechanism is called a CLOSURE.

//! EXAMPLE 2

function appleTree() {
    let tree = {type: "apple", grown: false}
    function growTree() {
        tree.grown = true; //Here, we assign a new value to the "grown" key within the "tree" object above. THIS is an example of a function within which the inner function CHANGES (not just captures) a variable within an OUTER function.
    }

    growTree();
    return tree;
}

console.log(appleTree()); // {type: "apple", grown: "true"}

//^ So when we run this function, the inner function growTree CAPTURES (CLOSES OVER) the variable "tree" in the outer function and then changes it by assigning the key "grown" to the value "true" instead of "false".
