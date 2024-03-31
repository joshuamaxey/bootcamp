//! SPREAD AND REST PARAMETER syntax

//The SPREAD OPERATOR and REST PARAMETER allow us to take advantage of the dynamic nature of JavaScript that allows its functions to take FEWER or MORE ARGUMENTS than specified.

//Using the REST PARAMETER syntax allows a function to accept an arbitrary umber of arguments.
//^ REST PARAMETER takes the REST of the parameters and returns them as an array.

//The SPREAD OPERATOR syntax can be used with OBJECTS and ARRAYS.
//^ SPREADS elements into data structures
//^ SPREADS interable data types into a function as arguments.

//! JavaScript Functions Recap.

/*
All JavaScript functions can take FEWER arguments than expected. If a parameter has NOT been declared when the function was defined, then the default value for that parameter is UNDEFINED.
*/

function tester(arg) {
    return arg;
}

console.log(tester(5)); // 5
console.log(tester()); // undefined

/*
A function will still run, even if no arguments are passed into it at all.
Both functions above will print regardless of whether any arguments are passed in. When no arguments are passed, the parameter is asigned the value UNDEFINED by default.

Additionally, the function will run when there are too MANY arguments passed into it.
*/

console.log(tester(5, 6, 7)); // prints 5, takes the first argument and ignores the rest.
console.log(tester(2, 3, 4, 5, 6)); //prints 2, takes the first argument and ignores the rest.

/*
Let's take a function that is slightly more coplicated:
*/

let adder = (num1, num2) => {return num1 + num2};

console.log(adder(1)); // returns NaN because the second parameter is not specified and is therefore assigned the default value (UNDEFINED) and any number + undefined = NaN (not a number)
console.log(adder(3, 5)); // returns the sum 8. Two arguments are given, as the function specifies, so it runs normally.
console.log(adder(5, 6, 7, 8)); //returns 11. This function also runs normally. Extra arguments were given, so the function takes the first two (since two parameters were specified within the original function definition) and ignores the rest.

//! Utilizing Rest parameters

/*

//So what do we do if we want to access the extra arguments? What if we wanted the adder function to take ALL incoming arguments, regardless of how many, even though there were only two specified within the function definition?

let logArguments = (...allArguments) => console.log(allArguments);

logArguments(5, true, "string");
logArguments(1, 2, "string", ["array"], false);

//^ In these two functions we can see that the logArguments function we wrote utilizes ALL of the parameters given, regardlesss of how many there are or what their nature is.

//For a more practical example, lets write another adder function using REST PARAMETER syntax

//& It is important to note that the ...rest parameters RETURNS an ARRAY of the remaining parameters.

//& ADDITIONALLY, notice that the REST PARAMETER is often used in conjunction with the .forEach method.

let adder2 = (num1, ...otherNums) => {
    console.log("The first number is " + num1); //First, this function logs the specified sentence to the console (states what the first argument [num1] is).
    let sum = num1 //Next, initialze a new variable 'sum' and assign it the value of the first argument given to the function.

    otherNums.forEach(function(num) { //"otherNums" is the name of the ARRAY produced by using the REST parameter, since the rest parameter creates an array from all of the parameters that it corresponds to. The forEach method ITERATES over each element of the array that is produced by the rest parameter "...otherNums". For each 'num' in the 'otherNums' array, the below code is executed.
        sum += num; //As the forEach method iterates through the elements in the otherNums array, the value of 'num', the number located at the current index of the array of numbers produced by the ...otherNums rest parameter, is added to the total value of "sum".
    })

    console.log("The sum is: " + sum) //Finally, the sum is returned within this string.
}

adder2(1, 2, 3, 4, 5);

let colorPicker = (color, ...otherColors) => {
    let string = "I picked these colors: " + color;

    console.log(string, otherColors);
}

colorPicker("red", "blue", "green", "yellow")

*/

//! Using Spread Syntax

//The Spread operator enables you to BREAK DOWN a data structure into the elements that comprise it. It has two basic behaviors:

//^ 1. Take a data type (array, object) and SPREAD the values of that type into a place where ELEMENTS are expected.

//^ 2. Take an iterable data type (array, string) and SPREAD the elemnts of that type where ARGUMENTS are expected.

//? The spread operator is very useful for SPREADING the valeus of an array or object where comma-separated elements are expected.

//^ Note that SPREAD OPERATOR syntad is very similar to REST PARAMETER syntax but they do very different things:

let numArray = [1, 2, 3];

let moreNums = [...numArray, 4, 5, 6];

console.log(moreNums); //prints 1, 2, 3, 4, 5, 6 -- The elements (numerical values) within "numArray" were "spread" into the moreNums aray as individual elements (where comma-separated elements are expected to be)

//^ Prior to this point, we may have used to 'concat' method to perform the above function/purpose, but now we can accomplish the same bbehavior using the SPREAD OPERATOR.

//? We can also SPREAD OBJECTS Using the spread operator, you can SPREAD the key-value pairs from one object into anotehr new object. For example:

let colors = {red: "scarlet", blue: "aquamarine"};

let newColors = {...colors};

console.log(newColors); // prints (red: "scarlet", blue: "aquamarine")

//AND just like we previously showed with ARRAYS, we can use this SPREAD BEHAVIOR to MERGE OBJECTS together as well.

let colors2 = {green: "forest", yellow: "sunflower"};

let moreColors = {...colors, ...colors2};

console.log(moreColors); // prints (red: "scarlet", blue: "aquamarine", green: "forest", yellow: "sunflower"), as both colors and colors2 objects were SPREAD into the moreColors object.

//? Finally, we can also SPREAD ITERABLE DATA (data from arrays and strings, which are numbered with ordered indices) into the ARGUMENTS that are passed into a FUNCTION.
//! THIS DOES NOT WORK WITH OBJECTS. ONLY ITERABLE DATA TYPES.

let speak = (verb, noun) => {return "I like to go " + verb + " with " + noun + "."}

const words = ["running", "Jett"];

console.log(speak("running", "Jett"));
console.log(speak(...words));

//^ Here you can see that we use the SPREAD OPERATOR SYNTAX to "spread" the elements of an ITERABLE DATA TYPE (an array) into the speak() function call as arguments.
