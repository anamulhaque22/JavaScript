/*
Pure function rule
It return the same result if given the same arguments
It does not cause any abservable side effect
*/
// Example of pure function
function sqr(n) {
    return n * n;
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));
// Example of not pure function
var point = {
    x: 44,
    y: 30
}
function printPoint(point){
    point.x = 100;
    point.y = 200;
    console.log(point);
}
printPoint(point);
console.log(point);