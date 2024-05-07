//! =============================== Big-O =======================================

// We can read code and determine the "rate of growth" through complexity analysis, then express the results of this analysis through big-O notation.

// The "O" in big-O stands for "Order," and reflects the general shape of the growth curve.

// Growth can be "linear," "quadratic," (curve) or "constant" (static)

//! Large (n)s

// Big-O notation is only concerned with very large values. When small values are in play, computers usually return a value from code almost instantly because of how fast they are.

function addTwoNums(num1, num2) {

    let total = 0;

    for (let i = 0; i < num1; i++) {
        total += 1;
    }

    for (let i = 0; i < num2; i++) {
        total += 1;
    }

    return total;
}

//^^ This code for adding two numbers together is extremely inefficient. Lets run a timing test and see what the result is:

startTime = Date.now();
addTwoNums(1234, 5678);
endTime = Date.now();

console.log(`Runtime: ${endTime - startTime}ms`); // After running this code several times, I see that runtime is always between 0ms and 1ms. The computer is so fast that this function returns faster than you can blink despite that it involved thousands of operations. You can increase the size of the numbers significantly without any percievable change in runtime until the numbers reach the billions. At that point, you begin to see the runtime change:

startTime2 = Date.now();
addTwoNums(1234567890, 1234567890);
endTime2 = Date.now();

console.log(`Runtime: ${endTime2 - startTime2}ms`); // consistently returns a runtime of between 2400-2600ms (about 2.5 seconds).

//^ The pattern that you can see here is true for most code. When (n)s are small, efficiency is usually irrelevant. But as (n)s grow, code inefficiency is magnified and can become problematic. The steeper the curve, the faster your code performance will degrade.

//! Ignoring Coefficients, Insignificant Factors

// A line is represented by the equation: //! y = mx + b

// "m" is the slope
// "b" is the y-intercept.

// "x" is the only factor that matters in big-O analysis. b (y-intercept) and m (slope) (and all coefficients) are treated as '1' in big-O notation. So the equation we're really using is: //! y = (1)x + (1)

// or //! y = x + 1 (linear slope)

// This is true for polynomials as well. The equation for a quadratic curve is //! y = ax^2 + bx + c.

// When we set the constant coefficients to 1, we reduce the equation to: //! y = x^2 + x + 1.

// For very large values of x, the x@ factor is the overwhelming contributor to run time so x + 1 is ignored.

// This leaves you with: //! y = x^2 for polynomials (quadratic curve)

//! Best Case, Worst Case, Average Case

//^ Sometimes the performance of an algorithm depends on factors beyond our control. Consider a function which searches for a targt value within an array:

function arraySearch(arr, target) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return true;
    }

    return false;
}

// This algorithm will perform differently according to the location of the target value. If the target value is the very first element of the array, it will take no time to execute. If the array is very large and the value is toward the end (or does not exist at all), then it may execute much more slowly as it iterates through the entire array.

// There are three separate notations for best-case, average case, and worst-case scenarios:

// Big-O (Omega) best case
// Big-O (Theta) average case
// Big-O worst case

// Most of the time, big-O refers to the most common (average) case.

// big-O analysis is a linguistic tool for describing code performance to other people, not a precise mathematical measurement or standard.

//! Linear Growth

// Consider this function which takes in a number (n) and returns the sum of all the positive integers less than it.

function addNums(n) {

    total = 0;

    for (let i = 1; i <= n; i++) {
        total += 1;
    }

    return total

};

// To determine how long this code takes to run, you can run it for different values of n and pot the results on a graph.

//! ============================ CLASS 5/7 =====================================

// function nestedComparison(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         for(let j = 0; j < arr.length; j++) {
//             console.log(arr[i] + arr[j])
//             // arr[i] + arr[j]
//         }
//     }
// }

// const arr1k = [];

// for (let i = 0; i < 1000; i++) {
//     arr1k[i] = Math.floor(Math.random() * 10 + 1)
// }

// const timeStart = Date.now();
// nestedComparison(arr1k);
// const timeEnd = Date.now();

// console.log(`time elapsed: ${timeEnd - timeStart}ms`)

//! ===========================================================================

// addNums(10)
// addNums(100)
// addNums(1000)
// addNums(10000)
// addNums(100000)
// addNums(1000000)
// addNums(10000000)
// addNums(100000000)
// addNums(1000000000)
// addNums(10000000000)

//^ We use complexity analysis to determine the number of operations that are performed relative to the input size and then describe the shape of the resulting growth curve. Again:

//^ (n) of operations VS input size
//^ resulting growth curve

// With respect to the function above (on line 92), the critical operation is the line, total += i.

// Each individual operation is fast, but the number of times it is executed is equal to the value of n. Doubling the value of n therefore doubles the number of addition operations that are executed, which doubles the runtime.

// This function can be said to have linear growth, or O(n) time complexity.

//^ Generally speaking, for loops which iterate through (n) elements will always have O(n) [O of n] time complexity.

//! Constant Growth

// For functions with constant growth, the runtime is independent of the input size. That is, the runtime remains the same no matter what the input size is. Consider this function:

function addFirstAndLast(nums) {

    const firstNum = nums(0);
    const lastNum = nums[nums.length - 1];

    return firstNum + lastNum;
}

//^^ Here we can obviously see that the number of elements in the input array is irrelevant because the code will ALWAYS take the very first element and the very last element and add them together. Whether we provide an input array with 2 elements, or 2 million, the code will still only ever add 2 of them together and then return the result.

// Thus, this function can be said to have constant growth, or O(1) [O of 1] time complexity. The number of operations is independent of the input size, which means the input size has nothing to do with the runtime. There is no curve here, which is why we use the term 'constant growth' to describe this function's time complexity. On a graph, it would just be a horizontal line. It has O of 1 time complexity.

// Consider one more function:

function printLetters() {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < letters.length; i++) {
        console.log(letters[i]);
    }
}

//^ This function COULD be described as having O of n time complexity because the number of operations could increase as we increase the size of the input. That is, doubling the input could double the (n) of operations which would result in a linear growth curve.

// However, in this specific function, the string that we're iterating through is actually fixed and is declared within the function itself and it takes no parameters. This means that the only 'input' that it will ever recieve is the string 'letters' as it is declared within the function. So this function has O of 1 time complexity, since the size of the input (and the corresponding number of operations) is fixed and can never change.

//! Quadratic Growth

function addManyNums(n) {

    let total = 0;

    for (let i = 0; i < n; i++) {
        total += addNums(i);
    }

    return total;
}

//^ This function takes a number (n) and adds the result of the addNums function to the total instead.

// This means that we call the addNums() function n times.

// Since addNums() is O(n) [has O of n time complexity {linear}], our addManyNums() function will have time complexity of n * n, or O(n^2). Or quadratic growth.

// If we time and plot the performance of this function for values 1k to 100k, we produce a quadratic curve (which becomes steeper as the input size increases).

// As input size increases, the number of operations performed icreases quadratically.

// This function is said to have O(n^2) or "O of n^2" time complexity.

//! Nested Loops vs. Constant Loops vs. Adjacent Loops

// Nested for loops often indicate that a function has O of n^2 time complexity.

function printPairSums(n) {
    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {
            console.log(`${i} + ${j} = ${i + j}`);
        }
    }
}

//^^ printPairSums(n) (above) contains a loop and also a nested loop, both of which run (n) times. This function has O(n^2) time complexity, or O of n^2 time complexity.

function printTripleSums(n) {

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n; j++) {

            for (let k = 0; k < n; k++) {
                console.log(`${i} + ${j} + ${k} = ${i + j + k}`);
            }
        }
    }
}

//^ printTripleSums(n) (above) has 1 loop and 2 nested loops, each of which runs (n) times. This has a time complexity of O(n^3), which is described as cubic growth. These functions are less common than those with quadratic growth (O of n^2). This trend or phenomenon can be generalized as "polynomial growth"

function printLettersNTimes(n) {
    const letters = "abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < letters.length; i++) {

        for (let j = 0; j < n; j++) {
            console.log(letters[i]);
        }
    }
}

//^ printLettersNTimes(n) may appear at first to be a function which could be described as having quadratic growth, or O of n^2 time complexity, due to the fact that there is a loop and also another, nested loop within the function. However, because the string 'letters' is declared within the function and does not change, the number of operations is always the same as the input size. Thus, this function actually has linear growth and O of n time complexity.

//* Nested loops have a time complexity of O(n^2)
//* Single loops have a time complexity of O(n)
//* Adjacent loops have a time complexity of O(n^2)

//! SUMMARY

// Time complexity
// How to express time complexity using big-O notation
// How to identify constant, linear, and quadratic growth
// How to reduce insignificant (constant) factors
// How to evaluate the overall coplexity of composite functions

//! ======================= Space Complexity ============================

// Space and time complexity both describe the performance of code in relation to the input size and both are expressed using big-O notation.

// Space complexity describes how much memory a function requires.

//! Constant Space Complexity
