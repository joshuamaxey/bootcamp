/*
Here is a list of basic JavaScript functions and string methods:

console.log()

"string"[x]

"string".indexOf("x")

"string".slice(x, y)

"string".toLowerCase()

"string".toUpperCase()

*/

//write a function "goodbye" that says bye to the name that is provided as an argument.

function goodbye(name) {
  return "Bye, " + name + ".";
}

console.log(goodbye("World"));
console.log(goodbye("Joshua"));

//Muscle Memory: Write ten functions with different mesages and then console.log them all.

//1

function sayHello(name) {
  return "Hello, " + name + ".";
}

console.log(sayHello("World"));
console.log(sayHello("Joshua"));
console.log(sayHello("Nobody"));

//2

function iAm(adjective) {
  return "I am " + adjective + ".";
}

console.log(iAm("alive"));
console.log(iAm("holy"));
console.log(iAm("righteous"));
console.log(iAm("redeemed"));

//3

function iSee(visibleThing) {
  return "I see " + visibleThing + ".";
}

console.log(iSee("my computer"));
console.log(iSee("my notes"));
console.log(iSee("hummus"));

//4

function whatIs(uncertainThing) {
  return "What is " + uncertainThing + "?";
}

console.log(whatIs("the question"));
console.log(whatIs("the answer"));
console.log(whatIs("the probblem"));

//Moving on early. To finish later.

//plusFive: Write a function that takes in a number as an argument and returns the sum of that number and 5.

function plusFive(num) {
  return num + 5;
}

console.log(plusFive(10));
console.log(plusFive(2));
console.log(plusFive(9));

//isCool: Write a function isCool that takes in a string as an argument, console.logs it to the console, then returns a sentence saying that the iven string is cool.

function isCool(str) {
  let coolSentence = str + " is cool!";
  console.log(coolSentence);
  return coolSentence;
}

isCool("JavaScript");
isCool("HTML");
isCool("CSS");

//Above ^ is an example of a function that includes a return statement AND a console.log command. The command to print the output to the console is explicitly stated within the function. Note that the console.log command must come BEFORE the return statement. Practically and in the real world, it is usually not the case that the console.log method/command be included within the function itself. It is correct syntax and more effective to console.log() the function call after the function has been declared than to include the console.log within the function itself as part of the code that is run when the function is called.

//whisper: Write a function "whisper" that takes in a string and returns a "whispered" version of that string like this: ...string...

// USE THE .toLowerCase() method.

function whisper(str) {
  return "..." + str.toLowerCase() + "...";
}

console.log(whisper("MY NAME IS JOSH"));
console.log(whisper("Hello World"));
console.log(whisper("AM I WHISPERING?"));

//yell: Write a function "yell" that takes in a string and returns a "yelled" version of that string like this: STRING!!!

// USE THE .toUpperCase() method.

function yell(str) {
  return str.toUpperCase() + "!!!";
}

console.log(yell("my name is josh"));
console.log(yell("hello world"));
console.log(yell("am i yelling yet?"));

//echo: Write a function "echo" that takes in a string and returns an "echo-ized" version of that string like this: STRING!!! ... String!! .. string!

/*
USE THE .toUpperCase() method.
USE THE .toLowerCase() method.
USE THE .slice() method.

Slice is a string method which extracts a substring from a string.
It takes in two parameters:

1. The index where you want to start extracting
2. The index where you want to stop extracting. NOTE that the STOP index is exclusive, meaning that the characer at this index is NOT included in the extracted substring. So if you want to extract every characer in a string EXCEPT for the very first one, you could do this: "string".slice(1, string.length). Try it before you write this Echo function.
*/

console.log("string".slice(1, "string".length));

//Now write the echo function

function echo(str) {
  return (
    str.toUpperCase() +
    "!!! ... " +
    (str[0].toUpperCase() + str.slice(1, str.length)) +
    "!! ... " +
    str.toLowerCase() +
    "!"
  );
}

console.log(echo("Josh"));
console.log(echo("Hello World"));
console.log(echo("Am I echoing yet?"));

//averageOfTwo: Write a function that returns the average of two numbers.

function averageOfTwo(num1, num2) {
  return (num1 + num2) / 2;
}

console.log(averageOfTwo(5, 10));
console.log(averageOfTwo(2, 3));
console.log(averageOfTwo(50, 23));

//hello: Write a function that takes in a string and prints out, "Hello, string."

function hello(str) {
  return "Hello, " + str + ".";
}

console.log(hello("World"));
console.log(hello("Joshua"));
console.log(hello("Nobody"));
("");

//divideByThree: Write a function that returns the quotient of a number divided by three.

function divideByThree(num) {
  return num / 3;
}

console.log(divideByThree(10));
console.log(divideByThree(30));
console.log(divideByThree(15));

//averageOfFour: Write a function that returns the average of four numbers passed as arguments (adds them and then divides the sum by 4)

function averageOfFour(num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
}

console.log(averageOfFour(1, 2, 3, 4));
console.log(averageOfFour(2, 3, 4, 5));
console.log(averageOfFour(5, 6, 7, 8));
