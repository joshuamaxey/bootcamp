function ageSort(users) {

  return users.sort((a, b) => a.age - b.age);

  // Here we use JavaScript's built-in sort method with a simple callback that sorts two nodes (users) by their age.

  // This callback works because if a.age is larger than b.age, then we return a positive value and b is sorted ahead of a.

  // Otherwise if a.age is smaller than b.age, then (a - b) returns a negative value so the values of a and b are not swapped, which maintains their order
}

function oddEvenSort(arr) {

  const oddNums = arr.filter((num) => num % 2 !== 0).sort((a, b) => a - b); // Here , 'oddNums' is a constant that stores an array. The stored array is created by filtering the original array to include ONLY the numbers that are odd (num % 2 !== 0).

  // After filtering, the sort method is called to sort the odd numbers in ascending order. Sorting is done by comparing two elements (a and b) and subtracting b from a. If the result is negative, a is sorted before b.

  const evenNums = arr.filter((num) => num % 2 === 0).sort((a,b) => a - b); // Here, 'evenNums' is another constant that stores an array. The stored array is created by filtering the original array to include ONLY the numbers that are even (num % 2 === 0).

  // After filtering, the sort method is called to sort the even numbers in ascending order. Sorting is done by comparing a to b and subtracting b from a. If the result is negative, a is sorted before b.

  return [...oddNums, ...evenNums]; // Here, we separate the odd and even numbers, sorts them individually in ascending order, then combine them back into a single array with the odd numbers first, followed by all of the even numbers.
}

function validAnagrams(s, t) {

  // This function takes two strings, s and t, and determines whether or not they are anagrams.

  if (s.length !== t.length) return false; // Here, we check to see if 's' and 't' have the same number of letters. If they don't, then we know they can't be anagrams so we return false.

  let sSorted = s.split("").sort().join(""); // This line takes the string s, splits it into an array of individual characters, sorts the array in ascending order, then joins the sorted array back into a string. The result is the string with its characters sorted in ascending order.

  let tSorted = t.split("").sort().join(""); // This line takes the other string t, splits it into an array of individual characters, sorts that array in ascending order, then joins the sorted array back into a string. The result is the string t with its characters sorted in ascending order.

  return sSorted === tSorted; // If the two words are anagrams, then sorting their characters in ascending order will result in two identical strings. If they are not anagrams, it will not. Thus if this equivalency returns true, s and t are anagrams. If it returns false, they are not.
}

function reverseBaseSort(arr) {

  return arr.sort((a, b) => { // Here, we return the result of calling the sort method on the input array with a callback...

    let baseA = Math.floor(Math.log10(a)) // ...baseA is set to the value of the base-10 logarithm of (a) (rounded dwon to the nearest integer using Math.floor). And...

    // Note that the base-10 logarithm of a number is the power to which 10 must be raised to obtain that number. For example: If (a) = 100, Math.log10(a) would be 2 because 10^2 = 100.

    let baseB = Math.floor(Math.log10(b)) // ...baseB is also set to the value of the base-10 logarithm of (b) (rounded down to the nearest integer using Math.floor)

    if (baseA !== baseB) { // If baseA is NOT equal to baseB...

      return baseB - baseA; // ...return the result of baseB - baseA. This sorts the numbers in descending order. Numbers with more digits (a higher base) will come before numbers with fewer digits.
    };

    return a - b; // If baseA and baseB are equal, that means that a and b have the same number of digits. In this case, we return the result of (a) - (b) to sort the numbers in ascending order
  })
};

//^ In summary, the reverBaseSort function sorts an array of numbers first by the number of digits in descending order (more digits come first), then sorts numbers with the same number of digits in ascending order.

function frequencySort(arr) {

  // Here, we want to sort the elements of the input array in order of how frequently they occur in the array

  let frequency = {}; // initialize a frequency variable to tally how many times a number appears in the input array

  arr.forEach((num) => { // ...for each element in the array...

    if (frequency[num]) { // ...if we already have a count for that number...

      frequency[num]++; // ...increment that count by 1.
    } else { // Otherwise, if we do not have a count for that number yet...

      frequency[num] = 1; // ...set the count for that nubmer equal to 1
    }
  })

  return arr.sort((a, b) => { // ...Return the result of sorting the elemnts of the array...

    if (frequency[a] === frequency[b]) { // ...if the frequency of a is equal to the frequency of b...

      return b - a; // ...sort them from largest to smallest. Otherwise, if the frequency of a is not equal to the frequency of b...
    }

    return frequency[a] - frequency[b]; // ...sort the numbers by frequency.
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
