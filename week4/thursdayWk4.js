//! Formative Quiz-------------------------------------------------------------------------------------------------------------

//^ 1. How would you convert 'func' to an arrow function, taking advantage of all of the syntactic simplifications?

// let func = function(arg) {
//     return arg * 2;
// };

let func = arg => arg * 2

// Arrow functions do not require parenthesis for single-parameter functions
// Arrow functions have IMPLIED returns, meaning that the return keyword is unnecessary.
// Arrow function have IMPLIED curly braces for single-expression functions.
// Arrow functions do NOT require the function keyword, and are anonymous unless assigned to a variable.

console.log(func(5));

//^ 2. What is the output of the code below?

let interrupter = arg => {
    return function(arg2) {
        let res = arg2.split(" "); //What does the .split method do? //! The .split method divides a string into an ordered list of substrings according to the pattern (" "), puts those substrings into an array, and returns the array.
        res.splice(1, 0, arg); //How does the .splice method work? //^ The array.splice() method changes the contents of an array by removing existing elements and/or adding new elements. In this case, it starts at index 1 (second element in the array that was returned by the string.split() method, which would be the second word in the sentence), deletes 0 elements (the second number provided as an argument is the number of elements to DELETE from the array), and then adds "arg" at index 1, which would put it between the first and second elements of the array (first and second words in the string).
        return res.join(" "); //what dose the .join method do? //! The array.join method creates and returns a new string by onatenating all of the elements in the array, separated by the specified separator string (" "), into a string.
    }
}

// In summary: THe string.split() method divides the string into sub-strings and then converts them into elements in an array, then returns the array. The array.splice method (as used here, (1, 0, arg)) inserts "arg" between the first and second elements of the array (words in the string), then the array.join() method converts the array back into a string.
//^ So the string that is returned SHOULD be: "How's BLEH it going?"

let interrupt = interrupter("BLEH")

console.log(interrupt("How's it going?")) //^ CORRECT! Returned "How's BLEH it going?"

//! Learning Boost--------------------------------------------------------------------------------------------------------------

//^ 1. Using the code below, what would be returned by the call: abbreviateWords('there is nothing I would rather do')

// let removeVowels = word => { //this function takes a word (string) as an argument
//     let vowels = 'aeiou'; //initialize a new variable to hold vowels for reference
//     let newWord = ''; //initialize a new, empty string to hold the new word that will be returned

//     for (let i = 0; i < word.length; i++) { //write a for loop that iterates through each element (letter) of the word
//         let char = word[i]; //initialize a new variable to hold the letter (character) located at the current index of the string

//         if (!vowels.includes(char)) { //write a conditional to check whether the character located at the current index of the string is NOT (notice the "!" operator) a vowel by comparing the character to the string of vowels.
//             newWord += char; //IF the character located at the current index of the string is NOT a vowel, add it to "newWord"
//         }
//     }

//     return newWord //return the "newWord" variable which will contain all of the letters in the word which were NOT vowels.
// }

// let abbreviateWords = sentence => { //This function takes in a sentence (string) as an argument
//     let words = sentence.split(' '); //initialize a new variable to hold the ARRAY that is produced by the string.split method.
//     let newWords = []; //initialize a new, empty array to hold the words that will be returned

//     for (let i = 0; i < words.length; i++) { //write a for loop that iterates through every element of the "words" array that was produced by using the string.split method on the sentence that was provided as an argument to the function
//         let word = words[i]; //initialize a new variable "word" to hold the element of the array (word of the sentence) located at the current index.

//         if (word.length < 4) { //write a conditional to check whether the length of the current elemetn of the array (current word of the sentence) located at this index is less than four characters.
//             newWords.push(removeVowels(word)); //IF the element of the array (word of the sentence) located at this index of the array IS less than four characters, we push it to the removeVowels function above
//         }
//         else { //otherwise
//             newWords.push(word); //we push the word to the newWords array without modifying it.
//         }
//     }

//     return newWords.join(' '); //Finally, we return the string that is produced when we use the array.join() method to convert the newWords array back into a string.
// }

let removeVowels = function(word) {
    let vowels = 'aeiou';
    let newWord = '';

    for (let i = 0; i < word.length; i++) {
        let char = word[i];
        if (!vowels.includes(char)) {
            newWord += char;
        }
    }

    return newWord;
};

let abbreviateWords = function(sentence) {
    let words = sentence.split(' ');
    let newWords = [];

    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 4) {
            newWords.push(removeVowels(word));
        } else {
            newWords.push(word);
        }
    }

    return newWords.join(' ');
};

console.log(abbreviateWords('there is absolutely nothing I would rather do')); //thr is bsltly nthng I wld rthr do;

//^ 2. You're trying to write your own version of the array.forEach(function()) method and you get the code below. What code is missig on the indicated line?

let myForEach = function(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        // let el = array[i]; //first of all, this should be arr[i], not array[i].
        let el = arr[i];
        cb(el, i, arr); //! always pass ALL of the parameters into the callback function. Some cb functions may not use them all, and when that is the case, JavaScript will ignore the extras. But this way, a person could use this function with ANY callback function including those that will utilize all three parameters.
        // Missing

    }
}

//^ 3. What does console.log(['bunny', 5, true, [1, 2], 2][3]); print?

console.log(['bunny', 5, true, [1, 2], 2][3]); // [1, 2]

//! Formative Quiz
