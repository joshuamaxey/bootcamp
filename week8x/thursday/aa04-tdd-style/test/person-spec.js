const { chai, expect } = require('chai');

const Person = require('../problems/person');

describe('Person class', function() {

    beforeEach(() => {
        person1 = new Person("Robert", 40)
        person2 = new Person("Joshua", 30)
    })

    it ('should create successfully', function() {

        expect(person1).to.exist;
    })

    it ('should set name and age on creation', function() {

        expect(person1.name).to.equal("Robert")
        expect(person1.age).to.equal(40)
    })

    it ("should have sayHello() method")
})
