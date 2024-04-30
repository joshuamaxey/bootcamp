function boundFuncTimer(obj, func, delay) {
  setTimeout(func.bind(obj), delay)
}

class Animal {
  constructor(age) {
    this.age = age;
  }

  growOlder() {
    this.age++;
    console.log(this.age);
  }
}

const dog = new Animal(1);
const cat = new Animal(5);

boundFuncTimer(dog, dog.growOlder, 5000); // in 5 seconds prints: 2
boundFuncTimer(cat, dog.growOlder, 7000); // in 7 seconds prints: 6

//^ I was absolutely certain that I was wrong about how to write this function, but then it returned the correct output and passed the npm test. I just invoked setTimeout with the 'func' argument as its callback and used the bind method to bind obj1 to func as its context. Then I put the delay argument where setTimeout expects a delay in milliseconds.

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
