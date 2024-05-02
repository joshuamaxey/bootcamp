function isFive(num) {
  if (num === 5) {
    return true;
  } else {
    return false
  }
}

function isOdd(num) {
  if (typeof num === "number") {
    if (num % 2 !== 0) {
      return true;
    } else {
      return false;
    }
  } else {
    throw new Error("I'm not a number")
  }
}

//! According to specs:
// myRange should return all numbers from min to max
// If step is provided, should increment by that step
// If step is not provided, default step is 1
// If min is greater than max, return empty array

function myRange(min, max, step = 1) {
  let newArr = [];

  if (min > max) {
    return newArr
  } else {
    for (let i = min; i <= max; i += (step)) {
      newArr.push(i);
    }
  }

  return newArr;
}


module.exports = { isFive, isOdd, myRange };
