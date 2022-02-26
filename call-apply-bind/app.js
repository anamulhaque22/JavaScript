let obj = {
    a: 20,
    b: 120
}
function fun(c) {
    console.log(this);
    console.log(c + this.a + this.b);
}
// normally function call kora hole function body the this window object ke refer kore
//fun();

//ফাংশন এর সাথে Call মেথধ এ কোন অবজেক্ট দিয়ে ফাংশন কে কল করা হলে ফাংশনের বডিতে this Call এর সাথে দেওয়া অবজেক্টকে রেফার করবে
//fun.call({ a: 10, b: 20 })

//ফাংশন এর সাথে apply মেথধ এ কোন অবজেক্ট দিয়ে ফাংশন কে কল করা হলে ফাংশনের বডিতে this apply এর সাথে দেওয়া অবজেক্টকে রেফার করবে
//fun.apply({ a: 20, b: 15 }, 10);

// call and apply method is mnostly semilir but the main diffenence is call method take indibisal value after the object and apply method cannot take indivisual value. apply method take array as an argument.

//fun.call({ a: 10, b: 100 }, 50)// here 50 is argument of fun(c) function

//fun.apply(obj, [10]);// here in arry is an argument fo fun(c) function



//ফাংশন এর সাথে bind মেথধ এ কোন অবজেক্ট দিয়ে ফাংশন কে কল করা হলে ফাংশনের বডিতে this bind এর সাথে দেওয়া অবজেক্টকে রেফার করবে কেন্তু blid সাথে সাথে ফাংশনকে কল করে না। কল করার জন্য ফাংশনকে কনো একটা variable এ রাখতে হয়।

let funWithBind = fun.bind(obj);// bind এর সাথে obj এর পরে ফাংশনের কোন argument থাকলে argument ও রাখা যাবে
funWithBind(100);// here 50 is argument of fun(c) function