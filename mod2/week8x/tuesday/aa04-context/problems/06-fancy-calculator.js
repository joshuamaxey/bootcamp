const Calculator = require('./02-calculator')

class FancyCalculator extends Calculator {

	setTotal(newTotal) {

		this.total = newTotal;

		return this.total;
	}

	modulo(num) {

		return this.total %= num;
	}

	squared() {

		return this.total *= this.total;
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
