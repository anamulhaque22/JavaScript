/*
Method	       Description
new Map()	   Creates a new Map
set()	       Sets the value for a key in a Map
get()	       Gets the value for a key in a Map
delete()	   Removes a Map element specified by the key
has()	       Returns true if a key exists in a Map
forEach()	   Calls a function for each key/value pair in a Map
entries()	   Returns an iterator with the [key, value] pairs in a Map
Property	   Description
size	       Returns the number of elements in a Map
*/
const myMap = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
])
// console.log(myMap);
// console.log(myMap.get('oranges'))
myMap.set('mangos', 400);
var x = myMap.get('mangos');
myMap.set('apples', 10000)//set() method can also be used to change existing Map values
console.log(myMap)
console.log(myMap.entries());
console.log(myMap.get('apples'))