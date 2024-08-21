// Do not modify!
const GradeBook = require('./classes/gradebook.js');
const grades = new GradeBook([100, 50, 90, 20, 30]);
const gradesAvg = grades.getAverage;

// You can modify the following lines
let grades1Average = gradesAvg.call(grades); // Here, we use the 'call' method to bind the context of gradesAvg to "grades" with no extra arguments.
let grades1WithBonus = gradesAvg.apply(grades, [20]); // Here, we use 'apply' to bind the context of gradesAvg to "grades" with an extra argument in the form of an array. We use apply here because apply takes an extra argument in addition to the context in the form of an array.

console.log('Grade list');
console.log.call(this, grades1Average);     // should print out: 58
//^^ Here, we use call to bind the context of this function call to 'this' ?? and do the same thing below. In both cases, we bind the console.log to 'this' which i assume refers to 'grades' since its the instance of the 'Gradebook' class that we're referring to in calling the function.
console.log.call(this, grades1WithBonus);   // should print out: 78
