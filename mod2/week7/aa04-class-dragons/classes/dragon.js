class Dragon {
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }

  breathesFire() { // istance method
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) { // static/class method
    let dragonArr = []; // initialize empty array

    for (let dragon of dragons) { // use for...of loop to iterate over indefinite number of dragon arguments (each an instane of the Dragon class)
      dragonArr.push(dragon.name); // since each element is a dragon (an instance of the Dragon class), we can call 'this.name' on each individual dragon, then push that property of each dragon instance to the dragonArr array.
    }
    return dragonArr; // return the array of the dragon names.
  }

}

const puff = new Dragon("Puff", "green"); // Here we use the Dragon class to construct a new instance (dragon) named Puff

console.log(puff);
console.log(puff.breathesFire());

const toothless = new Dragon("Toothless", "black"); // Here we use the Dragon constructor to build a new isntance (dragon) of the Dragon class.

console.log(toothless); //prints Dragon { name: 'Toothless', color: 'black' } as expected
console.log(toothless.breathesFire()); // prints Toothless breathes fire everywhere! BURN!!!! as expected

console.log(Dragon.getDragons(puff, toothless)); // prints ['Puff', 'Toothless'] as expected

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/


try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
