//! Recursion tips

//^ There are THREE steps that define a recursive function:

//^ 1. The function CALLS itself
//^ 2 The function has an END STATE (base case)
//^ 3. The function MOVES CLOSER to the base case with each call.

// Also recall: There is a BASE CASE, a RECURSIVE CASE, and a RECURSIVE STEP.

//^ The BASE CASE is the code that stops the function from runnin. Usually returns a value.
//^ The RECURSIVE CASE is the code that calls the function within itself. Usually loops until the function achieves the base case.
//^ The RECURSIVE STEP is the code that actually advances the recursive case TOWARD the base case.

// Most people understand that a recursive function needs a BASE CASE and a RECURSIVE CASE. The key thing to remember is the RECURSIVE STEP, which moves the function's current state one step closer to the BASE CASE every time that the function calls itself. //! A function is ONLY recursive if it moves toward the base case. Without the recursive step, the function becomes an infinite loop that leads to a STACK OVERFLOW.

// Recursion is very similar to looping except that a function calls itself, instead of using a loop, to accomplish its purpose.

//& Let's write a recursive function to print out the contents of an array.

// Since we know that we want to use recursion to accomplish this task, we need to identify the three steps that define a recursive function (call itself, write the base case, then write the recursive step).

function printArray(arr, i = 0) { //! Notice that i = 0 is a DEFAULT PARAMETER, which I'm not familiar with (??)

    // //The first thing I'm gonna do is use a for loop because that's what I'm familiar with.
    // for (let i = 0; i < arr.length; i++) { //use a for loop to iterate through the array
    //     console.log(arr[i]); //take the element located at the current inde of the array and log it to the console.
    // }

    if (i >= arr.length) return; //this is our BASE CASE. Once our function has reached the last index of the array, we return and the funtion stop.

    console.log(arr[i]); // Until we reach the base case, this function will console log the element located at the current index of the array.

    printArray(arr, i + 1); //^ Here is the tricky part. It may be the case (like it is here) that our RECURSIVE CASE and our RECURSIVE STEP occur together in a single expression. Here, the function calls itself. This is the RECURSIVE CASE. At the same time, we call this function on itself at the NEXT index of the array. This change (i + 1) is the RECURSIVE STEP that moves us closer to the BASE CASE.
}

printArray([1, 2, 3, 4, 5]); // Now we can see that when we call this function, we get the same outcome whether we use the for loop OR recursion.

//^ I am noticing a pattern when it comes to recursion. It appears that this is often the structure of these simple recursive functions:

//^ 1. base case (a conditional with a return that stops the function);
//^ 2. expression (code that performs a specific task [such as logging to the console, performing mathematical operations, etc])
//^ 3. recursive case AND step (function calls itself with incremented/updated arguments)

//* Additionally, notice that ITERATION and RECURSION are both methods of accomplishing the same thing. Any function that can be solved recursively can also be solved iterably. The above printArray function, for instance, is shorter and more readable when we use a for loop. In the real world, I would probably use iteration for this particular purpose because it requires only two lines of code and is more readable.

//& Now lets try a more complicated example: A function multiply(num1, num2) that returns the product of num1 and num2 WITHOUT using *, for, or while.

//^ The first thing we do is understand the problem. Multiplying two numbers is the same thing as adding num1 to itself num2 times. (3 * 5) === (3 + 3 + 3 + 3 + 3);

//! Whenever you are writing a recursive function. start with the BASE CASE. Then the expression. Then the RECURSIVE CASE AND STEP. Remember that we are effectively that num1 is adding itsef to itself num2 times.

function multiply(num1, num2) {

    // return num1 * num2; // Here is how I would solve this problem without recursion.

    if (num2 === 0) return 0; // Any number multiplied by 0 is 0. So if num2 is 0, return 0. This is our BASE CASE.

    if (num2 === 1) return num1; //Any number * 1 is itself. So if num2 = 1, we return num1.
    if (num2 === 2) return num1 + num1; //num1 * 2 = num1 + num1.
    if (num2 === 3) return num1 + num1 + num1; //num1 * 3 = num1 + num1 + num1.

    // Here we can see that every time num2 increases by 1, we add ANOTHER num1 to the total. SO you can think of it as num1 + the previous calculation. //^ Note that the if statements above are the "expression" part of the recursive function.

    return num1 + multiply(num1, num2 - 1); // THIS is the RECURSIVE CASE and STEP.
}

console.log(multiply(5, 5)); // 25

//& Now lets refactor this code. With our recursive step, the only operations we need to EXPLICITLY code for are the those when num2 = 0 and num2 = 1:

function multiply2(num1, num2) {

    if (num2 === 0) return 0;
    if (num2 === 1) return num1;

    return num1 + multiply2(num1, num2 - 1); // USE THE DEBUGGER AND WATCH HOW THE VARIABLES CHANGE. WE can see that the function calls itself seven times (until we reach the base case), then pops each of the operations off the CALL STACK one at a time, adding 3 to itself each pop until we reach the desired outcome (21). Thus we have accomplished our task using ONLY addition and conditional statements by recursion, no for/while loops OR "*" necessary.
}

console.log(multiply2(3, 7)); // 21

//& Let's refactor this code ONE more time! If we realize that (num2 === 1) return num1 IS THE SAME AS if (num2 ===1) return 0 + num1, we see that our second conditional is actualy unnecessary because it follows the recursive pattern and will be covered by our "return num1 + multiply2(num1, num2 - 1)" pattern.

function multiply3(num1, num2) {

    if (num2 === 0) return 0; // BASE CASE

    return num1 + multiply3(num1, num2 - 1); //RECURSIVE CASE and RECURSIVE STEP
};

console.log(multiply3(6, 5)); // 30

//^ Run the debugger on this function too. Every time that we recursively call this function, that function call is added to the call stack AND the value of num2 decreases by 1. One we reach the BASE CASE, the function returns 0 and then JavaScript begins popping those function calls off of the callstack ONE BY ONE, adding num1 to itself with each pop until the callstack is empty. Once there is nothing left in the call stack, the function returns the value (which is the multiplied value that we want).

//& Now that we've refactored our code and have a solid recursive function for mutliplying numbers without using any loops or the multiplication operator, lets consider an edge case: What if num2 is negative?

// If num2 is negative, we break the function (as it is written above). But we can adjust our recursive step to consider fix this problem. Since the goal of the recursive step (in THIS function) is ALWAYS to bring us closer to 0, we can INCREASE num2 by 1 each time instead of DECREASING it by 1 IF num2 is negative:

function multiply4(num1, num2) {

    if (num2 === 0) return 0; // Our base case remains the same

    if (num2 > 0) {
        return num1 + multiply4(num1, num2 - 1); // We add a conditional that includes our CURRENT RECURSIVE CASE and STEP.
    }

    if (num2 < 0) {
        return num1 + multiply4(num1, num2 + 1); // WE change our recursive step here so that if num2 is negative, we ADD one each step in order to come closer to our base case (num2 ===0) instead of SUBTRACTING.
    }

}

console.log(multiply4(4, -8)) // 32;
