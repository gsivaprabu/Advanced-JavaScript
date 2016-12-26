/*var foo = function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = bar;
        foo; // Function
    }
    baz();
};
foo();
bar(); // Error!*/


var foo;
try {
    foo.length;
} catch (err) { //err variable only inside catch clause
    console.log('err', err);
}
console.log('err', err);
