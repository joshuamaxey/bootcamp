

//! ARROW FUNCTIONS!

//? Arrow Functions are a more concise way of declaring functions. They enable us to write shorter functions.

let average = function(num1, num2) {
    let avg = (num1 + num2) / 2;
    return avg;
}

//! VS

let averageArrow = (num1, num2) => {let avg = (num1 + num2)/2; return avg};

console.log(average(10,5));
console.log(averageArrow(10,5));

//^ Both functions here achieve the same thing, but the arrow function is shorter, simpler, and can be written on a single line.

//?Additionally, notice that the FUNCTION keyword is not necessary when declaring arrow functions.

let fullName = function(fname, lname) {
    let name = (fname + " " + lname);
    return name;
}

let fullNameArrow = (fname, lname) => {let name = (fname + " " + lname); return name;};

console.log(fullName("Joshua", "Maxey"));
console.log(fullNameArrow("Joshua", "Maxey"));

//^ Both fullName functions produce the same output, but he arrow function is shorter, simpler, and can be writte on one line.
//^Additionally, notice that the "function" keyword is not ncessary. This is because arrow functions are ANONYMOUS by default, meaning that they do NOT HAVE A NAME unless assigned to a variable. This makes them especially useful as helper/nested functions.

//? If there is only ONE parameter, you can OMIT the () around the parameter declaration. Like this:

let greeting = function(fName) {
    let intro = "Hello, my name is " + fName + ".";
    return intro;
}

let greetingArrow = fname => {let intro = "Hello, my name is " + fname + "."; return intro;};

console.log(greeting("Joshua"));
console.log(greetingArrow("Joshua"));

//^Here, notice that both greeting functions produce the same output, but the the arow function is shorter, simpler, and can be written on one line.
//^Additionally, notifce that the "function" keyword is not necessary.
//^Also notice that since there is only a single parameter required, the () around that parameter are not necessary.

//? If you have NO parameters, it is still necessary to use parenthesis.

let sayHello = function() {
    return "Hello!"
}

let sayHelloArrow = () => {return "Hello!";};

console.log(sayHello);
console.log(sayHelloArrow);

//* Here, for some reason, these functions are returning "[Function: sayHello]" and "[Function: sayHelloArrow]" instead of the output specified within the functions. Not sure why.

//& Remember that in JavaScript, an EXPRESSION is ANY line of code that returns a value. STATEMENTS are ANY line of code. Period.

//? Single-expression arrow functions allow for IMPLICIT RETURNS, which means that the CURLY BRACES {} and RETURN keyword are IMPLIED! This is where we really begin to see the advantage of using arrow functions.

let multiply = function(num1, num2) {
    return num1 * num2
}

let multiplyArrow = (num1, num2) => num1 * num2;

console.log(multiply(6, 4));
console.log(multiplyArrow(6, 4));

//^ Notice that both functions return the same output. But the arrow function is shorter, simpler, and can be written on a single line.
//^Additionally, notice that BECAUSE the body of the function is a single expression, NEITHER the {curly braces} OR the RETURN keyword are necessary. Both are omitted.

//!-------------------------------------------------

let yell = function(word) {
    return word.toUpperCase() + "!!!";
}

let yellArrow = word => word.toUpperCase() + "!!!";

console.log(yell("hello"));
console.log(yellArrow("hello"));

//^Notice that both functions return the output. But the arrow function is shorter, simpler, and can be written on a single line.
//^Additiionally, because there is only ONE parameter, the (parenthesis) around the parameter are omitted.
//^Also notice that because this is a single-expression function, BOTH the {curly braces} AND the RETURN keyword can be omitted from the arrow function.

//!------------------------------------------------
