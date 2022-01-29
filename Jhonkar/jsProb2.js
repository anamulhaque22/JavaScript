function perfectFriend(arr) {
    let newArr = [];
    // ch
    if (arr.length == 0) {
        return 'You put a blank array element!!';
    }else if(arr.length == 1){
        return 'There is no other element in array to compare with the first value.'
    }

    for (var i = 0; i<arr.length; i++) {
        let element=element[i];
        if (element.length == arr[0].length) {
            newArr.push(element); //push the true elements to the new array
        }
    }
    return newArr;
}
console.log(perfectFriend(['Monib']));