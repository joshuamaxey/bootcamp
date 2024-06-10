// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

//& Original Code:

say(helloMessage, "John");
say(heyThereMessage, "Michael");

//& New Code:

const say1 = say.bind(helloMessage, "John");
const say2 = say.bind(heyThereMessage, "Michael");

//^ First, we apply the .bind() metho to both calls of the 'say()' function: say(helloMessage, "John") --> say.bind(helloMessage, "John")

//^ Then we assign both function calls to variables: const say1 = say.bind(helloMessage, "John");

say1(); // prints "Hello, John!"
say2(); // prints "Hello there, Michael!"

//^ Finally, we invoke both of the functions by calling the variables we saved them to. But this is actually supposed to be a CALL AND APPLY practice, NOT a bind practice, so let's change this up.

say.call(helloMessage, "John");
say.call(heyThereMessage, "Michael");

//^ Here, we use the .call() method to bind the context of the .say() function to the correct context and then invoke both functions immediately. Because the .call() method immediately invokes the functions, there is no need to save them to a variable.
