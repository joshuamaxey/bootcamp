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

//& Because these elements are not of the same type. Save this question for class tomorrow.

//! Arrays in Memory

// Lets create an array containing four 32-bit integers //*(What does '32-bit' mean in this context?)

let arr = [255, 256, 43690, 1431655765]

// How is this array represented in our computer's memory?

// The term "32-bit" tells us that each of these integers, regardless of their size, requires four 'bytes' of storage space.

// 255 takes up the same amount of space as 1431655765.

// Therefore we know that storing these four integers requires 16 bytes of memory.

// An array like this, [0, 0, 0, 0] also requires 16 bytes. Again, the size of the integers is irrelevant to the space required to store them.

//^ When the variable declaration above runs, it requests 16 bytes of memory from the operating system.

// If the OS approves the request, it returns a memory address with read/write access to the 16 bytes (beginning at that address). //^ In this case, we start at memory address 104.

//* 104      105      106      107
//* 00000000 00000000 00000000 11111111

//* 108      109      110      111
//* 00000000 00000000 00000001 00000000

//* 112      113      114      115
//* 00000000 00000000 10101010 10101010

//* 116      117      118      119
//* 01010101 01010101 01010101 01010101

//^^ In this diagram, the numbers are the memory address (starting from the 104th byte of memory) and the 0s are the bits in each memory cell.

// Since memory is a binary sequence, values must be translated from base-10 to base-2 before they can be stored.

//*        255 ---> 00000000 00000000 00000000 11111111
//*        256 ---> 00000000 00000000 00000001 00000000
//*      43690 ---> 00000000 00000000 10101010 10101010
//* 1431655765 ---> 01010101 01010101 01010101 01010101

//^ Here you can see that each number is represented by a series of 1s and 0s. The number located at the third index of the array (43690) is represented by this series of 1s and 0s:

// 43690: //^ 00000000 00000000 10101010 10101010

// Arrays are an optimally space-efficient way to store data. Elements are packed side-to-side with no memory wasted.

//! Array Indexing.

// Arrays are the most space-efficient method for storing data.
// Arrays also allow us to use the fastest method to access data (via indexing).

// with respect to the array we declared on line 38 above, imagine that we want to access the third item.

//Since indices begin at 0, that means we would call arr[2] (arr at index 2), which returns the number 43690.

// When you access the element stored at a certain index of an array, this is what happens underneath the hood:

//^ valueAddress = startAddress + index * sizeof(dataType)

// In our example, the array starts at memory address 104 (see line 52), the index is 2, and this size of the data is 32-bits, or 4 bytes. We plug this into the equation...

//^ valueAddress = 104 + 2 * 4
//^              = 104 + 8
//^              = 112

// Examining the memory diagram shows us that the four bytes starting from address 112 are:

//^ 00000000 00000000 10101010 10101010 (base-2), which is 43690 (base-10)

// Note that this indeing equation performs the same number of operations regardless of the size of the array:

// One multiplication
// One addition
// Memory access

// All of these operations are fast and have O of 1 time complexity (constant). Because array indexing is an O of 1 operation, it is the fastest way to access data in a collection. This is also why array indices start from 0 instead of 1. //^ How does this explain why array indices start at 0 instead of 1?

// Lets review the operational definition of an array:

//* An array is a sequence of elements of the saem type stored in a contiguous block of memory

// In this way, the elements of an array as defined here are also all of the elemtns required for the O of 1 indexing equation.

// Since elements are ordered by numbered indices, the entire array must occupy a contiguous block of memory.
// Since the offset is caculated by multiplying the data size, all items in the array must be of the same data type.
// Since the indices are numerical, the array must be stored in an ordered sequence.

//& Still a little iffy on how this explains why indices start at 0 instead of 1.

//! Arrays in Different Programming Languages

// Thre are some contradictions between this array definition and the JavaScript arrays we're familiar with (//& I think this is where my questions here are answered)

// JavaScript, for instance, allows you to store multiple data types in a single array. //& bingo

// Each programming language has its own unique array implementation that is built atop the basic functionality of the language.

// JavaScript and other dynamic languages (Python, Ruby) achieve mixed array types by storing each value as a generic object whose type and value is interpreted at runtime.

// The array itself actually contains a sequence of pointers (memory addresses), which all have the same data size and are of the same data type.

// This allows for more flexibility at the expense of some extra memory whihc is used to store the pointers and object metadata.

// JavaScript arrays are particularly 'wonky' because they include an additional layer of abstraction: Under the hood, they are actually HASH TABLES. //^ What the fuck is a hash table?

// Another phrase for 'hash table' is 'key-value objects'. //^ Ok, so this explains why we say 'arrays in JavaScript are actually objects' or 'arrays are a type of object.'

//! Summary

// Definition of an array
// Array representation in memory
// How we access and index arrays in constant time //^ no idea what 'constant time' means
// Insight into limitations of arrays //^ limitations?
// How multi-type arrays are implemented in dynamic coding languages like JavaScript, Python, and Ruby.
