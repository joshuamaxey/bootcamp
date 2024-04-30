function callOnTarget(func, obj1, obj2) {
  return func.call(obj1, obj2);
}

const cat = {
  name: "Breakfast"
};

const mouse = {
  name: "Jerry"
};

function greet(other) {
  return "I'm " + this.name + ". Nice to meet you, " + other.name;
}

console.log(callOnTarget(greet, cat, mouse));
// "I'm Breakfast. Nice to meet you, Jerry"

console.log(callOnTarget(greet, mouse, cat));
// "I'm Jerry. Nice to meet you, Breakfast"

const dog = {
  name: "Noodles",
  chase: function(animal) {
    return "Woof, my name is " + this.name + " and I'm chasing " + animal.name;
  }
};

console.log(callOnTarget(dog.chase, cat, dog));

//^ Since the prompt asks us to return the RESULT of a function, we know that we are going to use the call or apply method to bind the context because these methods invoke the function immediately and return its result (as opposed to bind() which actually creates a new function with the bound context and returns that function without invoking it). Since we want to use obj1 as the context and obj2 as an argument, and obj2 is presumably an object (not an array), we use the call method because call takes individual argments while apply takes an array as the second parameter.

//! Done!

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = callOnTarget;
