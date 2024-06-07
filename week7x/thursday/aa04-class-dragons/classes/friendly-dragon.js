const Dragon = require('./dragon')

class FriendlyDragon extends Dragon { // use the 'extends' keyword to create a 'FriendlyDragon' child class of 'Dragon' using the imported Dragon class
    constructor(name, color, lifeGoals, friend) {
        super(name, color); // use the 'super' keyword to inherit the constructor from the Dragon class including the name and color properties
        this.lifeGoals = lifeGoals;
        this.friend = friend;
    }

    hasLifeGoals() { // instance method

        for (let lifeGoal of this.lifeGoals) { // Since 'lifeGoals' is actually an array of strings (which we know from looking at the test specs), use a for...of loop to iterate through the array of lifegoals and then...

            console.log(`${this.name} likes to ${lifeGoal}`) // ...log each lifegoal to the console in this format (per README)
        }
    }

    helpsPeople() { // instance method

        return `${this.name} helps their friend ${this.friend}` // returns a string that uses the .name and .friend properties of our FriendlyDragon instance in this format (per README)
    }
}

const puff = new FriendlyDragon(
    "Puff",
    "green",
    [
      "live by the sea",
      "frolick in the autumn mist",
      "help small children"
    ],
    "Jackie Paper"
  );
  console.log(puff);

  console.log(puff.breathesFire()); //Friendly dragons can still breathe fire!

  puff.hasLifeGoals(); // Puff likes to live by the sea
  // Puff likes to frolick in the autumn mist
  // Puff likes to help small children

  console.log(puff.helpsPeople()); // Puff helps their friend Jackie Paper

  const toothless = new FriendlyDragon(
    "Toothless",
    "black",
    [
      "save the town of Burke",
      "fly with a kid on his back",
      "hang out with Vikings"
    ],
    "Hiccup"
  );

  console.log(toothless);

  toothless.hasLifeGoals(); // Toothless likes to save the town of Burke
  // Toothless likes to fly with a kid on his back
  // Toothless likes to hang out with Vikings

  console.log(toothless.helpsPeople());   // Toothless helps their friend Hiccup

  console.log(toothless.breathesFire()); // Toothless breathes fire everywhere! BURN!!!!

module.exports = FriendlyDragon;
