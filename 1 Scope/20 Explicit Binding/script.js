/*function foo() {
    console.log(this.bar);
}

var bar = "bar1";
var obj = { bar: "bar2" }

foo();

foo.call(obj);
*/

/*function foo() {
    console.log(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

var orig = foo;

foo = function() {
    orig.call(obj);
};

foo();

foo.call(obj);
foo.call(obj2);*/


/*function bind(fn, o) {
    return function() {
        fn.call(o);
    };
}

function foo() {
    console.log(this.bar);
}

var obj = { bar: "bar" };
var obj2 = { bar: "bar2" };

foo = bind(foo, obj);

foo();
foo.call(obj2);*/


if (!Function.prototype.bind2) {
    Function.prototype.bind2 =
        function(o) {
            var fn = this; // the function!
            return function() {
                return fn.apply(o, arguments);
            };
        };
}

function foo(baz) {
    console.log(this.bar + " " + baz);
}

var obj = { bar: "bar" };
foo = foo.bind2(obj);

foo("baz");
