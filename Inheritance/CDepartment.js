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

    add(employee) {
        if(employee instanceof Employee){
            this.employees.push(employee);
        }
    }

    average() {
        return Math.round(this.sum()/this.employees.length);
    }

    sum() {
        return this.employees.map((x) => x.salary).reduce((x, y) => x + y);
    }

    filter() {
        return this.employees.filter((x) => x.salary < this.average());
    }

    remove(emp) {
        this.employees = this.employees.filter((x) => x.email !== emp.email);
    }
    
}

module.exports = {Employee, Department};
