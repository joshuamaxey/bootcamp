//! Objectives

//^ 1. Describe and implement binary search on a sorted array
//^ 2. Identify logarithmic time complexity in an algorithm

//! Binary Logarithms

// Learn how logs work

// Identify O(log n) in code

//! What Is A Logarithm?

//^ To understand logarithms, you need to understand exponents

// A number raised to the power of (n) is equivalent to multiplying the number by itself (n) times.

// x^n = x * x (n times)

// x^5 = x * x * x * x * x

// ^ A logarithm (log) is the inverse of an exponent.

// The logarithm base-(n) of a number is how many times it must be divided by n to reach 1.

// For example, to find the log base-2 of 32 ( log2(32) = ? ), you divide by the base until you hit 1.

// in this case, //^ log2(32) = (32/2 = 16/2 = 8/2 = 4/2 = 2/2 = 1) = 5

//^ These statements are an expression of the same relationships between numbers:

//* 2 multiplied by itself 5 times: (2^5) = 32 ( 2 * 2 * 2 * 2 * 2 = 32)

//* 32 divided by base-2 5 times = 1: log2(32) = 32 / 2 / 2 / 2 / 2 / 2 = 1

//* 2 to the power of 5 (2^5) = 32

//* log base-2 of 32 = 5: log2(32) = 5

//^ We can change the base of the logarithm to invert the exponent base:

//* 10 multiplied by itself 3 times (10^3) = 1000: 10 * 10 * 10 = 1000;

//* 1000 divided by base-10 3 times equals 1: 1000 / 10 / 10 / 10 = 1;

//* 10 to the power of 3 = 1000: 10^3 = 1000

//* log base-10 of 1000 = 3: log10(1000) = 3

//^ General logarithms have many advanced math applications, but here we are only concerned with one type: The binary logarithm.

//! What is a Binary Logarithm?

// A binary logarithm is a base-2 logarithm. Take a look at the following binary exponent table:

//*       2^0  = 1
//*       2^1  = 2
//*       2^2  = 4
//*       2^3  = 8
//*       2^4  = 16
//*       2^5  = 32
//*       2^6  = 64
//*       2^7  = 128
//*       2^8  = 256
//*       2^9  = 512
//*       2^10 = 1024

//^ It is recommended that you memorize these powers of 2 up to 1024. This will help you understand logarithms and code performance.

// The following is the logarithm table equivalent to the binary exponent taable above:

//*              log2( 1 )    = 0
//*              log2( 2 )    = 1
//*              log2( 4 )    = 2
//*              log2( 8 )    = 3
//*              log2( 16 )   = 4
//*              log2( 32 )   = 5
//*              log2( 64 )   = 6
//*              log2( 128 )  = 7
//*              log2( 256 )  = 8
//*              log2( 512 )  = 9
//*              log2( 1024 ) = 10

//^ You can use the Math.log2(x) function to return the binary logarithm of a given number. Also recall that ( ** ) is the exponent operator in JavaScript. See below:

console.log(2 ** 0)  // 1
console.log(2 ** 1)  // 2
console.log(2 ** 2)  // 4
console.log(2 ** 3)  // 8
console.log(2 ** 4)  // 16
console.log(2 ** 5)  // 32
console.log(2 ** 6)  // 64
console.log(2 ** 7)  // 128
console.log(2 ** 8)  // 256
console.log(2 ** 9)  // 512
console.log(2 ** 10) // 1024

console.log(Math.log2(1))    // 0
console.log(Math.log2(2))    // 1
console.log(Math.log2(4))    // 2
console.log(Math.log2(8))    // 3
console.log(Math.log2(16))   // 4
console.log(Math.log2(32))   // 5
console.log(Math.log2(64))   // 6
console.log(Math.log2(128))  // 7
console.log(Math.log2(256))  // 8
console.log(Math.log2(512))  // 9
console.log(Math.log2(1024)) // 10

//! Why Are Logarithms Important?

// We have learned how to identify and implement algorithms with constant O(1), linear O(n), and quadratic O(n**2) complexities.

// Now we need to learn how to identify and implement algorithms with extremely efficient logarithmic O(log n) complexity.

// Logarithmic curves grow so slowly that they are virtually constant.

// For large inputs, logarithmic curves VASTLY OUTPERFORM linear curves.

//! Summary

//^ Learned what a logrithm is

//^ Learned how to calculate a binary logarithm

//^ Learned why logarithmic growth curves out-perform linear growth curves
