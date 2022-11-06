function fun(a, b, c, ...d) {
    let [x, ...[narr]] = d;
    console.log(typeof d);
    console.log(typeof narr, narr);
}
let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
fun(...x);