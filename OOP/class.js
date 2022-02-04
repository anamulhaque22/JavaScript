class Person{
    constructor(name, age, university){
        this.name = name;
        this.age = age;
        this.university = university;
    }
    descrivePerson(){
        console.log("Person Name: "+this.name+"\nPerson Age: "+this.age + "\nPerson University: "+this.university);
    }
}
var person = new Person("Anamul Haque", 21, "AIUB");
person.descrivePerson();