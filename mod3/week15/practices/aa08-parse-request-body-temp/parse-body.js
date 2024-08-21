function firstStep(input) {

  return input.split('&'); // First, separate key-value pairs within the input string by separating at the "&" ("username=azure+green&password=password%21" = ['username=azure+green', 'password=password%21'])
}

function secondStep(input) {

  // console.log(input.map((kvp) => kvp.split("=")));
  return input.map((kvp) => kvp.split("=")); // Second, use the .map() method to .split() to separate the key from the value at the "=" for each key-value pair ("username=azure+green" = "'username', 'azure+green'")
}

function thirdStep(input) {

  // return input.map(([k, v]) => [k,v.replace(/\+/g," ")]); // Third, target any "+" symbols located in the 'value' of each key-value pair and replace them with spaces ("azure+green" = "azure green")

  for (let i = 0; i < input.length; i++) {

    for (let j = 0; j < input[i].length; j++) {

      input[i][j] = input[i][j].replace("+", " ");

    }
  }
  return input;
}

function fourthStep(input) {

  return input.map(([k, v]) => [k, decodeURIComponent(v)]); // Fourth, decode any parts of the value that has been encoded using Percent Encoding ("password%21" = "password!")
}

function fifthStep(input) {

  return input.reduce((acc, [k, v]) => {
    acc[k] = v;
    return acc;
  }, {}); // Fifth, turn the key-value pairs into an object
}

function parseBody(str) {

  first = firstStep(str);
  second = secondStep(first);
  third = thirdStep(second);
  fourth = fourthStep(third);
  fifth = fifthStep(fourth);

  return fifth;
}

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = {
  firstStep,
  secondStep,
  thirdStep,
  fourthStep,
  fifthStep,
  parseBody
};
