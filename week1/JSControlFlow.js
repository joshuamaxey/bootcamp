/*



---------------------------------------------------------CONDITIONALS------------------------------------------------------------



Control flow is the order in which instructions are executed within a program.

Control flow is modified using CONTROL STRUCTURES, expressions that alter the control flow based on given parameters.

CONDITIONAL STATEMENTS are a type of control structure. They enable you to specify the conditions under which a certain block of code is run. They are similar to functions except that they are NOT CALLED. Functions must be called to run, whereas conditional statements run under certain conditions.

*/

if (3 === 3) {
  console.log("This is a three!");
}

/*
If statements are the simplest conditional statement. They are made of two parts:

1. Test expression (if statement)
2. Then expression

The "then expression" only runs when the "if statement" is true.
*/

if (3 == "3") {
  console.log('"3" still counts as 3');
}

if (5 == 3) {
  console.log("This won't run because 5 isn't even loosely equal to 3.");
}

/*
You can also chain additional "if statements" or test expressions onto your if statement using an "else if" statement.

Else/if statements have more parts:

1. Test Expression 1 (if statement)
2. Then expression 1
3. test expression 2 (else if statement)
4. then expresion 2
etc.

DO NOT next additional "if" statements within one another. In other words, every test expression following the initial "if statement" should be an "else if" statement.
Conditional statements can only have ONE IF STATEMENT each, but can have MULTIPLE ELSE IF statements.
*/

function greaterOrLessThan(x) {
  if (x > 10) {
    console.log("The number is greater than 10!");
  } else if (x < 10) {
    console.log("The number is less than 10!");
  } else if (x === 10) {
    console.log("The number is 10!");
  }
}

/*
Note that one of THE TRICKIEST parts of writing conditional statements or using ANY control structure is the syntax.
Though the logic and arithmetic may appear straightforward sometimes, it's easy to get mixed up when you're writing functions within functions.
Pay attention and be patient when you run into issues.
*/

greaterOrLessThan(4);
greaterOrLessThan(10);
greaterOrLessThan(52);

//The if and else/if statements do NOT provide the option to specify what should happen in the event that ALL of the test expressions evaluate to false. Consider this function:

let v = 10;

function noneOfTheAbove() {
  if (v < 10) {
    console.log("v is less than 10.");
  } else if (v > 10) {
    console.log("v is greater than 10");
  } else if (v == 20) {
    console.log("v is loosely equal to 20!");
  } else if (v === 100) {
    console.log("v is stricly equal to 100!");
  }
}

noneOfTheAbove();

/*
When you run the code in this file, you'll see that the noneOfTheAbove statement doesn't run at all.
It prints nothing to the console. That is because none of the test expressions evaluated to true.
v was not greater than 10, less than 10, loosely equal to 20, or strictly equal to 100.
So how do we tell the function what to do when NONE of the test expressions evaluate to true?

This is why we have the else statements. An "else statement" is a conditional that includes these parts:

1. test expression 1 (if statement)
2. then statement 1 (code that is run if test expression 1 evaluates to true)

3. test expression 2 (else if statement)
4. then statement 2 (code that is run if test expression 2 evaluates to true)

5. else statement (specifies that there is code to be run when NONE of the test expressions evaluate to true)
6. then statement 3 (code that will be run when NONE of the test expressions evaluate to true)

So now lets copy the noneOfTheAbove function ^ and modify it with an else statement and minor name change to distinguish it from the first version.
*/

function noneOfTheAboveElse() {
  if (v < 10) {
    console.log("v is less than 10.");
  } else if (v > 10) {
    console.log("v is greater than 10");
  } else if (v == 20) {
    console.log("v is loosely equal to 20!");
  } else if (v === 100) {
    console.log("v is stricly equal to 100!");
  } else {
    console.log("The number is 10!");
  }
}

noneOfTheAboveElse();

/*
Now when we run the code in this file, the console prints "The number is 10!" since that is what's in our "else" statement and none of the test expressions evaluate to true.

Note that THERE CAN ONLY BE ONE ELSE STATEMENT IN ANY CONDITIONAL EXPRESSION!

There can be:

-ONE if statement
-MANY else/if statements
-ONE else statement

Next, let's write a conditional if/else statement that calls certain functions under certain conditions.

First, define the functions that will be called by the conditional statement.
Then write the conditional statement that calls the functions.
*/

function bigNumber() {
  console.log("This is a big number!");
}

function smallNumber() {
  console.log("This is a small number!");
}

function bigOrSmallNumber(z) {
  if (z > 100) {
    bigNumber();
  } else if (z < 100) {
    smallNumber();
  } else {
    console.log("The number is 100!");
  }
}

bigOrSmallNumber(100);
bigOrSmallNumber(50);
bigOrSmallNumber(200);

/* -----------------------------------------------------------LOOPS--------------------------------------------------------------



REMINDER: Control flow is the order that instructions are executed within a program. Control structures are expressions that alter the control flow.

LOOPS are statements that do the following:

1. Set a condition
2. Execute an action
3. Update the condition
4. Re-check the condition
5. Execute the action again
6. Repeat until the condition is met

The following is a WHILE loop.
*/

let p = 0;

while (p <= 10) {
  console.log("p = " + p);
  p++;
}

/*
In the code above, we set the variable p = 0.
Then we told the computer to check the value of p.
We tell the computer that while p is less than or equal to 10, it is supposed to print the specified message to the console.
Then we tell the computer to increment the value of p by 1 each time that the code is run.
eventually, p is equal to ten. After that, the computer increases the value of p by 1 and then checks the condition again.
This time, it finds that the value of p is 11, which is NOT less than or equal to ten. Thus, the condition evaluates to false.
Since the computer knows to ONLY run this code WHILE the condition is true (while p is less than or equal to ten), it stops running the code.
*/

function lessThanTen(e) {
  while (e <= 10) {
    console.log("e = " + e);
    e++;
  }
}

lessThanTen(0);
lessThanTen(4);
lessThanTen(15);

//The most important thing to remember when writing loops is to update your condition. If we forget to increment the variable by one (in this example) after the message prints to the console, the variable's value will not change and the loop will run over and over and over again forever. This is called an infinite loop.

/*
FOR loops have three parts:

1. the initial expression (runs at the beginning of the loop)
2. the condition (checked every time the loop is run. If it evaluates to true, the loop runs again. If false, the loop ends.)
3. the loopend expression (runs at the end of the loop before the condition is checked again.)

for (<initial expresion> ; <condition> ; <loopend expression>) {
    <Code to be run>;
}
*/

for (let i = 0; i < 10; i++) {
  console.log("i = " + i);
}

function spellTheString(string) {
  for (let index = 0; index < string.length; index++) {
    let letter = string[index];
    console.log(letter);
  }
}

spellTheString("Joshua");
spellTheString("World");
spellTheString("Servant of the Lord");

/*
Finally, lets translate one kind of loop into another.
*/

for (m = 0; m < 10; m += 1) {
  console.log("m = " + m);
}

m = 0;

while (m < 10) {
  console.log("m = " + m);
  m += 1;
}

//-----------------------------------------------------CLASS NOTES----------------------------------------------------------------

//check out the "break" keyword
//check out the do... while statement

//Use a for loop when you know how many iterations you're gonna be doing.
//Use a while loop when you don't know how many iterations you're gonna be doing.

//Use "i" or "index" for the couter in for loops.

function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isFive(5));
console.log(isFive(2));

function isOdd(num) {
  return num % 2 !== 0;
}

function isOddConditional(num) {
  if (num % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOddConditional(2));
console.log(isOddConditional(3));

function logBetween(a, b) {
  for (i = a; i <= b; i++) {
    console.log(i);
  }
}

console.log(logBetween(5, 10));

function printFives(num) {
  for (let i = 0; i < num; i += 1) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

function printFivesShort(num) {
  for (let i = 0; i <= num; i += 5) {
    console.log(i);
  }
}

printFives(30);

function logBetweenStepper(min, max, step) {
  for (i = min; i <= max; i += step) {
    console.log(i);
  }
}

logBetweenStepper(10, 50, 5);

function threeOrSeven(num) {
  return num % 7 === 0 || num % 3 === 0;
}

console.log(threeOrSeven(21));
console.log(threeOrSeven(9));
console.log(threeOrSeven(52));

//-------------------------------------------------------( Arrays and Loops )----------------------------------------------------

//Arrays, like variables, hold inforamation.

let variable = "variable";

let array = ["string", true, 10, ["array2", false], variable];

//Arrays are ordered lists of information.

//look at the push method
//look at the pop method
//look at the shift and unshift method.
//look up array slice and splice methods.

/*
loops allow you to choose how many times you want a code to run.
You are doing something until a condition is met, as many times as that takes.
The counter is called the index.

Arrays work with many of the same methods and functions as strings.
*/

let array1 = ["a", "b", "c", "d", "e"];

console.log(array1.length); // = 5, because there are 5 items (strings) within the array.

console.log(array1[2], array1[3]); // = c d, because c is located at index 2 and d at index 3

//like with strings, trying to access an element at an index that is not inside the array resolves to "undefined".

console.log(array1.indexOf("b"), array1.indexOf("e")); // = 1 4

/*
so far we have seen that the following can be used with arrays, just like strings:

1. .length
2. array[i]
3. .indexOf["x"]
*/

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array1 + array2);

/*
You can see here ^ that attempting to add arrays together using the "+" operator doesn't actually combine the arrays. Instead, it converts them both to strings and then concatenates the strings together.

To actually concatenate two arrays together, you need to use the .concat method.
*/

console.log(array1.concat(array2));

//^ Here, you can see that the .concat method actually combines the two arrays into a single, new array.
