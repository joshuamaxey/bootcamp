//! Array Resizing

arr = [255, 256, 43690, 1431655765]

// Lets say that we want to push another value to the end of this array.

arr.push(1);

console.log(arr); // [ 255, 256, 43690, 1431655765, 1 ]

// To declare this array, we request 16 bytes of memory from the operating system and fill in the four array values like this:

//  104      105      106      107
//* 00000000 00000000 00000000 11111111 (255)

//  108      109      110      111
//* 00000000 00000000 00000001 00000000 (256)

//  112      113      114      115
//* 00000000 00000000 10101010 10101010 (43690)

//  116      117      118      119
//* 01010101 01010101 01010101 01010101 (1431655765)

// So the OS has granted the program permission to read and write 16 bytes:

// Starting with byte 104
// Ending with byte 119
