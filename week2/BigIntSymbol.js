//let null = "hello" // can't do it, error

//let undefined = "hello" // no error

console.log(typeof "string"); //string
console.log(typeof NaN); //number
console.log(typeof 100); //number
console.log(typeof null); //// null ??
console.log(["array"]); //object
console.log(typeof undefined); //undefined

console.log(Array.isArray([1, 2, 3])); //true
console.log(Array.isArray("string")); //false

let myFunction = function (x) {
  console.log("This is a function");
};

console.log(typeof myFunction); //function

console.log(typeof BigInt(89349759387459837495793485)); // bigInt

console.log(typeof false); //boolean

console.log(null === undefined); //false
console.log(nul == undefined); //true

//null is for intentionally setting the value of something to 'the absence of a value'
//undefined is usually assumed to be unintentional. If you need to assign something a non-value, use null instead of undefined.
