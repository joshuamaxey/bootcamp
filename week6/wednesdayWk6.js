//! Async Quiz

//^ 1.

// function boo() {
//     console.log("boop!");
// };

// console.log('fizz');
// setTimeout(boo, 1000);
// console.log('buzz');

// These will print in this order: //! fizz, buzz, boop!

//^ 2.

// console.log('fizz');
// setTimeout(boo, 0);
// console.log('buzz');

// These will print in this order: fizz, buzz, boop! The reason is because setting the 'time' to 0 in setTimeout does NOT make the setTimeout method synchronous. It is always asynchronous because the 'set time' is not a guaranteed time, it is the MINIMUM required time that the program must wait until executing the function specified within the method. So even when we set the time to 0, the setTimeout method remains asynchronous and will take longer to execute than synchronous tasks (such as the console.logs). //! fizz, buzz, boop!

//^ 3.

// const far = () => {
//     console.log('farm!');
// };

// const boo = () => {
//     console.log('boop!');
//     far();
// };

// console.log('fizz');
// setTimeout(boo, 1000);
// console.log('buzz');

// These will print in this order: fizz, buzz, boop!, farm!. Fizz and buzz print first because they are synchronous, and are executed immediately. After the 1000ms (1s) has transpired, the setTimeout will execute "boo2". At that point, boo2 will be added to the call stack and "boop" will be printed to the console. After that, it will call 'far' which will then be added to the console. At that point, 'farm!' will be printed to the console. Then far will be popped from the call stack, followed by boo2. //! fizz, buzz, boop!, farm!

//^ 4.

// const far = () => {
//     console.log('farm!');
// };

// function boo() {
//     console.log('boop!');
//     setTimeout(far, 1000);
//     console.log('boop!');
// }

// setTimeout(boo, 1000);
// console.log('buzz');

// First, 'buzz' will print to the console because it is synchronous. After the 1000ms expires, 'boo' will be invoked. At that point, 'boop!' will be logged to the console. then 'boop!' will be logged again because it is synchronous. After the SECOND 1000ms expires, far will be invoked and 'farm!' will be printed to the console. Then far will be popped from the call stack, followed by boo. The over all order is://! buzz, boop!, boop!, farm!

//^ 5.

// const asyncy = cb => {
//     setTimeout(cb, 1000);
//     console.log("async");
// }

// const greet = () => {
//     console.log("hello!");
// }

// asyncy(greet);

// Since "asyncy" is called, it will print "async" synchronously first. After the timeout of 1000ms has transpired, the cb will invoked and "hello!" will be printed to the console. So the order is: //! async, hello!

//! User Input with Readline

//^ Write a program that accepts user input using Node's 'readline' module
//^ utilize callback chaining to guarantee relative order of execution amidst multiple asynchronous functions

//! Node's Readline Module.

//^ a MODULE is just a package of JavaScript code that provides some useful functionality. For example, 'mocha' is a module that we have been using frequently to test our code! Readline already comes bundled with Node. No additional installations are necessary. We just need to import the module into our program.

// const readline = require("readline");  // THIS imports the readline module into our file.

// // Next, we create an infterface wehre we can talk to the user.

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Don't worry aobut the details of what 'createInterface' does. Just know that it allows us to read and print information from the terminal.

// rl.question("What's up, doc? ", answer => {
//     console.log("response: " + answer);
//     rl.close();
//     console.log("Done!");
// });

// Notice that the rl.quesion(question, callback) method accepts TWO arguments: a question, and a callback. When the user types a response an hits enter, the callback is executed with their response as an argument.
// ALSO, notice that the rl.close() method is invoked after the question is answered in order to close the interface. In general, you always want to close the interface after you are done asking all of your questions. NOTE THAT ALL OF THIS INFO IS PROVIDED IN THE DOCS.

// Now, notice that the rl.question(question, callback) method is ASYNCHRONOUS! That being said, watch waht happens when we print a statement after we call rl.question()...

// console.log("DONE!");

// As expected, the synchronous console.log("DONE!") prints "DONE!" before we have a chance to answer the question, since the rl.question method is asynchronous.

//! Callback chaining

// In the code above, we saw that the asynchronous behavior of the rl.question(question, callback) method can lead to issues if we want to perform a command directly AFTER the user has entered their response. The fix for this is very simple: //^ Just put the command you want to perform following the user's answer at the END of the callback. Like this... (see the rl.question above)

// In general, when we want a command to occur directly AFTER a callback is invoked asynchronously, we'll have to place that command INSIDE of the callback. This is a simple but effective method of ordering commands.

// For instance, imagine that we want to ask the user two questions in succession. That is, we want to ask question one, get their response to that question, then ask another question directly after, and finally get their response to the second question. If you try to code another "rl.question(question, cb)", your code will break. //! When you run it, you will find that the second question is never asked.

// This is because the rl.question(question, cb) method is ASYNCHRONOUS. specifically, the first question will occur and before the user can enter their response, the second call occurs as well while the program is still trying to finish the first question. //^ Just like when we want to print something directly after the user responds to question one, we'll have to ask the second question WITHIN the response callback for question one. like this:

// const { Console } = require("console");
// const readline = require("readline");  // THIS imports the readline module into our file.

// // Next, we create an infterface wehre we can talk to the user.

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Don't worry aobut the details of what 'createInterface' does. Just know that it allows us to read and print information from the terminal.

// rl.question("What's up, doc? ", answer => {
//     console.log(answer + " is up.");

//     rl.question("What's down, clown? ", secondAnswer => {
//         console.log(secondAnswer + " is down.");
//         rl.close();
//         console.log("Ok.")
//     })

// });

//^ So what if we want to ask ANOTHER question following the second? Lets comment this code ^^ out and add another one below...

// const { Console } = require("console");
// const readline = require("readline");  // THIS imports the readline module into our file.

// // Next, we create an infterface wehre we can talk to the user.

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// // Don't worry aobut the details of what 'createInterface' does. Just know that it allows us to read and print information from the terminal.

rl.question("What's up, doc? ", answer => {
    console.log(answer + " is up.");

    rl.question("What's down, clown? ", secondAnswer => {
        console.log(secondAnswer + " is down.");

        rl.question("What's left, Jeff? ", thirdAnswer => {
            console.log(thirdAnswer + " is left.");
            rl.close;
            console.log("Ok.")
        })

    })

});

// This ^^^ Is referred to as //! CALLBACK HELL in the JavaScript community. There is a much better way to refactor this kind of code for better readability.

// We do this by using NAMED FUNCTIONS instead of passing anonymous functions. ONE more time, let's comment out the code above and try again. Here's an example:

const readline = require("readline");  // THIS imports the readline module into our file.

// Next, we create an infterface wehre we can talk to the user.

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What's up, doc? ", handleResponseOne);

function handleResponseOne(firstAnswer) {
    console.log(firstAnswer + " is up.");
    rl.question("What's down, clown? ", handleResponseTwo);
};

function handleResponseTwo(secondAnswer) {
    console.log(secondAnswer + " is down.");
    rl.question("what's left, Jeff? ", handleResponseThree);
};

function handleResponseThree(thirdAnswer) {
    console.log(thirdAnswer + " is left.");
    console.log("Ok.")
    rl.close();
};

//^ THIS is CALLBACK CHAINING. As a general rule, use named functions like this for any callback chain longer than two. Also note that callback chaining is used to serialize multiple asynchronous functions, which doesn't limit it to the rl.question(question, callback) method only. I'm gonna commint this ^^^ out for the next section.
