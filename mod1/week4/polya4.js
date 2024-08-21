//& REVIEW the array.reduce() method!
//& Check week 3, especially the later days, for additional methods/functions that we may need to review.

//! myForEach Workspace---------------------------------------------------------------------------------------------------------

let peeps = ["Joshua", "Jacob", "Caroline", "Sarah", "Rachel"]

// peeps.forEach(function(el, i, array) {
//     console.log(el + ' is at index ' + i);
//     console.log(array);
// });

//^ The array.forEach(function()) method takes in an array, then calls a callback function on each element of the array. Notice that the callback function can take UP TO three parameters- in this case, the element located at the current index, the index itself, and the array that we're calling the function on.

// let myForEach = (array, cb) => {
//     for (let i = 0; i < array.length; i++) { //here, we iterate through every element of the array.
//         let el = array[i]; // initialize a variable to hold the element located at the current index of the array this iteration
//         cb(el, i, array); //we call the callback function on the current element of the array, the current index, and the array.
//         //^ Even if we do NOT use all three of these parameters, JavaScript will just ignroe the extras. It's important to include them all JUST IN CASE someone wanted to pass in a callback function that could utilize all three parameters! So always include all three.
//     }
// };

// myForEach(peeps, function(el, i, array) {
//         console.log(el + ' is at index ' + i);
//     });

//^ Notice that HERE, when we call myForEach, we first provide the array "peeps" that we want to pass in as an argument for the first array parameter. we can literally copy/paste an ENTIRE ANONYMOUS FUNCTION as an argument in the place of the "cb" parameter. If we had a named function or a built-in method, we can also pass in either one of those.

//! myMap Workspace-------------------------------------------------------------------------------------------------------------

// let newPeeps = peeps.map(function(el) {
//     return el.toUpperCase() + '!';
// });

// console.log(newPeeps);

//^ The array.map(function()) method calls a callback function on every element of an array, then returns a new array containing the results. The major distinction between the array.forEach(function()) and array.map(function()) methods is that array.map(function()) returns an ARRAY while array.forEach(function()) returns the individual elements.

// let myMap = (array, cb) => {
//     let newArray = [] // We know that we will need to return a new array in the end becaue this is the behavior of the array.map(function()) method, which is the method that we are emulating here.

//     for (let i = 0; i < array.length; i++) { // Write a for loop that iterates through each element of the array.
//         let el = array[i]; // initialize a new variable to hold the element located at the current index of the array.
//         let res = cb(el, i, array); // initialze a new varaible to hold the result of calling the callback function on the element located at the current index of the array. //! Don't forget to include ALL THREE PARAMETERS in case anyone need to pass in a callback function that will use all of the parameters. If we don't need them, javaScript will just ignore the extras so that there is no harm done. Written this way, anyone can pass any callback function into this function whether it uses one, two, or all of the potential parameters.
//         newArray.push(res); //finally, we use the array.push() method to add the result to the new array.
//     }

//     return newArray; //In the end, we return the new array.
// }

// let newPeeps = myMap(peeps, function(el) {
//     return el.toUpperCase() + '!';
// });

// console.log(newPeeps);

//^ Just like in the preveious example, we pass the "peeps" array AND the entire anonymous callback function into the myMap method as parameters.

//! myFilter Workspace---------------------------------------------------------------------------------------------------------

let veggies = ["lettuce", "celery", "cabbage", "watercress"];

// let result = veggies.filter(function (el) {
//     return el.includes('a');
// });

// console.log(result);

//^ the array.filter(function()) method returns only some elements based on the callback function, which is used to filter the elements. In this case, veggies.filter(function()) will return ONLY the elements of the array which include the letter 'a'

// let myFilter = function(array, cb) { //Here, we write a function that takes in an array and a callback function as arguments.
//     let selectedItems = []; //initialize an empty array to hold the filtered items.

//     for (let i = 0; i < array.length; i++) { //use a for loop to iterate through each element of the array
//         if (cb(array[i], i, array) === true) { //! This is where the filter method differs from other array callback methods- It uses a CONDITIONAL (if) statement to test whether or not the element located at the current index of the array passes through the callback function, which in this case is used to FILTER the elements of the array.
//             selectedItems.push(array[i]) // The elements of the array that pass through the callback (filter) function are pushed to the new selectedItems array.
//         }
//     }
//     return selectedItems; // we return the new selectedItems array, whcih contains ONLY the (fitered) elements of the original array that pass through the callback (filter) function.
// }

// let result = myFilter(veggies, function(el) { //here, we pass the "veggies" array AND the anonymous filter function into the myFilter function as arguments.
//     return el.includes('a'); //Our myFilter function then returns every element of the array that includes an 'a'.
// })

// console.log(result)

//! myEvery---------------------------------------------------------------------------------------------------------------------

// let result = veggies.every(function(el, i, array) {
//     return el.includes('e');
// })

//^ The array.every(function()) method returns a boolean value based on whether or not EVERY element of an array passes through a callback (filter) function or not. If every element passes, it returns true. If every element does not pass, it returns false. In this case, the array.every(function()) method returns TRUE because every element of the array DOES contain 'e'.

function containsA(el) {
    return el.includes('a');
}

// let result = veggies.every(containsA);

// console.log(result);

//^ Here, we see that the array.every(function()) method can also be used with named or built-in functions. If we write a function called "containsA" as we did above, then invoke the array.every(function()) method on the veggies array, we see that it returns FALSE because every element of the veggies array does NOT contain the letter 'a'.

function myEvery(array, cb) { //Here, we write a function that takes in an array and a callback function as arguments.
    for (let i = 0; i < array.length; i++) { //We write a for loop to iterate through each element of the array
        if (cb(array[i]) === false) { //! We write a conditional, similar to our myFilter function, except that the purpose of myEVery is to return a BOOLEAN value indicating whether EVERY element of the array passes through the filter function. Whereas the myFilter function filters the elements into a new array.
            return false; // So IF any of the elements of the array return false through the conditional above, we know that EVERY element does not pass through the callback (filter) function. We only need ONE element to fail. IF any element does, wwe return false.
        }
    }
    return true; //IF the for loop completes its iteration through all of the elements of the array without a single elements returning false, we know that EVERY element has passed through the callback (filter) function and we return TRUE.
}


let result = myEvery(veggies, containsA);

console.log(result);

//! QUIZ

let company = {};
company.name = "Pizza Place";
console.log(company["name"]);

let dogs = ["Fido", "Bowser"];
let [firstEl, secondEl] = dogs;

console.log(firstEl)
console.log(secondEl)

let obj = {name: "Ghost", traits: ["mamal", "dog"]};
let {traits, name} = obj;

console.log(traits);

let x = [1, 2, 3];
let y = [4, 5, 6];

let test = [...x, ...y];

console.log(test);

// let sayPuppy = () => {
//     const puppy = "Wolfie";
//     return puppy;
// }

// sayPuppy();

// console.log(puppy); //undefined? Because of scope?

function bar() {
    var rand = "abc";

    if (true) {
        const rand = "efg";
    }
    return rand;
}

console.log(bar());

let foo = function(n, cb) {
    console.log("vroom");
    for (let i = 0; i < n; i++) {
        cb();
    }
    console.log("skrrt");
};

foo(2, function() {
    console.log("swoosh")
});
