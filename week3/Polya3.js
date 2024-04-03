
//! Iterate Through Obj: Write a function pintObject(obj) that prints out all key-value pairs of an object. The format of the printing shouldbe key - value. USE A FOR LOOOP.

/*

let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
};

function printObject(obj) {
    for (let key in obj) { //iterate over every key within the object using a for...in loop.
        let value = obj[key]; //initialize a new variable value to hold the value corresponding to the current key within the object.
        console.log(key + ' - ' + value) //log the key + value to the console.
    }
}

printObject(bootcamp);

*/

//! Using Object.keys 1: Use Object.keys() to iterate through the objet and return an array of all its keys.

/*

const obj = {
    first: "1",
    second: 2,
    third: "three"
}

console.log(Object.keys(obj)); // use the Object.keys(obj) method which returns an array of all of the keys in an object.
//& NOTE THAT Object.keys() does NOT iterate through the keys in the object! It only returns the array. If you want to iterate through the elements (keys) in the array that is returned by the Object.keys() method, you need to use a for loop.

*/

//! Using Object.keys 2:

/*

const keys = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

function printOwners(obj) {
    for (let key of Object.keys(obj)) { //use the Object.keys(obj) method to return an array of all of the keys in the object. Then use a for...of loop to iterate through the elements(keys) of that array.

      // Count the occurrences of 'c' in the value
      const cCount = obj[key].split('').filter(char => char === 'c').length;

      // Print the key if it has 2 or more 'c's
      if (cCount >= 2) {
        console.log(key);
      }
    }
  }

  */

//! Using OBject.values: Write a function that accepts an object, obj, ad uses Object.values to pirnt all values in the object.

/*

const obj = {
    first: "1",
    second: 2,
    third: "three"
}


const printValues = obj => {
    console.log(Object.values(obj));
}

printValues(obj);       // "1", 2, "three" (not apparent in terminal, but the 1 would be a string)

*/

//! Using Object.entries

/*

const obj = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

//const printOwners = obj => {
//    Object.keys(obj).filter(()=>{}).reduce(()=>{});

//console.log(Object.keys(obj).filter(obj.keys)=>{}).reduce(()=>{});
/*
function printOwners(obj) {
    for (let key of Object.keys(obj)) {
      // Count the occurrences of 'c' in the value
      const cCount = obj[key].split('').filter(char => char === 'c').length;

      // Print the key if it has 2 or more 'c's
      if (cCount >= 2) {
        console.log(key);
      }
    }
  }

printOwners(obj);

*/

//! Using Object.entries

/*

const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

const printOwners = obj => {
  // Iterate through the entries (key-value pairs) of the object
  for (const [ownerName, carBrand] of Object.entries(obj)) {
    // Check if owner name is longer than 5 characters and owns a "Honda"
    if (ownerName.length > 5 && carBrand === "Honda") {
      console.log(ownerName);
    }
  }
}

printOwners(obj);               // Bradley

*/

//! Writing Object Methods

/*

const obj = {
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

obj.printUniqueValues = function() {
    const uniqueValues = new Set(); //notice that a SET is a built-in JavaScript data structure that represents a colletion of UNIQUE values. Unlike arrays, which can contain duplicates, a SET ensures that each value appears only once. SETS are useful when you need to keep track of a list of items WITHOUT duplicates. IF you try to add duplicate values to a SET, the duplicates will be ignored. It automatically removes any duplicates added to it.

    // Iterate through the values in the object
    for (const value of Object.values(this)) { //Note the use of the 'this' keyword, which refers to the current execution context. Using 'this' allows you to access prooperties and methods within an object or function and dynaically refers to the object or context in which the current code is executing. //^ With respect to boject methods, 'this' always refers to the object itself. In this case, since we are using it within the "Object.values" object method, the 'this' refers to the object (myObject).
    //& In this case, Object.values(this) returns an array containing all of the VALUES of 'this' object (myObject).Then the for...of loop iterates over each value in the array.
      uniqueValues.add(value); //Inside the loop, each value located within the array is then added to the 'uniqueValues' variable. Since uniqueValues is a SET, it ignores duplicates and returns ONLY unique values.
    }
    console.log(uniqueValues)

obj.printUniqueValues();               // Honda Kia Mercedes BMW

*/

//! Refactoring Iteration: Given the function below that iterates through an object adn prints a values asociated with keys that are vowels using Object.keys(), refactor the code to use the for...in pattern to iterate through the object instead.

/*

//& IN THIS PROBLEM NOTE THE DISTINCTION BETWEEN THE for...in AND for...of LOOPS!

//& For...of loops are used to iterate over ITERABLE OBJECTS (arrays, strings, maps, sets, etc), that is, objects that are numbered by ordered indices.

//& For...in loops are used to iterate over the ENUMERABLE PROPERTIES of an object-- That is, to iterate through objects by key/value since they are NOT numbered by ordered indices. It specifically iterates over the keys (PROPERTY NAMES) of the object.

//^ You use for...of when you want to work with the VALUES of an iterable object (non-object[?]). This is safer and is the best practice for ARRAYS

//^ You use for...in when you want to access the keys (property names) of an object. This is when you want to directly iterate through the keys in an OBJECT

const obj = {
    a: "get",
    b: "all",
    c: "of",
    d: "the",
    e: "values"
}


const printValues = obj => {
    const vowels = ['a', 'e', 'i', 'o', 'u']; //initialize a new variable of vowels for comparison.
    for(let key of Object.keys(obj)) { //use the Object.keys(obj) method to create an array of all of the keys in the object, then iterate through them using the for...of loop.
        if(vowels.indexOf(key) >= 0) { //Write a conditional to check whether the key at the current index is a vowel or not.
            console.log(obj[key]); //if it is a vowel, log that key to the console.
        }
    }
}


const printValuesRefactored = obj => {
    const vowels = ['a', 'e', 'i', 'o', 'u']; //initialize a new variable to hold vowels for comparison
    for (let key in obj) { //Use a for...in loop to directly iterate through the keys of the object.
        if (vowels.includes(key)) { //Within the for...in loop, we write a conditional to test whether or not any of the vowels are included within the current key this iteration
            console.log(obj[key]); //IF the key is a vowel, log the current key of the object to the console.
        }
    }
};


printValues(obj);               // get values
printValuesRefactored(obj);     // get values

*/

//! Check if Key is in Object

/*
const obj = {
    first: "1",
    second: 2,
    third: "three"
}

const includedInObject = (obj, key) => {
    return key in obj; //use the key in obj method, which checks to see if the key is located in the object and returns a boolean value (true if it is, false if it is not).
}

console.log(includedInObject(obj, 'first'));      // true
console.log(includedInObject(obj, 'second'));     // true
console.log(includedInObject(obj, 'fourth'));     // false
*/

//! Check if value is in Object

/*

const obj = {
    item1: "jar",
    item2: "pot",
    item3: "spatula",
    item4: "whisk"
}

const valInObject = (obj, value) => {
    return Object.values(obj).includes(value); //use the Object.values(obj) method to return an array of all of the valeus corresponding to the keys in the object. Then use the .includes(value) method to check whether that array includes the value that was given as an argument.
}

console.log(valInObject(obj, "jar"));             // true
console.log(valInObject(obj, "pot"));             // true
console.log(valInObject(obj, "cup"));             // false
console.log(valInObject(obj, "fork"));            // false

*/

//! Frequency Counter:

/*

//!Given a sentence string, sencence, write a function that returns the most common character within the sentence. IF there are multiple characters that appear the most, return the lexicographically smallest one (FOR EXAMPLE, if 'a' and 'b' are both most common, return a because it is closest to the beginning of the alphabet). Besure to exclude spaces when counting characters.

const sentence = "What is the most common character in this sentence";

let mostCommonChar = sentence => { //First, we write an arrow function that takes in one sentence (string) as an argument.

    const charFreq = {}; //Initialize an empty object to store the character frequencies


    for (const char of sentence) { //write a for...of loop to iterate through every character in the sentence. We use a for...of loop because a string is an ITERABLE object.

        if (char !== ' ') { //This conditional checks whether the current character is NOT a space. IF it is NOT, then the operation below is carreid out.

            charFreq[char] = (charFreq[char] || 0) + 1; //IF the character is NOT a space, then the logical OR operation here checks to see whether or not the character has been encountered before (whether or not there is already an existing count for that character). IF there is already a count present (if it has already been encountered), it returns the current count and then increments it by 1 (adds 1 to the existing count). If it has NOT been encountered before (if there is no existing count for the current character), then the statement returns a 0 and increments the count by 1.
        }
    }

    // Find the maximum frequency
    const maxFreq = Math.max(...Object.values(charFreq)); //First, the Object.values(charFreq) returns an ARRAY of all of the values (frequency counts) stored in the charFreq object. Then the SPREAD OPERATOR ( ... ) converts the elements of the array into INDIVIDUAL ARGUMENTS and passes them into the Math.max() method. THe Math.max(...aray) method returns the MAXIMUM value from the arguments that were passed into it from the array that was created by the Object.values method and then spread out into individual elements by the spread (...) operator.

    // Create an array of characters with the maximum frequency
    const mostCommonChars = Object.keys(charFreq).filter(char => charFreq[char] === maxFreq); //First, Object.keys(charFreq) returns an array of the keys (characters) from the charFreq object. Each key corresponds to a specific character within the sentence. THEN the .filter(char => charFreq[char] === maxFreq) method filters the array of keys (characters) based on the condition that the frequency count of each character is equal to the maximum frequency. In OTHER WORDS, the .filter() method ONLY returns the characters whose frequency MATCHES the maxFrequency. So only the characters with the maximum frequency are returned.

    // Return the lexicographically smallest character
    return mostCommonChars.sort()[0]; //First, the mostCommonChars.sort() method sorts the array of most common characters in LEXICOGRAPHICAL ORDER (alphabetical order.) Then [0] accesses the element in the array that corresponds to index 0, which would be the first character. Because the array has been sorted in lexicographical order, the first character (at index 0) is the character that is FIRST in lexicographical order, which is what the problem asked us to return.
}

console.log(mostCommonChar(sentence));           //  "t"

*/

//! Nested Array of Objects

/*

//! Given the array of objects nested within sub-arrays, write a function getSecondObjValues that prints the value of the second object within each nested sub-array. If there is no second object, print null.

const nestedArr = [
    [
        { a: 1 },
        { b: 2 }
    ],
    [
        { c: 3 },
        { d: 4 },
        { e: 5 }
    ],
    [
        { f: 6 }
    ],
    [
        { g: 7 },
        { h: 8 }
    ]
];

const getSecondObjValues = arr => { //we write an arrow function that takes a single parameter which is understood to be an ARRAY of OBJECTS.
    for (const subArr of arr) { //This for...of loop iterates over every element (sub-array) of the array. In this scenario, each element is a sub-array that contains a nested object. The variable subARR represents the current sub-array being processed. Effectively, this for loop says, "for each sub-array in the array 'arr', the following code will be executed." NOTE that the for...of loop is used because array are ITERABLE OBJECTS (objects that are numbered by ordered indices. If we were iterating through an object, we might use a for...in loop instead.)
        if (subArr.length >= 2) { //For each iteration of the for...of loop, this conditional checks to see whether the sub-array located at the current index of the array 'arr' has two or more elements (nested objects) within it. IF the nested array DOES contain two or more elements (nested objects), THEN the code below is executed.
            console.log(Object.values(subArr[1])[0]); // IF the sub-array located at the current index of the array 'arr' DOES contain two or more elements (nested objects), the Object.values(subArr[1]) method retrieves an ARRAY of the values located within the SECOND OBJECT (at index 1) of the sub-array. Then the [0] accesses the FIRST value in the array of of the values located within the SECOND OBJECT of the sub-array located at the current index of the array 'arr'.
        } else { //IF the nested sub-array does NOT contain two or more elements (nested objects) then the code below is executed.
            console.log('null'); //IF the nested sub-array located at the current index of the array does NOT contain two or more elements (objects), then "null" is printed to the console per the specifications of the instructions in the problem.
        }
    }
};

getSecondObjValues(nestedArr);               // 2 4 null 8

*/

//! Nested Objects

/*

//! Given an object that has other objects nested inside of it, write a function that takes that object and returns all values that are at a depth of 2.

//& NOTE: RECURSION is a programming technique wherein a function CALLS ITSELF to solve a problem.. It's similar to a loop, but instead of repeating a block of code, the function RE-INVOKES itself with a modified input. Here are some notes about recursion:

//& 1. EVERY RECURSIVE FUNCTION needs a 'base case.' the function would keep calling itself indefinitely (leading to a STACK OVERFLOW)

//^ Is the "base case" the implicit parameter (like depth = 0 in the [below] printDepthOfTwo function)?
//? NO, the base case is depth === 2, that's when the recursion stops.
//^ What is a "stack overflow," is it similar to an infinite loop?
//? A stack overflow is an error related to memory usage that can cause issues that extend beyond the terminal or the program that is used to run the code. Be careful not to cause them.

//& 2. In addition to the BASE CASE, a recursive function has a RECURSIVE CASE. This recursive case defines how the function modifies its input and calls itself again.

//^ With respect to the [below] printDepthOfTwo function, is the recursive case the (depth + 1) parameter that the function takes as an argument upon its second iteration?

const nestedObj = {
    a: "aloe",
    b: {
        c: "cello",
        d: "dello"
    },
    e: {
        f: "fellow",
        g: {
            h: "hello",
            i: "io"
        },
        j: "jello"
    }
}

const printDepthOfTwo = (obj, depth = 0) => { //Write an arrow function that takes in an object as a parameter. Note that the second parameter here is implicit. So when the function is called, only the first parameter requires an argument as input. The second parameter is automatically set to 0 by default.
    for (const key in obj) { // This for...in loop iterates through the object. Note that a for...in loop is used because objects are NOT ITERABLE, they are not numbered by ordered indices but by key-value pairs and their order is not guaranteed.
        const value = obj[key]; //initialize a new variable "value" to hold the value corresponding to the key at this current iteration of the for...in loop.
        if (typeof value === "object") { //Write a conditional statement to check whether the value corresponding to the key at the current iteration of the for...in loop is an OBJECT using typeof. IF the value corresponding to the key at the current iteration of the for...in loop IS an object, then the code below is executed.
            // Recurse into nested object
            printDepthOfTwo(value, depth + 1);
        } else if (depth === 2) {
            // Print value at depth 2
            console.log(value);
        }
    }
};


printDepthOfTwo(nestedObj);               // cello dello fellow { h: "hello", i: "io" } jello

*/

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

//! Destructure Array

/*

//Given the following array, Practice destructuring by asigning variables to every value in the array below all in ONE line of code. Check your work using console.log.

let bigArray = ["apple", 14, 32, 100, { name: "party" }, ["pineapple"]];

// Example:
// let [firstEl] = bigArray;
// console.log(firstEl) // prints "apple"
let [E1Apple, E2Num, E3Num, E4Num, E5Object, E6Array] = bigArray;

console.log(E1Apple); //"apple"
console.log(E2Num); // 14
console.log(E3Num); // 32
console.log(E4Num); // 100
console.log(E5Object); // {name: "party"}
console.log(E6Array); // ["pineappe"]

*/

//! Rest sum

//Write a function called restSum that accepts all incoming parameters and sums them.

//^Use rest parameter syntax.

let restSum = (...numbers) => { //use the REST PARAMETER so that the function can take an indefinite number of arguments as input.
    return numbers.reduce((sum, num) => sum + num, 0); // The .reduce() method is used to collect values into an array. In this scenario, it collects the values within the array that is produced by the REST PARAMETER in the function definition. //^ Then a CALLBACK FUNCTION is executed within the .reduce method for each element of the array. This callback function adds the current NUM to the accumulated SUM. IN OTHER WORDS: The reduce method iterates through each number in the numbers array. It accumulates the sum by adding each numer to the previous sum. The final result, once the .reduce method is complete, will be the sum of all of the numbers in the numbers array.
    //The RETURN STATEMENT then returns the final accumulated sum as the result of the restSum function.
}

console.log(restSum(3,5,6)); // => 14
console.log(restSum(1, 2, 3, 4, 5, 6, 7, 8, 9)); // => 45
console.log(restSum(0)); // => 0
