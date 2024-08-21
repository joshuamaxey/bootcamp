//^ SECTION 1: MULTIPLE CHOICE

//! 1. What will the code print out?

console.log("hello"[2]); // = l. will print 'l' because that is the character found at index 2 of the string 'hello'

//? Correct!

//! 2. What will the code print out?

console.log(24 % 6); // = 0. will return the remainder of 24/6, which is 0 because 24 is evenly divisible by 6.

//? Correct!

//! 3. What will the code print out?

console.log((false || true) && !true); // = false. Parenthesis first: (false || true) resolves to true. ! is before && in order of operations, leaving: true && false, which resolves to false.

/*
true && !true
true && false
false
*/

//? Correct!

//! 4. What will the code print out?

let num = 100;
let isBig = num >= 100;
let isSmall = num < 100;

console.log(isBig || isSmall); // = true.
//          true  || false  (substitute boolean values)
//              true (resolve boolean expression)

//? Correct!

//! 5. which is NOT true? fuck this one.

/*
let A = true;
let B = false;

console.log(!(A && B) === !A || !B); // true
console.log(!A && !B === !(A || B)); // true
console.log((A && B === !A) || !B); // false
console.log(!(!A && !B) === A || B); // true
*/

//! 6. What will the code print out?

console.log(1 + 2 * 3); // = 7, order of operations.

//? Correct!

//! 7. What will the code print out?

console.log(1 == "1.0"); // true, loose equivalency.

//? Correct!

//! 8. What will the above code print out?

let x = 1;
x++;
x + 2;
console.log(x); // = 2, the x++ shorthand is equivalent to x += 1, which means (x = x + 1) and increases the value of the variable x by 1. (x + 2) is a mathematical operation that returns the value of x + 2 but does not change the value of the variable itself.

//? Correct!

//! 9. What type is the variable 'name' in the below code?

let name = "Brian"; // = string. Text data enclosed by parenthesis.

console.log(typeof "Brian");

//? Correct!

//! 10 Which of the following types is mutable?

// boolean //! Not mutable
// number //! Not mutable
// string //! Not mutable
// array //? Mutable

//? Correct!

//! 11 Which is the best description of the string.slice() method.

//^ SECTION 2: Free Response: Ask a great question about a JavaScript topic of your choice.

//^ SECTION 3: Coding problems

//! 1.
//!   a. Write a function costOfGroceries(groceries) that takes a single array of grocery ites and returs the total cost.
//!   b. Write a function mostExpensiveGroceries(groceries) that takes in a 2-D array of grocery items and returns the index of the sub-array with the highest cost.

/* Polya
  a.
1. initialize an object to assign each grocery item key to its price value
2. initialize a variable totalCost to hold the total cost of the grocery items, set = 0 by default.
3. write a for loop that iterates throught each element of the groceries array.
4. add the price of the element located at each index to the totalCost variable.
5. After the loop has run to completion, return the totalCost variable.
*/

let costOfGroceries = function (groceries) {
  const prices = {
    //create an object with the prices of each grocery item.
    butter: 1,
    eggs: 2,
    milk: 3,
    bread: 4,
    cheese: 5,
  };

  let totalCost = 0; // initialize a new variable to hold the total cost of items in the array.

  for (let i = 0; i < groceries.length; i++) {
    //write a for loop to iterate through each element of the array
    totalCost += prices[groceries[i]]; //tell the computer to look for the price that corresponds to the element at the current index of the array per the object that we created within this function, then add that value to the totalCost variable.
  }

  return totalCost; //once the loop is finished, return the totalCost of all of the groceries.
};

let groceries = ["butter", "eggs", "milk", "bread", "cheese"];

console.log(costOfGroceries(groceries));

function mostExpensiveGroceries(groceriesList) {
  let highestCost = 0; //initialize a new variable to hold the highest cost once determined, set = 0.
  let indexOfHighestCost = -1; //initialize indexOfHIghestCost to -1 to indicate that no index hs been selected yet.

  for (i = 0; i < groceriesList.length; i++) {
    //write a for loop that iterates over each element (sub-array) of the array.
    let currentCost = costOfGroceries(grocerieslist[i]);

    if (currentCost > highestCost) {
      //compare the currentCost of the element (array) at the current index to the current highestCost
      highestCost = currentCost; //If the currentCost is higher than the current highestCost, replace the highestCost with the higher currentCost
      indexOfHighestCost = i; //Then set the indexOfHighestCost equal to the current index.
    }
  }
  return indexOfHighestCost; //Then return the index of the array with the highest total cost.
}

/*
! 2. Build a function stringChanger(word, operation) that takes in two arguments: A word and an operation. based on the operation, your function will return the word odified in some way. The operations are:

! a. "Capitalize" capitalize the first letter in the word.
! b. "uppercase" capitlize every letter in the word
! c. "double" return the word twice in a row.
! d. "reverse" return the string with the letters in reverse order.
! e. If the operation is invalid, return the word unchanged.
*/

/*
Polya.

1. Initialize a variable that sets operation to lowercase using the string.lowerCase() method.
2. Write a conditonal to see if the operation = "capitalize"
3. If it is, use the string.slice method to take the first letter of the word and capitalize it. Then add it back onto the rest of the word.
4. Write an else if statement to check if operation = uppercase
5. if it is, return the string.toUpperCase()
6. Write and else if statement to check if the operation = double
7. If it is, return the word + word
8. Write a conditional statement to check and see if the operation = reverse.
9. If it is, ???
10. Write an else statement to check if the operation is invalid.
11. If it is, return the word.
*/

function stringChanger(word, operation) {
  if (operation === "capitalize") {
    //check to see if the operation is "capitalie"
    return word.slice(0, 1).toUpperCase() + word.slice(1, word.length); //if it is, use the string.slice(0,1) method to make a copy of the first letter of the string. then the string.toUpperCase() method to capitalize the letter, then the word.slice(1, word.length) method to make a copy of the string minus the first letter that we've capitalized, and concatenate the capitalized first letter with the rest of the string using the "+" operator and return the output.
  } else if (operation === "uppercase") {
    //Check to see if the operation is "uppercase"
    return word.toUpperCase(); //if it is, use the string.toUpperCase() method to return the uppercase version of the string and return the output.
  } else if (operation === "double") {
    //Check if the operation is "double"
    return word + word; //If it is, return the string twice and concatenate them together using the "+" oprator and return the output.
  } else if (operation === "reverse") {
    //check to see if the operation is "reverse"
    return word.split("").reverse().join(""); //if it is, use the word.split("") method to split the string into an array of characters, the the array.reverse() method to reverse the order of the elements of the new array, then the array.join("") method to convert the reversed array back into a string (which will now be a reversed version of the word) and return the output.
  } else {
    //check to see if the operation is invalid (anything other than capitalize, uppercase, double, or reverse)
    return word; //if it is, return the word.
  }
}

console.log(stringChanger("pickle", "capitalize"));
console.log(stringChanger("pickle", "uppercase"));
console.log(stringChanger("pickle", "double"));
console.log(stringChanger("pickle", "reverse"));
console.log(stringChanger("pickle", "invalid"));

/*
ASKING GREAT QUESTIONS:

With respect to the function mostExpensiveGroceries, why is it necessary to set the variable "indexOfHighestCost" equal to -1 instead of 0 at the beginning of the function?

I understand that -1 is used to indicate that there is no sub-array selected yet (proper syntax), but it seems like 0 would also be effective because that's where we will start iterating anyway.

Are there conditions under which setting indexOfHighestCost = 0 could cause an error? Or is it just as effective as -1?
*/
