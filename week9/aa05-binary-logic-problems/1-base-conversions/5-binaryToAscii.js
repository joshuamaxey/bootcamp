// Translate the binary sequences in the
// console.logs below to 8-bit ASCII strings:

/******************************************************************************/

// Helper function to convert a binary string into an array of 8-bit strings
const binaryStringToArray = str => {
  let binary8bitStr = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    binary8bitStr += str[i];
    count++;

    if (count % 8 === 0) {
      if (!str[i + 1]) break;
      binary8bitStr += ',';
    }
  }

  return binary8bitStr.split(',');
};

const binaryToAscii = str => {
  const binaryArray = binaryStringToArray(str); // convert a binary string to an array of 8-bit strings using the binaryToArray(str) method

  let result = ''; // initialie an empty string to hold the ASCII result.

  for (let i = 0; i < binaryArray.length; i++) { // iterate through the array of 8-bit strings
    let decimal = parseInt(binaryArray[i], 2); // convert binary to decimal

    let asciiChar = String.fromCharCode(decimal); // convert decimal to ASCII character

    result += asciiChar; // add each ASCII character to the 'result' string (concatenate)
  }

  return result;
};

/******************************************************************************/

console.log(binaryToAscii('011000010110001001100011'));
// 'abc'

console.log(binaryToAscii('010000010100001001000011'));
// 'ABC'

console.log(binaryToAscii('010010000110010101101100011011000110111100101100001000000111011101101111011100100110110001100100'));
// 'Hello, world'
