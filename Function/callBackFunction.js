//Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.
function myDisplayer(something) {
    console.log(something);
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}

myCalculator(5, 5, myDisplayer);//myDisplayer function is passed an an argument