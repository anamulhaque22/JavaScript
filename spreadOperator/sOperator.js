let x = [11, 22, 5, 7];
let [a, b, ...[num]] = x;
console.log(a)
console.log(b)
console.log(typeof num)
//console.log(...x);
//scissors, lizard, spock