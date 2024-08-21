//^ 1. True or False: Destructuring an object must assign every value in the object to a variable.

// FALSE! In JavaScript, it is NOT necessary to assign every value to a variable when destructuring an object. Here's an example:

let person = {name: "Joshua", age: 29, job: "student"};

const {name, age} = person; //Here, we destructure the object into TWO new variables, keeping only the values associated with the "name" and "age" keys.

//^ 2. Can you use array destructuring to swap elements in an array?

// YES! Destructuring can be used to swap elements in an array in JavaScript. Here's an example:

let a = 1;
let b = 2;

[a, b] = [b, a] //Here, we put both variables into an array. Then we use destructuring to swap the vallues in the array.

console.log(a); // 2
console.log(b); // 1

let c = 3;
let d = 4;
let e = 5;
let f = 6;

[c, d, e, f] = [c, e, d, f]; // Here, we can see that we can swap individual variables within larger arrays as well.

console.log(d); // 5
console.log(e); // 4
