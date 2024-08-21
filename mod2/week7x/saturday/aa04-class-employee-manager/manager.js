const Employee = require('./employee')

class Manager extends Employee{
    constructor(name, salary, title, manager = null, employees = []) {
        super(name, salary, title, manager);
            this.employees = employees; // set the Manager's 'employee' property to an empty array by default
    }

    addEmployee(employee) { // instance method

        this.employees.push(employee); // Use the .push method to add an 'employee' (instance of the Employee class) to the Manager's 'employees' array
    }

    calculateBonus(multiplier) { // instance method

        let bonus = (this.salary + this._totalSubSalary()) * multiplier; // bonus should be the sum of the manager's salary, all of the managers' employees' salaries, plus th multiplier

        return bonus; // return the bonus
    }

    _totalSubSalary() { // helper function for calculateBonus

        let sum = 0; // initiaizle a variable 'sum' to hold the totalSubSalary

        if (this.employees.length === 0) { // base case, when our manager's employees array is empty...

            return sum; // ... return the sum
        }

        for (const employee of this.employees) { // iterate through our manager's 'employees' array using a for...of loop

            sum += employee.salary; // Add each emplyee's salary to our sum

            if (employee instanceof Manager) { // If the employee within our manager's employees array is also a Manager...

                sum += employee._totalSubSalary(); // ...recursively call _totalSubSalary on that employee;
            }
        }
        return sum; // Finally, once we've iterated through our manager's entire 'employees' array and added all of the necessary salarties to our sum, we return the sum (which is our totalSubSalary)
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensai');
console.log('Before: ', splinter);

const leo = new Employee('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', splinter);
const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

splinter.addEmployee(leo);
splinter.addEmployee(mikey);
splinter.addEmployee(donnie);
splinter.addEmployee(raph);

console.log('After: ', splinter);

module.exports = Manager;
