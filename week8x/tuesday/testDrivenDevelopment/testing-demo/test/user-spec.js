// const { expect } = require('chai')

const { chai } = import('chai');

//^ Notice that here, we threw an error because the 'require' keyword is no longer supported for the chai import. The incorrect code is commented out above the correct import, which is on line 3 above.

const User = require('../class/user')

// Mocha is a TEST FRAMEWORK that specializes in running tests and presenting them in an organized, user-friendly way

// Chai is an ASSERTION LIBRARY that performs the actual test comparisons.

// First, we will test the basic functionality of the User class.

describe ('User class', function() {

    it ('should create successfully', function() {

        let user = new User();

        expect(user).to.exist;
    });
})

//^ We should be able to understand what this test is doing even if we don't know any Mocha syntax.

// 'describe' is a group of tests for the User class

// 'it' tests a single spec by checking if a User can be created successfully. It does this by creating a new User

// 'expect' is an ASSERTION that checks to see if the new user exists

// 'describe' and 'it' come from the testing framework, Mocha.

// 'expect' comes from the assertion library, Chai

// The mocha functions FRAME the test asertions

// Now, run 'mocha' in the terminal.

//! This shit doesn't work. Fuck it.
