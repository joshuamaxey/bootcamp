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

//! ARROW FUNCTIONS!
