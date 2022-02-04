// To make a Constructor Pattern need to call function with new keyword
function ConstructorPattern(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
    this.employeeDes = function () {
        console.log("Employee \nName: " + this.name + "\nAge: " + this.age + "\nPosition: " + this.position + "\nSalary: " + this.salary);
    }
}
//Here ConstructorPattern function with new keyword create new empty opject. Normally this keyword refere window object. In ConstructorPattern function this will be refere window object if we call function without new kayword and also compailer will throw an error because these properties (this.name, this.age,...) are not of window object.
/* var emp1 = new ConstructorPattern("Alex Akash", 24, "Senior Developer", 2000000);
emp1.employeeDes(); */
function myNew(constructor){
    var obj = {};
    Object.setPrototypeOf(obj, constructor.prototype);
    var argsArray = Array.prototype.slice.apply(arguments);
    constructor.apply(obj, argsArray.slice(1));
    return obj;
}
var person1 = myNew(ConstructorPattern, "Monib Bormon", 22, "Senior Developer", 99999999);
person1.employeeDes();