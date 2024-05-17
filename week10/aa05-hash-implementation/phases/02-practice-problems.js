function anagrams(str1, str2) {
  if (str1.length !== str2.length) { // check if the lengths of the two string are different
    return false; // if they are different, return false b/c they cannot be anagrams
  }

  let charSet = new Set(); // initialize a new set

  for (let char of str1) { // iterate through the characters of str1
    charSet.add(char); // add each character to our new charSet
  }

  for (let char of str2) { // iterat through the characters of str2
    if (!charSet.has(char)) { // check whether the current character of str2 is NOT present in charSet (not also present in str1);
      return false; // If this character in str2 is not also present in str1, return false
    }
  }
  return true; // Otherwise, return true. The two strings are anagrams.
}


function commonElements(arr1, arr2) {
  let commonEl = new Set(); // initialize a new Set();

  for (let el of arr1) { // iterate through the elements of the first array arr1
    commonEl.add(el); // add each element of arr1 to the commonEl set
  }

  let result = []; // initialize a new array to hold the common elements

  for (let el of arr2) { // iterate through the elements of the second array arr2
    if (commonEl.has(el)) { // if the current element of arr2 is present in commonEl (is also present in arr1)
      result.push(el); // push the current element (which is a common elements) to the result array.
    }
  }

  return result; // return the 'result' array which has all of the common elements that are present in both arrays
}


function duplicate(arr) {
  let duplicate = {}; // initialize an empty object to hold the duplicate element

  for (let el of arr) { // iterate through the elements of the aray
    if (duplicate[el]) {
      return el;
    } else {
      duplicate[el] = 1;
    }
  }
}


function twoSum(nums, target) {
  let seen = {};

  for (let num of nums) { // iterate through th array of numbers
    let compliment = target - num; // initialize a 'compliment' variable to represent the number that adds up to the target when summed with 'num'

    if (seen[compliment]) {
      return true;
    }
    seen[num] = true;
  }

  return false;
}


function wordPattern(pattern, strings) {
  let patternString = {};

  let stringPattern = {};

  if (pattern.length !== strings.length) { // check whether the pattern and string have the same length
    return false; // if not, return false because they cannot be a match
  }

  for (let i = 0; i < pattern.length; i++) { // iterate through the pattern
    let char = pattern[i]; // store the element located at the current index of the pattern array as 'char'
    let word = strings[i]; // store the element located at the current index of the strings array as 'word'

    if (!patternString[char] && !stringPattern[word]) {
      patternString[char] = word;
      stringPattern[word] = char;
    } else {

      if (patternString[char] !== word || stringPattern[word] !== char) {
        return false;
      }
    }
  }

  return true;
}


module.exports = [anagrams, commonElements, duplicate, twoSum, wordPattern];
