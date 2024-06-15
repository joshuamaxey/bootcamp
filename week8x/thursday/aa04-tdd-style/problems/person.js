class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  };

  sayHello() {
    return `Hello, ${this.name}`
  };

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  };

  switchVisit(otherPerson) {
    return `${otherPerson.name} visited ${this.name}`;
  };

  update(obj) {

    if (typeof obj !== "object") {
      throw new TypeError("input must be an object")
    } else if (Array.isArray(obj)) {
      throw new TypeError("input must be an object")
    } else if (!obj.name || !obj.age) {
      throw new TypeError("input must have .name and .age properties")
    }

    this.name = obj.name;
    this.age = obj.age;

    console.log(this)
    console.log(obj);

    return this;
  };

  tryUpdate(obj) {

  };

  static greetAll(obj) {

  };
}

module.exports = Person;
