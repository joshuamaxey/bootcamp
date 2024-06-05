//! Single Responsibility Principle

// The operational definition of the Single Responsibility Principle states that, //^ Every module, class, or function in a computer program should have the responsibility over a single part of that program's functionality.

// Each JavaScript function should do one thing and do it well.

// If our function is doing too many things, we should refactor our code to create one or more helper functions that follow SRP.

//! Makes Code Easier to Change

// Lets look at a function that abbreviats words in a sentence. If a word in the sentence is longer than 3 characters, shorten it to be three characters without any vowels (For example: "Hello World" = "Hll Wrl")

const vowels = 'aeiou';

const abbreviateWords = function(sentence) {

    const words = sentence.split(' ');

    console.log(words);

    for (let wordIndex = 0; wordIndex < words.length; wordIndex++) {

        const word = words[wordIndex];

        if (word.length > 3) {

            let newWord = "";

            let charIndex = 0;

            while (charIndex < word.length && newWord.length < 3) {

                let char = word[charIndex];

                if (!vowels.includes(char)) {

                    newWord += char;
                }
                charIndex++
            }
            words[wordIndex] = newWord;
        }
    }
    return words.join(' ');
};

let result = abbreviateWords("Hello Word!");

console.log(result); // Hll Wrd
