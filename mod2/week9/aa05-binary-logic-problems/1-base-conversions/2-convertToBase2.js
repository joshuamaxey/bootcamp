// Convert the integers in the console.logs below to base 2

/******************************************************************************/

const convertToBase2 = element => {
  if (typeof element === "number") { // check if 'element' is a number
    return '0b' + element.toString(2); // if it is a number, use the toString(2) method to convert the number to its base-2 (binary) equivalent and then prefix it with the '0b' binary prefix
  } else {
    let base10 = parseInt(element); // If 'element' is not a number, we use an else statement under the assumption that it must be a string containing a hexadecimal number
    return "0b" + base10.toString(2); // we use the base10.toString(2) method to convert the hexadecimal number to its (base-2) binary equivalent and then prefix it with the "0b" binary prefix
  }
};

/******************************************************************************/

console.log(convertToBase2(4)); // 0b100
console.log(convertToBase2(65)); // 0b1000001
console.log(convertToBase2(256)); // 0b100000000
console.log(convertToBase2(123)); // 0b1111011
console.log(convertToBase2(1000)); // 0b1111101000

console.log('––––––');

console.log(convertToBase2('0xf')); // 0b1111
console.log(convertToBase2('0xfa')); // 0b11111010
console.log(convertToBase2('0x1234')); // 0b1001000110100
console.log(convertToBase2('0xc9a1')); // 0b1100100110100001
console.log(convertToBase2('0xbf12')); // 0b1011111100010010

console.log(convertToBase2("0xA5"))
