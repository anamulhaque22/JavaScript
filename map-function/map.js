const arr = [1, 2, 3, 4, 5];
//const newArr = arr.map(element => element);
arr.map(function (element, index, array) {
    console.log(typeof this);
}, 80);