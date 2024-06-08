class Employee {
    constructor(name, salary, title, manager = null) {
        this.name = name;
        this.salary = salary;
        this.title = title;
        this.manager = manager; // set the 'manager' property to null by default per the README

        if (this.manager) { // If the employee has a manager (if this.manager !== null/undefined)...

            this.manager.addEmployee(this); // ...then this employee (this) will automaticaly be added to their manager's (this.manager) 'employees' array using the manager's .addEmployee() method
        }
    }

    calculateBonus(multiplier) {

        let bonus = this.salary * multiplier;

        return bonus;
    }
}

const leo = new Employee('Leonardo', 90000, 'Ninja');

console.log(leo);

// Employee {
    // name: 'Leonardo',
    // salary: 90000,
    // title: 'Ninja',
    // manager: null
//   }

module.exports = Employee;
