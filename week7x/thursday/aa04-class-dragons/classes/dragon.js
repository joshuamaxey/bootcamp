class Dragon { // create a Dragon class
  constructor(name, color) { // invoke our constructor with name and color properties
    this.name = name;
    this.color = color;
  }

  breathesFire() { // instance method
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  static getDragons(...dragons) { // static method that uses rest parameter to take any number of 'dragon' instances of our Dragon class

    let dragonsArr = []; // README says that we should return an array with all the names of the dragons passed into the function, so we create a new array to hold the names of the dragons

    for (let dragon of dragons) { // Use a for...of loop to iterate through the dragons provided as arguments w/the rest parameter

      dragonsArr.push(dragon.name) // as we iterate through the dragons, push each dragon's name to the dragonsArr
    }

    return dragonsArr; // After we've iterated through all of the dragons that were provided as arguments and added each of their names to our dragonsArr, we return dragonsArr
  }
}

const puff = new Dragon("Puff", "green");

console.log(puff); // Dragon { name: 'Puff', color: 'green' }
console.log(puff.breathesFire()); //Puff breathes fire everywhere! BURN!!!!

const toothless = new Dragon("Toothless", "black");

console.log(toothless); // Dragon { name: 'Toothless', color: 'black' }
console.log(toothless.breathesFire()); // Toothless breathes fire everywhere! BURN!!!!

console.log(Dragon.getDragons(puff, toothless)); // [ 'Puff', 'Toothless' ]

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}
