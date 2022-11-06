// var arr = [1, 2, 3, 4];
// var sum = 0;
// arr.forEach(function(value, index, arr){
//     sum+=value;
// })
// console.log(sum);

var arr = [1, 2, 3, 4];
function fun(arr, cb){
    for(var i = 0; i<arr.length; i++){
        cb(arr[i]);
    }
}
var sum = 0;
fun(arr, function(value){
    sum+=value;
})
console.log(sum);