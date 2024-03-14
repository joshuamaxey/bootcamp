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
