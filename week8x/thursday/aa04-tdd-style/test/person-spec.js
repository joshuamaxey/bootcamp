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

    it ('should be an instance of the Person class', function() {

        expect(person1).to.be.an.instanceOf(Person);

    })

    it ('should set name and age on creation', function() {

        expect(person1).to.have.property('name', 'Robert');
        expect(person1).to.have.property('age', 40);

        //^ Note that when we use the 'property' method, the first parameter is the property that we expect the object to have (key) and the second parameter is the value.

        // alternatively:

        // expect(person1.name).to.equal("Robert")
        // expect(person1.age).to.equal(40)
    })

    it ("should have sayHello() method", function() {

        expect(person1.sayHello).to.be.a("function"); // checks to see if the method exists WITHOUT the need to run it or test any input/output
    })

    it ('sayHello() method should return: `Hello, ${name}`', function() {

        expect(person1.sayHello()).to.equal(`Hello, ${person1.name}`);
    })

    it ('should have visit(otherPerson) method', function() {

        expect(person1.visit).to.be.a("function");
    })

    it ('visit(otherPerson) method should return "person visited otherPerson"', function() {

        expect(person1.visit(person2)).to.equal(`${person1.name} visited ${person2.name}`);
    })

    it ('should have switchVisit(otherPerson) method', function() {

        expect(person1.visit).to.be.a("function");
    })

    it ('switchVisit(otherPerson) should return "otherPerson visited person"', function() {

        expect(person1.switchVisit(person2)).to.equal(`${person2.name} visited ${person1.name}`);
    })

    it ('should have update(obj) method', function() {

        expect(person1.update).to.be.a("function");
    })

    it ('update(obj) method should throw a TypeError if input is not an object', function() {

        let string = "string";
        let number = 50;
        let boolean = "false"
        let array = [0, 1, 2]

        expect(() => person1.update(string)).to.throw(TypeError);
        expect(() => person1.update(number)).to.throw(TypeError);
        expect(() => person1.update(boolean)).to.throw(TypeError);
        expect(() => person1.update(array)).to.throw(TypeError);
    })

    it ('update(obj) method should throw a TypeError if input obj does not have .name and .age properties', function() {

        let obj1 = new Person()
        let obj2 = new Person("name")
        let obj3 = new Person("", 50)

        expect(() => person1.update(obj1)).to.throw(TypeError);
        expect(() => person1.update(obj2)).to.throw(TypeError);
        expect(() => person1.update(obj3)).to.throw(TypeError);
    })

    it ("update(obj) should update name and age properties with correct input", function() {

        expect(person1.update(person2)).to.eql(person2); // Here we need to check for DEEP equality (using eql, to check if the properties of the objects are the same) instead of STRICT equality (using equal, to check if person1 and person2 are the same object) because the properties of these objects should be identical but they are still two distinct and independent objects.
    })

    it ('should have tryUpdate(obj) method', function() {

        expect(person1.tryUpdate).to.be.a("function");
    })

    it ("tryUpdate(obj) should return true if update is successful and false if unsuccessful", function() {


    })

    it ('should have greetAll(obj) static method', function() {

        expect(Person.greetAll).to.be.a("function");
    })
})
