// Do not modify!
const GradeBook = require('./classes/gradebook.js');
const grades = new GradeBook([100, 50, 90, 20, 30]);
const gradesAvg = grades.getAverage;

// You can modify the following lines

let grades1Average = gradesAvg.call(grades); // add the .call method to bind the context of the 'gradesAvg' method to the 'grades' variable as its context
let grades1WithBonus = gradesAvg.apply(grades, [20]); // use the .apply() method to bind the context of the 'gradesAvg' method to the 'grades' object.

//Additionally, note that we use the .apply() method instead of the .call() method here because .apply() takes a second ARRAY parameter as an argument. If our argument is an array, we use the .apply() method.

//If our argument is a single element, or multiple elements separated by commas and NOT contained within an array, we use the .call() method.

console.log('Grade list');
console.log(grades1Average);     // should print out: 58
console.log(grades1WithBonus);   // should print out: 78
