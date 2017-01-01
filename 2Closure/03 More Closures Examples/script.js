/*for (let i = 1; i <= 5; i++) {
    setTimeout(function() {
        console.log("i :" + i);
    }, i * 1000)
}*/


var foo = (function() {
    var o = { bar: "bar" };
    return { obj: o };
})()

console.log(foo.obj.bar);