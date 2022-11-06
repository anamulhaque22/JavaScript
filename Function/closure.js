function greet(mgs) {
    function hi() {
        console.log('Hi! ');
    }
    function greeting(name) {
        hi();
        return mgs + " " + name + " !";
    }
    return greeting;
}
var gm = greet("Good Morning.");
var ms = gm('Anamul');
console.log(ms);