class Dog {
	constructor(name) {
		this.name = name;
	}

	static makeJet() {

		let dog = new Dog("Jet");

		return dog;
	}

	changeName(newName) {

		this.name = newName;

		return newName;
	}

	speak(word) {

		return `${this.name} says ${word}`;
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
