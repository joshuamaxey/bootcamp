// One way of measuring your code's efficiency is to run a function and then record how long it takes for that function to complete. You can use the results of these tests to chart the relative performance of your functions.

//! Computer Safety

// It's important to know the power and limitations of JavaScript as well as your computer's ability to execute JavaScript code. To do this, we run experiments and collect data to build our knowledge.

//! ( ctrl + c ) to End Code Execution (or ctrl + d, or ".exit")

// If your code is running too long (infinite loop, excessively large integers, etc), you may need to end execution before its finished running. We do this with //! CTRL + C

// Open a node console with the command //^ node

// In your node console, try running a for loop from 1 to 1 trillion:

//^ for (let n = 0; n <= 1000000000000; n++) {};

// In the case that ctrl + c doesn't work for some reason, you should be able to force-quit the terminal.

//! Memory Crashes

// Computers are good at isolating processes, it is difficult to truly crash your computer from writing code.

// Try opening Node and adding 1 trillion integers to an array:

//^ let arr = []; for (let n = 0; n <= 1000000000000000; n++) { arr.push(n) };

// When you recieve FATAL ERROR (or something like that), it just means that your program ran out of memory and the computer killed the process. There is no harm to your computer.

//! DANGER: Modifying your filesystem

// You CAN actually damage your computer by modifying your filesystem.

// You can cause damage by creating, deleting, or modifying important files on your hard drive.

// You can also cause damage by downoading malicious software from the internet.

//^ Always be aware of what you download. Don't compy/paste blindly from Stack Overflow without understanding exactly what you're doing. Be very careful when deleting system files, especially from the command line.

//! Timing Your Code

function addNums(n) {

    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += i;
    }

    return total;
}

//^ The amount of time required to run the addNums(n) function above depends on the value of (n).

// There are two JavaScript methods that allow us to measure that time:

//^ console.time()
//^ Date.now()

console.time("timer1")

console.timeLog("timer1") //.108ms

console.timeEnd("timer1") //15.728ms

// Lets try it on our addNums function to see how long it takes to add up all numbers from 1 to 1,000,000

console.time("addNums")
addNums(1000000);
console.timeEnd("addNums") //5.285ms

// So it took a little over 5ms to add up all numbers from 1 to 1,000,000.

//^ this console.time method is convenient for quick tests, the label and the time unit at the end make the data difficult to chart on a graph. Date.now() provides another way to track timing data which can be easily charted in Google Sheets.

// Type Date.now() into your terminal and you will receive a large integer.

// This number is the number of milliseconds (1/1000th of a second) since the orning of January 1st, 1970.

// That point in time is called the Unix Epoch

console.log(Date.now()); //1715132920233

// You can use this function to calculate the runtime of your code by storing the start time, running your code, then taking the difference between the end and start times.

//Lets use this Date.now() method to see how many milliseconds it takes to add up all numbers from one to one million.

startTime = Date.now();
addNums(1000000);
endTime = Date.now();

console.log(startTime); // 1715133160532
console.log(endTime); // 1715133160534

console.log(endTime - startTime); // 2

// So it took 2 milliseconds for us to add up every number from 1 to 1000000.

//! Visualizing Performance

// You can visualize your code's performance on a graph using Google Sheets.

let increment = 1000000

for (let n = increment; n <= 10 * increment; n += increment) {

    startTime = Date.now();
    addNums(n);
    endTime = Date.now();

    console.log(`${endTime - startTime}`);
}

//^ The code above will run addNums(n) ten times, in increments of 1 million. Running this code wil print out the time, in milliseconds, that it takes to add nums 1 through 1 million, 2 million, 3 million, etc.

// The resulting curve is hardly linear, but I think it does (basically) represent linear, or O of n, growth. My computer must be much faster (but less consistent in its speed?) than the computer that was used by the person who wrote this reading. The numbers are all much smaller, but also much less consistent.

//! Summary

// How to measure your code's performance using console.time(), Date.now(), and console.log().
// How to chart the performance of your code in Google Sheets.
