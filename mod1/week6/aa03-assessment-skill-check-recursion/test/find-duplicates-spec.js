const chai = require("chai");
const sinon = require('sinon');
const expect = chai.expect;

describe('findDuplicatesIterative()', () => {

	it('solves problem using iteration with correct output', () => {
		const findDuplicatesIterative = sinon.spy(window, 'findDuplicatesIterative');
		findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ]);
		expect(findDuplicatesIterative.callCount).to.equal(1, "not an iterative solution");
		findDuplicatesIterative.restore();

		expect(findDuplicatesIterative([ 5, 8, 8, 2, 3 ])).to.have.length(1);
		expect(findDuplicatesIterative([ 5, 8, 8, 2, 3 ])).to.include.members([ 8 ]);
		expect(findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ])).to.have.length(2);
		expect(findDuplicatesIterative([ 5, 8, 8, 8, 2, 3, 3 ])).to.include.members([ 3, 8 ]);
		expect(findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ])).to.have.length(2);
		expect(findDuplicatesIterative([ 'a', 'word', 'a', 'another', 'word' ])).to.include.members([ "a", "word" ]);
	});

});

describe('findDuplicatesRecursive()', () => {

	it('solves the problem using recursion with correct output', () => {

		const findDuplicatesRecursive = sinon.spy(window, 'findDuplicatesRecursive');
		findDuplicatesRecursive([ 5, 8, 8, 8, 2, 3, 3 ]);
		expect(findDuplicatesRecursive.callCount).to.be.greaterThan(1);
		expect(findDuplicatesRecursive.getCall(1).args.length).to.be.greaterThan(1);
		findDuplicatesRecursive.restore();

		expect(findDuplicatesRecursive([ 5, 8, 8, 2, 3 ])).to.have.length(1);
		expect(findDuplicatesRecursive([ 5, 8, 8, 2, 3 ])).to.include.members([ 8 ]);
		expect(findDuplicatesRecursive([ 5, 8, 8, 8, 2, 3, 3 ])).to.have.length(2);
		expect(findDuplicatesRecursive([ 5, 8, 8, 8, 2, 3, 3 ])).to.include.members([ 3, 8 ]);
		expect(findDuplicatesRecursive([ 'a', 'word', 'a', 'another', 'word' ])).to.have.length(2);
		expect(findDuplicatesRecursive([ 'a', 'word', 'a', 'another', 'word' ])).to.include.members([ "a", "word" ]);
	});

});

describe('findDuplicatesNoDefault()', () => {

	it('solves the problem using recursion with no default parameters', () => {

		const findDuplicatesNoDefault = sinon.spy(window, 'findDuplicatesNoDefault');
		findDuplicatesNoDefault([ 5, 8, 8, 8, 2, 3, 3 ]);
		expect(findDuplicatesNoDefault.callCount).to.be.greaterThan(1);
		expect(findDuplicatesNoDefault.getCall(1).args.length).to.equal(1);
		findDuplicatesNoDefault.restore();

		expect(findDuplicatesNoDefault([ 5, 8, 8, 2, 3 ])).to.have.length(1);
		expect(findDuplicatesNoDefault([ 5, 8, 8, 2, 3 ])).to.include.members([ 8 ]);
		expect(findDuplicatesNoDefault([ 5, 8, 8, 8, 2, 3, 3 ])).to.have.length(2);
		expect(findDuplicatesNoDefault([ 5, 8, 8, 8, 2, 3, 3 ])).to.include.members([ 3, 8 ]);
		expect(findDuplicatesNoDefault([ 'a', 'word', 'a', 'another', 'word' ])).to.have.length(2);
		expect(findDuplicatesNoDefault([ 'a', 'word', 'a', 'another', 'word' ])).to.include.members([ "a", "word" ]);
	});

});


describe('findDuplicatesChallenge()', () => {

	it('uses no FOR, WHILE, or array looping methods to solve problem, but can have more than one function parameter', () => {
		const findDuplicatesChallenge = sinon.spy(window, 'findDuplicatesChallenge');
		const result = findDuplicatesChallenge([ 5, 8, 8, 8, 2, 3, 3 ]);
		expect(result).to.have.length(2);
		expect(result).to.include.members([ 3, 8 ]);
		expect(findDuplicatesChallenge.callCount).to.be.greaterThan(1);
		findDuplicatesChallenge.restore();

		const hasForLoop = (fn) => fn.toString().includes("for");
		const hasWhileLoop = (fn) => fn.toString().includes("while");

		expect(hasForLoop(findDuplicatesChallenge)).to.be.false;
		expect(hasWhileLoop(findDuplicatesChallenge)).to.be.false;

		const mapSpy = sinon.spy(Array.prototype, "map");
		const forEachSpy = sinon.spy(Array.prototype, "forEach");
		const filterSpy = sinon.spy(Array.prototype, "filter");
		const includesSpy = sinon.spy(Array.prototype, "includes");
		const findSpy = sinon.spy(Array.prototype, "find");
		const sortSpy = sinon.spy(Array.prototype, "sort");

		findDuplicatesChallenge([ 5, 8, 8, 8, 2, 3, 3 ]);
		expect(mapSpy.callCount).to.equal(0);
		expect(forEachSpy.callCount).to.equal(0);
		expect(filterSpy.callCount).to.equal(0);
		expect(includesSpy.callCount).to.equal(0);
		expect(findSpy.callCount).to.equal(0);
		expect(sortSpy.callCount).to.equal(0);

		mapSpy.restore();
		forEachSpy.restore();
		filterSpy.restore();
		includesSpy.restore();
		findSpy.restore();
		sortSpy.restore();
	});
});
