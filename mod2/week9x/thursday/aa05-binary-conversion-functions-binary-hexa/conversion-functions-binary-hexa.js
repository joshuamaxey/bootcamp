/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
*/

/* Base 10 to base 2 */
function decimalToBinary(blob) {

  return '0b' + blob.toString(2); // the .toString(radix) method:

  // Converts a number into base-(radix) equivalent

  // Then returns it as a string.

  // In this case, we convert the number into its base-2 form and then prefix it with the "0b" to clarify that it is a binary number.
}

console.log('Decimal to binary:');
console.log(decimalToBinary(13)); // '0b1101'
console.log(decimalToBinary(72)); // '0b1001000'
console.log('');

/* Base 10 to base 16 */
function decimalToHexadecimal(blob) {

  return "0x" + blob.toString(16); // The .toString(radix) method:

  // converts a number into it's base-(radix) equivalent

  // Then returns it as a string.

  // In this case, we take a base-10 (decimal) number, convert it to its base-16 form, then prefix it with "0x" to clarify that the new number is a base-16 number.
}

console.log('Decimal to hexadecimal:')
console.log(decimalToHexadecimal(9))   // '0x9'
console.log(decimalToHexadecimal(32))  // '0x20'
console.log('')

/* Base 2 to base 10 */
function binaryToDecimal(blob) {

  return parseInt(blob.substring(2), 2); // The parseInt(string, radix) method:

    // takes in a string as an argument (in this case, we assume that the argument is a base-2 binary number including the 0b prefix)

    // uses the .substring() method to extract the numerical part of the binary number (after the 0b prefix) which is then taken as the first argument

    // then takes a 2 as the second (radix) argument to indicate that the number we're passing in as a string is currently in its base-2 form.

    // The parseInt(string, radix) method then converts the base-2 substring into its base-10 decimal form.
};

console.log('Binary to decimal:')
console.log(binaryToDecimal('0b0101'))      // 5
console.log(binaryToDecimal('0b10001000'))  // 136
console.log('')

/* Base 16 to base 10 */
function hexadecimalToDecimal(blob) {

  return parseInt(blob, 16); // The parseInt(string, radix) method:

  // Takes in a string as an argument. In this case, we assume that the string is a base-16 number that includes the 0x prefix

  // Since the number is in base-16 format, we don't need to remove the prefix so the .substring() method is not necessary here. We just pass in the number as it is, prefix included

  // Then we provide 16 as the second argument to indicate to the method that the number we're passing in is in base-16 format.

  // The parseInt(string, radix) method then converts the base-16 number to its base-10 decimal form.

  //& NOTE: When we're converting from hexadecimal to decimal using the parseInt(string, radix) method, we actually do not have to pass in the radix. JavaScript can identify the numer as base-16 by itself, we don't need to explicitly provide the base. Functionally, this means that we could also write this code like this:

  return parseInt(blob); // If we're passing in a base-16 number for conversion to base-10, we don't need to remove the prefix OR explicitly provide the base of the number.
}

console.log('Hexadecimal to decimal:')
console.log(hexadecimalToDecimal('0x51'))    // 81
console.log(hexadecimalToDecimal('0x10ff'))  // 4351


module.exports = {
  decimalToBinary,
  decimalToHexadecimal,
  binaryToDecimal,
  hexadecimalToDecimal
}
