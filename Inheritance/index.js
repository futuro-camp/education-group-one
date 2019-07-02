const proto = require('./ProtoDepartment.js');
const c = require('./CDepartment.js')
const ProtoEmployee = proto.Employee;
const ProtoDepartment = proto.Department;
const CEmployee = c.Employee;
const CDepartment = c.Department;

emp1 = new ProtoEmployee('danya', 9999, 'danya@mail');
emp2 = new CEmployee('danya2', 8888, 'danya2@mail');
dep1 = new ProtoDepartment('futuro', [emp2, emp1]);
dep2 = new CDepartment('futuro', [emp1]);







