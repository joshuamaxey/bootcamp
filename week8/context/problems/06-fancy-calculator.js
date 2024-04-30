const Calculator = require("./02-calculator")

class FancyCalculator extends Calculator {

	setTotal(newTotal) {
		return this.total = newTotal;
	}

	modulo(num) {
		return this.total %= num
	}

	squared() {
		return this.total *= this.total
	}
}

let fancyCalculator = new FancyCalculator();
console.log(fancyCalculator.setTotal(5)); // => 5
console.log(fancyCalculator.squared());   // => 25
console.log(fancyCalculator.modulo(4));   // => 1
console.log(fancyCalculator.total)        // => 1

// can use instance methods on the Calculator class
console.log(fancyCalculator.add(9))       // => 10

//^ Just spent a while trying to figure out why I was printing undefined for these new methods, attempting to apply the bind method etc, then realized that I never used the 'return' keyword on any of them. Added the return keyword and now they work.

//! Done!

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
