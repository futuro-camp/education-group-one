function Human(name) {
    this.name = name;
}

function Employee(name, email, salary) {
    Human.call(this, name);
    this.email = email;
    this.salary = salary;
}

Employee.prototype = Object.create(Human.prototype);
Employee.prototype.constructor = Employee;

function Department (name, employees) {
    this.name = name;
    this.employees = employees;
}

Department.prototype.add = function(employee) {
    if(employee instanceof Employee) {
        this.employees.push(employee);
    }
    else {
        console.log("Object is not employee");
    }
}

Department.prototype.remove = function(employeeEmail) {
    let index = this.employees.indexOf(this.employees.filter(emp => emp.email == employeeEmail).pop());
    if(index != -1) {
        this.employees.splice(index, 1);
    }
    else {
        console.log("Employee with this email is not working in this department");
    }
}

Department.prototype.averageSalary = function() {
    return (this.employees.map(emp => emp.salary).reduce((x,y) => x + y)) / this.employees.length;
}

Department.prototype.summarySalary = function() {
    return this.employees.map(emp => {return emp.salary}).reduce((x, y) => {return x + y});
}

Department.prototype.filter = function() {
    return this.employees.filter(employee => employee.salary < this.averageSalary());
}

module.exports.human = Human;
module.exports.employee = Employee;
module.exports.department = Department; 