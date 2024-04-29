// DO NOT MODIFY THE say FUNCTION
function say(name) {
  console.log(`${this.message} ${name}!`);
}

helloMessage = { message: 'Hello,' };
heyThereMessage = { message: 'Hey there,' };

say.call(helloMessage, "John");
say.call(heyThereMessage, "Michael");

//^ All we had to do here was add the 'call' method to the function call. The first argument becomes the context (in this case, the object that the say method is being called on), and the second argument is taken as a regular argument.
