//^ Describe the properties and functionality of computer memory
//^ Describe what a pointer is
//^ Diagram the orgaization and structure of computer memory
//^ Use a pointer to retrieve and interprety data found in a model of computer memory

//! Memory

// Memory stores the state of every program and all of the corresponding code.
// Every variable, array, and line of code is stored in memory.

//! RAM

// RAM = Random Access Memory

// RAM stores data for programs that are currently in use, including the operating system and background processes.

// RAM is NOT the same as hard drives or solid state drives, which are for long-term, persistent data storage.

// RAM is faster than drive storage. It is also more expensive.
// RAM requires an active power source. Data stored on hard drives will persist without power.

// Hard drives often store data on physical discs with a tracking head to read and write data. This method of data storage is slow and prone to mechanical failure.

// Hard drives are being phased out in exchange for SSDs (Solid State Drives), which are faster and mor reliable than hard drives.

// RAM and hard drives are functionally identical EXCEPT for their price, performance, and power requirements. Both store data as a long series of bits (1s and 0s) that can be read and written.

//If your computer runs out of RAM, it will start storing  data in the hard drive instead.

//This is why your computer may run more slowly if there are too many programs open.

//! Turing Machines

// Modern computers are an incarnation of the Turing Machine:

// https://en.wikipedia.org/wiki/Turing_machine

//^ Turing Machines consist of:

// An infinite strip of memory tpae, divided into cells
// A mechanical processor that moves along the tape

//^ The processor can run a specific set of operations:

// Read and write values from the tape
// Basic arithmetic and logic
// Conditional branching (if/else)
// onditional iteration (for/while loops)

//^ Turing machines are simple and powerful.

// With enough time, a Turing machine can compute anything that a modern computer can.
// Modern computers stil follow the same computational model as Turing machines.
// A programming language is considered to be "Turing Complete" if it can simulate the functionality of a Turing machine.

//^ The CPU (Central Processing Unit) of a computer can run these basic commands and more by reading and writing from RAM.

// In a physical computer, RAM is not infinite.
// Billions of memory cells (1gb RAM = 1 billion bytes) enable your CPU to simulate a Turing machine (and more)

//^ When high-level code in languages like JavaScript and Python is executed, it is first translated to binary machine code.

// Binary code can be executed by the processor.
// Each CPU chip has its own set of instructions, which is why different processors contain different executables and compilers //! (WTF is an executable? What is a compiler?)

//^ No matter which language you use, your code is translated to machine instructions before execution. Anything you can computer in JavaScript can also be computed in Python, Ruby, C, Fortran, Assembly, and any other Turing Complete language.

//! Memory Addresses, Pointers, References

// We can think of memory as a long strip of cells.

// Each cell is either electrically charged (1) or is not electrically charged (0).

// Each cell is divided into chunks called WORDS, which are the processor's default data size.

// 8-bit architecture will have 8-bit words. 64-bit architecture will have 64-bit words.

// Each word is indexed by a MEMORY ADDRESS (also called MEMORY POINTER or MEMORY REFERENCE)

// This is a piece of memory located in an 8-bit processor:

//* 104      105      106      107
//* 00000000 00000000 00000000 00000000

//* 108      109      110      111
//* 00000000 00000000 00000000 00000000

//* 112      113      114      115
//* 00000000 00000000 00000000 00000000

//* 116      117      118      119
//* 00000000 00000000 00000000 00000000

//^ We want to use memory address 104 to store a variable which points to the string, "ABC"

// The string itself is stored in memory address 112. To write this into memory, you have to translate 112 and "ABC" to binary code.

// 64 + 32 + 16 = 112 somehow tells us that the binary representation of "112" would be "0b01110000." //! (What the fuck is this equation? Where did it come from?)

// Somehow we can tell based on the information on THIS webpage--

// https://upload.wikimedia.org/wikipedia/commons/d/dd/ASCII-Table.svg

// -- that the letters A, B, and C are represented by the follwing //! (despite that the 'b' present in every one of these lines of code is NEVER mentioned on this webpage and there's no explanation for why it exists or is present. Similar to the mysterious equation above.)

// A = 0b10000001
// B = 0b10000010
// C = 0b10000011

// Once these values are written into memory, our memory block looks like this:

//* 104      105      106      107
//* 01110000 00000000 00000000 00000000

//* 108      109      110      111
//* 00000000 00000000 00000000 00000000

//* 112      113      114      115
//* 10000001 10000010 10000011 00000000

//* 116      117      118      119
//* 00000000 00000000 00000000 00000000

//^ Look at byte 104. Its 2nd, 3rd, and 4th cell are holding an electrical charge (they are 1s, not 0s). When the computer interprets those values as a memory address, it is referred to chuck 112 (112 - 114??) which is then interpreted as the string of characters, "ABC".

// Each memory cell has no idea what "type" of data it represents. That data is stored elsewhere in the program. If you were to interpret the emory in address 102, it would return an integer "112" (or as the character "p") //! (What the fuck does "p" have to do with anything?)

//! Speed of Memory Access

// COmputers take no time at all to visit locations in their memory or to jump between them.

// They accomplish this by a binary tree routing system. In essence, a "0" means traveling down the left branch while a "1" means traveling down the right:

//*                 __ Start __
//*               /             \
//*              0               1
//*            /   \           /   \
//*          0       1       0       1
//*         / \     / \     / \     / \
//*        0   1   0   1   0   1   0   1
//*        |   |   |   |   |   |   |   |
//*        0   1   2   3   4   5   6   7

// This is a 3-bit memory block

// Visiting cell 0 (0b000) requires that we travel down the leftmost path three times.

// Visiting cell 5 (0b101) requires a right, a left, then another right.

// Visiting cell 7 (0b111) requires three rights.

//^ The charged cells act as switches which automatially route the electrical current. Electricity travels close to the speed of light and the distance is very small, so this occurs almost instantaneously.
