class Calculator {
	constructor(total = 0) {
		this.total = total;
	}

	add(num) {
		return this.total += num;
	}

	subtract(num) {
		return this.total -= num;
	}

	divide(num) {
		return this.total /= num;
	}

	multiply(num) {
		return this.total *= num
	}
}

let calculator = new Calculator();
console.log(calculator.add(50));      // => 50
console.log(calculator.subtract(35)); // => 15
console.log(calculator.multiply(10)); // => 150
console.log(calculator.divide(5));    // => 30
console.log(calculator.total)         // => 30

//! Done

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Calculator;
} catch {
	module.exports = null;
}
