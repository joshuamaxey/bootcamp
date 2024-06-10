const User = require('./classes/user');

const michelle = new User('Michelle');

function greetAfterNameChange(changeName, newName) {
  const name = changeName(newName);

  console.log(`Hi my name is ${name}`);
}

greetAfterNameChange(michelle.changeName, 'Elle');
  // should print out: Hi my name is Elle

//^ For the solution that we implemented to prevent the error that was originally thrown when we run the code in this file, see the 'users.js' file within the 'classes' folder of this practice.
