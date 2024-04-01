//! References vs. Primitives

//?PRIMITIVES VS OBJECTS

//& FIVE PRIMITIVE TYPES (IMMUTABLE. Values cannot be changed, only reassigned)

//&"Immutable = cannot be changed in memory" - removes

//& When you re-assign the value of a string, you are just reassigning it to a new value, not actually changing its initial value.

/*
1. Boolean (true and false)
2. Null - represents the INTENTIONAL absence of value.
3. Undefined - default return value for many things in JavaScript.
4. Number - numerical values
5. String - text data enclosed in quotes
*/

//^ PRIMITIVE TYPES are values stored directly in your memory. You can re-assign them to another value that is stored directly within your computer's memory, but we cannot change those values themselves.

//^For instance, the computer KNOWS what the number 5 is. And what it means. It also knows what the boolean value FALSE means, and what it is. We can change the value of a variable to point to a different number, 6, or a different boolean value, TRUE, but we CANNOT change what those values mean or what they are. When we re-assign the value of a variable from 5 to 8, we are not changing the value "5", which will always mean the same thing. We are just telling the variable to reference a different number.

//& ONE REFERENCE TYPE (MUTABLE. Values can be changed.)

/*
Object (data stored in the form of key-value pairs, unordered/without indices)
Array (also an object)
*/

//^ REFERENCE TYPES are objects that WE create. They are stored within the computer's memory, like primitive types. But the difference is that when we assign a variable to an object, that variable is not referencing a point in the computer's memory. It is referencing the object ITSELF, which lives in your memory.

//^ When another variable is pointing at this object, BOTH are directly referencing the object itself. So if you change the value of the object, it changes the value taht is represented by BOTH of the variables.

//^Reference types CARRY the value in each variable, which makes them mutable.
