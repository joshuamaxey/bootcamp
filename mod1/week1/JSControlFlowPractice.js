//isFIve

/*function isFive(x) {
  if (x === 5) {
    return true;
  } else {
    return false;
  }
}

console.log(isFive(5));
console.log(isFive(17));

//isOdd

function isOdd(x) {
  return x % 2 !== 0;
}

//^ returns the remainder of a number divided by 2 (x % 2)
//Uses STRICT INEQUALITY OPERATOR to check if that remainder is NOT equal to zero.
//If the number %2 is not equal to 0, then the number is odd. The function returns true.
//If the number 5 2 is equal to 0, the number is even. The function returns false.
//Note the distinction between === and !== here.

function isOddConditional(x) {
  if (x % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isOdd(5));
console.log(isOdd(8));
console.log(isOddConditional(3));
console.log(isOddConditional(12));

//logBetween

function logBetween(low, high) {
  for (i = low; i <= high; i++) {
    console.log(i);
  }
}

logBetween(5, 10);
logBetween(20, 32);

//printFives

function printFives(x) {
  for (let i = 0; i < x; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }
}

printFives(50);

//logBetweenStepper

function logBetweenStepper(min, max, step) {
  for (i = min; i < max; i += step) {
    console.log(i);
  }
}

logBetweenStepper(3, 24, 8);

//threeOrSeven

function threeOrSeven(x) {
  return x % 7 === 0 || x % 3 === 0;
}

function threeOrSevenConditional(x) {
  if (x % 3 === 0) {
    return true;
  } else if (x % 7 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(threeOrSevenConditional(9));
console.log(threeOrSevenConditional(35));
console.log(threeOrSevenConditional(2));


function wordWithinArray(array, word) {
  return array.indexOf(word) !== -1; //if the word is located within the array, then the index returned by the .indexOf method will NOT be equal to -1, and the condition returns true (the word is located within the array). If the word is NOT located within the array, then the index returned by the .indexOf method will be -1, since there is no index at -1 (just like there are no instances of that word within the array). When this is the case, the expression evaluates to FALSE since the strict inequality operator is used to check whether the index of the word is NOT equal to -1. If it is, then the expression returns false (the word is not located within the array).
}

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "apple")
); //=> true

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "camel")); //=> true

console.log(
  wordWithinArray(["apple", "banana", "caramel", "chocolate"], "pineapple")
); //=> false

console.log(wordWithinArray(["dog", "cat", "camel", "bird"], "panther")); //=> false

*/

function eitherStringIncluded(sentence, word1, word2) {
  //the .includes() string method checks to see if a substring is included within a string. It is case sensitive, so the first thing that we have to do is use the .toLowerCase() method to convert the sentence and both strings to lower case. This will ensure that the function is not case-sensitive.
  let lowerSentence = sentence.toLowerCase();
  let lowerWord1 = word1.toLowerCase();
  let lowerWord2 = word2.toLowerCase();
  //The .includes() method returns a boolean value by default. Since the instructions are for this function to return a boolean value, we don't have to use conditionals. We just check to see whether the sentence includes word1 OR word2. If the sentence does include either word, this expression will return true. If it does not, it will return false.
  return (
    lowerSentence.includes(lowerWord1) || lowerSentence.includes(lowerWord2)
  );
}

console.log(eitherStringIncluded("how now brown cow?", "panther", "cow")); //=> true
console.log(eitherStringIncluded("Question?", "Answer", "?")); //=> true
console.log(eitherStringIncluded("I love programming", "apple", "potato")); //=> false
console.log(eitherStringIncluded("Dance party!", "?", "what")); //=> false
