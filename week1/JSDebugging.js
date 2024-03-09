/*
Bugs are unavoidable.
They are an opportunity to practice debugging.
Here are the three steps to debugging:
*/

let step1 = "Read the error message"; //if there is one
let step2 = "Use console.log() to debug malfunctioning code"; //console.log to test your code
let step3 = "Write tests that cover common use and edge cases";

//Lets say we're writing afunction to see if a number is smaller than ten.

function isNumberSmallerThanTen(num) {
  //change number to num.
  if (num < 10) {
    return true;
  } else {
    return false;
  }
}

console.log(isNumberSmallerThanTen(5));
console.log(isNumberSmallerThanTen(11));

//When we run the above code, we get the error message: ReferenceError: Num is not defined. This error is pretty simple. We check our parameter to see that we've used number in the function definition but num in the code to be executed. Simple fix.

//Now lets look at a more complex example.

let fruitArray = [
  "orange",
  "apple",
  "banana",
  "orange",
  "orange",
  "pear",
  "apple",
];

function removeOranges(fruitArray) {
  for (let i = 0; i < fruitArray.length; i++) {
    if (fruitArray[i] == "orange") {
      fruitArray.splice(i, 1);
    }
  }
  return fruitArray;
}

//This function should iterate through fruitArray and remove any oranges. Let's try to run it.

console.log(removeOranges(fruitArray));

//We see that there is still an organge left over, indicating a problme.

/*
let index = 1;

while (index !== 11) {
  console.log("The number is " + index);
  index *= 2;
}
*/

/*
Why does the above vode ^ (commented out) cause an infinite loop?
Because the index begins at 1, and is multiplied by 2 at every iteration.
The condition is such that it checks to see if a number is NOT equal to eleven.
1 * 2 = 2 * 2 = 4 * 2 = 8 * 2 = 16, etc
Since index will never be === 11, the condition is never false, and the code runs forever.
*/
