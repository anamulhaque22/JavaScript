/* for(let i = 1; i<=30; i++){
    console.log("Before ", i, '\n')
    setTimeout(function () {
        console.log(i);
    }, 1000*i)
    console.log("After ", i, '\n')
} */
for(var i = 1; i<=30; i++){
    console.log("Before ", i, '\n');
    (function(){
        console.log(i);
    })()
    console.log("After ", i, '\n')
}