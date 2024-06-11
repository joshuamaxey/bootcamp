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

// Arrow functions as instance methods work, but are not memory efficient

// Arrow functions as methods on OBJECTS (not clss methods, but functions as methods defined within an object), we lost context entirely and the bind/call/apply will not work because there is NO 'this' to bind to any context.

// IN summary, they can be used as class methods but are not efficient. They cannot be used as object methods.

module.exports = User;
