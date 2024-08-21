class CallCenter {
	constructor(name) {
		this.name = name;
	}

	sayHello() {

		console.log(`Hello this is ${this.name}`);
	}

	callMeLater(delay) {

		// setTimeout(function() {
		// 	console.log(`Hello this is ${this.name}`);
		// }.bind(this), delay);

		setTimeout(() => {

			this.sayHello();
		})
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = CallCenter;
} catch {
	module.exports = null;
}
