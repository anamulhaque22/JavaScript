const newArray = [1, 4, 2, 5, 10];
const [firstValue, secondValue, thirdValue] = newArray;
// console.log(firstValue);


const obj = {
    PnName: "name",
    age: 21,

}

const { PnName, age } = obj;

// console.log(PnName, age);

const anotherArray = [
    [1, 2]
];
const [one, two] = anotherArray;
console.log(one, two);