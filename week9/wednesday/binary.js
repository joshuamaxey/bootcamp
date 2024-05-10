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

// (d) x (b) ^ (n)

//^ (digit) x (base) ^ (positionFromTheRight)

// (d)(d)(d) (a base-10 number with three digits)

// ((d) x 10 ^ 2) + ((d) x 10 ^ 1) + ((d) x 10 ^ 0)

//^ Lets try it with 1234

//       1                 2               3              4

// ((1) x 10 ^ 3) + ((2) x 10 ^ 2) + ((3) x 10 ^ 1) + ((4) x 10 ^ 0)

//   (1 x 1000)   +  (2 x 100)     +    (3 x 10)    +   (4 x 1)

//      1000      +    200         +     30         +      4

//^                             1234

// On line 116, we confirm that this formula allows us to calculate the base-10 (decimal) equivalent of a number.

//^ Now lets try converting the binary number 0b11001010 to a decimal value:

console.log(0b11001010) // prints 202. So if we translate this number using our formula, the result should be the base-10 (decimal) number 202.

// Our number is: 0b11001010
// Rm the 0b ID:    11001010

// Forumula: (d) x (b) ^ (n)
//* NOTE: * is the multiplication operator, ** is the exponent operator in JavaScript. Lets use the computer to do the math.

0 * 2 ** 0 // position 0, starting from the right
1 * 2 ** 1 // position 1, starting from the right, etc
0 * 2 ** 2
1 * 2 ** 3
0 * 2 ** 4
0 * 2 ** 5
1 * 2 ** 6
1 * 2 ** 7

//^ Above, we plug each digit of our base-2 (binary) number into the formula. Below, we add them all together.

// (0 * 2 ** 0) + (1 * 2 ** 1) + (0 * 2 ** 2) + (1 * 2 ** 3) + (0 * 2 ** 4) + (0 * 2 ** 5) + (1 * 2 ** 6) + (1 * 2 ** 7)

// Now I'm gonna console.log() the result below. This should give us 102, the same as the console.log on line 120.

console.log((0 * 2 ** 0) + (1 * 2 ** 1) + (0 * 2 ** 2) + (1 * 2 ** 3) + (0 * 2 ** 4) + (0 * 2 ** 5) + (1 * 2 ** 6) + (1 * 2 ** 7)) // 202.

// So the formula works for converting binary to decimal numbers.

//^ What about converting backward, from base-10(decimal) to base-2(binary)?

//& Divide by the base and keep track of the remainder. The individual remainder values will correspond to the binary values.

//^ (num) / (base) = num2 r
//^ (num2) / (base) = num3 r
// [repeat until num === 1]

// We already know that 0b11001010 (base-2, binary) === 202 (base-10, decimal)

// So if we plug 202 into our formula on 153 and then track the remainders until 202 is reduced to 1, the result should be 11001010.

// 202 / 2 r0
// 101 / 2 r1
// 50 / 2 r0
// 25 / 2 r1
// 12 / 2 r0
// 6 / 2 r0
// 3 / 2 r1
// 1 / 2 r1

//! Base 16: Hexadecimal

// Hexadecimal is shorthand for representing binary values.

// One hex digit can represent four bits.

// Base-16, or hexadecimal (hex = 6, decimal = 10), includes digits 0-9 and uses A - F to represent 10 - 15 respectively.

// Hexadecimal numbers are prepended with an 0x to identify them as base-16 values.

 0 = 0b0000 = 0x0
 1 = 0b0001 = 0x1
 2 = 0b0010 = 0x2
 3 = 0b0011 = 0x3
 4 = 0b0100 = 0x4
 5 = 0b0101 = 0x5
 6 = 0b0110 = 0x6
 7 = 0b0111 = 0x7
 8 = 0b1000 = 0x8
 9 = 0b1001 = 0x9
10 = 0b1010 = 0xA
11 = 0b1011 = 0xB
12 = 0b1100 = 0xC
13 = 0b1101 = 0xD
14 = 0b1110 = 0xE
15 = 0b1111 = 0xF

// We can use the same formula to translate from hexadecimal to decimal as from binary.

// Take the hex number:       0xF23C
// Remove the identifier 0x:    F23C

// Formula: // (d) x (b) ^ (n)
//^ (digit) x (base) ^ (positionFromTheRight)

0xF = 15
0x2 = 2
0x3 = 3
0xC = 12

(15 * 16 ** 3)
