// 'use strict'
/*function foo() {
    console.log(this.bar);
}

var bar = "bar1";
var o2 = { bar: "bar2", foo: foo };
var o3 = { bar: "bar3", foo: foo };

foo();
o2.foo();
o3.foo();*/

var o1 = {
    bar: "bar1",
    foo: function() {
        console.log(this.bar);
    }
};

o2 = { bar: "bar2", foo: o1.foo };

var bar = "bar3";
var foo = o1.foo;

o1.foo(); // bar1
o2.foo(); // bar2
foo(); // bar3
