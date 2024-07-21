//! Binary Search

// Binary search enables us to search an array in O(log n) time. This is better than the O(n) time complexity when we iterate through the array in order.

// Binary search is a divide-and-conquer approach.

//! Pre-Conditions for a Binary Search

//^ 1. Data must be sorted (every value to the left of a given value is less than that value, every value to the right of a given value is more than that value)

//^ 2. Data can be accessed by index in constant time (Binary search works on arrays, but not on linked lists or hash tables)

//! Binary Search Practie (from broken practice)

function linearSearch (arr, target) {

    return arr.indexOf(target);

    // for(let i = 0; i < arr.length; i++) {

    //   if (arr[i] === target) return i;
    // }

    // return -1

  };

  function binarySearch(arr, target) {

    // Set integers pointing to the high and low range of possible indices
    let low = 0
    let high = arr.length - 1;

    // While high and low indices do not overlap...
    while (low <= high) {

      // Find the midpoint between high and low indices
      let mid = Math.floor((high + low) / 2);

      // Compare the target value to the midpoint value

      // If the target equals the midpoint...
      // Return the midpoint index
      if (arr[mid] === target) return mid;

      // If the target is higher than the midpoint...
      // Move the low pointer to midpoint + 1
      if (arr[mid] < target) low = mid + 1;

      // If the target is less than the midpoint...
      // Move the high pointer to midpoint - 1
      if (arr[mid] > target) high = mid - 1;
    }

    // Return -1 if the loop exits with overlapping pointers
    return -1;
  }
