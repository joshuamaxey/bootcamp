class Person { //class
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  introduce() {
    console.log(`Hi, I'm ${this.firstName} ${this.lastName}, and I'm ${this.age} years old.`)
  }

  static introducePeople(arr) {
    if (!Array.isArray(arr)) {
      throw new Error("introducePeople only takes an array as an argument.")
    }

    for (let el of arr) {
      if (!(el instanceof Person)) {
        throw new Error("All items in array must be Person class instances.")
      } else {
        el.introduce();
      }
    }

  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Person;
} catch {
  module.exports = null;
}
