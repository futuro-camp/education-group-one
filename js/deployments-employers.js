function department (title, arr) {
    this.name = title;
    this.list = arr;
}
function human(name) {
    this.name = name
}
function Emp(name,email,salary) {
    human.call(this,name);
    this.email = email;
    this.salary = salary;
}
department.prototype.add = function(Employee) {
    if (Employee instanceof Emp) {
        this.list.push(Employee);
    }
}
department.prototype.sumSalary = function(){
    let a = this.list.map(Emp => Emp.salary);
    let b = a.reduce((x,y) => x+y);
    return b;
}
department.prototype.avgSalary = function(){
    let c = this.sumSalary()/this.list.length;
    return c;
}
department.prototype.lessThenAvg = function(){
    let d = this.avgSalary();
    let e = this.list.filter(x => x.salary < d);
    return e;
}
department.prototype.remove = function(del){
    let f = this.list.map(Emp => Emp.email);
    let g = f.indexOf(del);
    this.list.splice(g,1);
    console.log(this.list);
}
let medicine = new department('medicine',[]);
medicine.add(new Emp('anton','muha2399', 1200));
medicine.add(new Emp('ignat','vetalsokolov', 12000));
medicine.add(new Emp('esenin','d-feduk', 120));
medicine.add(new Emp('apach','v-zinchenko', 2000));
console.log(medicine.list);
// console.log(medicine.sumSalary());
// console.log(medicine.avgSalary());
// console.log(medicine.lessThenAvg());
// console.log(medicine.remove('muha2399'));
