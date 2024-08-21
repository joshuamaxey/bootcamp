const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {

  let arr = [];

  for (let n = increment; n <= 10 * increment; n += increment) {

    arr.push(addNums(n))
  }

  return arr;

}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {

  let arr = [];

  for (let n = increment; n <= 10 * increment; n += increment) {

    arr.push(addManyNums(n));
  }

  return arr;

}

module.exports = [addNums10, addManyNums10];
