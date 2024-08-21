const Dragon = require('./classes/dragon')
const FriendlyDragon = require('./classes/friendly-dragon');
const EvilDragon = require('./classes/evil-dragon');

const falkor = new FriendlyDragon(
  'Falkor',
  'white',
  ["save Atreyu from the swamp", "save Atreyu from the Nothing", "scare the local bullies into a dumpster"],
  'Bastian'
)

const smaug = new EvilDragon(
  'Smaug',
  'black',
  ['take over your mountain kingdom', 'steal all your dwarven gold', 'burn down your floating village'],
  'Dwarf King'
)

allDragons = Dragon.getDragons(falkor, smaug);

console.log(falkor);

falkor.hasLifeGoals(); // Falkor likes to save Atreyu from the swamp
// Falkor likes to save Atreyu from the Nothing
// Falkor likes to scare the local bullies into a dumpster

console.log(falkor.breathesFire()); // Falkor breathes fire everywhere! BURN!!!!
console.log(falkor.helpsPeople()); // Falkor helps their friend Bastian

console.log(smaug);

smaug.dontInviteThemOverForDinner(); // Smaug will take over your mountain kingdom
// Smaug will steal all your dwarven gold
// Smaug will burn down your floating village

console.log(smaug.breathesFire()); // Smaug breathes fire everywhere! BURN!!!!
console.log(smaug.burnsNemesis()); // Smaug destroys Dwarf King with fire! WHOOOSH!!!

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor
  module.exports.smaug = smaug
  module.exports.allDragons = allDragons
} catch {
  module.exports = null;
}
