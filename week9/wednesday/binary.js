//! Intro to Number Bases: Binary, Decimal, Hexidecimal

//^ Understand core concepts of binary code
//^ Explore conversion of decimal, binary, hexadecimal, and ASCII values
//^ Use built-in JavaScript conversion methods

//! Base-10: Decimal.

// "Base" refers to how many digits there are in the counting system.

// In base-10, there are 10: 0 - 9.

// 00
// 01
// 02
// 03
// 04
// 05
// 06
// 07
// 08
// 09

// Once you reach the last digit on the right side (9) when counting upward, you increment the digit on the left side and then start over on the right from 0:

// 10
// 11
// 12
// 13
// 14
// 15
// 16
// 17
// 18
// 19

// This process repeats. We increment the left digit again, then start over at 0 on the right again.

// 20
// 21
// 22
// 23
// 24
// 25
// 26
// 27
// 28
// 29

// And so on.

// 30

//! Base-2: Binary

// Binary = Base-2.

// There are two digits in base-2: 0 and 1

// Note that 'bits' is short for "binary digits." A group of 8 bits is called a "byte."

// 0 and 1 are the same in base-2 as in base-10.

// When counting up, we increment the right-most digit by 1. To keep counting, we increment the digit to the left by 1 and start over at 0 on the right.

// This pattern continues.

// 0000 (0)
// 0001 (1)
// 0010 (2)
// 0011 (3)
// 0100 (4)
// 0101 (5)
// 0110 (6)
// 0111 (7)
// 1000 (8)

//^ To avoid confusion, binary numbers are written with "0b" at the beginning. So the number 8 written in binary would be 0b1000

// 0b0000 (0)
// 0b0001 (1)
// 0b0010 (2)
// 0b0011 (3)
// 0b0100 (4)
// 0b0101 (5)
// 0b0110 (6)
// 0b0111 (7)
// 0b1000 (8)

//* Ok, this makes sense. But what happened to 9 and 10?

//! Translating from Binary to Decimal.

// Use this formula to translate between bases:

//& "Multiply each digit by the number base raised to the nth power, where n is its position starting from the right. Then add all results together"

// (d)(d)(d) (a base-10 number with three digits)

// (d) x 10 ^ 2
