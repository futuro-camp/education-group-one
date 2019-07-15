function Human(name) {
    this.name = name;
}

Human.prototype.sayHello = function() {
    console.log(`Hello, i am ${this.name}`);
};

function Employee(name, salary, email) {
    Human.call(this, name);
    this.salary = salary;
    this.email = email;
}

Employee.prototype = Object.create(Human.prototype);
Employee.prototype.constructor = Employee;

function Department(name, employees) {
    this.name = name;
    this.employees = employees;
}

Department.prototype.add = function(employee) {
    if(employee instanceof Employee){
        this.employees.push(employee);
    }
};

Department.prototype.average = function() {
    return Math.round(this.sum()/this.employees.length);
};

Department.prototype.sum = function () {
    return this.employees.map((x) => x.salary).reduce((x, y) => x + y);
};

Department.prototype.filter = function() {
    return this.employees.filter((x) => x.salary < this.average());
};

Department.prototype.remove = function(mail) {
    this.employees = this.employees.filter((x) => x.email !== mail);
};

module.exports = { Employee, Department }; 
