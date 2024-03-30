//! Declare Keys/Values: given the following object declaration, declare values.

const obj = {};

obj.firstKey = "firstValue"
obj["numeric"] = 2
obj.boolean = false
obj["object"] = {};

console.log(obj['firstKey']);       // firstValue
console.log(obj['numeric']);        // 2
console.log(obj['boolean']);        // false
console.log(obj['object']);         // {}

//! Array of Objects: Write a function printNames that prints the name of every object in the array.

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


function printNames(array) {
    let names = "";

    for (i = 0; i > array.length; i++) {
        console.log(array[i].name);
    }
}

printNames(users)

//! ARRAY OF OBJECTS

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

const printNames = users => {

}

printNames(users)                   // Gerald Winnie Peter
