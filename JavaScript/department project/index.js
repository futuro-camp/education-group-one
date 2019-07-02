const proto = require("./logic_classes");
// const proto = require("./logic_prototypes");

function Start() {
    let department = new proto.department("Arbuzniy zavod", [ new proto.employee("Sanek", "Sanek@Pavlova.com", 730), new proto.employee("Kolia", "Kolian@Pavlova.com", 900), new proto.employee("Grisha", "Leps@Pavlova.com", 450), new proto.employee("Alexey", "XiaomiTopZaSvoiDengi@Pavlova.com", 750), new proto.employee("Anton", "Durex@Pavlova.com", 620) ]);
    console.log(department.averageSalary());
    console.log(department.summarySalary());
    console.log(department.filter());
    department.add(new proto.employee("Yura", "Jurasic@Pavlova.com", 920));
    department.remove("Durex@Pavlova.com");
}

Start();