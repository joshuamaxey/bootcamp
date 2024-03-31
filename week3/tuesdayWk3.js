//! Declare Keys/Values: given the following object declaration, declare values.

/*

const obj = {};

obj.firstKey = "firstValue"
obj["numeric"] = 2
obj.boolean = false
obj["object"] = {};

console.log(obj['firstKey']);       // firstValue
console.log(obj['numeric']);        // 2
console.log(obj['boolean']);        // false
console.log(obj['object']);         // {}

*/

//! Declare Keys/Values-----------------------------------------------------

/*

//? There are two ways to declare object keys and values: bracket and dot notation:

const obj2 = {};

obj2["key1"] = "value1"
obj2.key2 = "value2"
obj2["key3"] = 3

//^ pretty straightforward. Don't forget the rules and distinctions. for instance, keys that start with numbers won't work with dot notation.

//? So what happens if you want to DELETE a key/value pair within an object?

delete obj2.key1;

console.log(obj2); // returns only key2 and "Key3", because key1 has been deleted and its value with it.

delete obj2["key2"];

console.log(obj2); //returns only key3: 3 because now both key1 and key2 have been deleted along with their values.

*/

//! Using Variables as Keys: Write a function that accepts an object and a string and then prints the value from the object at the key string

/*

const obj3 = {
    first: "1",
    second: 2,
    third: "three"
}

const str = "first";

const variableAsKey = (obj3, str) => { //Note that this is an arrow function, and the difference in syntax
    const value = obj3[str];
    console.log(value);
}

variableAsKey(obj3, str);                // "1" (looks like 1 in terminal)
variableAsKey(obj3, "second");           // 2

*/

//! Dot vs Bracket Notation: Given an object, print out the values corresponding to each key individually. Try using both dot and bracket notation where appropriate.

/*

const obj4 = {
    "first key": "1",
    second: 2,
    "third_key": "three"
}

console.log(obj4["first key"]);
console.log(obj4["second"]);
console.log(obj4.third_key);

let testObject = {}; // = undefined

testObject["num"] = 10;
testObject.fruit = "apple"
testObject["num2"] = 20;

console.log(testObject);

//^ NOTE that ONLY bracket notation allows for variables to be used as keys! And dot notation cannot be used with keys that begin with a number.

let cat = {};
let myKey = "color";

cat.myKey = "orange";

console.log(cat.myKey);

*/

//! Cat Builder: Write a function catBuilder(name, color, toys) that returns a cat object with the corresponding properties.

/*

function catBuilder(name, color, toys) {
    const cat = {
        name: name,
        color: color,
        toys: toys
    }
    return cat
}

console.log(catBuilder("Butthead", "white", "birds"));
console.log(catBuilder("Leo", "orange", "rats"));

*/

//! Array of Objects: Given the below array, write a fuction printNames that prints the naes of every object in the array.

/*

const users = [
    {
        name: "Gerald",
        age: 23,
        height: 68
    },
    {
        name: "Winnie",
        age: 35,
        height: 62
    },
    {
        name: "Peter",
        age: 61,
        height: 72
    }
]

const printNames = users => { //This function takes in one parameter, "users" which is expected to be an array of objects.
    users.forEach((object) => {console.log(object.name)}) // Here, the forEach method is called on the array, with an anonymous function as its argument.
    //Then the anonymous function takes each object in the array as its own argument, one by one.
    //For each object, the function accesses its name property and prints the corresponding value to the console.
}

printNames(users)                   // Gerald Winnie Peter

*/

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
