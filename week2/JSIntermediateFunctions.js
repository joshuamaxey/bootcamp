/*
JavaScript treats functions as "first-class objects." This means that functions are values, so they can be stored in variables. A first-class object is any object that can be stored within a variable.
Consider the following:
*/

function add(x, y) {
  return x + y;
}

//this function could also be written as a function expression:

let addExpression = function (x, y) {
  return x + y;
};

console.log(addExpression(5, 7));

// Here's another simple function.

function sayHello() {
  console.log("Hello!");
}

sayHello();

// Here's the same function written as a function expression.

let sayHelloEx = function () {
  console.log("Hello");
};

sayHelloEx();

console.log(sayHelloEx); //If you print this variable to the console, it will actulaly print the name of the function!

/*
Note the distinction between:

1. Function declaration
2. Function expression
*/

//------------------------------------------------------------------(MUTABILITY)--------------------------------------------------------------------------------

/*
When something is mutable, it is dynamic and can be changed. Something immutable is static, it cannot be changed. People are mutable. God is not.

Lets talk about strings and arrays.

BOTH have indices
BOTH share common methods like .length, .indexOf(), and .slice().

HOWEVER, note the following distinction between strings and arrays:
*/

let Arr = ["a", "b", "c", "d", "e"];
console.log(Arr);

Arr[0] = "z";
console.log(Arr);

//In the array above, we are able to use the array[] method to assig a new element to an index of an arry. Run the code on this page and you will see that the "a" has been changed to "z" the second time that the array is printed without changing the rest of the elements of the array. Watch what happens when we try to do the same thing to a string:

let str = "abcde";
console.log(str);

str[0] = "z";
console.log(str);

/*
Here, you can see that we are unable to change an element of the string using the str[] method. This is because strings are immutable. Arrays can be changed, while strings cannot. This is what makes an array a mutable object while a string is not.

There are SOME array methods that will modify an existing array, while there are ZERO methods that will modify an existing string. Look:
*/

let word = "machine";
word.toUpperCase();

console.log(word); //returns original string even though the .toUpperCase() method was used prior to printing the string.
console.log(word.toUpperCase()); //returns uppercase version of the string without changing the value of the original string.
console.log(word); //The original string still prints lower case, it is unchanged.

/*
It is important to note ( ^ ) that the .toUpperCase() method WILL return an uppercase version of a string. But it does NOT actually change (mutate) the original string. Consider that with respect to mathematical operations, performing x+2 does not actually increase the value of x, it just adds 2 to the value but leaves the original variable unchanged. It is only be using x++ (etc) that we change the actual value of the variable x. Similarly, the .toUpperCase will return an uppercase version of the string but does not actually change (mutate) the original string, because strings are immutable.
*/
