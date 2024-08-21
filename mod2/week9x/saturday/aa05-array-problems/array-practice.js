const findMinimum = arr => {

  let min = undefined; // initialize a new variable 'min' to hold the minimum value and assign it a default value of 'undefined'

  for (let i = 0; i < arr.length; i++) { // iterate through the array using a for() loop, time complexity O(n)

    let current = arr[i]; // find the element located at the current index of the array and store it in a variable 'current'

    let previous = arr[i - 1]; // find the element located at the previous index of the array and store it in a variable 'previous'

    if (current < previous) { // If the element located at the current index is less than the variable located at the previous index...

      min = current; // Set he value of 'min' equal to the value of the element located at the current index of the array
    }

  }

  return min; // After the loop is done iteration, return the minimum value
};

//^ findMinimum() has a time complexity of O(n) since we're using a for() loop, performing n operations according to the nuber of elements in the input array. It has a space complexity of O(1) since we're using a fixed number of variables to store the results.

const runningSum = arr => {

  let result = []; // initialize a new array to hold the new numbers

  let sum = 0; // initialie a new variable 'sum' to hold the running sum

  for (let num of arr) { // Iterate through the array using a for...of() loop

    sum += num; // At each iteration of the loop, add the value of the current element to the running sum...

    result.push(sum); // ...then push that sum to the result array
  }

  return result; // Once we're iterated through each element of the array, return the result;
};

//^ The runningSum function has a time complexity of O(n) since we're using a for() loop to iterate through the array, which performs n operations according to the number of elements in the array. It has a space complexity of O(n) since we're creating a new array and populating it with (n) elements based on the number of elements in the input array

const evenNumOfChars = arr => {

  count = 0; // inititalize a variable 'count' to represent the number of elements with an even number of characters

  for (let i = 0; i < arr.length; i++) { // iterate through the array using a for() loop

    if (arr[i].length % 2 === 0) { // If the element located at the current index of the array has an even number of characters...

      count++; // increment the count variable by 1
    }
  }

  return count; // at the end of the loop, return the count
};

//^ evenNumOfChars() has a time complexity of O(n) because of our for() loop, which performs n operations according to the number of elements in the array. It has a space complexity of O(1) since we're only using a single variable.

const smallerThanCurr = arr => {

  let result = []; // ininitalize a new array per spec

  for (let i = 0; i < arr.length; i++) { // iterate through the array once using a for() loop

    count = 0; // initialize a count variable that resets for element in the array on the first loop

    for (let j = 0; j < arr.length; j++) { // iterate through the array a second time using another for() loop, comparing each element of the array to the current element of the first loop

      if (arr[j] < arr[i]) { // If the current element in the second for() loop is less than the current element of the first for() loop...

        count++; // ...increment this element's count variable by 1
      }
    }
    result.push(count); // After the second loop finishes comparing all of the elements in the array to the first loop's current element of the array, push 'count' to the result array;
  }
  return result; // Once counts have been found for each element of the array relative to every other element in the array and added to the result array, return the result.
};

//^ smallerThanCurr() has a time complexity of O(n^2) because of the nested for loop (n comparisons must be made for n elements in the array) and a space complexity of O(n) since we're creating a new array.

const twoSum = (arr, target) => {

  for (let i = 0; i < arr.length; i++) { // iterate through the array once using a for() loop

    for (let j = 0; j < arr.length; j++) { // iterate through the entire array again for each iteration of the first for() loop

      if (arr[i] + arr[j] === target) { // Compare the element located at each index of the array to the element located at the current index of the first loop. If the element in focus on the current iteration of the second loop and the element locateda at the current index of the first loop add up to the target...

        return true; // ...return true
      }
    }
  }
  return false; // Otherwise if we finish iterating through the array and no two elements add up to the target value, return false
};

//^ twoSum() has a time complexity of O(n^2) because we're using a nested for loop that performs (n) operations on (n) elements according to the number of elements in the input array. We have a space complexity of O(1) since we're not using any variables or creating a new array.

const secondLargest = arr => {

//   if (arr.length < 2) return undefined;

//   let max = -Infinity, secondMax = -Infinity;

//   for (let i = 0; i < arr.length; i++) {

//     if (arr[i] > max) {

//       secondMax = max;
//     } else if (arr[i] > secondMax && arr[i] !== max) {

//       secondMax = arr[i];
//     }
//   }

//   return secondMax;
};

const shuffle = (arr) => {

  let result = [...arr];

  for (let i = result.length - 1; i > 0; i--) {

    let j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
};


module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];
