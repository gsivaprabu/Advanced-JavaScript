/*function foo() {
    var bar = "bar";
    for (let i = 0; i < bar.length; i++) {
        console.log(bar.charAt(i));
    }
    console.log(i); // Reference Error
}

foo();*/

/*function foo(bar) {
    if (bar) {
        let baz = bar;
        if (baz) {
            let bam = baz;
        }
        console.log(bam); // Error
    }
    console.log(baz); // Error
}

foo('bar');*/

function foo(bar) {
    if (bar) {
        let baz = bar;
        if (baz) {
            let bam = baz;
            console.log(bam); // Error
        }
        console.log(baz); // Error
    }
}

foo('bar');