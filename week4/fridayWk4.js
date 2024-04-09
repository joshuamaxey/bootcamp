//! Learning Boost---------------------------------------------------------------------------------------------------------------

//^ 1. Where does the terminal command 'cd' take you if you don't provide a path?

// To the HOME DIRECTORY //! NOT the root directory.

//^ 2. What does the below code print?

let a = [1, 2, 3];
console.log(typeof a); //will print "object". Arrays are a type of object in JavaScript.

//^ 3. In the code below, what will be printed by 'hungryAlert()'

let name = "Joshua";

function hungryAlert() {
    console.log(name + " is hungry");
}

hungryAlert() // "Joshua is hungry". Because of the way that scope works in JavaScript, this function will search the outer (global) scope for the variable if it does not find it within the local (function) or block scope.

//! Formative Quiz---------------------------------------------------------------------------------------------------------------

//^ 1. Which of the above will return a reversed version of a string (multiple choices may be correct)

let reverse1 = str => {
    let strArr = str.split("");
    strArr = strArr.reverse();
    return strArr.join("");
}

let reverse2 = str => {
    return str.split("").reverse().join("");
}

let reverse3 = str => str.split("").reverse().join("");

console.log(reverse3("string")); //^ Both reverse2 and reverse3 work, I believe that this is because reverse1 (returns undefined) has no return statement.
//Single-statement arrow functions do NOT require a return statement (which is why reverse3 works despite that there is no return statement.)
//^ HOWEVER, multiple-line arrow functions DO require a return statement. Because reverse1 does not have one, it returns undefined.

console.log(reverse1("string")); //^ CONFIRMED. When I add a return statement to reverse1, it does return the string reversed. So all three of thse methods (though the second two are shorter and more efficient) will return the reversed string as intended. However, multi-expression arrow functions do require a return statement or they will return undefined.
