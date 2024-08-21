/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

debugger
function reverse(str) {

  let stringArr = str.split('');

  let reverseArr = [];

  if(stringArr.length === 0) {

    return reverseArr.join('');

  }
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverseString += str[i];
  // }
  reverseArr.push(stringArr[stringArr.length - 1]);

  stringArr.pop();


  return reverseArr.join('') + reverse(stringArr.join(''));


}

console.log(reverse("house")); // "esuoh"
console.log(reverse("dog")); // "god"
console.log(reverse("atom")); // "mota"
console.log(reverse("q")); // "q"
console.log(reverse("id")); // "di"
console.log(reverse("")); // ""

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
