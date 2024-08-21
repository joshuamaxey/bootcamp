function bindToAnArg(func, arg) {
  return func.bind(func, arg)
}

function add(num1, num2) {
  return num1 + num2;
}

const addTwo = bindToAnArg(add, 2);
const addThree = bindToAnArg(add, 3);

const twoPlusSix = addTwo(6);
const twoPlusSeven = addTwo(7);
const threePlusSeven = addThree(7);
const threePlusEight = addThree(8);
console.log({
  twoPlusSix,     // => 8
  twoPlusSeven,   // => 9
  threePlusSeven, // => 10
  threePlusEight  // => 11
});
function iSpy(thing) {
  return "I spy a " + thing;
}

let spyTree = bindToAnArg(iSpy, "tree");
console.log(spyTree());        // => I spy a tree
console.log(spyTree("car"));   // => I spy a tree

let spyCar = bindToAnArg(iSpy, "car");
console.log(spyCar());         // => I spy a car
console.log(spyCar("potato")); // => I spy a car

//! Done!

//^ This one was a little bit confusing. we return a NEW function (because the bind() method always returns a new function) with the context bound to that function itself and with the argument set to the argument that was provided within the bindToAnArg function.

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = bindToAnArg;
