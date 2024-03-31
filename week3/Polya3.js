
//! Iterate Through Obj: Write a function pintObject(obj) that prints out all key-value pairs of an object. The format of the printing shouldbe key - value. USE A FOR LOOOP.

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

const obj = {
    first: "1",
    second: 2,
    third: "three"
}

console.log(Object.keys(obj)); // use the Object.keys(obj) method which returns an array of all of the keys in an object.
//& NOTE THAT Object.keys() does NOT iterate through the keys in the object! It only returns the array. If you want to iterate through the elements (keys) in the array that is returned by the Object.keys() method, you need to use a for loop.

*/


//! Using Object.keys 2:

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
