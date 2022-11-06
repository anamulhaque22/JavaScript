//JSON - JavaScript Object Model
/*
JSON.stringify() method return a string
*/
const user = {
    id: 214,
    name: 'Alex Akash',
    job: 'Font End Developer'
}
/* const stringfied = JSON.stringify(x);//JSON.stringify() method return a string
console.log(user);
console.log(stringfied); */

const shop = {
    name: 'Shop',
    address: 'Koratoli',
    products: ['Fish', 'Meat', 'Vegitable', 'Rice'],
    price: [325, 534, 534, 5],
    revinue: 64756
}
const shopStringifyed = JSON.stringify(shop);
const convertShotStringifyed = JSON.parse(shopStringifyed);
console.log(shopStringifyed);
console.log(convertShotStringifyed);