// const { expect } = require('chai')

// const { expect } = import('chai');

//^ Notice that here, we threw an error because the 'require' keyword is no longer supported for the chai import. The incorrect code is commented out above the correct import, which is on line 3 above.

let expect;

(async () => {
  const chai = await import('chai');
  expect = chai.expect;
})();

//^ Turns out that dynamic import (lines 9 - 12) is the ONLY solution to this problem that doesn't require me to change the version of chai/mocha or switch all of my syntax in all of my notes to ES6.

const User = require('../class/user')

// Mocha is a TEST FRAMEWORK that specializes in running tests and presenting them in an organized, user-friendly way

// Chai is an ASSERTION LIBRARY that performs the actual test comparisons.

// First, we will test the basic functionality of the User class.

describe ('User class', function() {

    it ('should create successfully', function() {

        let user = new User();

        expect(user).to.exist;
    });

    it ('should set username on creation', function() {

        let user = new User("john_doe");

        expect(user.username).to.equal("john_doe");
    })
})

//^ We should be able to understand what this test is doing even if we don't know any Mocha syntax.

// 'describe' is a group of tests for the User class

// 'it' tests a single spec by checking if a User can be created successfully. It does this by creating a new User

// 'expect' is an ASSERTION that checks to see if the new user exists

// 'describe' and 'it' come from the testing framework, Mocha.

// 'expect' comes from the assertion library, Chai

// The mocha functions FRAME the test asertions

// Now, run 'mocha' in the terminal.

//! Part Four: Specifying Functionality with TEsts

// According to our project, all users should require a username upon creation. We acn specify this in the test specs using a new test (see line 33):

// So now lets return to the blank user class and implement a constructor that will enable us to pass this test.

// Now that we've implemented the constructor function within our previously blank User class, we're passing both test specs.

//! DRYing Your Tests with Mocha Hooks

//^ When we want to test a class, like our user class, we may need to reate new instances of that class before each test runs. We can clean up this repettion using Mocha Hooks (before or beforeEach)

describe('User class', function() {

    let user;

    this.beforeEach(() => {
        user = new User("john_doe");
    });

    it('should create successfully', function() {
        expect(user).to.exist;
    });

    it('should set username on creation', function() {
        expect(user.username).to.equal('john_doe');
    });
});

//^ By using hooks, we eliminate the need to create numerous instances of a certain class.

//! Summary

// Learned how to use the MOCHA testing framework and the CHAI assertion library to write unit tests for a class.
