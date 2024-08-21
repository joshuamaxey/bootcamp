// Convert the integers in the console.logs below to base 16:

/******************************************************************************/

const convertToBase16 = element => {
  if (typeof element === "number") { // Check if 'element' is a number
    return "0x" + element.toString(16); // If it is, use the .toString(16) method to convert the decimal number to its hexadecimal equivalent (as a string), then prefix it with the hexadecimal prefix "0x"
  } else { // Otherwise, we assume that element is a binary (base-2) number (in string form)
    const base10 = parseInt(element.substring(2), 2); // If that's the case, use the parseInt() method with substring(2) to remove the prefix from the binary number and then convert the base-2 (binary) value to its decimal (base-10) equivalent.
    return "0x" + base10.toString(16); // Then we use the base10.toString(16) method to convert the decimal (base-10) number to its base-16 (hexadecimal) equivalent and then prefix it with the hexadecimal "0x" prefix.
  }
};

/******************************************************************************/

console.log(convertToBase16(4)); // 0x4
console.log(convertToBase16(65)); // 0x41
console.log(convertToBase16(256)); // 0x100
console.log(convertToBase16(123)); // 0x7b
console.log(convertToBase16(1000)); // 0x3e8

console.log('––––––');

console.log(convertToBase16('0b1100')); // 0xc
console.log(convertToBase16('0b0101')); // 0x5
console.log(convertToBase16('0b1000')); // 0x8
console.log(convertToBase16('0b0111')); // 0x7

console.log('––––––');

console.log(convertToBase16('0b10100101')); // 0xa5
console.log(convertToBase16('0b11111111')); // 0xff
console.log(convertToBase16('0b01010101')); // 0x55
console.log(convertToBase16('0b00110011')); // 0x33
