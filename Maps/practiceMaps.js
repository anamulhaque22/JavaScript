let map1 = new Map([
    ['name', 'anamul'],
    ['age', 21]
])
map1.set('address', 'Kewa, Sreepur, Gazipur');

let key = map1.values();
console.log(key)
/* 
for (const key of map1.values()) {
    console.log(key)
} */