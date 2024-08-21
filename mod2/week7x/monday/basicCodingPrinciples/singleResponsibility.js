//! Single Responsibility Principle

// The operational definition of the Single Responsibility Principle states that, //^ Every module, class, or function in a computer program should have the responsibility over a single part of that program's functionality.

// Each JavaScript function should do one thing and do it well.

// If our function is doing too many things, we should refactor our code to create one or more helper functions that follow SRP.

//! Makes Code Easier to Change

// Lets look at a function that abbreviats words in a sentence. If a word in the sentence is longer than 3 characters, shorten it to be three characters without any vowels (For example: "Hello World" = "Hll Wrl")

const vowels = 'aeiou';

const abbreviateWordsWet = function(sentence) {

    const words = sentence.split(' '); // Here we use the split method to turn a sentence into an array of words. It uses a ' ' space as the split, so (assuming that a sentence is a series of words separated by spaces) we will split the sentence into an array of separate strings (words)

    // console.log(words); // console.log to make sure the split is working the way that I think it does

    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) { // Here we iterate through the array of words

        const word = words[wordIndex]; // We store the element (word) located at the current index in a variable, 'word'

        if (word.length > 3) { // If the length of our word is greater than three characters...

            let newWord = ""; // ...initialie an empty string to hold the new word

            let charIndex = 0; // in preparation to iterate through the word, we set the starting index to 0 so that we will begin iterating at the first letter of the word

            while (charIndex < word.length && newWord.length < 3) { // We will iterate through each letter in the word until we reach the end and will keep iterating until our newWord reaches a length of three characters

                let char = word[charIndex]; // store the letter located at the current index of the word in a varaible 'char'

                if (!vowels.includes(char)) { // If the current character of the word is NOT a vowel...

                    newWord += char; // ...then we concatenate the current character of the word onto our 'newWord' string from line 27...
                }
                charIndex++ // ...Then inrement the charIndex to move to the next letter in the word, then run the loop again
            }
            words[wordIndex] = newWord; // At the end of the loop, replace the old word with the new word at the corresponding index in the sentence
        }
        // console.log(words); // console.log words before we join them to see if I'm correct about what the array should look like. This will console.log the sentence after EACH iteration of the loop, returning a new string each iteration with one more word changed than the last iteration.
    }
    return words.join(' '); // After we've done this for each word, we join the words back together and return the new sentence.
};

let result1 = abbreviateWordsWet("Hello World!");

console.log(result1); // "Hll Wrd"

//^ This function works, but is lengthy and hard to read. It can be broken down into three steps:

// 1. Separate the setnence into words, change the words, then  it

// 2. FOr each word, change the word if the length of the word is greater than 3

// 3. If the length of the word is greater than 3, change the word to have a maximum length of 3 without any vowels

//^ Each of thse steps can be extracted into its own function:

//& note that our 'vowels' variable already exists, declared on line 13 above

const changeWord = function(word) {

    let newWord = ""; // initialize an empty string to store our new word

    let charIndex = 0; // charIndex represents the index of the current letter of our word (we'll use this in our while loop), and we set it to 0 by default so that we begin iteration at the first letter of the word

    while (charIndex < word.length && newWord.length < 3) { // Iterate through each letter of the word beginning at 0, and continue iterating until our newWord reaches a length of 3 characters

        let char = word[charIndex]; // store the character located at the current index of the word within a variable 'char'

        if (!vowels.includes(char)) { // If the current character of the word is NOT present in our 'vowels' string...

            newWord += char; // ...then we know the current character is not a vowel, and we can add it to our 'newWord'
        }
        charIndex++; // After we're done with the current character of the word, we increment the charIndex and run the loop again on the next character of the word
    }
    return newWord; // After we've iterated through the entire word, removing the vowels and adding the consonants up to a maximum of three characters, we return our newWord
};

const abbreviateWord = function(word) {

    if (word.length > 3) { // If our word is longer than three characters...

        return changeWord(word); // ...invoke the changeWord function to remove the vowels and reduce it to three characters...
    }
    return word; // ...then return the newWord
}

const abbreviateWords = function(sentence) {

    const words = sentence.split(' '); // Use the split method to turn a sentence into an array of words. It uses a ' ' space as the split, so (assuming that a sentence is a series of words separated by spaces) we will split the sentence into an array of separate strings (words)

    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) { // Iterate through our new array of 'words'...

        const word = words[wordIndex]; // ...store the element (word) located at the current index of the array in a variable 'word'

        words.splice(wordIndex, 1, abbreviateWord(word)); // Invoke our abbreviateWord function on the word locatd at the current index of the 'words' array, then we splice the new abbreviated word back in its place
    }
    return words.join(' '); // Once we've abbreviated every word in the 'words' array as necessary, we .join() our abbreviated words back together and return the result
};

let result2 = abbreviateWords("Hello World!");

console.log(result2); // "Hll Wrl"

//^ Now it'll be easir if we (or another developer) want to change the process. We can identify which function corresponds to the issue we want to fix, then implement the change without having to worry about altering any of the code in the other functions.

// In this way, the Single Responsibility Principle limits the impact of changes you make on your code.

//! Summary

// Learned how to apply the single responsibility principle to refactor our code by making sure that each functio nonly has one responsiblity or serves one purpose.

// Learned that we should apply the single responsibility principle when refactoring code becasue it enables us to more easily identify what we need to change and also to make that change without impacting the entirety of our code.
