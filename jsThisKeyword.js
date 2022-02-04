//console.log(thsi);// here a {Window Object} will be printed
/* function fun(){
    console.log(this);
} */
//fun();//inside fun() console.lot(thsi) will be printed an empty object
//new fun(); //fun() with new keyword inside fun() console.lot(thsi) will be printed an empty object

var Person ={
    name: "Anamul Haque", 
    age: 21,
    university: "AIUB",
    personDescription: function(){
        console.log("Name: "+ this.name + " Age: "+ this.age + " University: "+ this.university);
    }
    /*
        # to access any object property within object we have to use this keyword (this.propertyName). otherwise compailer will throw an error and the error is - propertyName is not defined.

        # In an object, there is a property is not defined and if we use try to use this property within object we will get undefined
        suppose under this person object if is try to console.log(this.school) the printed result will be undefined.

        #
    */
}
//Person.personDescription();

/* var Person1 = {
    name: "Alex Akash",
    age:24,
    person1Desc: Person.personDescription
}
Person1.person1Desc(); */