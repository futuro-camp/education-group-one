const proto = require("./logic_classes");
// const proto = require("./logic_prototypes");

function start() {
    let department = new proto.Department("Arbuzniy zavod", [ new proto.Employee("Sanek", "Sanek@Pavlova.com", 730), new proto.Employee("Kolia", "Kolian@Pavlova.com", 900), new proto.Employee("Grisha", "Leps@Pavlova.com", 450), new proto.Employee("Alexey", "XiaomiTopZaSvoiDengi@Pavlova.com", 750), new proto.Employee("Anton", "Durex@Pavlova.com", 620) ]);
    console.log(department.averageSalary());
    console.log(department.summarySalary());
    console.log(department.filter());
    department.add(new proto.Employee("Yura", "Jurasic@Pavlova.com", 920));
    department.remove("Durex@Pavlova.com");
}

start();