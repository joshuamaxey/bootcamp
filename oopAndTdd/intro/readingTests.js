//! Reading Tests

// No matter what kind of tests you are necountering, the most important thing about a test is that it is radable and understandable.

// Good tests use descriptive strings to enumerate what they are testing as well as how they are testing it.

// We'll be diving more into the actual syntax of writing tests soon.

// For now:

describe("avgValue()", function() {
    it ("should return the average of an array of numbers", function() {
        assert.equal(avgValue([10, 20]), 15);
    });
});

// The outer function includes a string with the name of a function, "avgValue()", which is the function we will be testing

// Next, we see a description string, "should return the average of an array of numbers."

// So, syntax aside, we can understand that we are testing the avgValue() function and we can see how it is being tested ("should return the average of an array of numbers")

// When your tests are well-written, it should be clear what is being tested.

// This is also a key aspect of reading tests: Parsing the descriptions to understand what is being tested.
