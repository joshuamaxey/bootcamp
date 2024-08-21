/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
  String.fromCharCode()
  charCodeAt()
*/

/* Base 2 to base 16 */
function binaryToHexadecimal(blob) {

  let base10 = parseInt(blob.substring(2), 2); // First, we use parseInt(string, radix) to convert from binary to base-10 decimal. We use the .substring(index) method to remove the base-2 prefix "0b", then provide "2" as the second argument to indicate that the string we're providing as an argument is a base-2 number. We store the base-10 number in our variable "base10"

  return "0x" + base10.toString(16); // Next, we invoke the .toString(radix) method on our base-10 number, passing in "16" as the argument to indicate that we want to convert our decimal number to base-16. Finally, we prefix our new base-16 number with "0x" to clarify that it is in base-16 format.
}

console.log('Binary to hexadecimal:')
console.log(binaryToHexadecimal('0b1010')) // '0xa'
console.log(binaryToHexadecimal('0b0011')) // '0x3'
console.log('')

/* Base 16 to base 2 */
function hexadecimalToBinary(blob) {

  let base10 = parseInt(blob); // First, we convert from hexadecimal base-16 to decimal base-10. Remember that the ParseInt method can take a base-16 number as an argument INCLUDING its 0x prefix, and that we do not need to specify the radix. So all we need to do is pass in the base-16 blob as-is, then store it in our base10 variable.

  return "0b" + base10.toString(2); // Then we invoke the .toString method on our base10 number, passing in "2" as our argument to indicate that we want to convert our decimal number into its binary form. Then we prefix our new binary number with "0b" to clarify that it is in base-2 format and return it.
}

console.log('Hexadecimal to binary:')
console.log(hexadecimalToBinary('0xa1'))  // '0b10100001'
console.log(hexadecimalToBinary('0xff'))  // '0b11111111'
console.log('')

/* Base 10 to ASCII */
function decimalToAscii(...blob) {

  return String.fromCharCode(...blob); // Here we invoke the String.fromCharCode(number) static method on our base-10 blob, converting our decimal number to its ASCII haracter equivalent.

  // Note that by using rest/spread instead of just a singular blob argument, we can modify this function to convert multiple decimal numbers at the same time.
}

console.log('Decimal to ASCII:')
console.log(decimalToAscii(65))  // 'A'
console.log(decimalToAscii(97))  // 'a'
console.log(decimalToAscii(65, 97)) // 'Aa'
console.log('')

/* Base 2 to ASCII */
function binaryToAscii(...blob) {

  return String.fromCharCode(...blob) // Here we invoke the String.fromCharCode(number) static method again, but this time on our base-2 blob. This converts our binary number to its ASCII character equivalent.

  // Note, again, that by using rest/spread intstead of a singular parameter, we can modify this function to convert multiple binary numbers at the same time.

  // Additionally, note that we do not need to remove the prefix from our binary numbers in order for this method to function correctly.
}

console.log('Binary to ASCII:')
console.log(binaryToAscii('0b01000010'))  // 'B'
console.log(binaryToAscii('0b01100010'))  // 'b'
console.log(binaryToAscii('0b01100010', '0b01000010')) // 'bB'
console.log('')

/* Base 16 to ASCII */
function hexadecimalToAscii(...blob) {

  return String.fromCharCode(...blob);

  //& Alternatively:

  let base10 = parseInt(blob); // First, we use parseInt(string, radix) to convert our base-16 number into its base-10 equivalent. Note that for hexadecimal numbers, we do not need to remove the 0x prefix OR specify the radix with respect to the parseInt(string, radix) method.

  return String.fromCharCode(base10); // Here, we pass our base10 number into the String.fromCharCode(number) static method, which then returns its ASCII equivalent.

};

console.log('Hexadecimal to ASCII:')
console.log(hexadecimalToAscii('0x43'))  // 'C'
console.log(hexadecimalToAscii('0x63'))  // 'c'
console.log('')

/* ASCII to base 10 */
function asciiToDecimal(blob) {

  return blob.split('').map(el => el.charCodeAt(0)); // Here, we first use the .split('') method to split our string "word" into an array of individual elements (letters). Then we use the .map() function to invoke the .charCodeAt(index) method on every one of the individual letters in our split array. SInce we're splitting the word into individual letters, each element of the array only has a single indedx (0), which is why we invoke the .charCodeAt(0) method at index 0 for every element. After the conversions are done, we return the array with all of the letters converted ack into their decimal equivalents.
}

console.log('ASCII to decimal:')
console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

module.exports = {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal
}
