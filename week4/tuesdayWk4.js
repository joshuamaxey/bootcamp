//! My For Each


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

//! My Map DEVEOPMENT
