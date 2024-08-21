function returnsThree() {

  return 3;
}

function reciprocal(n) {

  if (typeof n !== "number") { // If (n) is NOT a number...

    throw new TypeError("Input must be a number") // ...throw a TypeError
  }

  if (n < 1 || n > 1000000) { // If (n) is less than 1 or greater than 1,000,000...

    throw new RangeError("Number is out of range: Input must be between 1 and 1,000,000") // ...throw a RangeError
  }

  return 1/n; // Otherwise, if input type is a number that is between 1 and 1,000,000 (inclusive), return the reciprocal of that number
}

module.exports = {
  returnsThree,
  reciprocal
};
