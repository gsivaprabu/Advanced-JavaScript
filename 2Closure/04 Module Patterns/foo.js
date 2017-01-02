// ES6 + Module pattern

var o = { bar: "bar" };

export function bar() {
    return o.bar;
}


import bar from "foo"
bar();

module foo from "foo";
foo.bar();


