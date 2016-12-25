// Theoretical dynamic scoping
function foo() {
    console.log(bar); //Dynamic
}

function baz() {
    var bar = "bar";
    foo();
}

baz();