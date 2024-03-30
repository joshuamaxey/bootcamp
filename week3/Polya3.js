
//! Iterate Through Obj: Write a function pintObject(obj) that prints out all key-value pairs of an object. The format of the printing shouldbe key - value. USE A FOR LOOOP.
/*
let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
};

function printObject(obj) {
    for (let key in obj) { //iterate over every property (key-value pair) in the object using a for...in loop
        let value = obj[key]; //initialize a new variable value to hold the value corresponding to the current key within the object.
        console.log(key + ' - ' + value) //log the key + value to the console.
    }
}

printObject(bootcamp);
*/
//! Using Object.keys 1: Use Object.keys() to iterate through the objet and print all its values.
/*
const obj = {
    first: "1",
    second: 2,
    third: "three"
}

console.log(Object.keys(obj)); // method that iterates through each key within an object
*/


//! Using Object.keys 2:
/*
const keys = {
    red: "circle",
    blue: "square",
    green: "hexagon"
}

/*

if(obj.valueOf>=('c' * 2));    else {      return (red)}  { }  console.log(Object.keys(0))

if(obj.valueOf<=('c' * 2)) {
    else {
        return (red)
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

//! Refactoring Iteration

const obj = {
    a: "get",
    b: "all",
    c: "of",
    d: "the",
    e: "values"
}

const printValues = obj => {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for(let key of Object.keys(obj)) {
        if(vowels.indexOf(key) >= 0) {
            console.log(obj[key]);
        }
    }
}

const printValuesRefactored = obj => {
    // Write your solution here.

}

printValues(obj);               // get values
printValuesRefactored(obj);     // get values
