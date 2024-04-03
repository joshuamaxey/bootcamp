//! SPREAD AND REST PARAMETER syntax

/*

//The SPREAD OPERATOR and REST PARAMETER allow us to take advantage of the dynamic nature of JavaScript that allows its functions to take FEWER or MORE ARGUMENTS than specified.

//Using the REST PARAMETER syntax allows a function to accept an arbitrary umber of arguments.
//^ REST PARAMETER takes the REST of the parameters and returns them as an array.

//The SPREAD OPERATOR syntax can be used with OBJECTS and ARRAYS.
//^ SPREADS elements into data structures
//^ SPREADS interable data types into a function as arguments.

//! JavaScript Functions Recap.

/*
//All JavaScript functions can take FEWER arguments than expected. If a parameter has NOT been declared when the function was defined, then the default value for that parameter is UNDEFINED.


function tester(arg) {
    return arg;
}

console.log(tester(5)); // 5
console.log(tester()); // undefined


//A function will still run, even if no arguments are passed into it at all.
//Both functions above will print regardless of whether any arguments are passed in. When no arguments are passed, the parameter is asigned the value UNDEFINED by default.

Additionally, the function will run when there are too MANY arguments passed into it.


console.log(tester(5, 6, 7)); // prints 5, takes the first argument and ignores the rest.
console.log(tester(2, 3, 4, 5, 6)); //prints 2, takes the first argument and ignores the rest.


//Let's take a function that is slightly more coplicated:


let adder = (num1, num2) => {return num1 + num2};

console.log(adder(1)); // returns NaN because the second parameter is not specified and is therefore assigned the default value (UNDEFINED) and any number + undefined = NaN (not a number)
console.log(adder(3, 5)); // returns the sum 8. Two arguments are given, as the function specifies, so it runs normally.
console.log(adder(5, 6, 7, 8)); //returns 11. This function also runs normally. Extra arguments were given, so the function takes the first two (since two parameters were specified within the original function definition) and ignores the rest.

*/

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

/*

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

*/

//! Destructuring



//! Destructuring arrays and objects allows us to more easily access their individual elements. With destructuring, you can:

//^ Destructure an array to reference specific elements
//^ Destruture an object to reference specific values
//^ Destructure incoming parameters into a function

//?Destructuring ASSIGNMENT SYNTAX allows you to extract parts of an array or object into distinct variables. For example:

let numArray = [10, 20];

let [firstEl, secondEl] = numArray; //Here, we deconstruct an array into two elements, each assigned to its own variable. Notice that the syntax for this kind of destructuring is effectively the INVERSE or BACKWARDS version of variable declaration syntax.

console.log(firstEl); // 10
console.log(secondEl); //20

//?You can alternatively declare variables BEFORE destructuring as well:

let animalArray = ["tiger", "hippo"];

let animal1, animal2

[animal1, animal2] = animalArray;

console.log(animal1); // tiger
console.log(animal2); // hippo

//? Destructuring ALSO allows you to SWAP the VALUES of two VARIABLES.

let num1 = 17;

let num2 = 3;

[num1, num2] = [num2, num1] //THIS SYNTAX allows you to take two variables that are stored as elements of an array and SWAP their values.

console.log(num1); // = 3
console.log(num2); // = 17;

//? Destructuring also enables us to TAKE APART and assigne PARTS of LARGE OBJECTS to VARIABLES. In this way, we are effectively breaking objects down into variables that represent the values corresponding to the keys that were included in the specified PART of the object.

let obj = {name: "Butthead", breed: ["unknown", "mixed"]}; //An object containing two keys, one which corresponds to a string value and another which corresponds to an array of strings.
let {name, breed} = obj; //What parts do we want to break the object down into?

console.log(name); // "Butthead"
console.log(breed); // ["unknown", "mixed"]

//^ This syntax works by matching object PROPERTIES, so we can choose which KEYS we want. If we only want to save CERTAIN properties in new variables, we can do something like this:

let letterObj = {a: 1, b: 2, c: 3};

let {a, c} = letterObj;

console.log(a); // 1
console.log(c); // 3
//console.log(b); //This code throws an error because we chose NOT to store "b" as a new variable when we destructured the letterObj object.


//? In the examples thus far, our variable names shared the same name as the keys of our object. If this was NOT the case, if the new variable we create does NOT possess the same name as the key(s) within the object we're destructuring, we need to use diferent syntax.

//? This kind of destructuring is called ALIASED object destructuring.

let fruitObj = {apple: "red", banana: "yellow"};

let {apple: altApple, banana: altBanana} = fruitObj; // With respect to ALIASED object destructuring, we refer to the key within the object that we want to destructure, then provide the name of the new variable that is different from the name of the key.

console.log(altApple); // red
console.log(altBanana); // yellow

//? Object destructuring becomes more useful when working with LARGER and NESTED objects. This is how we would destructure a nested object:

let objNest = {animal: {name: "Fiona", species: "Hippo"}};

let {animal: {species}} = objNest;

console.log(species); // Hippo

//^ In the example BELOW, we show how object destructuring can make your code mor readable in more coplex situations:

let user = {
    userId: 1,
    favoriteAnimal: "hippo",
    fullName: {
      fname: "Joshua",
      lname: "Maxey"
    }
  };

  // accessing values *with* destructuring

  let {
    userId,
    fullName: { fname, lname }
  } = user;

  console.log(userId, fname, lname); // 1 Joshua Maxey

//* RULE: ONLY DESTRUCTURE VALUES FROM OBJECTS THAT ARE TWO OR LESS LEVELS DEEP TO MAINTAIN THE CLARITY AND READABILITY OF YOUR CODE.

//? Destructuring using the REST pattern.

//Rest parameter syntax allows us to prefix a function's last parameter with "..." in order to capture all of the remaining arguments into an array:

let logArguments = (firstArgument, ...restOfArguments) => {console.log(firstArgument); console.log(restOfArguments)};

logArguments("Joshua", 5, 10, 17, false) // returns "Joshua" [ 5, 10, 17, false]

//^ This coding pattern that says "give me the REST of" can also be used when we destructure an array. We do this by prefixing the last variable with "...". In the following example, the "otherFoods" variable is prefixed with "..." to initialze the variable to an array containing the remaining array elements that weren't explicitly destructured:

let foods = ["pizza", "ramen", "sushi", "kale", "tacos"];

let [firstFood, secondFood, ...otherFoods] = foods;

console.log(firstFood); // "pizza"
console.log(secondFood); // "ramen"
console.log(otherFoods); // ["sushi", "kale", "tacos"]

//* The rest pattern ^^^ is only officially supported by JavaScript when destructuring ARRAYS, it's not for use with objects.


//? Destructuring Parameters

// Thus far, we have talked about dstructuring things into variables. But the other main use for dsetructuring is destructuring INCOMING PARAMETERS into a function. This is particularly useful when we are passing objects around to different functions.

// This allows for each function to be responsible for pulling the parameters it needs from an incoming objects, making it much easier to work with.

// Look at the following simple example:

let cat = {name: "Butthead", owner: "Joshua", weight: 15};

function ownerName({owner}) {
    console.log("This cat is owned by " + owner);
}

ownerName(cat); // This cat is owned by Joshua

//^ In the abov example, we destructured any incoming arguments to the ownerName function to assign the value at the key "owner" to the parameter name of owner. This syntax might seem a little excessive for getting ONE parameter, but this syntax is very useful when it comes to nested objects.

//Now lets look at a slightly more complex example to see the power of destrucuring parameters. In the example BELOW, we wat to find and return an array of the toys that belong to all cats.

let bigCat = {
    name: "Jett",
    owner: {name: "Nobody"},
    toys: ["ribbon"],
    siblings: {name: "Freya", color: "orange", toys: ["mouse", "string"]}
};

//Here we use ALIASED object destructuring to create a siblingToys variable
function toyFinder({toys, siblings: {toys: siblingToys}}) {
    let allTOys = toys.concat(siblingToys);
    return allTOys;
}

console.log(toyFinder(bigCat));

//^ Pay attention to the PARAMETERS of the toyFinder function. We CANNOT declare the same variable twice, so in the above toyFinder we rani nto a situation wehre two objects had th esamek ey name: toy. We solved this using ALIASED object destructuring-- we alias the toys key within the siblings object as siblingToys. This is one possible use case for the ALIASED DESTRUCTURING that we covered earlier in these notes.

//^ Thanks to object destructuring parameters, all we had to do when we invoked toyFinder was pass in the whole object! This makes our code easier to write and our object easier to work with.

*/

//? DESTRUCTURING LECTURE

//? DESTRUCTURING ARRAYS

let array = ["blue", "red", "yellow", "green", "pink"] //Here we have a simple array.

let firstColor = array[0]; //Here, we initialze a new variable and set it equal to the element of the array located at index 0 (the first color).
let secondColor = array[1]; //Here, we initialize another variable and set it equal to the element of the array located at index 1 (the second color).

console.log(firstColor); // "blue"
console.log(secondColor); // "red"

//^ Tradtionally, this is how we might access the elements located at the different indices of our "array".

let [firstColorD, secondColorD, thirdColorD] = array; //Here, we define a new array containing the variables that we want to destructure the "array" down into. We do not need to explicitly state which variables correspond to which elements of the "array" because destructuring an array in this way will AUTOMATICALLY assign our new variables to the elements of the "array" in order of their indices starting at 0. In other words, The first variable corresponds to the first element of the array, the second variable will correspond to the second element of the array, etc.

console.log(firstColorD); // "blue"
console.log(secondColorD); // "red"
console.log(thirdColorD); // "yellow"

//^ Using destructuring allows us to accomplish EXACTLY the same thing as the initial code, except that we are able to do it in one line instead of two.
//^Imagine that we wanted to assign variables to every element of the initial array.
//^IF that was the case, using the first method would require us to use FIVE lines of code while DESTRUCTURING would enable us to achieve the same output in ONE line.

//? DESTRUCTURING OBJECTS

let obj = {name: "Sandy", instruments: ["guitar", "uke"]};

let {name, instruments} = obj; // Here, we initialize two new variables. Each corresponds to a KEY within the object "obj." This destructures the "obj" into the two new variables we specified. Name now contains the value corresponding to the name KEY within the object. Instruments now contains the value corresponding to the instruments KEY within the object.

console.log(name); // Sandy
console.log(instruments); // ["guitar", "uke"]

let {name: firstName, instruments: music} = obj; // What if we want to destructure an object down into new variables that do NOT have the same names as the keys within the object? This is called ALIASED DESTRUCTURING, wherein we destructure an object down into variables with names that are different than the names of the keys.

console.log(firstName); // Sandy
console.log(music); // ["guitar", "uke"]

//^ You can see here that we can destructure an object down into variables that DO or DON'T possess the same names as the keys of the object we are destructuring.

//? NESTED DESTRUCTURING

let zooAnimals = {
    animalId: 12,
    species: "hippo",
    favoriteFood: "watermelon",
    fullName: {
        fName: "Fiona",
        lName: "theCuteHippo"
    }
};

//Lets say that we want to access the NAME of this hippo.

let {fullName: {fName}} = zooAnimals; //In this line of code, we first say, "Ok, I want to access the 'fullName' key of the object,' THEN we say, within that object, I want to access the 'fName' key, ALL within the "zooAnimals" object.

//^Overall, this function says:

//^ Go into the zooAnimals object. Look for the fullName key. Within that object, look for the fName key. Take the value associated with that and assign it to a variable called fName.

console.log(fName);

//? DESTRUCTURING INTO PARAMETERS OF A FUNCTION

let parrot = {name: "Layla", likes: "pets", toys: 1000};

function sayHelloName({name}) {
    console.log("Hello to " + name)
}

sayHelloName(parrot)
