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
