// 1.
function sum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}


try {
  let res = sum(null);
  console.log(res);
} catch (error) {
  if (error instanceof TypeError) {
    console.error("TypeError caught")
  } else {
    console.error("Error caught")
  }
}


// 2.

function sayName(name) {
  if (name !== typeof "string") {
    throw new TypeError("Invalid name! Must be a string!")
  } else console.log(`${name}`);
}

// tests
try {
  sayName("Alex");
  sayName(1);
} catch (error) {
  if (error instanceof TypeError) {
    console.error("TypeError caught")
  } else {
    console.error("Error caught")
  }
}

// Your code here

// 3.
function greet(greeting) {
  if (!greeting) {
    throw new Error("There was no greeting given.");
  }
  console.log(greeting);
}

try{
  greet();
} catch (error) {
  console.error("Hello World!")
};
