const Dragon = require('./dragon')

class EvilDragon extends Dragon {
    constructor(name, color, evilDoings, nemesis) {
        super(name, color);
        this.evilDoings = evilDoings;
        this.nemesis = nemesis
    }

    dontInviteThemOverForDinner() { // instance method

        let evilDoingsArr = [...this.evilDoings] // Since we know that we want to log each evilDoing to the console separately, and we know that evilDoings will be an array (but is not an array in the constructor), we can assume that evilDoings is an arry and spread its individual elements into our new array (evilDoingsArr)

        // Alternatively, we could set 'evilDoings' equal to an array using a default parameter like this: constructor(name, color, evilDoings = [], nemesis)

        // OR we could set evilDoings equal to an array within the constructor function like this: this.evilDoings = [evilDoings];

        // Either of these alternative methods could allow us to avoid using the spread syntax to capture the elements of the array.

        for (let evilDoing of evilDoingsArr) { // Use a for...of loop to iterate through each element of the 'evilDoingsArr' we initialized above

            console.log(`${this.name} will ${evilDoing}`) // console.log each evilDoing to the console in this format per the README
        }
    }

    burnsNemesis() { // instance method

        return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!` // return the string in this format per the README
    }
}

const enderDragon = new EvilDragon(
    "Ender Dragon",
    "black", [
      "spit a fireball at Steve",
      "rule over all the Endermen",
      "destroy all blocks in its way"
    ],
    "Steve"
  );
  console.log(enderDragon);

  enderDragon.dontInviteThemOverForDinner(); // Ender Dragon will spit a fireball at Steve
  // Ender Dragon will rule over all the Endermen
  // Ender Dragon will destroy all blocks in its way

  console.log(enderDragon.breathesFire()); // Ender Dragon breathes fire everywhere! BURN!!!!

  console.log(enderDragon.burnsNemesis()); // Ender Dragon destroys Steve with fire! WHOOOSH!!!

  const drogon = new EvilDragon(
    "Drogon",
    "black-red",
    [
      "eat all your livestock",
      "burn down your castle in Westeros",
      "burn your father and brother"
    ],
    "Night King"
  );
  console.log(drogon);

  drogon.dontInviteThemOverForDinner(); // Drogon will eat all your livestock
  // Drogon will burn down your castle in Westeros
  // Drogon will burn your father and brother

  console.log(drogon.breathesFire()); // Drogon breathes fire everywhere! BURN!!!!

  console.log(drogon.burnsNemesis()); // Drogon destroys Night King with fire! WHOOOSH!!!

module.exports = EvilDragon
