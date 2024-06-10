class User {
  constructor(name) {
    this.name = name;
  }

  // changeName(newName) {
  //   this.name = newName;
  //   return this.name;
  // }

  changeName = newName => {
    this.name = newName;
    return this.name;
  }
}

// To fix the TypeError that was thrown when we ran the index.js file, we can convert the changeName method to an arrow function. This effectively prevents the loss of context that caused the error to be thrown. //& Note that MDN advises against ever using arrow functions as class methods.

module.exports = User;
