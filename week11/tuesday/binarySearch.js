//! Binary Search

// We know how to perform a linear search on an array by visiting each value one at a time until we find the target.

// Linear search has a runtime of O(n).

// Now e will learn to search an array in O(log n) time including the pre-conditions, the algorithm, and performance analysis

//! Divide and Conquer

// Imagine a book containing an alphabetical list of English words and their definitions.

// You want to look up the word 'dictionary' in this book

// You could start from the beginning and check each word in order (a, aardvarrk, aardwolf, Aaron, etc) until you reach 'dictionary.'

//^ Instead, you ight open the dictionary from the middle and spot the word 'microscope'.

// You know that d comes before m, so dictionary must lie in the first half of pages you've opened.

// You open the first pages in half again and open to the new midpoint, which brings you to the word 'escalator'

// Since d comes before e, you know that it's again in the first half, so you repeat the process and come to the word 'cardiovascular'

// since c comes before d, you split the second half bringing you to 'crankshaft'

// repeat and come to 'diagnostic'

// then 'dichotomy'

// then, finally, 'dictionary'

//^ Instead of 100 thousand comparisons, we performed only 7.

// This is the power of binary search and logarithmic time complexity.

//! Pre-Conditions for a Binary Search

//^ In order to perform a binary search in logarithmic time, your data must satisfy two conditions:

// 1. Data must be sorted
// 2. Data can be accessed by index in constant time

// Sorting carries many challenges and tradeoffs of its own. It is a necessary pre-condition that enables us to guarantee that any left value is less than the current value while any right value is greater.

// We must be able to access data by index in constant time. This means we cannot binary search a linked list (which has no indices) or a hash table (which has no order).

//^ However, arrays do satisfy these conditions.

//! Binary Search in Code

// Consider the following array. Let's search for the number 89.

arr = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52, 53, 57, 63, 66, 67, 68, 69, 74, 76, 79, 82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100];

target = 89;

// We can start by defining the range of possible locations which can be anywhere from the LOW of index 0 to the HIGH of index 31 //! (Why is 31 the highest index..?)

console.log(arr.length); // 32, so there are 31 indices. That's why.

lo = 0;
hi = 31;

// Now we find the midpoint, which is the high index plus the low divided by 2 (rounded down)

mid = (hi + lo) / 2;

console.log(mid); // 15.5, rounded down to 15

mid = 15;

// Now check the value of the array at the midpoint using arr[mid]

console.log(arr[mid]); // 67

// If the value is equal to the target, return mid.

// Its not, so now we adjust the boudnaries to match the half that might contain the value.

// Since arr[15] = 67, which is less than the target of 89, we can eliminate all values to the left of the midpoint since the target is higher than the midpoint and therefore must be located to the right. So the boundaries now look like this:

lo = 16;
hi = 31;

mid = (hi + lo) / 2;

console.log(mid); // 23.5, rounded down to 23

mid = 23;

console.log(arr[mid]); // 84. Getting close!

// Repeat this process until you find the value and return mid, or the lo and hi markers meet to return -1.

lo = 24;
hi = 31;

mid = (hi + lo) / 2;

console.log(mid); // 27.5, round down to 27

mid = 27;

console.log(arr[mid]); // 92

// Now the midpoint is 92, which is greater than the target. So we bring the hi index down.

lo = 24;
hi = 26;

mid = (hi + lo) / 2;

console.log(mid); // 25

console.log(arr[mid]); // 88, closer!

// 88 is less than 89 so once again we bring up the lo index:

lo = 26;
hi = 26;
mid = 26;

console.log(arr[mid]); // 89, got it!

// This binary search took only 5 comparisons

// A linear search would have taken 27 comparisons

// If your target was 90, which does not exist in the array, the lo pointer would increment to 27 which overlaps with the hi of 26, returning -1 when we perform the calculation.

//! Binary Search Pseudocode

function binarySearch(arr, target) {

    // Set integers pointing to the high and low range of possible indices
    let lo = 0;
    let hi = (arr.length - 1);

    // While high and low indices do not overlap...
    while (lo <= hi) {

      // Find the midpoint between high and low indices
        mid = Math.floor((hi + lo) / 2);

      // Compare the target value to the midpoint value

      // If the target equals the midpoint...
        if (target === mid) {
        // Return the midpoint index
            return mid;
        }
      // If the target is higher than the midpoint...
        if (target > mid) {
            // Move the low pointer to midpoint + 1
            lo = mid + 1;
        }
      // If the target is less than the midpoint...
        if (target < mid) {
            // Move the high pointer to midpoint - 1
            hi = mid - 1;
        }
    // Return -1 if the loop exits with overlapping pointers
    } if (lo > hi) {
        return -1;
    }
  }

  arr = [1, 5, 8, 10, 14, 26, 27, 32, 37, 51, 52, 53, 57, 63, 66, 67, 68, 69, 74, 76, 79, 82, 83, 84, 86, 88, 89, 92, 94, 95, 99, 100];

  target = 89;

  console.log(binarySearch(arr, target));

//   console.log(Math.floor(20 / 3));
