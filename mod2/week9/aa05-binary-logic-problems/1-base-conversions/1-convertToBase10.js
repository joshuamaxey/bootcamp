// Convert the integers in the console.logs below to base 10:

/******************************************************************************/

const convertToBase10 = str => {
  if (str.includes("0b")) { // Check to see if 'str' contains the 0b prefix which corresponds to base-2 (binary) values
    return parseInt(str.substring(2), 2); // if it does, use parseInt with substring(2) to cut the prefix off of the binary value and then return the base10 (decimal) value that corresponds to the binary value
  }

  if (str.includes("0x")) { // Check to see if 'str' contains the 0x prefix that corresponds to base-16 (hexaxecimal) values
    return parseInt(str); // If str is a hexadecimal value, use parseInt(str) to convert the hexadecimal value to its decimal equivalent
  }
};

/******************************************************************************/

console.log(convertToBase10('0b1100')); // 12
console.log(convertToBase10('0b0101')); // 5
console.log(convertToBase10('0b1000')); // 8
console.log(convertToBase10('0b0111')); // 7

console.log('––––––');

console.log(convertToBase10('0b10100101')); // 165
console.log(convertToBase10('0b11111111')); // 255
console.log(convertToBase10('0b01010101')); // 85
console.log(convertToBase10('0b00110011')); // 51

console.log('––––––');

console.log(convertToBase10('0xf')); // 15
console.log(convertToBase10('0xfa')); // 250
console.log(convertToBase10('0x1234')); // 4660
console.log(convertToBase10('0xc9a1')); // 51617
console.log(convertToBase10('0xbf12')); // 48914

console.log(convertToBase10("0xA5"))
