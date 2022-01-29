function greet(mgs){
    function greeting(name){
        return mgs + " " + name + " !";
    }
    return greeting;
}
var gm = greet("Good Morning.");
var ms = gm('Anamul');
console.log(ms);