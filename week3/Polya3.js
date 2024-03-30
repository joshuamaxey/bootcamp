//! Iterate Through Obj: Write a function pintObject(obj) that prints out all key-value pairs of an object. The format of the printing shouldbe key - value. USE A FOR LOOOP.

let bootcamp = {
    name: "App Academy",
    color: "Red",
    population: 120
};

function printObject(obj) {
    for (let key in obj) { //iterate over every property (key-value pair) in the object using a for...in loop
        let value = obj[key]; //initialize a new variable value to hold the value corresponding to the current key within the object.
        console.log(key + ' - ' + value)
    }
}

printObject(bootcamp);
