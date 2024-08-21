function linearSearch (arr, target) {

    // for (let i = 0; i < arr.length; i++) if (arr[i] === target) return i; return -1

    for (let i = 0; i < arr.length; i++) { // Iterate through every element of the array

        if (arr[i] === target) return i; // Compare the element located at the current index of the array to the target value. If they match, return the current index
    }
        return -1; // If we traverse the entire array without finding the target, return -1 because it isn't present in the array.

  };

  function binarySearch(arr, target) {

    // Set integers pointing to the high and low range of possible indices

    lo = 0;
    hi = arr.length - 1;

    while (hi >= lo) { // While the hi and lo indices do not overlap...

      mid = Math.floor((hi + lo)/2); // find the midpoint between the hi and lo indices (using the formula [ (hi + lo) / 2 ]), //^ and use the Math.floor(mid) method to make sure that the number rounds DOWN to the nearest integer.

      if (arr[mid] === target) return arr[mid]; // If the number located at the 'mid' index is equal to the target, then return the midpoint index

      if (arr[mid] < target) lo = mid + 1; // If the target is higher than the midpoint, move the 'lo' pointer to midpoint + 1

      if (arr[mid] > target) hi = mid - 1; // IF the target is lower than the midpoint, moe the 'hi' pointer to midpoint - 1

    }

    if (hi < lo) { // IF the loop exits with overlapping pointers...
      return -1; // ...return -1, since this means we never found the target
    }

  }
