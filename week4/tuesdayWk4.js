//^CALLBACK LEARNING OBJECTIVES:

//^ 1. Identify why fuctions are called "first Class Objects" in JavaScript
//^ 2. Given a code nsippet containing an anonymous callback, a named callback, and multiple console.logs, predict what will be printed.
//^ 3. Write a function that takes in a value and two callbacks. The function should return the result of the callback that is greater.
//^ 4. Write a function, myMap, which takes in an array and a callback as arguents. The functio nshould mimic the behavior of Array.map.
//^ 5. Write a function, myFilter, that akes in an array and a callback as arguments. The functio nshould mimic the behavior of Array.filter.
//^ 6. Write a function, myEver, that takes in an array and a callback as arguments. The function shoudl mimic the behavior of Array.every.


//! My For Each, array.forEach(function()) method

// let peeps = ["Joshua", "Jacob", "Caroline", "Sarah", "Rachel"]

// // peeps.forEach(function(el, i) {
// //     console.log(el + " is at index " + i)
// // });

// //^ Note that the array.forEach(function()) method executes a provided function once for each element of the array. In essence, the array.forEach(function()) method performs the same function as a for loop by iterating through each element of an array. However, it takes in a callback function as its parameter and then performs that function on each element of the array.
// //^ Notice above that the function is ANONYMOUS, meaning it has no name, which makes the syntax here appear confusing. But the callback function takes arguments (el, i) just like any other function.
// //& Here, the ARRAY is referenced first. Then the .forEach method is called on the array, taking in a callback function. This callback function takes two parameters: The element located at the current index of the array, and then the current index itself. With those arguments, it logs a statement to the console.

// // peeps.forEach(function(el, i, array) {
// //     console.log(el + " is at index " + i);
// //     console.log(array);
// // });

// //^ Notice here that the array.forEach(function()) method can also take in the entire array as a parameter.

// let myForEach = function(array, cb) { //If we want to create a function that performs the same behavior as the array.forEach(function()) method, we need to write a function that takes in two parameters: An array, and a callback function. This is because these are the parameters taken by the array.forEach(function()) method.
//     for (i = 0; i < array.length; i++) { // Here, we use a regular for loop to iterate through each element of the array.
//         let el = array[i]; // We initialze a new variable 'el' to hold the element located at the current index of the array.
//         cb(el, i, array); //Then we call the callback function with el (the element located at the current index of the array), the index itself, and the array as parameters.
//     }
// }

// //^ The entire purpose of myForEach or forEach is JUST to call a callback function on each element of the array. Regardless of what the callback function is or does.

// myForEach(peeps, function(el, i, array) { //"cb" in the myForEach function definition refers to this entire function. It is the one that will be called within the for loop for the element at each index of the array.
//     console.log(el + " is at index " + i);
// })

//! My Map, array.map(function()) method

// //& The distinction between the array.forEach(function()) method and the array.map(function()) method is that the array.map(function()) method returns an ARRAY of the values that result from calling the callback function on each element of the array. While array.forEach(function()) just returns the values outright, or may not include a return at all, the array.map(function()) method DOES return all of the values within a new array.

// let peeps = ["Joshua", "Jacob", "Caroline", "Sarah", "Rachel"];

// // let newPeeps = peeps.map(function(el) {
// //     return el.toUpperCase() + "!";
// // })

// // console.log(newPeeps); //Here we print a new array with all of the same elements as the original array with all of those elements capitalized and followed by an "!"

// //^ Here we see that the array.map(function()) performs a similar function to the array.forEach(function()) method in that it iterates over each element at each index of the array, calling a callback function on each element. The distinction is that the array.map(function()) method returns an ARRAY of all of the values produced by calling the callback function on the elements at each index of the array.
// //& In this specific example (above), the array.map(function()) method passes each element of the array into a callback function which turns that element to uppercase and adds an exclamation point, then returns a new array with all of the return values.

// let myMap = function(array, cb) { // Here, we write a function definition that takes in an array and a callback function as parameters, just like the array.map(function()) method does.

//     let newArray = [] // Iniitalize a new, empty array since we know that we will need to return a new array.

//     for (let i = 0; i < array.length; i++) { // Write a for loop that iterates through each element of the provided array.
//         let el = array[i]; // initialize a new variable 'el' to hold the element located at the current index of the array.
//         let res = (cb(el, i, array)) // initailze a new variable 'res' (result) to hold the result of calling our callback function on the element located at the current index of the array.
//         newArray.push(res); // finally, we push the NEW element, which results from calling the callback function on the element located at the current index of the array this iteration, to the new array 'newArray'
//     }

//     return newArray; //Once the loop has run to completion, we return the new array with all of the results of calling the callback function on each element of the original array.
// }

// let newPeeps = myMap(peeps, function(el) {
//     return el.toUpperCase() + "!";
// })

// console.log(newPeeps) // Here you can see that we print EXACTLY the same thing as the array.map(function()) method.

//! My Filter

// //^ The array.filter(function()) callback method AND the myFilter functions both use a for loop to iterate through the elements of an array.
// //^They then call a callback function on each element of the array which will produce a boolean value-- either true or false.
// //^ Then use an equality or inequality operator to determine which of the elements of the array (those that return true, or those that return false) will be passed into the new array.
// //^ finally, the .push method is used to add the filtered elements of the array into the new array, then the new array is returned.

// //& Notice that all of these array callback function methods accept an element, an index, and an array as arguments.

// let veggies = ["lettuce", "celery", "cabbage", "watercress"];

// // let result  = veggies.filter(function(el) {
// //     return el.includes('a');
// // })

// // //^ Here, the array.filte(function()) method filters the elements of the array through the callback function and then returns the elements that the callback function returns as true.
// // //^ The callback itself returns a boolean value.
// // //^ The array.filter(function()) method or myFilter function returns a new array containing only the filtered elements.

// // console.log(result);

// let myFilter = function(array, cb) { //Here, we define a function that takes an array and a callback function as arguments, emulating the array.filter(function()) callback method.

//     let selectedItems = []; // initialize a new array becaue we know that we want to return an array in the end.

//     for (i = 0; i < array.length; i++) { // write a for loop to iterate through each element at each index of the array.
//         if(cb(array[i], i, array) === true) { //& Because the callback function in the array.filter(function()) callback method is meant to return a boolean, we write a CONDITIONAL STATEMENT which invokes the callback function and then checks to see whether the resulting boolean is true or false. THEN we use an equality OR an inequality operator to dictate whether we want to keep the elements which yield a TRUE or a FALSE.
//             selectedItems.push(array[i]); //We use the array.push() method to pass the filtered elements of the array into the new array, 'selectedItems'
//         }
//     }

//     return selectedItems; // write a return statement because we know that we will need to return the new array in the end.

// }

// // result = myFilter(veggies, function(el) {
// //     return el.includes("a");
// // })

// result = myFilter(veggies, function(el) {
//     return el.includes("y");
// })

// console.log(result);

//! My Every

// //^ The array.every(function()) callback method checeks tosee whether EVERY element of an array meets a certain condition, then returns a boolean statement.

// let veggies = ["lettuce", "celery", "cabbage", "watercress"];

// // let result = veggies.every(function(el) {
// //     return el.includes('e');
// // });

// // //^ In this case, the array.every(function()) method checks to see whether EVERY element of the array contains the letter 'e'. If it does, it will return the boolean value 'true.' If EVERY element does not contain the letter 'e,' then it will return the boolean value 'false.'
// // //^ The callback function passed into the array.every(function()) method can be a named function or a built-in function, it does not have to be anonymous.

// // console.log(result);

// myEvery = function(array, cb) { //first, we define a function that takes in an array and a callback function, emulating the array.every(function()) callback method.

//     for (i = 0; i < array.length; i++) { // Write a for loop that will iterate through each element at each index of the array
//         if(cb(array[i]) === false) { //& Here, we call the callback function on the element located at the current index of the array. Because our purpose is to CHECK whether each element of the array meets a certain condition, we use a conditional statement in conjunction with an equality or inequality operator to check whether the callback function returns a value of true or false for the element located at the current index of the array.
//             return false; //In this case, IF the callback function returns a value of FALSE for the element located at the current index of the array, we return "false."" //^ To clarify, THIS return means that AT LEAST ONE of the elements in the array failed to meet the condition checked for within the callback function.
//         }
//     }
//     return true; // If the entire loop runs to completion without a single element failing to meet the condition that the callback function is checking for, we know that every element has returned true and the function returns a boolean value of "true". //^To clarify, THIS return means that EVERY element of the array meets a certain condition.
// }

// function containsA(el) {
//     return el.includes("a");
// }

// console.log(myEvery(veggies, containsA)) // false

//! Callbacks Quiz

//! 2.

// let foo = function(n, cb) {
//     console.log("vroom");
//     for (let i = 0; i < n; i++) {
//         cb();
//     }
//     console.log("skrrt");
// };

// foo(2, function() {
//     console.log("swoosh");
// });

//! 3.

// let bar = function() {
//     console.log("Ramen");
// };

// let foo = function(cb) {
//     console.log("Gaazpacho");
//     cb();
//     console.log("Egusi");
// };

// console.log("Bisque");
// foo(bar);
// console.log("Pho");

//! 4.

// let foo = function() {
//     console.log("hello");
//     return 42;
// };

// foo; //Prints nothing

//! 5.

// let foo = function() {
//     console.log("Everglades");
//     console.log("Sequoia");
// };

// console.log("Zion");
// foo();
// console.log("Acadia");

//! 6.

// let foo = function() {
//     console.log("hello");
//     return 42;
// };

// console.log(foo);

//! 7.

// let bar = function() {
//     console.log("Arches");
// };

// let foo = function() {
//     console.log("Everglades");
//     bar();
//     console.log("Sequoia");
// };

// console.log("Zion");
// foo();
// console.log("Acadia");


//! 9.

// function foo() {
//     console.log("fizz");
// }

// function bar() {
//     console.log("buzz");
// }

// function boom(cb1, cb2) {
//     console.log("zip");
//     cb1();
//     console.log("zap");
//     cb2();
//     console.log("zoop");
// }

// boom(bar, foo);

//! 11.

// let bar = function(s) {
//     return s.toLowerCase() + "...";
//   };

//   let foo = function(message, cb1, cb2) {
//     console.log(cb1(message));
//     console.log(cb2(message));
//   };

//   foo("Hey Programmers", bar, function(s) {
//     return s.toUpperCase() + "!";
//   });
