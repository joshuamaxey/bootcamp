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

    printArray(arr, i + 1); //^ Here is the tricky part. It may be the case (like it is here) that our RECURSIVE CASE and our RECURSIVE STEP occur together in a single expression. Here, the function calls itself. Thi is the RECURSIVE CASE. At the same time, we call this function on itself at the NEXT index of the array. This change (i + 1) is the RECURSIVE STEP that moves us closer to the BASE CASE.
}

printArray([1, 2, 3, 4, 5]); // Now we can see that when we call this function, we get the same outcome whether we use the for loop OR recursion.
