//! ================== ARRAYS AND STACKS ========================

//^ 1. Compare and contrast properties and operations of arrays, linked lists, and hash tables

//^ 2. Understand the mechanics and complexity associated with adding and removing elements from an array

//^ 3. Solve the memory equation to retrieve data from an array

//^ 4. Understand the functionality and importance of the resizing property for dynamic arrays

//^ 5. Implement a stack using an array

//^ 6. Select an array or stack when they are the appropriate tool for solving a problem

//! ================= INTRO TO ARRAYS ==========================

// We have used arrays to store and access lists of data
// We have used array methods like array.push() and array.unshift() to add values to an array
// We have used square bracket notation to read and write array values by index
// We have used for loop to iterate through the values of arrays

// Arrays are the MOST TIME AND SPACE EFFICIENT way to store data.

//! What Is An Array?

//^ An array is a sequence of elements of the same type stored in a continguous block of memory.

//* I'm confused about "the same type" part of the above definition. Is the following not an array?

[1, 2, false, "string"]

//* Because these elements are not of the same type. Save this question for class tomorrow.

//! Arrays in Memory

// Lets create an array containing four 32-bit integers //*(What does '32-bit' mean in this context?)

let arr = [255, 256, 43690, 1431655765]

// How is this array represented in our computer's memory?

// The term "32-bit" tells us that each of these integers, regardless of their size, requires four 'bytes' of storage space.

// 255 takes up the same amount of space as 1431655765.

// Therefore we know that storing these four integers requires 16 bytes of memory.

// An array like this, [0, 0, 0, 0] also requires 16 bytes. Again, the size of the integers is irrelevant to the space required to store them.

//^ When the variable declaration above runs, it requests 16 bytes of memory from the operating system.

// If the OS approves the request, it returns a memory address with read/write access to the 16 bytes (beginning at that address).

//
