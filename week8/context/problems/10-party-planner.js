class PartyPlanner {
	constructor(guestList = []) {
		this.guestList = guestList;
	}

	addToGuestList(name) {
		this.guestList.push(name);
	}

	throwParty() {
		if (this.guestList.length === 0) {
			return `Gotta add people to the guest list`
		}

		else {
			return `Welcome to the party ${this.guestList.join(" and ")}`
		}
	}
}

const party = new PartyPlanner();

console.log(party.throwParty()); // prints "Gotta add people to the guest list"

party.addToGuestList("James");
console.log(party.throwParty()); // prints "Welcome to the party James"

party.addToGuestList("Alvin");
console.log(party.throwParty()); // prints "Welcome to the party James and Alvin"

const party2 = new PartyPlanner();
console.log(party2.throwParty()); // prints "Gotta add people to the guest list"

party2.addToGuestList("Lucy");
console.log(party2.throwParty()); // prints "Welcome to the party Lucy"

//^ Here, in the 'throwParty' function, we use a simple conditional to print a string if the guestList is empty. If it's not, then we use the array.join() method to convert the array of guests (guestList) into a string of guest names separated by ' and '.

//! Done!

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = PartyPlanner;
} catch {
	module.exports = null;
}
