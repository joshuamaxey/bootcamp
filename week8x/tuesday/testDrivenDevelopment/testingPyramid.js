//! All About Testing

// Developers can run test code against their application code to determine whether or not their code works as intended.

// As developers, we need to undrstand how and why we test our code as well as how to read automated tests without requiring an understanding of the syntax.

//! Why Do We Test?

//^ 1. Tests tell us whether or not our code works

//^ 2. Tests increase the flexibility of our code

    // Tests allow us to refactor with confidence because we know that if anything breaks, our test spects will let us know. We can know that as long as we pass the specs written for the code we're refactoring, then it does what it's supposed to do.

    // Tests also give us confidence that other developers can modify our code in the future without breaking anything important.

//^ 3. Tests make it easier to collaborate with less interaction

    // Direct collaboration is expensive, test specs allow developers to be confident that our code works correctly without needing to directly talk to one another. The specs themselves are a form of communication between developers.

//^ 4. Tests serve as documentation

    // Well-written tests serve as documentation for the codebase.

//! What do we test?

//^ First and foremost, we test the public interface

    // The pubic interface is made of the functions that the outside world will rely on and be able to access. We want to make sure that all of these pieces work as intended and expected.

//^ The Testing Pyramid is made of three levels of testing: Unit Testing, Integration Testing, and End-to-End Testing


//             -------
//               E2E
//         ----------------
//            Integration
//     ------------------------
//              Unit
// --------------------------------

//^ Unit tests are the smallest unit of testing.

    // Unit tests isolate and test each individual piece of functionality. They are the fastest tests to write and run.

//^ Integration tests focus on testing interactions between pieces of our application

    // Integration tests make sure that the units we write work coherently together.

//^ End-to-End Tests are the highest level of testing

    // E2E tests will test the entire applicaiton. They test the actual user experience and are the slowest tests to write and run.

//! Summary

// Learned the why, what, and how of testing
