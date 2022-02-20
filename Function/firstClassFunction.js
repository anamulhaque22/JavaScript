/*
First class function
1. A function can be stored in a variable
2. A function can be stored in an Array
3. A function can be stored in an Object
4. We can create function as need
5. We can pass function as an Arguments
6. We can pass a function from another function
*/
// 1. A function can be stored in a variable
function add(a, b) {
    return a + b;
}
// var sum = add;
// console.log(sum(5, 4));
// console.log(typeof sum);

// 2. A function can be stored in an Array
// var x = []; // A empty array
// x.push(add);
// console.log(x);
// console.log(x[0](3, 4));
// console.log(typeof x[0]);

// 3. A function can be stored in an Object
var obj = {
    fun: add
}
console.log(obj);
console.log(obj.fun(4, 9));