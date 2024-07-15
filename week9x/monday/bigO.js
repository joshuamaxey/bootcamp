//! Intro to Big-O

// We can read code and determine its relative efficiency through complexity analysis.

// We can express the time and space complexity of our code using big-O notation.

//! Big-O

// The O in big-O stands for Order, which refers to the fact that it measures the efficiency of code in a relative way.

// Big-O notation isn't concerned with values.

// Rather, it describes the degree to which the time and space complexity of our code increases as we increase the size of our inputs.

// big-O notation plots the growth curve that occurs in our time and space complexities as we increase the size of our inputs.

//^ Complexity analysis measures the NUMBER OF OPERATIONS THAT ARE PERFORMED relative to the INPUT SIZE, then DESCRIBES THE SHAPE OF THE RESULTING GROWTH CURVE.

//! Large Ns

// big-O notation is primarily concerned with very large values. Computers are so fast that most code returns almost instantly, even if it is very inefficient, when we are working with small values.

function addTwoNums(num1, num2) {

    let total = 0;

    for (let i = 0; i < num1; i++) {
        total += 1
    }

    for (let i = 0; i < num2; i++) {
        total += 1;
    }

    return total;
};

//^ This is an extremely inefficient way to add two numbers together. That being said, lets run it with relatively small values and use timing benchmarks to see exactly how quickly this function runs:

let startTime = Date.now();

addTwoNums(1234, 5678); // thousands

let endTime = Date.now();

console.log(`Runtime: ${endTime - startTime}ms`); // Runtime: 1ms
// Runtime: 0ms
// Runtime: 0ms
// Runtime: 1ms

// I ran this function 4 times. Two of them took 1 ms (which is 1/1000 of a second), the other two took less than 1ms and were closer to 0ms (literally instant) than they were to 1ms.

// Here we can see that the computer can run this extremely inefficient code, even when we input arguments in the thousands, in virtually no time at all. Adding these numbers requires over 6000 operations.

//^ Now lets try some larger values:

startTime = Date.now();

addTwoNums(1234567890, 1234567890); // billions

endTime = Date.now();

console.log(`Runtime: ${endTime - startTime}ms`); // Runtime: 2651ms (roughly 2.5 seconds)
// Runtime: 2643ms (roughly 2.5 seconds)

//^ This is the point: Usually when your (n)s are very small, code efficiency is irrelevant. But as our (n)s grow, it becomes more and more important. In the real world, companies like Facebook, Google, and Amazon are dealing with huge inputs and they use big-O analysis to determine the efficiency of their code.

//! Ignoring Coefficients, Insignificant Factors

// All constant coefficients are reduced to 1 in big-O notation.

//^ There are three primary big-O complexities:

    // 1. O(1), constant
    // 2. O(n), linear
    // 3. O(n^2), quadratic

//! Best Case, Worst Case, Average Case

// Most of the time, big-O analysis refers to the 'average' case runtime of our code.

//! Linear Growth: O(n)

// When a function has a linear time complexity, it means that the NUMBER OF OPERATIONS performed increases EQUIVALENTLY TO THE INPUT SIZE.

// That is, an input of 10 requires 10 operations. An input size of 100 requires 100 operations. In this way, doubling the value of (n) will double the amount of operations performed.

// A common example of a function with a linear time complexity is a for loop.

function addNums(n) {

    total = 0;

    for (let i = 1; i <= n; i++) {

        total += i;
    }

    return total;
}

//^ In the addNums() function above, the number of operations performed is equivalent to the input size. If (n) = 1000000, then a million operations are performed. If the input is 100, then one hundred operations are performed. Thus, it has a linear time complexity because the runtime increases linear to the input size.

//! Constant Growth: O(1)

// When a function has constant time complexity, that means that runtime is independent of intput size. Whether the input is very small or very large, the function takes the same amount of time to run.

// Consider the following function which takes in an array of numbers, adds the first and last numbers of the array together, then returns the sum.

function addFirstAndLast(nums) {

    const first = nums[0]; // first element in the array

    const last = nums[nums.length - 1]; // last element in the array

    sum = first + last; // Add the first and last numbers

    return sum; // return the sum
}

//^ This function will perform the same number of operations (1) regardless of the input size. If the array is 5 elements long, it takes the first and last numbers and sums them. If it is 3000000 elements long, it takes the first and last numbers and sums them. Thus the growth curve is 'constant' (no growth regardless of input size).

// Most arithmetic operations, logical operations, and variable initailizations/assignments run in constant time. Additionally, functions without an input typically also run in constant time (even with loops, etc):

function printLetters() {

    const letters = "abcdefghijklmnopqrstuvwxyz"

    for (let i = 0; i < letters.length; i++) {

        let letter = letters[i];

        console.log(letter);
    }
}

//^ This printLetters() function has constant time complexity even though it includes a for() loop because the 'letters' array is a fixed length and there is no input. So it will always have close to the same runtime.

//! Quadratic growth.

// Consider the following function, which calls the addNums function:

function addManyNums(n) {

    let total = 0;

    for (let i = 0; i < n; i++) {

        total += addNums(i); // calls the addNums function, which also contains a for() loop of its own
    }

    return total;
}

//^ The function above calls another for loop upon every iteration of its own for loop, which means that it does (n) things (n) times for an overall time complexity of n * n, or O(n^2). This is quadratic complexity.

// Nested loops (such as the addManyNums() function above) typically have quadratic time complexities. So do many recursive functions.

//! Nested Loops vs. Constant Loops vs. Adjacent Loops

// Nested loops are typically O(n^2)

// Multiple nested loops can result in polynomial growth, O(n^x), which is unsual and extremely inefficient

// Adjacent loops run in O(n) time

// Functions with constant inputs or no input typically run in constant time O(1)

// test commit
