//With let you can not do this:
//let x = "John Doe";
//const x = 0;
//var x = "Something";
// SyntaxError: 'x' has already been declared

//With var you can:
var x = "John Doe";
{
var x = 0;
}
console.log(x);



{
    var y = "Monib";
}
var y = "Akash";
console.log(y);

{
    var b = "VB";
}


/*
var a = "VA";
let a = "LS";
*/
let c = 5;
{
const c = 10;
}
console.log(c);


