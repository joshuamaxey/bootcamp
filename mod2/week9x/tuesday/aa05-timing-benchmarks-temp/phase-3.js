const [addNums, addManyNums] = require("./phase-1");
// const [addNums10, addManyNums10] = require("./phase-2")

function addNums10Timing(increment) {
  // Copy your `addNums10` code here
  // Then, add timing code

  // console.time("addNums");

  // addNums10(increment);

  // console.timeEnd("addNums");

  let arr = [];

  for (let n = increment; n <= 20 * increment; n += increment) {

    let before = Date.now()

    arr.push(addNums(n));

    let after = Date.now()

    console.log(`${after - before}`)
  }

  return arr;

}


function addManyNums10Timing(increment) {
// Copy your `addManyNums10` code here
// Then, add timing code

  // console.time("addManyNums");

  // addManyNums10(increment);

  // console.timeEnd("addManyNums");

  let arr = [];

  for (let n = increment; n <= 20 * increment; n += increment) {

    let before = Date.now()

    arr.push(addManyNums(n));

    let after = Date.now();

    console.log(`${after - before}`)
  }

  return arr;

}


n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);
