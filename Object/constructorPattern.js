// To make a Constructor Pattern need to call function with new keyword
function ConstructorPattern(name, age, position, salary) {
    this.name = name;
    this.age = age;
    this.position = position;
    this.salary = salary;
    this.employeeDes = function () {
        console.log("Employee \nName: " + this.name + "\nAge: " + this.age + "\n Position: " + this.position + "\nSalary: " + this.salary);
    }
}
var emp1 = new ConstructorPattern("Alex Akash", 24, "Senior Developer", 2000000);
emp1.employeeDes();