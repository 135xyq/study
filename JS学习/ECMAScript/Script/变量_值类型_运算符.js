// var a = "Hello World";
// a = "你好世界"
// document.write(a);
// var a = (10 * 3 - 4 / 2 + 1) % 2,
//     b = 3;
// b %= a + 3;
// document.write(a++);
// document.write("<br>");
// document.write(--b);
// var a = 123,
//     b = 234;
// var c = a + b;
// var x = 1;
// document.write(--x);
// document.write(x);
// var z = x-- + x--;
// document.write(x);
// var a = 1 + 1 || 2 - 2;
// document.write(a);
// for (var i = 0; i < 10; i++) {
//     var a = parseInt(window.prompt('input'));
//     if (a >= 90 && a <= 100) {
//         document("A");
//     } else if (a >= 60 && a < 90) {
//         document.write("B");
//     } else {
//         document.write("C");
//     }
//     document.write("<br>");
// }
/*
var i = 0;
for (; i <= 100;) {
    document.write(i++ + " ");
}*/
// var i = 8;
// while ("never - ending loop") {
//     document.write(i);
// }

/*
var a = parseInt(window.prompt('input'));
var i = 0;
var t = 1;
for (i = 0; i < a; i++) {
    t *= 2;
}
document.write(t);
*/

/*
var n = parseInt(window.prompt('input'));
var i = 0;
var result = 1;
for (i = 1; i <= n; i++) {
    result *= i;
}
document.write(result);
*/
/*
var n = parseInt(window.prompt('input'));
var first = 1,
    second = 1,
    result = first;
for (i = 0; i < n - 2; i++) {
    result = first + second;
    first = second;
    second = result;
}
document.write(result);
*/
/*
var n = parseInt(window.prompt('input'));
var first,
    second,
    third;
first = n % 10;
second = (n % 100 - first) / 10;
third = (n - (second * 10 + first)) / 100;
document.write(first * 100 + second * 10 + third);
*/

/*
var a = parseInt(window.prompt('input'));
var b = parseInt(window.prompt('input'));
var c = parseInt(window.prompt('input'));
if (a > b && b > c) {
    document.write(a);
}
if (a > c && c > b) {
    document.write(a);
}
if (b > a && a > c) {
    document.write(b);
}
if (b > c && c > a) {
    document.write(b);
}
if (c > b && b > a) {
    document.write(c);
}
if (c > a && a > b) {
    document.write(c);
}
*/
/*
var a = parseInt(window.prompt('input'));
var i,
    j;
for (i = 1; i < a; i++) {
    for (j = 2; j < Math.sqrt(i); j++) {
        if (i % j == 0) {
            break;
        }
    }
    if (j > Math.sqrt(i)) {
        document.write(i + " ")
    }
}
*/
/*
var xie = {

    name: "谢永强",
    age: "男",
    wife: "黄双珍",
}
console.log(xie)
*/
// alert(typeof(a));
// alert(typeof(undefined));
// alert(typeof(NaN));
// alert(typeof(null));
// var a = "123abc";
// alert(typeof(+a));
// alert(typeof(!!a));
// alert(typeof(a + ""));
// alert(typeof(1 == "1"));
// alert(typeof(NaN == NaN));
// alert(typeof(NaN == undefined));
// alert(typeof("11" + 11));
// alert(1 == "1");
// alert(NaN == NaN);
// alert(undefined == undefined);
// alert(NaN == undefined);
// alert(null == undefined);
// alert("11" + 11);
// alert(1 === "1");
// alert(parseInt("123abv"));
// var num = 123123.345789;
// alert(num.toFixed(3));
// alert(typeof(typeof(a)));
alert("致橡树");
alert("我如果爱你——");
alert("绝不像攀援的凌霄花，");
alert("借你的高枝炫耀自己；");
alert("我如果爱你——");
alert("绝不学痴情的鸟儿，");
alert("为绿荫重复单调的歌曲；");
alert("也不止像泉源，");
alert("常年送来清凉的慰藉；");
alert("也不止像险峰，");
alert("增加你的高度，衬托你的威仪。");
alert("甚至日光。");