//! References vs. Primitives

//?PRIMITIVES VS OBJECTS

//& FIVE PRIMITIVE TYPES (IMMUTABLE. Values cannot be changed, only reassigned)

//&"Immutable = cannot be changed in memory" - removes

//& When you re-assign the value of a string, you are just reassigning it to a new value, not actually changing its initial value.

/*
1. Boolean (true and false)
2. Null - represents the INTENTIONAL absence of value.
3. Undefined - default return value for many things in JavaScript.
4. Number - numerical values
5. String - text data enclosed in quotes
*/

//^ PRIMITIVE TYPES are values stored directly in your memory. You can re-assign them to another value that is stored directly within your computer's memory, but we cannot change those values themselves.

//^For instance, the computer KNOWS what the number 5 is. And what it means. It also knows what the boolean value FALSE means, and what it is. We can change the value of a variable to point to a different number, 6, or a different boolean value, TRUE, but we CANNOT change what those values mean or what they are. When we re-assign the value of a variable from 5 to 8, we are not changing the value "5", which will always mean the same thing. We are just telling the variable to reference a different number.

//& ONE REFERENCE TYPE (MUTABLE. Values can be changed.)

/*
Object (data stored in the form of key-value pairs, unordered/without indices)
Array (also an object)
*/

//^ REFERENCE TYPES are objects that WE create. They are stored within the computer's memory, like primitive types. But the difference is that when we assign a variable to an object, that variable is not referencing a point in the computer's memory. It is referencing the object ITSELF, which lives in your memory.

//^ When another variable is pointing at this object, BOTH are directly referencing the object itself. So if you change the value of the object, it changes the value taht is represented by BOTH of the variables.

//^Reference types CARRY the value in each variable, which makes them mutable.

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

//!Given a sentence string, sencence, write a function that returns the most common character within the sentence. IF there are multiple characters that appear the most, return the lexicographically smallest one (FOR EXAMPLE, if 'a' and 'b' are both most common, return a because it is closest to the beginning of the alphabet). Besure to exclude spaces when counting characters.
