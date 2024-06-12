// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// let res = sum(null);
//   console.log(res);

//^ When we run the code on lines 10-11, we throw a TypeError that stops program execution. Lets use a try...catch block to see if we can prevent this error from terminating the program and stopping code execution.

try { // TRY to run the following code...

  let res = sum(null); // Savve the function call to a variable "res" for clarity
  console.log(res); // log the result of our function call (stored in 'res') to the console

} catch (error) { // If the code in our try block throws an error, catch it...

  if (error instanceof TypeError) { // ...and if that error is a TypeError... (which we anticipate it will be, since a TypeError was thrown when we ran the code in lines 12-13 outside of the try...catch block)
    console.error(`Wrong Type: ${error.message}`) // ...log this error message to the console.
  } else { // ...and if the error is any type OTHER than a TypeError...
    console.error(error.message) // ...log that error's .message to the console
  }
}

// Our try...catch block prints: "Wrong Type: Cannot read properties of null (reading 'length')" as expected

//^ This means that the error thrown IS a TypeError, as we expected. It also means that we successfully caught the error, preventing the error from stopping code execution.

// 2.
// tests
sayName("Alex");
// sayName(1); //(moved to the try...catch block on line 54)
// Your code here

//^ Initially, the code on lines 35-36 throws a ReferenceError because the function that we're attempting to call does not exist. Lets Write the function according to the README. Instead of a ReferenceError, our function should throw a TypeError when the input is not a string.

function sayName(name) {

  if (typeof name === "string") { // If our 'name' input IS of the string data type...

    console.log(name); // ...then we log the 'name' to the console
  } else { // Otherwise, if 'name' is not a string...

    throw new TypeError("Invalid name! Must be a string!"); // ...throw the TypeError specified in the README
  };
};

//^ Now that we've written our sayName function, we no longer throw a ReferenceError when we run the code on lines 35-36. Instead, we succesfully print "Alex" (line 35) and then throw a TypeError when we run the second function call on line 36. This TypeError causes the program to stop code execution. Let's put that function call inside of a try...catch block to see if we can throw the correct error without terminating the program and stopping code execution.

try {

  sayName(1); // Try to invoke the sayName function with an argumnt of 1...

} catch (error) { // ...If the code in our try block throws an error, catch it...

  if (error instanceof TypeError) { // ...and if the error is a TypeError...
    console.error(`Wrong Type: ${error.message}`) // ...print this error to the console
  } else { // Otherwise, if the error is not a TypeError...
    console.error(error.message) // ...print the error's .message to the console
  }
}

// Our try...catch block prints: "Wrong Type: Invalid name! Must be a string!" as expected.

//^ This means that the error IS a TypeError, as we anticipated. It also means taht we successfully caught the error, printing the error message to the console without stopping code execution.

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }

  console.log(greeting);
}

//^ In problem 3, we're supposed to write a test case that will cause an error to be thrown. We can clearly see that an error will be thrown in the absence of a greeting (see line 73-74), so we know that all we need to do to throw the error is invoke the function without an argument.

// greet(); // prints: "Error: There was no greeting given."

//^ Now that we've confirmed that invoking the function with no argument will cause the error to be thrown, lets perform this function call within a try...catch block so that we can catch the error, prevent the program from stopping code execution, and print 'Hello World!" to the console as instructed per the README:

try {

  greet(); // Try to invoke the greet() function with no argument...

} catch (error) { // If the code in our try block causes an error to be thrown, catch it...

  console.error("Hello World!") // ...then print "Hello World!" to the console

};

// Our try...catch block prints this to the console: "Hello World!" as expected.

//^ This means that we successfully threw the error, then caught it, then printed our message to the console, all without stopping code execution.
