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
It is important to note ( ^ ) that the .toUpperCase() method WILL return an uppercase version of a string. But it does NOT actually change (mutate) the original string. Rather, it gives you a NEW version of the string that is uppercase, effectively creating a new string without modifying the original.

Consider that with respect to mathematical operations, performing x+2 does not actually increase the value of x, it just adds 2 to the value but leaves the original variable unchanged. It is only be using x++ (etc) that we change the actual value of the variable x.

Similarly, the .toUpperCase will return an uppercase version of the string but does not actually change (mutate) the original string, because strings are immutable.
*/

/*
In Javascript:

-----(MUTABLE)-----

1. array
2. object

-----(IMMUTABLE)-----

1. number
2. string
3. boolean

With respect to numbers, it may appear that they should be considered mutable.
*/

let num = 10;
console.log(num);

num++;
console.log(num);

/*
In the above operation ( ^ ) it appears that the variable "num" has been mutated because its value is eleven after the n++ operation has been performed. This indicates that the value of the variable itself has been changed.

However, recall that num ++ (or num += 1) is shorthand for (num = num + 1). This means that we are re-assigning the variable num a new value, which is not the same as mutating the original number.
*/

let replaceFirst = function (array, newVal) {
  array[0] = newVal;
};

let letters = ["a", "b"];
console.log(letters);

replaceFirst(letters, "x");
console.log(letters);

//--------------------------------------------------------------------(NESTED LOOPS)---------------------------------------------------------------------------------

for (let i = 0; i <= 2; i++) {
  console.log(i);

  for (let j = 0; j <= 4; j++) {
    //Note that the name of the index (counter) in the nested loop (j) is DIFFERENT than the index in the original loop (i).
    console.log("       " + j); //We concatenate j with two tabs so that when the values for both loops print to the console, we can distinguish between the values printed by either loop.
  }
}

/*
When we run a nested loop, this is what happens:

1. We run a single iteration of the first loop.
2. We run through the entire nested loop (in this case, 5 iterations since our condition is such that the loop only runs while j <= 4)
3. We run the second iteration of the first loop.
4. We run through the entire nested loop (another 5 iterations)
5. We run through the final iteration of the first loop. Since the conditions of the first loop are such that it only runs while i <=2, it only runs a total of three times.
6. We run through the entire nested loop (another 5 iterations) again!

It's important to note that we run through EVERY iteration of the nested loop for every single iteration of the first loop until the first loop is complete.

Lets look at a different way to run a nested loop.
*/

for (let i = 0; i <= 5; i += 1) {
  for (let j = 0; j <= 3; j++) {
    console.log(i, j);
  }
}

/*
Here ( ^ ), we can see that the our loop functions the same way but evaluates to a different output according to the way that we structure our syntax.

In the first example:

1. The first loop runs throuhg its first iteration and prints to the console.
2. The second loop runs through its first iteration and prints to the console.
3. The second loop runs through its second iteration and prints to the console.
4. The second loop runs through its third iteration and prints to the console.
5. The first loop runs through its second iteration and prints to the console.
6. The second loop runs through its first iteration and prints to the console.
7. The second loop runs through its second iteration and prints to the console.
8. The second loop runs through its second iteration and prints to the console.
9. The first loop runs through its third iteration and prints to the console.
10. The second loop runs thorugh its first iteration and prints to the console.
11. The second loop runs thorugh its first iteration and prints to the console.
ETC

In the second example:

1. The first loop runs through its first iteration and the second loop runs through its first iteration, both print to the console.
2. The first loop runs thorugh its first iteration and the second loop runs thorugh its second iteration, both print to the console.
3. The first loop runs through its first iteration and the second loop runs thorugh its third iteration, both print to the console.
4. THe first loop runs through its second iteration and the second loop runs through its first iteration, both print to the console.
5. The first loop runs through its second iteration and the second loop runs through its second iteration, both print to the console.
6. The first loop runs through its second iteration and the second loop runs through its third iteration, both print to the console.
ETC
*/

//INTERLUDE: For loops are best when you don't know how many iterations you're gonna need.

//INTERLUDE: Notice that the "return" keyword must be placed OUTSIDE of the loops within a given function. I've run into an issue several times where using console.log() returns the correct value but using the return keyword instead and then console.log()ing the function yields undefined or an error. This is because, when the return is placed within a loop or a function, it stops the function exactly where it's at. So if it's located within a loop, it stops that loop from running before it can complete all of its iterations. For instance, my printFives() function continued to print ONLY "5" despite that I'd written the function correctly. THis is because I placed the return keyword inside of the loop, causing the function to end after the first iteration.

// --------------------------------------------------------------------(PAIRS IN ARRAYS)---------------------------------------------------------------------------

let names = ["Joshua", "Jacob", "Caroline", "Sarah", "Rachel"];

//lets say that we want to generate PAIRS of elements in an array.

/*
for (let i = 0; i < names.length; i++) {
  let name1 = names[i];

  for (let j = 0; j < names.length; j += 1) {
    let name2 = names[j];

    console.log(name1, name2);
  }
}
*/

//At first ( ^ ), the loops will generate every possible pair of elements including doubles (Joshua/Joshua) and repeats (Joshua/Rachel)/(Rachel/Joshua).

for (let i = 0; i < names.length; i++) {
  let name1 = names[i];

  for (let j = i + 1; j < names.length; j += 1) {
    let name2 = names[j];

    console.log(name1, name2);
  }
}
/*
So we change j from (j = 0) to (j = i + 1). This means that j will always be ONE index ahead of i.So we change j from (j = 0) to (j = i + 1). This means that j will always be ONE index ahead of i.

So when i starts at index 0 (Joshua), j will skip index 0 (which would yield the duplicate element Joshua) and begin at index 1, which is Jacob.
Thus, we have eliminated the (Joshua/Joshua) duplicate pair of elements.
Run this code and look at the difference between the output it generates and the output of the original loops above after making this small change.

We have eliminated the doubles (self-pairs) AND repeats (Joshua/Rachel, Rachel/Joshua), leaving only UNIQUE PAIRS of elements.

The point here is that in order to generate UNIQUE PAIRS of elements within an array, you have to do the following:

1. write a for loop (i)
2. write a nested for loop (j)

3. !! set the nested loop's counter/index (j) = (i + 1) !!

4. console.log/return both values
*/
