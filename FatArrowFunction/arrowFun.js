/*
Regular Function
function number(){
    return 10;
}
Fat Arrow Funciton
var number = () => {
    retunrn 10;
}

var number = () => 10; if there is one statement do not need to use parenthesis. And also if
there is return statement do not use return statement. if use return statement complier will
give an error. var number = () => return 10; // this is wrong.





*/

var num = (n, m) => n+m;
console.log(num(100, 20));