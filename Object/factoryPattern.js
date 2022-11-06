function factoryPattern(name, age, position, salary){
    return {
        name : name,
        age: age,
        position: position,
        salary: salary,
        employeeDes: function(){
            console.log("Employee \nName: "+this.name + "\nAge: "+this.age+"\n Position: "+this.position+"\nSalary: "+this.salary);
        }
    }
}
var emp1 = factoryPattern("Alex Akash", 24, "Senior Developer", 2000000);
emp1.employeeDes();