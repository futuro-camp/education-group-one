class Human {
    constructor(name) {
        this.name = name;
    }
}

class Employee extends Human {

    constructor(name, salary, email) {
        super(name);
        this.salary = salary;
        this.email = email;
    }
}

class Department {

    constructor(name, employees) {
        this.name = name;
        this.employees = employees;
    }

    Add(employee) {
        if(employee instanceof Employee)
            this.employees.push(employee);
    }

    Average() {
        return Math.round(this.Sum()/this.employees.length);
    }

    Sum() {
        return this.employees.map(x => x.salary).reduce((x, y) => x + y);
    }

    Filter() {
        return this.employees.filter(x => x.salary < this.Average());
    }

    Remove(emp) {
        this.employees = this.employees.filter(x => x.email != mail);
    }
    
}

module.exports = {Employee, Department};