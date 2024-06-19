//! Timing Your Code

//^ There are two ways to time your code in JavaScript:

    // 1. Date.now()
    // 2. console.time()

//& console.time is a built-in function for measuring how long an operation takes.

    // Type 'node' into your console to opern a node terminal

    // type "console.time("timer 1") into the console
    // Now type "console.timeLog("timer 1") into the console. This will tell you how long timer 1 has been running
    // Then type "console.timeEnd("timer 1") into the console. This will end the timer and tell you how long it ran for.

function addNums(n) {
    total = 0;

    for (let i = 1; i <= n; i++) {

        total += i;
    }

    return total;
}

//^ Now lets see how long it takes to add up all numbers from one to one million

console.time("addNums");

addNums(1000000);

console.timeEnd("addNums"); // addNums: 17.779ms

//^ This method of timing is convenient for quick tests, but its difficult to chart on a graph.

//& Date.now() represents the number of milliseconds since the morning of January 1st, 1970 (Unix Epoch).

let startTime = Date.now()

addNums(1000000);

let endTime = Date.now();

console.log(`Runtime: ${endTime - startTime}ms`); // Runtime: 16ms

//! Visualizing Code Performance

let increment = 1000000

for (let n = increment; n <= 10 * increment; n += increment) {

    startTime = Date.now();

    addNums(n);

    endTime = Date.now();

    console.log(`${endTime - startTime}`);
}

//^ The code above will run addNums() 10 times in increments of 1 million. It will prent the time that it takes to run addNums() with an (n) of 1 million, then 2 million, etc until 10 million. Then we can plot these numbers on a graph to see the growth curve of our time complexity as our input increases in value.

// 28
// 35
// 46
// 63
// 72
// 80
// 103
// 117
// 117
// 132

//^ When we plot the points above on a graph, we see that our growth cure is close to linear, which means that our function probably has a time complexity of O(n).
