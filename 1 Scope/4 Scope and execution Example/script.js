// "use strict"
var foo = "bar";

function bar() {
    var foo = "baz";

    function baz(foo) {
        foo = "bams";
        bam = "yay";
        console.log('bam', bam);
    }
    baz();
}
bar();
foo; // This one for global scope
console.log('foo', foo);
bam; // This one for local scope
console.log('bam', bam);
//baz(); // baz is not defined in global scope