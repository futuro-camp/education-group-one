function Human(name) 
{
    this.name = name;
}

Human.prototype.SayHello = function() {
    console.log("Hello, i am " + this.name);
}

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

Department.prototype.Add = function(employee) {
    if(employee instanceof Employee)
        this.employees.push(employee);
}

Department.prototype.Average = function() {
    return Math.round(this.Sum()/this.employees.length);
}

Department.prototype.Sum = function () {
    return this.employees.map(x => x.salary).reduce((x, y) => x + y);
}

Department.prototype.Filter = function() {
    return this.employees.filter(x => x.salary < this.Average());
}

Department.prototype.Remove = function(mail) {
    this.employees = this.employees.filter(x => x.email != mail);
}

module.exports = { Employee, Department }; 