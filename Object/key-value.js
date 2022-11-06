let person = {
    name: "Anamul",
    age: 21,
    university: "AIUB",
    displayInfo: function () {
        console.log(`Name: ${this.name} Age: ${this.age} University: ${this.university}`);
    }
}




//return a string array of person object keys
// const personKeys = Object.keys(person);
// console.log(personKeys);

//return a array of person object values
// const personValue = Object.values(person);
// console.log(personValue);

//return a array of person object keyvalue parir. In array KeyValue also in a array.
// const keyValue = Object.entries(person);
// console.log(keyValue);

// delete object.property return a boolean true value when the object is not seal
// console.log(delete person.university);


// delete object.property return a boolean false value when the object is seal
// Also we cannot add a property of a object if the object is seal
// Object.seal(person);
// console.log(delete person.university);

person.address = "Gazipur";
//console.log(person);


//Object.freeze(objectName)
//if the object is freeze we cannot delete property, insertion new property, modify property.
Object.freeze(person);
person.address = "Sreepur, Gazipur";// not modified
person.depertment = "CSE";// new property is not added
console.log(person);