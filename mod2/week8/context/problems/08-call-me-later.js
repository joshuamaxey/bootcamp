class CallCenter {
	constructor(name) {
		this.name = name;
	}

	sayHello() {
		console.log(`Hello this is ${this.name}`)
	}

	callMeLater(delay) {
		setTimeout(() => this.sayHello(this.name), delay)
	}
}

//^^ Here (In the callMeLater function), we add the 'this' keyword BEFORE the sayHello function to clarify that the sayHello function will be called on THIS instance (whichever instance of the CallCenter class that this function is called on) of the CallCenter class. Effectively, we are manually binding the contexdt of the sayHello function (as invoked by the callMeLater function) to 'this' instance of the CallCenter class.

let judy = new CallCenter("Judy");
judy.sayHello();         // prints "Hello this is Judy"
judy.callMeLater(1000);  // waits one second then prints "Hello this is Judy"

let melan = new CallCenter("Melan");
melan.sayHello();        // prints "Hello this is Melan"
melan.callMeLater(1000); // waits one second then prints "Hello this is Melan"

//! Done!

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
