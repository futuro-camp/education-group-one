class Human {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Human{
    constructor(name, email, salary) {
        super(name);
        this.email = email;
        this.salary = salary;
    }
}

class Department {
    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }

    add(employee) {
        if(employee instanceof Employee) {
            this.employees.push(employee);
        }
        else {
            console.log("Object is not employee");
        }
    }

    remove(employeeEmail) {
        let index = this.employees.indexOf(this.employees.filter((emp) => emp.email === employeeEmail).pop());
        if(index !== -1) {
            this.employees.splice(index, 1);
        }
        else {
            console.log("Employee with this email is not working in this department");
        }
    }

    averageSalary() {
        return (this.employees.map((emp) => emp.salary).reduce((x,y) => x + y)) / this.employees.length;
    }

    summarySalary() {
        return this.employees.map((emp) => emp.salary).reduce((x, y) => {return x + y});
    }

    filter() {
        return this.employees.filter((employee) => employee.salary < this.averageSalary());
    }
}

module.exports.Human = Human;
module.exports.Employee = Employee;
module.exports.Department = Department; 