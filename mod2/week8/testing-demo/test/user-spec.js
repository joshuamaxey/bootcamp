const { expect } = require('chai');

const User = require("../class/user");
// import User from '../class/user'

describe ('User class', function () {
    it ('should create sucessfully', function () {
        let user = new User();
        expect(user).to.exist;
    });

    it('Should set username on creation', function () {
        let user = new User("john_doe");
        expect(user.userName).to.equal("john_doe");
    })
});

// 'describe' is a group of tests for the 'User' class

// 'it' tests a single spec, and checks if a User can be created successfully. It does this by reating a new user.

// 'expect' is an assertion that checks to see if the new user exists.

//^ 'describe' and 'it' come from the testing framework ( Mocha ), while 'expect' comes from the assertion library ( Chai ). Note that Mocha functions literally FRAME the test assertions.

// Now when we run 'Mocha,' we see that our user class passes the test (that is, it successfully creates instances of the User class).

describe ('User class', function () {
    let user;

    beforeEach(() => {
        user = new User("john_doe");
    });

    it('should create successfully', function () {
        expect(user).to.exist;
    });

    it('should set username on creation', function () {
        expect(user.userName).to.equal("john_doe");
    });
});

//^ The first set of tests does not use hooks, the second does. I'm not exactly sure what the distinction is. They say that hooks 'clean up repetition' and 'clean up after each test' but I don't know what that means at the moment. Maybe that it elminates the need to actually create a class instance (john_doe)? Or removes the instance after testing? Hm.
