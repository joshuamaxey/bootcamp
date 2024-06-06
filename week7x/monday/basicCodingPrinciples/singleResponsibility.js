//! Single Responsibility Principle

// The operational definition of the Single Responsibility Principle states that, //^ Every module, class, or function in a computer program should have the responsibility over a single part of that program's functionality.

// Each JavaScript function should do one thing and do it well.

// If our function is doing too many things, we should refactor our code to create one or more helper functions that follow SRP.

//! Makes Code Easier to Change

// Lets look at a function that abbreviats words in a sentence. If a word in the sentence is longer than 3 characters, shorten it to be three characters without any vowels (For example: "Hello World" = "Hll Wrl")

const vowels = 'aeiou';

const abbreviateWords = function(sentence) {

    const words = sentence.split(' '); // Here we use the split method to turn a sentence into an array of words. It uses a ' ' space as the split, so (assuming that a sentence is a series of words separated by spaces) we will split the sentence into an array of separate strings (words)

    console.log(words); // console.log to make sure the split is working the way that I think it does

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
        console.log(words); // console.log words before we join them to see if I'm correct about what the array should look like
    }
    return words.join(' '); // After we've done this for each word, we join the words back together and return the new sentence.
};

let result = abbreviateWords("Hello Word!");

console.log(result); // Hll Wrd

//^ This function is lengthy and hard to read. It can be broken down into three steps:

// 1. Separate the setnence into words, change the words, then  it

// 2. FOr each word, change the word if the length of the word is greater than 3

// 3. If the length of the word is greater than 3, change the word to have a maximum length of 3 without any vowels
