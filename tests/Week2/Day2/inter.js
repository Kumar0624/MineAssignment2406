var Employees = /** @class */ (function () {
    function Employees(name, age, isAdmin) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
    return Employees;
}());
var emp3 = new Employees("Kumar", 25, true);
console.log(emp3);
