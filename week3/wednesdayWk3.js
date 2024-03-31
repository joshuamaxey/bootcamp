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
