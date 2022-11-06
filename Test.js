let arr = [24, 33, 77];
//arr.forEach((val) => console.log(val)); // ✅✅✅

/* for (val of arr) {
  console.log(val); // ✅✅✅
} */

let obj = { age: 12, name: "John Doe" };
for (const key in obj) {
    console.log(typeof key)
}