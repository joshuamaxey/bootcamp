//! You can import classes and functions individually using the following syntax:

// import { sayHello } from "./script1.js";

// sayHello(); // Hello!

//! You can also use * to import a module's entire contents, then refer to the individual functions or classes using object syntax:

import * as Greetings from "./export.js";

//^ Note that this process of namespacing multiple functions or classes under a single, unified name(such as "greetings") for easy reference is called "ALIASING" our imports.

Greetings.sayHello(); // Hello!
Greetings.sayHi(); // Hi!

//! We can also use 'export default' to export a single function or class from a file. When we do this, the export is unnamed and can be imported in another file with whatever name you want.

export default function add(num1, num2) {
  console.log(num1 + num2);
}
