//isFIve

function isFive(x) {
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
