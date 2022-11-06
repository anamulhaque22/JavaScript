/*
# delete person.university;//The delete keyword deletes a property from an object
# person.address = "Sreepur, Gazipur";//add new properties to an existing object by simply giving it a value
# object a kunu property na thakleo oi property name didy object call korle undefined value dekhabe
    in person ojbect the is no (meritalStatas) property but is I called person.meritalStatas will get undefined value

*/
const person = {
    name: 'Anamul Haque',
    age: 21,
    university: 'AIUB',
    depertment: 'CSE',
    cgpa: 3.49,
    familyMember: {
        father: "Shamsul Haque",
        mother: "Morshida",
    }
};

/* let personDescription ="";
for(const personProperty in person){
    personDescription+=person[personProperty];
}
console.log(personDescription); */
/* person.address = "Sreepur, Gazipur";//add new properties to an existing object by simply giving it a value
console.log(person['address']);
for(const x in person){
    console.log(person[x]);
} 
delete person.university;//The delete keyword deletes a property from an object
*/

for (const x in person) {
    console.log(person[x]);
} 