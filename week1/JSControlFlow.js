/*
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

greaterOrLessThan(4);
greaterOrLessThan(10);
greaterOrLessThan(52);

//Note that one of THE TRICKIEST parts of writing conditional statements or using ANY control structure is the syntax. Though the logic and arithmetic may appear straightforward sometimes, it's easy to get mixed up when you're writing functions within functions. Pay attention and be patient when you run into issues.
