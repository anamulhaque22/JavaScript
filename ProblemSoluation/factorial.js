/*
function factorial(num){
    if (num >= 1) {
        return num * factorial(num - 1);
    }
    return 1;
}
*/
console.log(getfactorial(5));
function factorial(num){
    if(num == 0){
        return 1;
    }
    else{
        return num*factorial(num-1);
    }
}
var x = factorial(5);
console.log(x)