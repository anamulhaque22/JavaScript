var x = [1, 2, 3, 4, 5, 6, 7, 8];
for(var i = 0; i<(x.length/2); i++){
    var temp = x[i];
    x[i] = x[x.length -1 -i];
    x[x.length -1 -i] = temp;
}
console.log(x);
var y = [1, 2, 3, 4, 5, 6, 7, 8];
y.reverse();
console.log(y);