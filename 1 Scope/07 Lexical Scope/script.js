function foo() {
    var bar = "bar";

    function baz() {
        console.log('bar => ', bar);
    }
    baz();
}
foo();
