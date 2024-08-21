//! What is Encapsulation?

// In OOP, encapsulation is the process of abstracting data and implementation details behind an API.

// The code which uses an object doesn't need to know the implemenation details of that object's properties and methods.

//^ Consider the instructions for baking pasta:

    // 1. Boil water
    // 2. Add the pasta into the water
    // 3. Drain the pasta

// Each step is actually made of many smaller steps that the instructions don't tell you (because they assume you already know. In programming, they don't tell you the smaller steps because those smaller steps are hidden behind an API and you don't need to know them in order to perform the larger step because the implementation is handled within the abstracted details)

// OOP can also be used for security purposes. If data and behavior is PUBLIC, then it is can be accessed and used by other objects. If it is PRIVATE, then it should only be accessed and used by the object that it belongs to.

// For instance, think of turning on a gas stove. You know that you need to turn the knob, but you don't need to know exactly how much gas is released, or the size of the holes that it is released through, and you don't need to know exactly where the pipes are located behind or beneath the stove. These 'implementation details' are hidden behidn the 'API' of the knob.

//! Thought Experiment: Vending Machine

//^ Let's say that we want to use a vending machine. We might describe the steps involved in using a vending machine like this:

    // 1. Authorize payment
    // 2. Make selection
    // 3. Retrieve snack

// let's think about the first step here- Authorizing payment.

// In reality, the act of authorizing your payment is actually abstracting a load of implementation details that you don't need to know about. Your payment provider must be electronically contacted, it must be confirmed with the vending machien company that your payment provider will pay for the snack, and then this authorization must be confirmed in order for the payment to be authorized.

// This isn't a technical or complete explanation of what happens, but it summarizes this point:

// The act of authorizing your payment is abstracted into a single, simple step (inserting your card, using your chip, tapping your phone, or whatever), which is like your API. It hides the implementation details behind the authorization because you don't need (or want) to be invovled in that process and you don't need to know how it works in order to successfully use the vending machine.

//! Classes and Constructors

// A class is like a recipe or blueprint for your objects.

// The class specifies the PROPERTIES and the METHODS (adjectives and verbs) of your OBJECT (noun).

// Each object created using your class constructor is an INSTANCE of that class.

// For instance, let's say that we have a class called Computer. We could say that myLaptop is an 'instance' of the Computer class. It has the properties and methods of a computer- that is, it has the features of a computer and it can do the things that you'd expect a computer to do.

//! Classes vs JavaScript Objects

// 'Object' can mean several things in JavaScript.

// It can refer to a class, to an instance of a class, OR to a POJO (plan old javascript object, which is just a data structure represented by key-value pairs within curly braces)

// We will learn how to determine what 'object' means based on the context of the word.

//! Summary

// Learned that encapsulation is the abstraction of data and implementation details behind an API

// Learned that encapsulation helps us break down large, complex problems into smaller, more manageable pieces

// Learned that classes are like blueprints for objects
