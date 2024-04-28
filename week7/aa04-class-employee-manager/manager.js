const Employee = require("./employee")

class Manager extends Employee {
    constructor(name, salary, title, manager, employees = []) {
        super(name, salary, title, manager)
        this.employees = employees
    }

    addEmployee(employee) {
        this.employees.push(employee);
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
