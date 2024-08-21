// const chai = require('chai')
const { chai, expect } = require('chai')

const reverseString = require('../problems/reverse-string')

describe('reverseString function', function() {

    it ('should return a reversed string', function() {

        let string = "fun"
        expect(reverseString(string)).to.equal("nuf");
    })

    it ('should throw a TypeError if input is not a string', function() {

        let number = 10;
        let boolean = false;
        let object = {"key": 5}
        let array = [1, 2, 3]

        expect(() => reverseString(number)).to.throw(TypeError)
        expect(() => reverseString(boolean)).to.throw(TypeError)
        expect(() => reverseString(object)).to.throw(TypeError)
        expect(() => reverseString(array)).to.throw(TypeError)
    })
})
