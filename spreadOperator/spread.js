let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
/* const [x, y, z, ...rest] = num;
console.log(x);
console.log(y);
console.log(z);
console.log(rest); */
console.log(...num);
let [...x] = num;
console.log(x)