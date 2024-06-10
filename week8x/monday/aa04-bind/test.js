const Employee = require('./employee');

const johnWick = new Employee("John Wick", "Dog Lover")

setTimeout(johnWick.sayName, 2000); // will print 'undefined says hello' because when we use the setTimeout function to call an instance method in this way, we lose the context of the method. The Timeout object becomes the new context. Since it has no .name property, this method will print 'undefined says hello' after the specified delay. //^ Additionally, note that if we provide "johnWick.sayName()" (with parenthesis on the method call) then we throw an error instead of printing undefined.

setTimeout(johnWick.sayName.bind(johnWick), 2000); // prints 'John Wick says hello' to the console

setTimeout(johnWick.sayOccupation, 3000); // prints 'undefined is a undefined' for the same reason that our function call on line 5 printed undefined. When we use the setTImeout method to call an instance method in this way, the Timeout object becomes the context of the method. Since the Timeout object has no .name or .occuption properties, our method returns 'undefined is a undefined'

setTimeout(johnWick.sayOccupation.bind(johnWick), 3000); // prints 'John Wick is a Dog Lover' since we use bind to bind the context of our method call to the johnWick object that we created on line 3.
