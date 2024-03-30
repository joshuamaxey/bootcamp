/*
//! Iterate Through Obj: Write a function pintObject(obj) that prints out all key-value pairs of an object. The format of the printing shouldbe key - value. USE A FOR LOOOP.

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

//! Using Object.keys 1: Use Object.keys() to iterate through the objet and print all its values.

const obj = {
    first: "1",
    second: 2,
    third: "three"
}

console.log(Object.keys(obj)); // method that iterates through each key within an object
*/

/*
//! Using Object.keys 2:

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
/*
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
    Jacky: "Honda",
    Ramon: "Kia",
    Lexi: "Mercedes",
    Eli: "Honda",
    Bradley: "Honda",
    Cecily: "BMW"
}

const printOwners = obj => {

}

printOwners(obj);               // Bradley
