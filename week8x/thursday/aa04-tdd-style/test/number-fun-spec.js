const { chai, expect } = require('chai');

const { returnsThree, reciprocal } = require('../problems/number-fun');

describe('returnsThree function', function() {
    it('should return the number 3', function() {
        expect(returnsThree()).to.equal(3);
    })
})

describe('reciprocal function', function() {
    it('should return the reciprocal of a number', function(){

        let n1 = 10
        let n2 = 100000

        expect(reciprocal(n1)).to.equal(1/n1);
        expect(reciprocal(n2)).to.equal(1/n2);
    });

    it('should throw RangeError if input is less than 1 or greater than 1000000', function() {

        let n1 = -100
        let n2 = 0
        let n3 = 1000100

        expect(() => reciprocal(n1)).to.throw(RangeError);
        expect(() => reciprocal(n2)).to.throw(RangeError);
        expect(() => reciprocal(n3)).to.throw(RangeError);
    });

    it('should throw TypeError if input is not a number', function() {

        let string = "string"
        let object = {"key": 10}
        let boolean = false;
        let array = [0, 1, 2];

        expect(() => reciprocal(string)).to.throw(TypeError);
        expect(() => reciprocal(object)).to.throw(TypeError);
        expect(() => reciprocal(boolean)).to.throw(TypeError);
        expect(() => reciprocal(array)).to.throw(TypeError);
    })

    it('should throw TypeError if input is absent', function() {

        expect(() => reciprocal()).to.throw(TypeError)
    })
})
