const Employee = require("./employee")

johnWick = new Employee(
    "John Wick",
    "Dog Lover"
);

johnWick.sayName(); // prints "John Wick says hello"

setTimeout(johnWick.sayName, 2000)

//^  prints 'undefined says hello'

//! IMPORTANT: Note that you CANNOT call the function using regular function call syntax within setTImeout. The function has to be in the form of a callback:

// setTimeout(johnwick.sayName(), 5000) //^ does NOT work

// setTimeout(johnwick.sayName, 5000) //^ WORKS

//^ In short, don't include the parenthesis in the callback function you're attempting to invoke within setTimeout.

let boundSayName = johnWick.sayName.bind(johnWick)

setTimeout(boundSayName, 2000) // prints "John Wick says hello"

//^ So lets break this down a little bit.

// Above, we invoke the 'sayName()' instance method on johnWick, which is an instance of Employee: johnWick.sayName

// Instead of calling it as-is within the setTImeout function (setTimeout(johnWick.sayName, 2000)), which prints 'undefined says hello' to the console, we add the bind method to the function call:

// johnWick.sayName.bind(johnWick) //^ Here, we call the bind() method on the function call with johnWick (this specific instance of the Employee class) as the argument (context). This binds the function's context to johnWick so that when we invoke this function within the setTimeout function, the context remains fixed and we print the right result.

//! Now lets try the same thing but with the sayOccuptation() instance method isntead of the sayName() method

setTimeout(johnWick.sayOccupation, 3000); // prints "undefined is a undefined" lets fix this.

let boundSayOccupation = johnWick.sayOccupation.bind(johnWick);

setTimeout(boundSayOccupation, 3000); // prints "John Wick is a Dog Lover" as expected.

//^ So again, we invoke the instance method on the instance of the class like this: johnWick.sayOccupation

//^ THEN we use bind to bind to create a NEW function wherein the context is bound to the instance (in this case johnWick):
//^ johnWick.sayOccupation.bind(johnWick).

// THEN we can call that function within the setTimeout method successfully. Lets write it out here without the variable declaration that makes the syntax cleaner:

setTimeout(johnWick.sayOccupation.bind(johnWick), 3000); // prints "John Wick is a dog lover"
