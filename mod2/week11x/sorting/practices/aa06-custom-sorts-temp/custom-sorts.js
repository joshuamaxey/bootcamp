function ageSort(users) {

  return users.sort((a, b) => {

    return a.age - b.age; // Here we compare the 'age' properties of two object (a and b).
  })
}

function oddEvenSort(arr) {

  return arr.sort((a, b) => {

    if ((a + b) % 2 === 0)return a - b; // if both are even OR both are odd, sort in ascending order
    else if (a % 2 === 0) return 1; // a is even, b is odd. Sort b to the left.
    return -1; // a is odd, b is even. Sort a to the left.
  })
}

function validAnagrams(s, t) {

  let sArr = s.split("");
  let tArr = t.split("");

  sArr.sort();
  tArr.sort();

  s = sArr.join("");
  t = tArr.join("");

  return s === t;

  //! Alternatively

  return (s.split("").sort().join("")) === (t.split("").sort().join(""))
}

function reverseBaseSort(arr) {

  return arr.sort((a, b) => {

    let baseA = Math.floor(Math.log10(a)); // gives the number of digits in element a
    let baseB = Math.floor(Math.log10(b));

    // if they have the same number of digits, sort in ascending order
    if (baseA === baseB) return a - b;
    // else organize numbers by bases (number of digits) in descending order
    else return baseB - baseA;
  })
}

function frequencySort(arr) {

  const count = {};

  for (let i = 0; i < arr.length; i++) {

    const el = arr[i];

    if (!count[el]) count[el] = 0;

    count[el]++;
  }

  return arr.sort((a, b) => {

    // case 1: a and b appear the s;ame number of times -> sort in descending order
    if (count[a] === count[b]) return b - a;
    // case 2: a appears more than b -> a should be after b
    else if (count[a] > count[b]) return 1;
    // case 3: b appears more than a -> b should be after a
    else return -1;
  })
}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
