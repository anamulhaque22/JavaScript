const myArray = [1, 2, 3, 4, 5, 5, 6, 6]
const mySet = new Set([1, 2, 3, 4, 5, 5, 6, 6, 10, 11]);
// mySet.add(10);
// mySet.delete(6);
// console.log(mySet.has(8));
var total = 0;
mySet.forEach(function (value) {
    total += value;
})
console.log(mySet);
console.log(total);
console.log(mySet.values())
console.log(mySet.size)