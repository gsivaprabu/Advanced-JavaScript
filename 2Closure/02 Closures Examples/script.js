/*function foo() {
    var bar = "bar";

    return function() {
        console.log(bar);
    };
}

function bam(){
	foo()();
}

bam();*/


/*function foo() {
    var bar = "bar";

    setInterval(function() {
        var dateObject = new Date();
        console.log(bar + ' => ' + dateObject.getSeconds());
    }, 1000);
}

foo();*/


/*function foo() {
    var bar = "bar";

    setTimeout(function() {
        var dateObject = new Date();
        console.log(bar + ' => ' + dateObject.getSeconds());
    }, 1000);
}

foo();*/


/*function foo() {
    var bar = "bar";

    $("#btn").click(function(event) {
        console.log(bar);
    });
}

foo();*/





/*function foo() {
    var bar = 0;

    setTimeout(function() {
        var dateObject = new Date();
        console.log(bar++ + ' => ' + dateObject.getSeconds());
    }, 100);

    setTimeout(function() {
        var dateObject = new Date();
        console.log(bar++ + ' => ' + dateObject.getSeconds());
    }, 200);
}

foo();
*/


/*function foo() {
    var bar = 0;
    console.log(bar);

    setTimeout(function() {
        var baz = 1;
        console.log(bar++);

        setTimeout(function() {
            console.log(bar + baz);
        }, 200)

    }, 100)
}

foo();*/



for (var i = 1; i <= 5; i++) {
    (function(i) {
        setTimeout(function() {
            console.log("i :" + i);
        }, i * 1000)
    })(i);
}
